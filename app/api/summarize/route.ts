import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { summarizeDocument } from "@/lib/jobs/summarizeJob";

export async function POST(req: Request) {
  const { documentId, mode, text } = await req.json();
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const { data: doc } = await supabase
      .from("documents")
      .select("*")
      .eq("id", documentId)
      .eq("user_id", user.id)
      .single();

    if (!doc) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    const now = new Date();

    let { data: usage } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!usage) {
      const { data: created } = await supabase
        .from("usage_limits")
        .insert({
          user_id: user.id,
          pdf_summaries_today: 0,
          text_summaries_today: 0,
          last_reset: now,
        })
        .select()
        .single();

      usage = created;
    }

    const lastReset = new Date(usage.last_reset);
    const isNewDay = lastReset.toDateString() !== now.toDateString();

    let pdfUsed = isNewDay ? 0 : usage.pdf_summaries_today || 0;
    let textUsed = isNewDay ? 0 : usage.text_summaries_today || 0;

    if (isNewDay) {
      await supabase
        .from("usage_limits")
        .update({
          pdf_summaries_today: 0,
          text_summaries_today: 0,
          last_reset: now,
        })
        .eq("user_id", user.id);
    }

    if (
      (mode === "pdf" && pdfUsed >= 1) ||
      (mode === "text" && textUsed >= 2)
    ) {
      return NextResponse.json(
        { error: "Daily usage limit reached" },
        { status: 403 }
      );
    }

    const finalText = mode === "text" ? text : doc.content;

    await supabase
      .from("summaries")
      .update({ status: "pending" })
      .eq("document_id", documentId);
    const success = await summarizeDocument(documentId, finalText);

    if (mode === "pdf") {
      if (success) {
        await supabase
          .from("usage_limits")
          .update({ pdf_summaries_today: pdfUsed + 1 })
          .eq("user_id", user.id);
      }
    } else {
      if (success) {
        await supabase
          .from("usage_limits")
          .update({ text_summaries_today: textUsed + 1 })
          .eq("user_id", user.id);
      }

    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Summarize error:", err);

    await supabase
      .from("summaries")
      .update({ status: "failed" })
      .eq("document_id", documentId);

    return NextResponse.json(
      { error: "Failed to summarize document" },
      { status: 500 }
    );
  }
}

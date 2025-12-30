import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { summarizeDocument } from "@/lib/jobs/summarizeJob";

export async function POST(req: Request) {
  const { documentId, mode, text } = await req.json();
  const supabase = await createClient();

  try {

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (!user || userError) throw new Error("User not authenticated");

    const { data: doc } = await supabase
      .from("documents")
      .select("*")
      .eq("id", documentId)
      .single();

    if (!doc) throw new Error("Document not found");

    const now = new Date();
    let { data: usageData } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_id", user.id)
      .single();

    let pdfUsed = 0;
    let textUsed = 0;

    if (!usageData) {
      await supabase.from("usage_limits").insert({
        user_id: user.id,
        pdf_summaries_today: 0,
        text_summaries_today: 0,
        last_reset: now,
      });
      usageData = { pdf_summaries_today: 0, text_summaries_today: 0, last_reset: now };
    } else {
      const lastReset = new Date(usageData.last_reset);
      if (now.getTime() - lastReset.getTime() > 24 * 60 * 60 * 1000) {
        pdfUsed = 0;
        textUsed = 0;
        await supabase.from("usage_limits").update({
          pdf_summaries_today: 0,
          text_summaries_today: 0,
          last_reset: now,
        }).eq("user_id", user.id);
      } else {
        pdfUsed = usageData.pdf_summaries_today || 0;
        textUsed = usageData.text_summaries_today || 0;
      }
    }
    if ((mode === "pdf" && pdfUsed >= 1) || (mode === "text" && textUsed >= 2)) {
      return NextResponse.json({ error: "Daily usage limit reached" }, { status: 403 });
    }
    if (mode === "pdf") {
      await supabase.from("usage_limits").update({ pdf_summaries_today: pdfUsed + 1 }).eq("user_id", user.id);
    } else {
      await supabase.from("usage_limits").update({ text_summaries_today: textUsed + 1 }).eq("user_id", user.id);
    }

    const finalText = mode === "text" ? text : doc.content;
    summarizeDocument(documentId, finalText);
    return NextResponse.json({ ok: true });
  } catch (err) {
    await supabase
      .from("summaries")
      .update({ status: "failed" })
      .eq("document_id", documentId);

    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

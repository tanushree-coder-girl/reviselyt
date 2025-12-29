import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { summarizeDocument } from "@/lib/jobs/summarizeJob";

export async function POST(req: Request) {
  const { documentId, mode, text } = await req.json();
  const supabase = await createClient();

  try {
    const { data: doc } = await supabase
      .from("documents")
      .select("*")
      .eq("id", documentId)
      .single();

    if (!doc) throw new Error("Document not found");

    const finalText = mode === "text" ? text : doc.content;

    // Fire async background job
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

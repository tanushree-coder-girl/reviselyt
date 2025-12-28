import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { summarizeText } from "@/lib/summarize";

export async function POST(req: Request) {
  const { documentId, mode, text } = await req.json();
  const supabase = await createClient();

  try {
    // 1️⃣ fetch document
    const { data: doc } = await supabase
      .from("documents")
      .select("*")
      .eq("id", documentId)
      .single();

    if (!doc) throw new Error("Document not found");

    // 2️⃣ get text
    const finalText =
      mode === "text" ? text : doc.content;

    // 3️⃣ summarize
    const bullets = await summarizeText(finalText);

    // 4️⃣ update summary
    await supabase
      .from("summaries")
      .update({
        summary: bullets.join("\n"),
        status: "completed",
      })
      .eq("document_id", documentId);

    return NextResponse.json({ ok: true });
  } catch (err) {
    await supabase
      .from("summaries")
      .update({ status: "failed" })
      .eq("document_id", documentId);

    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

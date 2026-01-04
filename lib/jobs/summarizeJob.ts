import { createClient } from "@/lib/supabase/server";
import { summarizeWithHF } from "../hfClient";
import crypto from "crypto";

export async function summarizeDocument(documentId: string, text: string) {
  const supabase = await createClient();
  try {
    const hash = crypto.createHash("sha256").update(text).digest("hex");

    const { data: cached } = await supabase
      .from("summary_cache")
      .select("summary")
      .eq("document_hash", hash)
      .single();

    let summaryText: string;
    if (cached) {
      summaryText = cached.summary;
    } else {
      // Chunk text if too long
      const chunkSize = 1000;
      const chunks: string[] = [];
      for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.slice(i, i + chunkSize));
      }

      let combined = "";
      for (const chunk of chunks) {
        const summaryChunk = await summarizeWithHF(chunk);
        combined += " " + summaryChunk;
      }

      summaryText = combined
        .split(/(?<=\.)\s+/)
        .filter((s) => s.length > 40)
        .slice(0, 8)
        .map((s) => `• ${s.trim()}`)
        .join("\n");

      await supabase.from("summary_cache").insert({
        document_hash: hash,
        summary: summaryText,
      });
    }

    await supabase
      .from("summaries")
      .update({ summary: summaryText, status: "completed" })
      .eq("document_id", documentId);
    return true;
  } catch (err) {
    console.error(err);
    await supabase
      .from("summaries")
      .update({ status: "failed", error: (err as any).message })
      .eq("document_id", documentId);
    return false;
  }
}

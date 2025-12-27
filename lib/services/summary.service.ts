"use server";

import { createClient } from "@/lib/supabase/server";
import { summarizeText } from "@/lib/summarize";

export async function generateSummaryService(documentId: string, text: string) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      throw new Error("User not authenticated");
    }
    const bullets = await summarizeText(text);
    console.log(bullets)

    const { data: summary, error: insertError } = await supabase
      .from("summaries")
      .insert({
        document_id: documentId,
        user_id: user.id,
        mode: "bullet",
        summary: bullets.join("\n"),
      })
      .select()
      .single();

    console.log(summary)

    if (insertError) {
      console.error("Supabase insert summary error:", insertError);
      throw new Error("Failed to insert summary");
    }

    return summary;
  } catch (err) {
    console.error("generateSummaryService error:", err);
    throw err; // rethrow for Next.js to catch
  }
}

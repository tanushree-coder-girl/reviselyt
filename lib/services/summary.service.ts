"use server";

import { createClient } from "@/lib/supabase/server";
import { summarizeText } from "@/lib/summarize";

export async function generateSummaryService(
  summaryId: string,
  text: string
) {
  const supabase = await createClient();

  try {
    const bullets = await summarizeText(text);

    await supabase
      .from("summaries")
      .update({
        summary: bullets.join("\n"),
        status: "completed",
      })
      .eq("id", summaryId);

  } catch (err) {
    console.error("Summary failed:", err);

    await supabase
      .from("summaries")
      .update({ status: "failed" })
      .eq("id", summaryId);
  }
}

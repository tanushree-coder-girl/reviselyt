import { createClient } from "@/lib/supabase/server";

export async function resetAllUserUsage() {
  const supabase = await createClient(); 
  const now = new Date();

  await supabase
    .from("usage_limits")
    .update({
      pdf_summaries_today: 0,
      text_summaries_today: 0,
      last_reset: now,
    });

  console.log("All users usage reset at", now.toISOString());
}

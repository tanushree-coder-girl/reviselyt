"use server";

import { createClient } from "@/lib/supabase/server";

export async function getDashboardDataService() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  const { data: documents, error: docError } = await supabase
    .from("documents")
    .select(`
      id,
      title,
      file_type,
      created_at,
      summaries(id)
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (docError) {
    console.error("Failed to fetch documents:", docError);
    throw new Error("Failed to fetch documents");
  }

  const { data: usage, error: usageError } = await supabase
    .from("usage_limits")
    .select("*")
    .eq("user_id", user.id)
    .single();

  let finalUsage = usage;

  if (usage) {
    const lastReset = new Date(usage.last_reset);
    const today = new Date();

    const isNewDay =
      lastReset.toDateString() !== today.toDateString();

    if (isNewDay) {
      const { data: updatedUsage, error: updateError } = await supabase
        .from("usage_limits")
        .update({
          pdf_summaries_today: 0,
          text_summaries_today: 0,
          last_reset: today,
        })
        .eq("user_id", user.id)
        .select()
        .single();

      if (!updateError) {
        finalUsage = updatedUsage;
      }
    }
  }

  return {
    documents: documents || [],
    usage: finalUsage || {
      pdf_summaries_today: 0,
      text_summaries_today: 0,
    },
  };
}

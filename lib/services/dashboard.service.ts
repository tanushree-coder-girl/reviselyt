// dashboard.service.ts
"use server";

import { createClient } from "@/lib/supabase/server";

export async function getDashboardDataService() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await (await supabase).auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  // Fetch documents
  const { data: documents, error: docError } = await (await supabase)
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

  // Fetch usage limits
  const { data: usage, error: usageError } = await (await supabase)
    .from("usage_limits")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (usageError && usageError.code !== "PGRST116") {
    console.error("Failed to fetch usage:", usageError);
  }

  return {
    documents: documents || [],
    usage: usage || { pdf_summaries_today: 0, text_summaries_today: 0 },
  };
}

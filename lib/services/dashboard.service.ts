"use server";

import { createClient } from "@/lib/supabase/server";

export async function getUserDocumentsService() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("documents")
    .select(`
      id,
      title,
      file_type,
      created_at,
      summaries (
        id
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getUserDocumentsService error:", error);
    throw new Error("Failed to fetch documents");
  }

  return data;
}

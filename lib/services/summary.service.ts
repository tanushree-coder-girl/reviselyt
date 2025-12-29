"use server";

import { createClient } from "@/lib/supabase/server";

export async function getSummaryByID(doc_id: string | number) {
  const supabase = createClient();
  const {
    data: { user },
    error: userError,
  } = await (await supabase).auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await (await supabase)
    .from("summaries")
    .select(`
      summary,
      status,
      created_at,
      documents (
        title,
        file_type,
        content,
        file_url
      )
    `)
    .eq("document_id", doc_id)
    .eq("user_id", user.id)
    .limit(1)
    .single();

  if (error) {
    console.error("getUserDocumentsService error:", error);
    throw new Error("Failed to fetch documents");
  }

  return data;
}

export async function getPDFSignedUrl(file_url: any) {
  const supabase = createClient();
  const { data } = await (await supabase).storage
    .from("documents")
    .createSignedUrl(file_url, 3600);
  return data;
}

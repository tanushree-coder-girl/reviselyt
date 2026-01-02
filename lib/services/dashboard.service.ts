"use server";

import { createClient } from "@/lib/supabase/server";

export async function getDashboardDataService(page = 1, limit = 10) {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data: documents, count, error: docError} = await supabase
    .from("documents")
    .select(`
      id,
      title,
      file_type,
      created_at,
      summaries(id)
    `, { count: "exact" })
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .range(from, to);

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
    totalPages: Math.ceil((count || 0) / limit),
    usage: finalUsage || {
      pdf_summaries_today: 0,
      text_summaries_today: 0,
    },
  };
}

export async function deleteDocumentService(documentId: string) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  const { error: summaryError } = await supabase
    .from("summaries")
    .delete()
    .eq("document_id", documentId);

  if (summaryError) {
    console.error("Failed to delete summaries:", summaryError);
    throw new Error("Failed to delete summaries");
  }

  const { error: documentError } = await supabase
    .from("documents")
    .delete()
    .eq("id", documentId)
    .eq("user_id", user.id);

  if (documentError) {
    console.error("Failed to delete document:", documentError);
    throw new Error("Failed to delete document");
  }

  return { success: true };
}
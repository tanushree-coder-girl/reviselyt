"use server";

import { getSummaryByID, getPDFSignedUrl } from "@/lib/services/summary.service";

export async function getSummaryByIDAction(doc_id: string | number) {
  try {
    const data = await getSummaryByID(doc_id);
    return { data };
  } catch (error: any) {
    console.error("getSummaryByIDAction action error:", error);
    throw new Error(error.message || "Failed to load summary");
  }
}

export async function getPDFSignedUrlAction(file_url: string) {
   try {
    const data = await getPDFSignedUrl(file_url);
    return { data };
  } catch (error: any) {
    console.error("getPDFSignedUrlAction action error:", error);
    throw new Error(error.message || "Failed to create signed URL");
  }
}
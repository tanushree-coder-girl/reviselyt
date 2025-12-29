"use server";

import { getUserDocumentsService } from "@/lib/services/dashboard.service";

export async function getDashboardDocuments() {
  try {
    const documents = await getUserDocumentsService();
    return { documents };
  } catch (error: any) {
    console.error("getDashboardDocuments action error:", error);
    throw new Error(error.message || "Failed to load dashboard");
  }
}

"use server";

import { getDashboardDataService, deleteDocumentService } from "@/lib/services/dashboard.service";

export async function getDashboardData() {
  try {
    const data = await getDashboardDataService();
    return data;
  } catch (error: any) {
    console.error("getDashboardData action error:", error);
    throw new Error(error.message || "Failed to load dashboard data");
  }
}

export async function deleteDocumentAction(documentId: string) {
  try {
    return await deleteDocumentService(documentId);
  } catch (error: any) {
    console.error("Delete document error:", error);
    throw new Error(error.message || "Delete failed");
  }
}
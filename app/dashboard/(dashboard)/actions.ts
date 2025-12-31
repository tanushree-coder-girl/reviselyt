"use server";

import { getDashboardDataService } from "@/lib/services/dashboard.service";

export async function getDashboardData() {
  try {
    const data = await getDashboardDataService();
    return data;
  } catch (error: any) {
    console.error("getDashboardData action error:", error);
    throw new Error(error.message || "Failed to load dashboard data");
  }
}

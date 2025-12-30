import { NextResponse } from "next/server";
import { resetAllUserUsage } from "@/lib/jobs/resetUsage";

export async function POST() {
  try {
    await resetAllUserUsage();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Reset usage failed:", err);
    return NextResponse.json({ error: "Reset failed" }, { status: 500 });
  }
}

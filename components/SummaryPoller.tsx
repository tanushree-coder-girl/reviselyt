"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function SummaryPoller({ status }: { status: string }) {
  const router = useRouter();

  useEffect(() => {
    if (status === "pending") {
      const interval = setInterval(() => {
        router.refresh();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [status, router]);

  return null;
}

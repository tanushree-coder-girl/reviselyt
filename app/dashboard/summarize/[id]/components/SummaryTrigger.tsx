"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function SummaryTrigger({
  status,
  documentId,
  mode,
  text,
}: {
  status: string;
  documentId: string;
  mode: "pdf" | "text";
  text: string | null;
}) {
  const fired = useRef(false);

  useEffect(() => {
    if (status === "pending" && !fired.current) {
      fired.current = true;

      (async () => {
        try {
          const res = await fetch("/api/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ documentId, mode, text }),
          });

          const data = await res.json();

          if (!res.ok) {
            toast.error(data.error || "Failed to start summary");
          }
        } catch (err: any) {
          toast.error("Failed to start summary. Please try again.");
        }
      })();
    }
  }, [status, documentId, mode, text]);

  return null;
}

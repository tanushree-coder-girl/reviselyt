"use client";

import { useEffect, useRef } from "react";

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

      fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId,
          mode,
          text,
        }),
      });
    }
  }, [status, documentId, mode, text]);

  return null;
}

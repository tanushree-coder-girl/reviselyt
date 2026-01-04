"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function RetrySummaryButton({
    documentId,
    mode,
    text,
}: {
    documentId: string;
    mode: "pdf" | "text";
    text: string | null;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const handleRetry = async () => {
        try {
            setLoading(true)
            const res = await fetch("/api/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ documentId, mode, text }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || "Retry failed");
                return;
            }
            toast.success("Retry started");
            router.refresh();
        } catch (err) {
            toast.error("Failed to retry summary");
        } finally {
            setLoading(false)
        }
    };

    return (
        <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg
      bg-red-600 text-white font-semibold
      hover:bg-red-700 transition"
        >
            {loading ? "Retrying..." : "Retry"}
        </button>
    );
}

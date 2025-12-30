"use client";

import { useState } from "react";
import DashboardCard from "./ActionCard";
import LimitReachedModal from "./LimitReachedModal";
import Link from "next/link";
import { PdfIcon } from "./PdfIcon";
import { TextIcon } from "./TextIcon";

export default function DashboardClient({
  pdfRemaining,
  textRemaining,
}: {
  pdfRemaining: number;
  textRemaining: number;
}) {
  const [modal, setModal] = useState<null | "pdf" | "text">(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pdfRemaining > 0 ? (
          <Link href="/dashboard/upload?mode=pdf">
            <DashboardCard
              title="Generate Summary from PDF"
              description="Upload a PDF and get key bullet points"
              icon={<PdfIcon />}
            />
          </Link>
        ) : (
          <DashboardCard
            title="Generate Summary from PDF"
            description="Upload a PDF and get key bullet points"
            icon={<PdfIcon />}
            disabled
            onClick={() => setModal("pdf")}
          />
        )}

        {textRemaining > 0 ? (
          <Link href="/dashboard/upload?mode=text">
            <DashboardCard
              title="Paste Text & Get Summary"
              description="Paste notes or content and summarize instantly"
              icon={<TextIcon />}
            />
          </Link>
        ) : (
          <DashboardCard
            title="Paste Text & Get Summary"
            description="Paste notes or content and summarize instantly"
            icon={<TextIcon />}
            disabled
            onClick={() => setModal("text")}
          />
        )}
      </div>

      <LimitReachedModal
        open={modal !== null}
        onClose={() => setModal(null)}
        title="Daily limit reached"
        message={
          modal === "pdf"
            ? "Sorry, your daily PDF summary limit is reached. It will reset automatically in 24 hours."
            : "Sorry, your daily text summary limit is reached. It will reset automatically in 24 hours."
        }
      />
    </>
  );
}

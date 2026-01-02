"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-end gap-4 mt-6">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
      >
        <ArrowLeft />
      </button>

      <span className="px-4 py-2 text-gray-700 font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
      >
         <ArrowRight />
      </button>
    </div>
  );
}

// dashboard/page.tsx
import Link from "next/link";
import ActionCard from "./components/ActionCard";
import DocumentsTable from "./components/DocumentsTable";
import { getDashboardData } from "./actions";
import DashboardActions from "./components/DashboardActions";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const { documents, usage } = await getDashboardData();

  const pdfRemaining = Math.max(1 - (usage.pdf_summaries_today || 0), 0);
  const textRemaining = Math.max(2 - (usage.text_summaries_today || 0), 0);

  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome back 👋
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-2 max-w-xl">
            Turn long study material into quick, revision-friendly summaries.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 2h7l5 5v13a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
              />
            </svg>
            PDF: {pdfRemaining} left
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Text: {textRemaining} left
          </div>

        </div>

      </div>

      <DashboardActions
        pdfRemaining={pdfRemaining}
        textRemaining={textRemaining}
      />

      <section className="mt-8 bg-gradient-to-r from-purple-50 via-white to-blue-50 p-6 rounded-xl">
        <h2 className="text-xl md:text-xl font-semibold text-gray-900 mb-3">
          Quick Tips for Better Summaries
        </h2>
        <ul className="text-gray-700 text-sm md:text-base leading-relaxed list-disc list-inside space-y-2">
          <li>For PDFs, upload text-based PDFs only — image-based PDFs may not summarize well.</li>
          <li>Keep your documents organized by topic to get more precise summaries.</li>
          <li>Remove unnecessary formatting, headers, or footers when pasting notes to help the AI focus on key content.</li>
          <li>Break large documents into smaller sections for faster and more accurate summaries.</li>
          <li>Use the PDF upload or text paste features to get started instantly.</li>
        </ul>
      </section>

      <DocumentsTable documents={documents || []} />
    </div>
  );
}

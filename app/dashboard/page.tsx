import Link from "next/link";
import { getDashboardDocuments } from "./actions";
import DashboardCard from "@/components/DashboardCard";
import DocumentsTable from "@/components/DocumentsTable";

export default async function Dashboard() {
  const { documents } = await getDashboardDocuments();

  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome back
          </h1>

        </div>
        <p className="text-gray-600 text-base md:text-lg mt-2 md:mt-0">
          Turn long study material into quick, revision-friendly summaries.
        </p>
      </div>


      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Generate Summary from PDF"
          description="Upload a PDF and get key bullet points"
          href="/dashboard/upload?mode=pdf"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />

        <DashboardCard
          title="Paste Text & Get Summary"
          description="Paste notes or content and summarize instantly"
          href="/dashboard/upload?mode=text"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
      </div>

      {/* Quick Tips */}
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

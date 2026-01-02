import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { SummaryPoller } from "./components/SummaryPoller";
import { SummaryTrigger } from "./components/SummaryTrigger";
import { getSummaryByIDAction, getPDFSignedUrlAction } from "./action";
import { SummaryGenerating } from "./components/SummaryLoading";
import { fetchImageForSummary } from "@/lib/utils";
import { ArrowLeftIcon, ScanEye } from "lucide-react";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { id } = await params;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="text-center py-20">
        <p>Please login</p>
        <Link href="/auth/login" className="text-purple-600 underline">
          Go to login
        </Link>
      </div>
    );
  }
  const { data } = await getSummaryByIDAction(id);
  if (!data) {
    return (
      <div className="text-center py-20">
        <p>Summary not found</p>
      </div>
    );
  }

  const summary: any = data;

  let summaryImage: string | null = null;
  if (summary.status === "completed") {
    summaryImage = await fetchImageForSummary(summary.documents.title);
  }

  let pdfUrl: string | null = null;
  if (
    summary?.documents?.file_type === "pdf" &&
    summary.documents?.file_url
  ) {
    const { data } = await getPDFSignedUrlAction(summary.documents.file_url);
    pdfUrl = data?.signedUrl || null;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-8">
      <SummaryTrigger
        status={summary.status}
        documentId={id}
        mode={summary?.documents?.file_type}
        text={summary?.documents?.content}
      />
      <SummaryPoller status={summary.status} />

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Summary</h1>
        <Link href="/dashboard" className="text-purple-600 underline">
          <span className="flex items-center gap-1"> <ArrowLeftIcon size={20} /> Back </span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl py-4 px-4 bg-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold truncate">
              {summary?.documents?.title}
            </h2>

            {pdfUrl && summary.status === "completed" && (
              <a
                href={pdfUrl}
                target="_blank"
                title="View PDF"
                className="text-purple-600 hover:text-purple-800 transition"
              >
                <ScanEye className="w-5 h-5" />
              </a>
            )}
          </div>

          {summary.status === "completed" && summary?.documents?.file_type === "pdf" ? (
            pdfUrl ? (
              <>
                <iframe
                  src={pdfUrl}
                  className="w-full h-[600px] mt-2 border rounded"
                />
              </>
            ) : (
              <p>PDF load failed</p>
            )
          ) : (
            <div className="text-sm whitespace-pre-wrap max-h-[600px] overflow-auto">
              {summary?.documents?.file_type === "text" ? summary?.documents?.content : ""}
            </div>
          )}
        </div>

        <div className="border rounded-xl px-4 py-4 bg-gradient-to-b from-purple-50 to-white">
          <h2 className="font-semibold mb-4">
            Generated Summary
          </h2>

          {summary.status === "pending" && (
            <SummaryGenerating />
          )}

          {summary.status === "failed" && (
            <p className="text-red-500 text-center py-20">
              Failed to generate summary
            </p>
          )}

          {summary.status === "completed" && (
            <div className="w-full h-[600px] overflow-auto">
              {summaryImage && (
                <div className="my-4">
                  <img
                    src={summaryImage}
                    alt="Related to summary"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              )}
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {summary.summary}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

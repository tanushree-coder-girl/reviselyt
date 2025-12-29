import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { SummaryPoller } from "@/components/SummaryPoller";
import { SummaryTrigger } from "@/components/SummaryTrigger";
import { getSummaryByIDAction, getPDFSignedUrlAction } from "./action";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { id } = await params;

  // 🔐 Auth
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

  const summary = data;

  let pdfUrl: string | null = null;
  if (
    summary.documents.file_type === "pdf" &&
    summary.documents.file_url
  ) {
    const { data } = await getPDFSignedUrlAction(summary.documents.file_url);
    pdfUrl = data?.signedUrl || null;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <SummaryTrigger
        status={summary.status}
        documentId={id}
        mode={summary.documents.file_type}
        text={summary.documents.content}
      />
      <SummaryPoller status={summary.status} />

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Summary</h1>
        <Link href="/dashboard" className="text-purple-600 underline">
          ← Back
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT — Original Document */}
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="font-semibold mb-2">
            {summary.documents.title}
          </h2>

          {summary.documents.file_type === "pdf" ? (
            pdfUrl ? (
              <>
                <a
                  href={pdfUrl}
                  target="_blank"
                  className="text-sm text-purple-600 underline"
                >
                  Open PDF →
                </a>
                <iframe
                  src={pdfUrl}
                  className="w-full h-[450px] mt-2 border rounded"
                />
              </>
            ) : (
              <p>PDF load failed</p>
            )
          ) : (
            <div className="text-sm whitespace-pre-wrap max-h-[450px] overflow-auto">
              {summary.documents.content}
            </div>
          )}
        </div>

        {/* RIGHT — Summary */}
        <div className="border rounded-xl p-6 bg-gradient-to-b from-purple-50 to-white">
          <h2 className="font-semibold mb-4">
            Generated Summary
          </h2>

          {/* ⏳ pending */}
          {summary.status === "pending" && (
            <p className="text-gray-500 text-center py-20">
              Generating summary… ⏳
            </p>
          )}

          {/* ❌ failed */}
          {summary.status === "failed" && (
            <p className="text-red-500 text-center py-20">
              Failed to generate summary
            </p>
          )}

          {/* ✅ completed */}
          {summary.status === "completed" && (
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {summary.summary}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

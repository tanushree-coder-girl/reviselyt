import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // 1️⃣ Auth check
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <p className="text-sm text-gray-600">
          Please login to view this summary.
        </p>
        <Link href="/auth/login" className="text-purple-600 hover:underline">
          Go to login →
        </Link>
      </div>
    );
  }

  // 2️⃣ Fetch latest summary
  const { data, error } = await supabase
    .from("summaries")
    .select(
      `
      summary,
      created_at,
      documents (
        title,
        file_type,
        content,
        file_url
      )
    `
    )
    .eq("document_id", id)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1);

  const summary = data?.[0];

  let pdfUrl: string | null = null;

  if (summary.documents.file_type === "pdf" && summary.documents.file_url) {
    const { data } = await supabase.storage
      .from("documents")
      .createSignedUrl(summary.documents.file_url, 60 * 60); // 1 hour

    pdfUrl = data?.signedUrl || null;
  }

  if (error || !summary) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <p className="text-sm text-gray-600">
          Summary not found.
        </p>
        <Link href="/dashboard" className="text-purple-600 hover:underline">
          ← Back to dashboard
        </Link>
      </div>
    );
  }

  // 3️⃣ UI
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Summary
        </h1>

        <Link
          href="/dashboard"
          className="text-sm text-purple-600 hover:underline"
        >
          ← Back to dashboard
        </Link>
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left — Original document */}
        <div className="rounded-xl border bg-white p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Original Document
          </h2>

          <div className="space-y-1">
            <p className="font-medium text-gray-900">
              {summary.documents.title}
            </p>
          </div>

          {summary.documents.file_type === "pdf" ? (
            <div className="mt-4 h-[500px] rounded-lg overflow-hidden border">
              {pdfUrl ? (
                <>
                 <a
                    href={pdfUrl}
                    target="_blank"
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Open PDF in new tab →
                  </a>
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full"
                  />
                 
                </>
              ) : (
                <p className="text-sm text-gray-500">
                  Unable to load PDF
                </p>
              )}
            </div>
          ) : (
            <div className="mt-4 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-auto">
              {summary.documents.content}
            </div>
          )}



        </div>

        {/* Right — Summary */}
        <div className="rounded-xl border bg-gradient-to-b from-purple-50 via-white to-blue-50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Generated Summary
            </h2>
            <p className="text-xs text-gray-500">
              {new Date(summary.created_at).toLocaleString()}
            </p>
          </div>

          <div className="text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
            {summary.summary}
          </div>
        </div>
      </div>
    </div>
  );
}

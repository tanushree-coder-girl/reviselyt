"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { handleUploadDocument } from "./actions";
import { extractTextFromPDF } from "@/lib/pdf";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const mode = useSearchParams().get("mode"); // pdf | text
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return alert("Please add a title ✏️");

    if (mode === "pdf" && !file)
      return alert("Please upload a PDF 📄");

    if (mode === "text" && !text.trim())
      return alert("Please paste some text ✍️");

    setLoading(true);

    try {
      let extractedText = text;

      if (mode === "pdf" && file) {
        extractedText = await extractTextFromPDF(file);
      }

      const doc = await handleUploadDocument({
        title,
        file: mode === "pdf" ? file : null,
        text: extractedText
      });
      router.push(`/dashboard/summarize/${doc.id}`);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* Header / Hero */}
        <div className="text-center space-y-5">
          <span className="inline-flex items-center px-4 py-1.5 text-xs rounded-full border border-purple-300 text-purple-700 font-medium">
            {mode === "pdf" ? "PDF SUMMARIZATION" : "TEXT SUMMARIZATION"}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {mode === "pdf" ? "Summarize your PDF" : "Summarize your text"}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Turn long study material into clear, concise bullet summaries
            for faster revision.
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12 space-y-10">

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Document title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. DBMS – Normalization"
              className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* PDF Upload */}
          {mode === "pdf" && (
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              <div className="rounded-2xl border-2 border-dashed px-8 py-14 text-center transition hover:bg-purple-50">
                {!file ? (
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">
                      Upload a PDF file
                    </p>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto">
                      Best results with text-based PDFs. Avoid scanned images.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="font-semibold text-purple-600">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      File ready for summarization
                    </p>
                  </div>
                )}
              </div>
            </label>
          )}

          {/* Text Input */}
          {mode === "text" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Paste your content
              </label>
              <textarea
                rows={9}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste notes, syllabus, interview prep, or any topic here…"
                className="w-full rounded-2xl border px-4 py-4 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500">
                Clean, structured text gives better summaries.
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 text-base font-semibold hover:opacity-90 transition disabled:opacity-60 shadow-lg"
          >
            {loading ? "Generating summary…" : "Generate summary"}
          </button>
        </div>
      </div>
    </div>

  );
}

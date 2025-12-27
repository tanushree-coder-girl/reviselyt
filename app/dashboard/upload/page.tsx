"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { handleUploadDocument, handleSummarize } from "./actions";
import { extractTextFromPDF } from "@/lib/pdf";

export default function UploadPage() {
  const mode = useSearchParams().get("mode"); // pdf | text

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) return alert("Please add a title ✏️");

    if (mode === "pdf" && !file)
      return alert("Please upload a PDF 📄");

    if (mode === "text" && !text.trim())
      return alert("Please paste some text ✍️");

    setLoading(true);
    try {
      const doc = await handleUploadDocument({
        title,
        file: mode === "pdf" ? file : null,
        text: mode === "text" ? text : "",
      });

      if (mode === 'text') {
        const { summary } = await handleSummarize({
          document_id: doc.id,
          text:text
        });
        setSummary(summary.summary);
      } else {
        if (file && mode === "pdf") {
          const extractedText = await extractTextFromPDF(file);
          console.log("Extracted Text:", extractedText);

          const { summary } = await handleSummarize({
            document_id: doc.id,
            text: extractedText,
          });

          setSummary(summary.summary);
        }
      }


    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-muted">
          {mode === "pdf" ? "📄 PDF MODE" : "📝 TEXT MODE"}
        </span>
        <h1 className="text-3xl font-bold">
          {mode === "pdf"
            ? "Summarize a PDF"
            : "Summarize Your Text"}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Convert long content into short, clear bullet points —
          perfect for exams & interviews.
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border bg-background p-8 space-y-8 shadow-sm">
        {/* Title */}
        <div className="mb-8">
          <label className="text-sm font-medium">Document Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Operating Systems – Process Management"
            className="mt-1 w-full rounded-lg border px-4 py-2 text-sm"
          />
        </div>

        {/* PDF Upload */}
        {mode === "pdf" && (
          <label className="group cursor-pointer">
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
            />

            <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 text-center transition group-hover:bg-muted">
              <div className="text-4xl">📄</div>

              {!file ? (
                <>
                  <p className="font-medium">
                    Click to upload a PDF
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Text-based PDFs work best · Max 5MB
                  </p>
                </>
              ) : (
                <>
                  <p className="font-medium text-green-600">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ready to generate summary ✨
                  </p>
                </>
              )}
            </div>
          </label>
        )}

        {/* Text Input */}
        {mode === "text" && (
          <div>
            <label className="text-sm font-medium">
              Paste Your Content
            </label>
            <textarea
              rows={8}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste notes, syllabus, interview prep, or any topic here…"
              className="mt-1 w-full rounded-xl border px-4 py-3 text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Tip: Clean text gives better summaries 💡
            </p>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl bg-black text-white py-3 font-medium transition hover:opacity-90"
        >
          {loading
            ? "Generating summary…"
            : "Generate Bullet Summary ✨"}
        </button>
      </div>

      {/* Summary Output */}
      {summary && (
        <div className="rounded-xl border p-6 bg-muted/30">
          <h2 className="font-semibold mb-3">📌 Summary</h2>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {summary}
          </pre>
        </div>
      )}
    </div>
  );
}

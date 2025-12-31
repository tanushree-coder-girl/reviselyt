"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getUsageAction, handleUploadDocument } from "./actions";
import { extractTextFromPDF } from "@/lib/pdf";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const TEXT_MIN = 100;
const TEXT_MAX = 15000;
const PDF_MAX_MB = 5;

export default function UploadPage() {
  const mode = useSearchParams().get("mode");
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [usage, setUsage] = useState<any | null>(null);
  const [usageLoading, setUsageLoading] = useState(true);

  useEffect(() => {
    async function loadUsage() {
      try {
        const data = await getUsageAction();
        setUsage(data);
        setText("")
        setFile(null)
        setTitle("")
        setLoading(false);
      } finally {
        setUsageLoading(false);
      }
    }

    loadUsage();
  }, []);


  useEffect(() => {
    if (!mode) {
      router.replace("/dashboard/upload?mode=text");
      return;
    }

    if (mode !== "text" && mode !== "pdf") {
      router.replace("/dashboard");
    }
  }, [mode, router]);


  const handleSubmit = async () => {
    if (!title.trim()) {
      return toast.error("Please add a document title");
    }

    if (mode === "text") {
      if (!text.trim()) {
        return toast.error("Please paste some content");
      }
      if (text.length < TEXT_MIN) {
        return toast.error(`Text must be at least ${TEXT_MIN} characters`);
      }
      if (text.length > TEXT_MAX) {
        return toast.error(`Text cannot exceed ${TEXT_MAX} characters`);
      }
    }

    if (mode === "pdf") {
      if (!file) {
        return toast.error("Please upload a PDF file");
      }
      const sizeMB = file.size / (1024 * 1024);
      if (sizeMB > PDF_MAX_MB) {
        return toast.error(`PDF must be under ${PDF_MAX_MB} MB`);
      }
    }
    setLoading(true);

    try {
      let extractedText = text.trim();

      if (mode === "pdf" && file) {
        toast.loading("Extracting text from PDF...");
        extractedText = await extractTextFromPDF(file);
      }

      const doc = await handleUploadDocument({
        title,
        file: mode === "pdf" ? file : null,
        text: extractedText
      });
      toast.success("Document uploaded successfully");
      router.push(`/dashboard/summarize/${doc.id}`);
    } catch (e: any) {
      toast.error(e.message || "Something went wrong");
    } finally {
      setLoading(false);
      setText("");
      setFile(null);
      setTitle("");
    }
  };


  const pdfRemaining =
    usage ? Math.max(1 - (usage.pdf_summaries_today ?? 0), 0) : 1;
  const textRemaining =
    usage ? Math.max(2 - (usage.text_summaries_today ?? 0), 0) : 2;

  const limitReached =
    !usageLoading &&
    ((mode === "pdf" && pdfRemaining === 0) ||
      (mode === "text" && textRemaining === 0));


  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
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

        <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12 space-y-10">

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

          {mode === "pdf" && (
            <label
              className="block cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) setFile(droppedFile);
              }}
            >
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
                      PDF only • Max {PDF_MAX_MB} MB • Text-based PDFs recommended
                    </p>
                    <p className="text-xs text-gray-400">
                      Avoid scanned or image-only PDFs for best results
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

          {mode === "text" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Paste your content
              </label>

              <div className="relative">
                <textarea
                  rows={9}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste notes, syllabus, interview prep, or any topic here…"
                  className="w-full rounded-2xl border px-4 py-4 pr-20
        text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* bottom-right counter */}
                <span
                  className={`absolute bottom-3 right-4 text-xs
        ${text.length > TEXT_MAX || text.length < TEXT_MIN
                      ? "text-red-500"
                      : "text-gray-400"
                    }`}
                >
                  {text.length}/{TEXT_MAX}
                </span>
              </div>

              <p className="text-xs text-gray-400">
                Minimum {TEXT_MIN} characters • Clean, structured text gives better summaries.
              </p>
            </div>

          )}

          <button
            onClick={handleSubmit}
            disabled={loading || usageLoading || limitReached}
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500
             text-white py-4 font-semibold disabled:opacity-50"
          >
            {usageLoading
              ? "Checking limits..."
              : limitReached
                ? "Daily limit reached"
                : loading
                  ? "Generating summary…"
                  : "Generate summary"}
          </button>
        </div>
      </div>
    </div>

  );
}

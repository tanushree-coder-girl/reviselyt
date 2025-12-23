'use client';

export default function UploadPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Upload Study Material
        </h1>
        <p className="text-muted-foreground">
          Upload a PDF or paste text to get a quick
          exam or interview summary.
        </p>
      </div>

      {/* Upload Card */}
      <div className="rounded-xl border p-6 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Document title
          </label>
          <input
            type="text"
            placeholder="e.g. Operating Systems Notes"
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Upload PDF (optional)
          </label>
          <input
            type="file"
            accept="application/pdf"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Max size 5MB · Only PDF files
          </p>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">
            OR
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Text Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Paste your text
          </label>
          <textarea
            rows={6}
            placeholder="Paste your notes, syllabus, or interview material here..."
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Mode Selector (UI only) */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Summary mode
          </label>
          <div className="flex gap-3">
            <ModeBadge label="Exam" />
            <ModeBadge label="Interview" />
            <ModeBadge label="Quick" />
          </div>
        </div>

        {/* Submit */}
        <button
          className="w-full bg-black text-white py-2.5 rounded-md font-medium hover:bg-black/90 transition"
        >
          Generate Summary ✨
        </button>
      </div>

      {/* Help Box */}
      <div className="rounded-lg border bg-muted/50 p-4 text-sm">
        <p className="font-medium mb-1">
          💡 Best results tips
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Use clean PDFs (not scanned images)</li>
          <li>Keep content focused (1 topic at a time)</li>
          <li>Choose Interview mode for job prep</li>
        </ul>
      </div>
    </div>
  );
}

function ModeBadge({ label }: { label: string }) {
  return (
    <span className="cursor-pointer rounded-full border px-4 py-1 text-sm hover:bg-muted transition">
      {label}
    </span>
  );
}
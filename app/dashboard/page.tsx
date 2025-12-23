import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-muted-foreground">
          Upload your study material and get last-minute
          exam or interview summaries.
        </p>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Upload Material"
          description="Upload PDF or paste text"
          href="/dashboard/upload"
          emoji="📄"
        />

        <DashboardCard
          title="Generate Summary"
          description="Exam or interview focused"
          href="/dashboard/upload"
          emoji="✨"
        />

        <DashboardCard
          title="History"
          description="View past summaries"
          href="/dashboard/history"
          emoji="🕘"
        />
      </div>

      {/* Tips */}
      <div className="rounded-lg border p-6 bg-muted/50">
        <h2 className="font-semibold mb-2">
          💡 Tips for best summaries
        </h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Upload clean PDFs (not scanned images)</li>
          <li>Use Exam mode for theory subjects</li>
          <li>Use Interview mode for job prep</li>
        </ul>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  href,
  emoji,
}: {
  title: string;
  description: string;
  href: string;
  emoji: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border p-6 hover:bg-muted transition"
    >
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-4 font-semibold text-lg">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-muted-foreground">
          Turn long study material into quick, revision-friendly summaries.
        </p>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Generate Summary from PDF"
          description="Upload a PDF and get key bullet points"
          href="/dashboard/upload?mode=pdf"
          emoji="📄"
        />

        <DashboardCard
          title="Paste Text & Get Summary"
          description="Paste notes or content and summarize instantly"
          href="/dashboard/upload?mode=text"
          emoji="📝"
        />
      </div>

      {/* Tips */}
      <div className="rounded-lg border p-6 bg-muted/50">
        <h2 className="font-semibold mb-2">💡 Tips</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Use clean, text-based PDFs</li>
          <li>Shorter content gives better summaries</li>
          <li>Paste text if PDF extraction fails</li>
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
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

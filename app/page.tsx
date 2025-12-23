import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8">
          <span className="inline-block rounded-full border px-4 py-1 text-sm">
            🚀 AI-powered last-minute revision
          </span>

          <h1 className="text-5xl font-bold tracking-tight">
            Revise smarter with{" "}
            <span className="underline decoration-4">
              Reviselyt
            </span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Upload your study material or interview notes and get
            <strong> 5–10 crisp bullet points</strong> for fast,
            effective revision — perfect for exams and interviews.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/auth/login"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-black/90 transition"
            >
              Get Started
            </Link>

            <Link
              href="#features"
              className="border px-8 py-3 rounded-lg font-medium hover:bg-muted transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t bg-muted/40 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Upload Anything"
            description="Upload PDFs or paste text directly — works for notes, syllabi, or interview prep."
            emoji="📄"
          />
          <FeatureCard
            title="AI Bullet Summaries"
            description="Get 5–10 clear bullet points focused on exams or interviews."
            emoji="✨"
          />
          <FeatureCard
            title="Access Anytime"
            description="All your summaries are saved securely for quick revision."
            emoji="🕘"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stop rereading. Start revising.
        </h2>
        <p className="text-muted-foreground mb-8">
          Built for students and job seekers who value time.
        </p>
        <Link
          href="/auth/login"
          className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-black/90 transition"
        >
          Try Reviselyt for Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t text-xs text-center py-6 text-muted-foreground">
        © {new Date().getFullYear()} Reviselyt · Built with Next.js & Supabase
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  emoji,
}: {
  title: string;
  description: string;
  emoji: string;
}) {
  return (
    <div className="rounded-xl border bg-background p-6 text-center space-y-3">
      <div className="text-4xl">{emoji}</div>
      <h3 className="font-semibold text-lg">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

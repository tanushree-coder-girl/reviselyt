import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}

      <header className="max-w-6xl mx-auto w-full px-6 py-4 border-b bg-white shadow-sm">
        {/* Left: Logo */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Reviselyt Logo"
                width={80}
                height={50}
                priority
              />
            </div>
          </Link>

          {/* Right: Sign In + Get Started */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Sign In
            </Link>
            <Link
              href="/auth/login"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-32 bg-gradient-to-b from-purple-50 via-white to-blue-50">
        <div className="max-w-3xl text-center space-y-10">
          {/* Tagline with SVG icon */}
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-6 py-2 text-sm font-medium text-purple-700 tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            AI-powered last-minute revision
          </span>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
            Revise smarter with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
              Reviselyt
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Upload your study material or interview notes and get{" "}
            <strong className="text-purple-600">5–10 crisp bullet points</strong>{" "}
            for fast, effective revision — perfect for exams and interviews.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link
              href="/auth/login"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              {/* Optional SVG in button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Get Started
            </Link>

            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 12v4"
                />
              </svg>
              Talk to Me
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t bg-gradient-to-b from-white via-purple-50 to-blue-50 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Upload PDFs or Text"
            description="Upload PDFs or paste text directly — works for notes, syllabi, or interview prep."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <FeatureCard
            title="AI Bullet Summaries"
            description="Get 5–10 clear bullet points focused on exams or interviews."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <FeatureCard
            title="Access Anytime"
            description="All your summaries are saved securely for quick revision."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
      </section>

      {/* The Idea Behind It - Split Sticky Layout */}
      <section className="px-6 py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Side - Sticky Heading + Illustration */}
          <div className="md:sticky md:top-32 self-start">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              The Idea Behind It
            </h2>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
              Making learning engaging and efficient.
            </p>

            {/* Question Mark SVG */}
            <div className="flex w-[70%] items-center justify-center mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-80 h-80 text-purple-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3c0 1.657 1.343 3 3 3zm0 2v4m0 4h.01"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="space-y-10">
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              Studying long PDFs or lecture notes can feel overwhelming, especially during exams or interview prep. Most textbooks are text-heavy and lack visuals, making revision tiring and less engaging.
            </p>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              With Reviselyt, we transform your PDFs or pasted notes into concise 5–10 bullet points. Each bullet is paired with relevant visual cues, making concepts easier to remember and keeping revision interesting.
            </p>

            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              Imagine reading a textbook without any pictures — it feels dry and boring. By adding visual hints and breaking content into bullet points, we turn tedious learning into an interactive, enjoyable experience.
            </p>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Whether preparing for exams, interviews, or personal learning, Reviselyt keeps you focused, engaged, and efficient. Visuals + concise summaries = faster learning with more fun!
            </p>
          </div>
        </div>
      </section>

      {/* Why Open Source */}
      <section className="px-6 py-28 bg-gradient-to-b from-white via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* Left — Story + CTA */}
          <div className="space-y-10">
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              Software should empower learners — not trap them.
            </p>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Reviselyt is built as an{" "}
              open-source product because we
              believe learners should own their tools — not rent them.
            </p>

            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              You get the simplicity of SaaS with the freedom, transparency, and cost
              savings of open source.
            </p>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Building in public means your feedback directly shapes how the product
              evolves — openly, responsibly, and with trust.
            </p>

            {/* CTA */}
            <div className="pt-6">
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                className="inline-flex items-center gap-3 text-purple-700 font-medium hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.9 2.7 2.4.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
                </svg>
                Explore the open-source code
              </Link>
            </div>
          </div>


          {/* Right — Heading + subtle visual */}
          <div className="space-y-6 md:pl-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Open Source <br />
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                
              </span> */}
            </h2>

            <p className="text-gray-600 text-lg md:text-xl">
              Build in public with me.
              Your feedback shapes the product.
            </p>


            {/* Smaller, subtle Question Mark */}
            <div className="mt-10 opacity-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-56 h-56 text-purple-300 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 11-8 0 4 4 0 018 0zm-8 0a4 4 0 108 0"
                />
              </svg>

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="px-6 py-32 text-center bg-gradient-to-b from-purple-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto space-y-10">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Stop rereading, revising smarter.
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Turn long PDFs and notes into{" "}
            <strong className="text-purple-600">short, visual summaries</strong>{" "}
            — revise faster and remember better.
          </p>

          {/* CTA Buttons — SAME AS HERO */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

            {/* Primary */}
            <Link
              href="/auth/login"
              className="bg-gradient-to-r from-purple-600 to-blue-500
        text-white px-10 py-4 rounded-xl
        font-semibold text-lg
        hover:opacity-90 transition shadow-lg
        inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Get Started
            </Link>

            {/* Secondary */}
            <Link
              href="/contact"
              className="border-2 border-purple-600
        text-purple-600 px-10 py-4 rounded-xl
        font-semibold text-lg
        hover:bg-purple-50 transition
        inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 12v4"
                />
              </svg>
              Talk to Me
            </Link>

          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}


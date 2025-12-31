// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-32 bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <div className="max-w-3xl text-center space-y-8">
        {/* Error Tag */}
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-6 py-2 text-sm font-medium text-purple-700 tracking-wide bg-white/50 shadow-sm">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Error 404: Page Missing
        </span>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
          Lost in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
            Translation?
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Humein wo page nahi mila jise aap dhoond rahe hain. Shayad link galat hai ya page ko <strong className="text-purple-600">Reviselyt</strong> se delete kar diya gaya hai.
        </p>

        {/* Buttons matching Hero section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-10 py-6 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg inline-flex items-center justify-center gap-2"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Dashboard
          </Link>

          <Link
            href="/"
            className="border-2 border-purple-600 text-purple-600 px-10 py-6 rounded-xl font-semibold text-lg hover:bg-purple-50 transition inline-flex items-center justify-center gap-2"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="px-6 py-32 text-center bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Stop rereading. Revise smarter.
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
          Upload your PDF or notes and get clear, concise bullet points for quick revision — free, open source, and continuously improving based on user feedback.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/auth/login"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base md:text-lg hover:opacity-90 transition shadow-lg inline-flex items-center justify-center gap-2"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Try ReviseLyt free
          </Link>

          <Link
            href="https://github.com/tanushree-coder-girl/reviselyt"
            target="_blank"
            className="w-full sm:w-auto border-2 border-purple-400 text-purple-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-purple-700 hover:text-white transition inline-flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.679.921.679 1.856 0 1.339-.012 2.421-.012 2.751 0 .269.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;

import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 sm:px-6 py-20 sm:py-24 md:py-32 bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <div className="max-w-3xl w-full text-center space-y-8 sm:space-y-10">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-purple-700 tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600"
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
            Free & Open-Source Revision Tool
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-snug md:leading-[1.1]">
          Turn PDFs & notes into quick{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
            revision points
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
          Summarize PDFs and text into concise, revision-ready bullet points using
          open-source AI. Built for students, developers, and lifelong learners.
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
            Try it free
          </Link>
          <Link
            href="https://github.com/tanushree-coder-girl/reviselyt"
            target="_blank"
            className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-purple-50 transition inline-flex items-center justify-center gap-2"
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

export default Hero;

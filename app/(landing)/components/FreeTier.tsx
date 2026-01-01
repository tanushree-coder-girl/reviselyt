const FreePlan = () => {
  return (
    <section id="benefits" className="px-4 sm:px-6 py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div className="text-center items-center hidden md:flex md:text-left space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 h-72 text-purple-300"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
          >
            {/* Open book */}
            <path
              d="M4 8c0 0 12-4 28-4s28 4 28 4v48s-12-4-28-4S4 56 4 56V8z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="32" y1="4" x2="32" y2="60" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="16" x2="54" y2="16" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="24" x2="54" y2="24" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="32" x2="54" y2="32" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="40" x2="54" y2="40" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

        </div>

        <div className="space-y-4">
          <h2 className="text-3xl mb-8 sm:text-5xl font-extrabold leading-tight">
            Benefits of {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              free tier
            </span>
          </h2>
          {[
            "Summarize PDFs and text quickly",
            "1 PDF summary per day & 2 Text summary per day.",
            "Reset daily in 24 hours.",
            "Free forever.",
            "No credit card required — start instantly.",
            "Your summaries are saved and easily accessible anytime.",
            "Perfect for students, interviews, and everyday knowledge boosting.",
            "Lightweight, fast, and entirely browser-based — no installation needed."
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700 text-base sm:text-lg">{benefit}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreePlan;

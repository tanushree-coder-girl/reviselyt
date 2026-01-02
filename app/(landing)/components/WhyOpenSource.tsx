import Link from "next/link";

const OpenSourceTrust = () => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        <div className="space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Open {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Source
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            Software should empower learners — not trap them. Reviselyt is built as an open-source product because we believe learners should own their tools, not rent them.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Reviselyt is built on open-source AI models with privacy at its core. We don’t sell user data, we don’t track learning behavior, and your documents are processed only to generate summaries — nothing more.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
            Building in public means your feedback directly shapes how Reviselyt evolves — openly, responsibly, and with trust.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
           Powered by open-source AI models — fully transparent and built for learners.
          </p>

          <div className="mt-4 flex justify-center md:justify-start">
            <Link
              href="https://github.com/tanushree-coder-girl/reviselyt"
              target="_blank"
              className="inline-flex flex-wrap items-center gap-3 font-semibold text-base sm:text-lg hover:opacity-90  text-purple-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.9 2.7 2.4.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 2.5.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              Explore the open-source code
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-64 md:w-80 md:h-80 text-purple-200"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
          >
            <path d="M8 24L32 4l24 20v32H8V24z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="44" r="3" fill="currentColor" />
            <circle cx="44" cy="44" r="3" fill="currentColor" />
            <circle cx="32" cy="32" r="3" fill="currentColor" />
            <line x1="32" y1="32" x2="20" y2="44" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="32" x2="44" y2="44" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default OpenSourceTrust;

import Link from 'next/link'

const Hero = () => {
    return (
        <section className="flex flex-1 items-center justify-center px-6 py-32 bg-gradient-to-b from-purple-50 via-white to-blue-50">
            <div className="max-w-3xl text-center space-y-10">
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

                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
                    Revise smarter with{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
                        Reviselyt
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
                    Upload your study material or interview notes and get{" "}
                    <strong className="text-purple-600">5–10 crisp bullet points</strong>{" "}
                    for fast, effective revision, perfect for exams and interviews.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <Link
                        href="/auth/login"
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
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                        Get Started
                    </Link>

                    <Link
                        href="https://www.fiverr.com/tanushreeahir1"
                        target="_blank"
                        className="border-2 border-purple-600 text-purple-600 px-10 py-6 rounded-xl font-semibold text-lg hover:bg-purple-50 transition inline-flex items-center justify-center gap-2"
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
                                d="M7 8h10M7 12h8m-6 8v-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                        </svg>
                        Talk to Me
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Hero
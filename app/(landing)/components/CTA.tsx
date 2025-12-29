import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className="px-6 py-32 text-center bg-gradient-to-b from-purple-50 via-white to-blue-50">
            <div className="max-w-3xl mx-auto space-y-10">

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                    Stop rereading, revising smarter.
                </h2>

                <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
                    Turn long PDFs and notes into{" "}
                    <strong className="text-purple-600">short, visual summaries</strong>{" "}
                    - revise faster and remember better.
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

export default CTA

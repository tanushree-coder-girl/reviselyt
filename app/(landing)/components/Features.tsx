import React from 'react'
import { FeatureCard } from '../components'

const Features = () => {
    return (
        <section
            id="features"
            className="border-t bg-gradient-to-b from-white via-purple-50 to-blue-50 px-6 py-20"
        >
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <FeatureCard
                        title="Upload PDFs or Paste Text"
                        description="Upload PDFs or paste text directly — works for lecture notes, syllabi, or interview prep."
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
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        }
                    />

                    <FeatureCard
                        title="AI Generates Concise Summaries"
                        description="Get 5–10 clear bullet points generated instantly — perfect for exams, interviews, or quick learning."
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
                                    d="M5 7h14M5 12h14M5 17h14M3 7h.01M3 12h.01M3 17h.01"
                                />
                            </svg>
                        }
                    />

                    <FeatureCard
                        title="Revise in Minutes"
                        description="All your summaries are saved and accessible anytime — revise faster and more efficiently."
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
                                    d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121m0-12.728l2.121 2.121M17.243 17.243l2.121 2.121"
                                />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    )
}

export default Features

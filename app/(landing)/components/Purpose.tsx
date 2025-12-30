import React from 'react'

const Purpose = () => {
    return (
        <section className="px-6 py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="md:sticky md:top-32 self-start">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        The Idea Behind It
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        Making learning engaging and efficient.
                    </p>

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
    )
}

export default Purpose
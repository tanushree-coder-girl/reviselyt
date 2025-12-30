import Link from 'next/link'
import React from 'react'

const WhyOpenSource = () => {
    return (
        <section className="px-6 py-28 bg-gradient-to-b from-white via-purple-50 to-blue-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

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

                    <div className="pt-6">
                        <Link
                            href="https://github.com/tanushree-coder-girl/reviselyt"
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


                <div className="space-y-6 md:pl-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Why Open Source <br />
                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl">
                        Build in public with me.
                        Your feedback shapes the product.
                    </p>

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
    )
}

export default WhyOpenSource
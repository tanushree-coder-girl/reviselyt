import React from "react";

const UseCases = () => {
  return (
    <section id="use-case" className="px-6 py-20 from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 h-72 text-purple-300"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
          >
            {/* Book outline */}
            <rect x="8" y="8" width="48" height="48" rx="4" ry="4" strokeWidth="2" />
            {/* Lines representing text */}
            <line x1="16" y1="18" x2="48" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="26" x2="48" y2="26" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="34" x2="48" y2="34" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="42" x2="36" y2="42" strokeWidth="2" strokeLinecap="round" />
            {/* Checkmarks for bullet points */}
            <polyline points="14,18 12,20 14,22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="14,26 12,28 14,30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="14,34 12,36 14,38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="14,42 12,44 14,46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Use case
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Whether you’re studying, preparing for interviews, or just need a quick refresher — Reviselyt helps you revise faster.
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg md:text-xl">
            <li>
              <strong>Exam Revision:</strong> Turn long syllabus PDFs into concise bullet points for quick and effective revision.
            </li>
            <li>
              <strong>Interview Preparation:</strong> Revise concepts, notes, and FAQs quickly to be interview-ready.
            </li>
            <li>
              <strong>Long Documents & Blogs:</strong> Skip the fluff and get only key takeaways from lengthy articles or PDFs.
            </li>
            <li>
              <strong>Quick Refresh Before Meetings:</strong> Review key points from documents or notes in minutes instead of hours.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

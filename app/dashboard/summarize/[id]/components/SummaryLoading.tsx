"use client";

import { useEffect, useState } from "react";

const messages = [
  "Summarizing",
  "This may take a few seconds",
  "Analyzing key points",
  "Finalizing summary",
];

export function SummaryGenerating() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [dots, setDots] = useState("");

  // Dots animation for first line
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(dotsInterval);
  }, []);

  // Reveal messages one by one every 3 seconds
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, messages[index]]);
      index++;
      if (index >= messages.length) clearInterval(interval);
    }, 3000); // 3 seconds delay
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {/* First line always visible with dots */}
      <p className="text-sm font-medium text-gray-600 tracking-wide">
        Summarizing{dots}
      </p>

      {/* Rest of the messages */}
      {visibleMessages.map((msg, i) => (
        <p
          key={i}
          className="text-sm font-medium text-gray-600 tracking-wide"
        >
          {msg}
        </p>
      ))}
    </div>
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;


export async function fetchImageForSummary(summaryText: string) {
  const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
  if (!PIXABAY_API_KEY) return null;

  const topicType = detectTopicType(summaryText);

  // 🔹 ABSTRACT → fallback image (NO Pixabay random)
  if (topicType === "abstract") {
    return getFallbackImage(summaryText);
  }

  // 🔹 VISUAL → keyword-based search
  const query = buildImageQuery(summaryText);

  try {
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&per_page=3&safesearch=true`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Pixabay API response status:", response.status);
      return getFallbackImage(summaryText);
    }

    const data = await response.json();

    return (
      data.hits?.[0]?.webformatURL ||
      getFallbackImage(summaryText)
    );
  } catch (err) {
    console.error("Pixabay fetch error:", err);
    return getFallbackImage(summaryText);
  }
}

/* --------------------------------------------------
   TOPIC TYPE DETECTION
--------------------------------------------------- */

function detectTopicType(text: string): "abstract" | "visual" {
  const lower = text.toLowerCase();

  const abstractSignals = [
    "javascript",
    "programming",
    "function",
    "variable",
    "algorithm",
    "theory",
    "concept",
    "definition",
    "process",
    "mechanism",
    "economics",
    "philosophy",
    "psychology",
    "data",
    "software",
  ];

  for (const word of abstractSignals) {
    if (lower.includes(word)) return "abstract";
  }

  return "visual";
}

/* --------------------------------------------------
   FALLBACK IMAGES (SAFE & RELEVANT)
--------------------------------------------------- */

function getFallbackImage(text: string): string {
  const lower = text.toLowerCase();

  if (lower.includes("javascript") || lower.includes("programming")) {
    return "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg";
  }

  if (lower.includes("science")) {
    return "https://cdn.pixabay.com/photo/2017/02/01/22/02/science-2034110_1280.jpg";
  }

  if (lower.includes("business") || lower.includes("economics")) {
    return "https://cdn.pixabay.com/photo/2016/11/29/09/08/business-1868049_1280.jpg";
  }

  // default neutral education image
  return "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg";
}

/* --------------------------------------------------
   KEYWORD BUILDER (NO SINGLE WORDS)
--------------------------------------------------- */

function buildImageQuery(text: string): string {
  const keywords = extractTopKeywords(text);
  return keywords.join(" ");
}

function extractTopKeywords(text: string): string[] {
  const words = text
    .toLowerCase()
    .replace(/[.,!?":;()]/g, "")
    .split(/\s+/);

  const stopwords = new Set([
    "the","is","a","an","he","she","it","they","we","i",
    "and","or","but","in","on","at","to","for","of","with",
    "has","have","had","this","that","are","as","by","from","was",
    "like","many","few","small","medium","large"
  ]);

  const filtered = words.filter(
    (w) => !stopwords.has(w) && w.length > 3
  );

  const freq: Record<string, number> = {};
  filtered.forEach((w) => (freq[w] = (freq[w] || 0) + 1));

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word);
}

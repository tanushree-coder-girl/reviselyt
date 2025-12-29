import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function fetchImageForSummary(summaryText: string) {
  const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
  if (!PIXABAY_API_KEY) return null;

  const keyword = extractKeyword(summaryText);
  console.log(keyword)

  try {
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&per_page=3`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Pixabay API response status:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("Pixabay response data:", data);
    return data.hits?.[0]?.webformatURL || "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg";

  } catch (err) {
    console.error("Pixabay fetch error:", err);
    return null;
  }
}

function extractKeyword(text: string) {
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

  const filtered = words.filter(w => !stopwords.has(w) && w.length > 2);

  const freq: Record<string, number> = {};
  filtered.forEach(w => freq[w] = (freq[w] || 0) + 1);

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  console.log("Filtered words:", filtered);
  console.log("Keyword candidates:", sorted);

  return sorted[0]?.[0] || "topic"; // neutral fallback keyword
}


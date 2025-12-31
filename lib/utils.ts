import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* --------------------------------------------------
   TAILWIND UTILS
--------------------------------------------------- */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/* --------------------------------------------------
   IMAGE FETCH (GENERIC & SMART)
--------------------------------------------------- */

export async function fetchImageForSummary(text: string) {
  const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

  // safety fallback (env missing)
  if (!PIXABAY_API_KEY) {
    return getFallbackImage();
  }

  const query = extractSearchQuery(text);

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=photo&per_page=5&safesearch=true`
    );

    if (!response.ok) {
      return getFallbackImage();
    }

    const data = await response.json();

    return (
      data?.hits?.[0]?.webformatURL ||
      getFallbackImage()
    );
  } catch (err) {
    console.error("Pixabay fetch failed:", err);
    return getFallbackImage();
  }
}

/* --------------------------------------------------
   SMART QUERY EXTRACTION (CORE LOGIC)
--------------------------------------------------- */

function extractSearchQuery(text: string): string {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const stopwords = new Set([
    "the","is","a","an","and","or","but","in","on","at","to",
    "for","of","with","this","that","are","was","were","as",
    "by","from","it","we","they","you","i","has","have","had",
    "what","why","how","when","where","which"
  ]);

  const filtered = words.filter(
    (w) => w.length > 3 && !stopwords.has(w)
  );

  const freq: Record<string, number> = {};
  filtered.forEach((w) => {
    freq[w] = (freq[w] || 0) + 1;
  });

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word)
    .join(" ");
}

/* --------------------------------------------------
   SAFE FALLBACK IMAGE
--------------------------------------------------- */

function getFallbackImage(): string {
  return "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg";
}

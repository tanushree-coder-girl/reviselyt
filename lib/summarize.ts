import { pipeline } from "@xenova/transformers";

let summarizer: any;

function chunkText(text: string, size = 1200) {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

export async function summarizeText(text: string): Promise<string[]> {
  if (!text || text.length < 20) {
    throw new Error("Text too short");
  }

  if (!summarizer) {
    // summarizer = await pipeline(
    //   "summarization",
    //   "Xenova/distilbart-cnn-6-6"
    // );
    summarizer = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    );
  }

  let combined = "";

  for (const chunk of chunkText(text)) {
    const output = await summarizer(chunk, {
      max_length: 160,
      min_length: 60,
    });

    combined += " " + output[0].summary_text;
  }

  return combined
    .split(/(?<=\.)\s+/)
    .filter(s => s.length > 40)
    .slice(0, 8)
    .map(s => `• ${s.trim()}`);
}

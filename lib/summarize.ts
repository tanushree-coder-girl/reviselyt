import { pipeline } from "@xenova/transformers";

let summarizer: any;

function chunkText(text: string, size = 900) {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

export async function summarizeText(text: string): Promise<string[]> {
  console.log("Summarizing text of length:", text); 
  if (!text || text.length < 20) {
    throw new Error("Text too short to summarize");
  }

  if (!summarizer) {
    summarizer = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-6-6"
    );
  }

  let combined = "";

  // 1️⃣ Generate summary text
  for (const chunk of chunkText(text)) {
    const output = await summarizer(chunk, {
      max_length: 220,
      min_length: 80,
    });
    combined += " " + output[0].summary_text;
  }

  // 2️⃣ Generic normalization (NO topic assumptions)
  combined = combined
    .replace(/\s+/g, " ")
    .replace(/\.\.+/g, ".")
    .trim();

  // 3️⃣ Safe sentence splitting
  let bullets = combined
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(s =>
      s.length > 40 &&          // avoid broken fragments
      s.split(" ").length > 6 &&// avoid half sentences
      !s.toLowerCase().includes("summarize")
    )
    .map(s => `• ${s}`);

  // 4️⃣ Remove near-duplicate bullets (semantic-lite)
  bullets = bullets.filter(
    (b, i, arr) =>
      arr.findIndex(
        x => x.toLowerCase().slice(0, 60) === b.toLowerCase().slice(0, 60)
      ) === i
  );

  return bullets.slice(0, 8);
}

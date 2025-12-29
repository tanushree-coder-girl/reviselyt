const HF_URL =
  "https://router.huggingface.co/hf-inference/models/sshleifer/distilbart-cnn-12-6";

export async function summarizeWithHF(text: string) {
  const token = process.env.HF_API_TOKEN;

  if (!token) throw new Error("HF_API_TOKEN missing");

  const res = await fetch(HF_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: text,
      parameters: {
        max_length: 160,
        min_length: 60,
        do_sample: false,
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("HF ERROR RESPONSE:", data);
    throw new Error(data.error || "HF API failed");
  }

  if (!Array.isArray(data) || !data[0]?.summary_text) {
    console.error("HF INVALID RESPONSE:", data);
    throw new Error("Invalid HF response format");
  }

  return data[0].summary_text;
}

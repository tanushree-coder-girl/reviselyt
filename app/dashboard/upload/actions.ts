import { generateSummaryService, uploadDocumentService } from "@/lib/services";

export async function handleUploadDocument({
  title,
  file,
  text,
}: {
  title: string;
  file: File | null;
  text: string;
}) {
  if (!title || (!file && !text)) {
    throw new Error("Provide a title and either text or PDF.");
  }

  try {
    const document = await uploadDocumentService({ title, file, text });
    return document;
  } catch (error: any) {
    console.error("Upload failed:", error);
    throw new Error(error.message || "Failed to upload document");
  }
}

export async function handleSummarize({
  document_id,
  text
}: {
  document_id:any
  text:string
}) {

  const summary = await generateSummaryService(document_id, text);
  return { summary };
}

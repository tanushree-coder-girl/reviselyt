export const extractTextFromPDF = async (file: File): Promise<string> => {
  if (file.type !== "application/pdf") {
    throw new Error("Not a PDF file");
  }

  const arrayBuffer = await file.arrayBuffer();
  const typedArray = new Uint8Array(arrayBuffer);

  // @ts-ignore
  const pdf = await window.pdfjsLib.getDocument({ data: typedArray }).promise;

  let fullText = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    textContent.items.forEach((item: any) => {
      fullText += item.str + " ";
    });

    fullText += "\n\n";
  }

  return fullText.trim();
};

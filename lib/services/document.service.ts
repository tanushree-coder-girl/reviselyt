import { createClient } from "@/lib/supabase/client";

export async function uploadDocumentService({
  title,
  file,
  text,
}: {
  title: string;
  file: File | null;
  text: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("User not authenticated");
  }

  let file_url: string | null = null;
  let file_type: "pdf" | "text" = file ? "pdf" : "text";

  if (file) {
    const ext = file.name.split(".").pop();
    const filePath = `${user.id}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    file_url = filePath;
  }

  const { data, error } = await supabase
    .from("documents")
    .insert({
      user_id: user.id,
      title,
      content: file ? null : text,
      file_url,
      file_type,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

import { createClient } from "@/lib/supabase/server";

export default async function SummaryPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("summaries")
    .select("summary")
    .eq("document_id", params.id)
    .single();

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-xl font-bold">Quick Revision Summary</h1>
      <pre className="whitespace-pre-wrap text-sm">
        {data?.summary}
      </pre>
    </div>
  );
}

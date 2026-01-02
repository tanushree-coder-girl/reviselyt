"use client"
import Link from "next/link";
import { Eye, Trash2, FileText, AlignLeft } from "lucide-react";
import { deleteDocumentAction } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import TableLoader from "./TableLoader";

function DocumentsTable({ documents, isLoading }: { documents: any[], isLoading: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const openDeleteModal = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      setLoading(true);
      await deleteDocumentAction(selectedId);
      router.refresh()
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to delete document");
    } finally {
      setLoading(false);
      setSelectedId(null);
    }
  };


  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-base border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-5">Title</th>
            <th className="text-center p-5">Type</th>
            <th className="text-center p-5">Created</th>
            <th className="text-center p-5">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {isLoading ? <tr><td colSpan={5}><TableLoader /></td></tr> : <>
            {
              documents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-gray-600 text-base">
                    No documents yet. Let’s start uploading —{" "}
                    <Link
                      href="/dashboard/upload?mode=pdf"
                      className="text-purple-600 hover:underline"
                    >
                      upload a PDF
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/dashboard/upload?mode=text"
                      className="text-purple-600 hover:underline"
                    >
                      paste some text
                    </Link>
                    .
                  </td>
                </tr>
              ) : (
                documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50 transition">
                    <td className="p-5 font-medium text-gray-900">{doc.title}</td>
                    <td className="p-5 text-center flex items-center justify-center gap-2">
                      {doc.file_type === "pdf" ? (
                        <>
                          <FileText className="h-5 w-5 text-purple-600" />
                          <span>PDF</span>
                        </>
                      ) : (
                        <>
                          <AlignLeft className="h-5 w-5 text-blue-600" />
                          <span>Text</span>
                        </>
                      )}
                    </td>
                    <td className="p-5 text-center text-gray-700">
                      {new Date(doc.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-4">
                        {doc.summaries?.length > 0 && (
                          <>
                            <Link
                              href={`/dashboard/summarize/${doc.id}`}
                              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition"
                              title="View Summary"
                            >
                              <Eye size={20} />
                            </Link>

                            <button
                              onClick={() => openDeleteModal(doc.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={20} />
                            </button>

                            <DeleteConfirmModal
                              open={open}
                              onClose={() => !loading && setOpen(false)}
                              onConfirm={handleDelete}
                              loading={loading}
                            />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )
            } </>}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsTable;

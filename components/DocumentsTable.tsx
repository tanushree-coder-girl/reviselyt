import Link from "next/link";

function DocumentsTable({ documents }: { documents: any[] }) {
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
          {documents.length === 0 ? (
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      PDF
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Text
                    </>
                  )}
                </td>
                <td className="p-5 text-center text-gray-700">
                  {new Date(doc.created_at).toLocaleDateString()}
                </td>
                <td className="p-5 text-center">
                  {doc.summaries?.length > 0 ? (
                    <Link
                      href={`/dashboard/summarize/${doc.id}`}
                      className="text-purple-600 hover:underline font-medium"
                    >
                      View Summary →
                    </Link>
                  ) : (
                    <span className="text-gray-500 text-base">
                      No summary yet. Start by{" "}
                      <Link
                        href={`/dashboard/upload?mode=${doc.file_type}`}
                        className="text-purple-600 hover:underline"
                      >
                        uploading
                      </Link>{" "}
                      or{" "}
                      <Link
                        href={`/dashboard/upload?mode=${doc.file_type}`}
                        className="text-purple-600 hover:underline"
                      >
                        pasting text
                      </Link>
                      .
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsTable;

"use client";
import { useState } from "react";
import { getDashboardData } from "../actions";
import DocumentsTable from "./DocumentsTable";
import Pagination from "./Pagination";

export default function AllDocuments({ initialDocuments, totalPages, initialPage }: any) {
  const [documents, setDocuments] = useState(initialDocuments);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const fetchPage = async (p: number) => {
    setLoading(true);
    const data = await getDashboardData(p);
    setDocuments(data.documents);
    setPage(p);
    setLoading(false);
  };

  return (
    <div className="space-y-10">
      {<DocumentsTable documents={documents} isLoading={loading}  onDeleteSuccess={() => fetchPage(page)} />}
      <Pagination page={page} totalPages={totalPages} onPageChange={fetchPage} />
    </div>
  );
}

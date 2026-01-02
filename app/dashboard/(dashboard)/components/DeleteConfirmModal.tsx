"use client";

interface DeleteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  title?: string;
  message?: string;
}

export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
  loading = false,
  title = "Delete Document?",
  message = "This will permanently delete the document and its summary. This action cannot be undone.",
}: DeleteConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {message}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-full rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

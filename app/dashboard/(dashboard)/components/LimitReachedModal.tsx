"use client";

interface LimitReachedModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function LimitReachedModal({
  open,
  onClose,
  title,
  message,
}: LimitReachedModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

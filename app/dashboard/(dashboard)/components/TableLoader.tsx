"use client";

export default function TableLoader() {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 rounded-full bg-purple-600 animate-pulse opacity-75" />
        <span className="h-4 w-4 rounded-full bg-purple-600 animate-pulse opacity-50 [animation-delay:0.1s]" />
        <span className="h-4 w-4 rounded-full bg-purple-600 animate-pulse opacity-25 [animation-delay:0.2s]" />
      </div>
    </div>
  );
}

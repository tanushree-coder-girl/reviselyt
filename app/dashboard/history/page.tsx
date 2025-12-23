'use client';

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Your Summaries
        </h1>
        <p className="text-muted-foreground">
          View and revisit your previously generated summaries.
        </p>
      </div>

      {/* Filters (UI only) */}
      <div className="flex flex-wrap gap-3">
        <FilterBadge label="All" active />
        <FilterBadge label="Exam" />
        <FilterBadge label="Interview" />
        <FilterBadge label="Quick" />
      </div>

      {/* History List */}
      <div className="space-y-4">
        <HistoryCard
          title="Operating Systems"
          mode="Exam"
          date="2 days ago"
        />

        <HistoryCard
          title="Database Management Systems"
          mode="Interview"
          date="5 days ago"
        />

        <HistoryCard
          title="React Basics"
          mode="Quick"
          date="1 week ago"
        />
      </div>

      {/* Empty State (future use) */}
      {/* 
      <div className="text-center py-20 text-muted-foreground">
        No summaries yet. Upload a document to get started.
      </div> 
      */}
    </div>
  );
}

function HistoryCard({
  title,
  mode,
  date,
}: {
  title: string;
  mode: string;
  date: string;
}) {
  return (
    <div className="rounded-xl border p-5 hover:bg-muted transition cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {mode} mode · {date}
          </p>
        </div>

        <span className="text-xs rounded-full border px-3 py-1">
          View
        </span>
      </div>
    </div>
  );
}

function FilterBadge({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`cursor-pointer rounded-full border px-4 py-1 text-sm transition ${
        active
          ? 'bg-black text-white'
          : 'hover:bg-muted'
      }`}
    >
      {label}
    </span>
  );
}
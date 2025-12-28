import Link from "next/link";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode; // Updated from emoji
}

export default function DashboardCard({
  title,
  description,
  href,
  icon,
}: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border p-12 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold group-hover:underline">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {description}
      </p>
    </Link>
  );
}

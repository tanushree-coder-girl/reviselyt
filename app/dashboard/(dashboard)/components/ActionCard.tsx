"use client";

import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function DashboardCard({
  title,
  description,
  icon,
  disabled,
  onClick,
}: DashboardCardProps) {
  return (
    <div
      onClick={disabled ? onClick : undefined}
      className={`rounded-xl border p-12 transition cursor-pointer
         hover:bg-purple-50
      `}
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}

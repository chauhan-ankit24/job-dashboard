import { cn } from "@/lib/utils";
import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  variant: "jobs" | "applications" | "hired";
}

export function StatsCard({ title, value, icon, variant }: StatsCardProps) {
  const variantStyles = {
    jobs: {
      card: "bg-[#293369]",
      iconBg: "bg-white/20 text-white",
    },
    applications: {
      card: "bg-[#682938]",
      iconBg: "bg-white/20 text-white",
    },
    hired: {
      card: "bg-[#163235]",
      iconBg: "bg-white/20 text-white",
    },
  };

  return (
    <div
      className={cn(
        "relative rounded-xl p-6 shadow-sm overflow-hidden w-full",
        variantStyles[variant].card
      )}
    >
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-white/70">{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            variantStyles[variant].iconBg
          )}
        >
          {icon}
        </div>
      </div>
      {/* Decorative tilted icon */}
      <div className="absolute -bottom-14 right-6 opacity-20 transform -rotate-20">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-24 h-24 text-white",
          size: 96,
          strokeWidth: 1,
        })}
      </div>
    </div>
  );
}

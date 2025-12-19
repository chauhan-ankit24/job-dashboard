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
      iconBg: "bg-[#242C55] text-white",
    },
    applications: {
      card: "bg-[#682938]",
      iconBg: "bg-[#581D2B] text-white",
    },
    hired: {
      card: "bg-[#163235]",
      iconBg: "bg-[#0C2628] text-white",
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
          <p className="text-sm font-bold text-white/70">{title}</p>
          <p className="text-[32px] font-bold text-white mt-1">{value}</p>
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

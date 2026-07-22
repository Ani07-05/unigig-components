import * as React from "react";
import { cn } from "@/lib/utils";

const Stat = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap items-stretch rounded-xl border-[1.5px] border-ink bg-card",
        className
      )}
      {...props}
    />
  )
);
Stat.displayName = "Stat";

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  desc?: React.ReactNode;
}

const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ className, label, value, desc, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex-1 px-6 py-5 [&+&]:border-l [&+&]:border-dashed [&+&]:border-line",
        className
      )}
      {...props}
    >
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">{label}</div>
      <div className="font-display text-[28px] font-extrabold text-ink">{value}</div>
      {desc && <div className="mt-1 text-[12.5px] text-ink-soft">{desc}</div>}
    </div>
  )
);
StatItem.displayName = "StatItem";

export { Stat, StatItem };

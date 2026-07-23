import * as React from "react";
import { cn } from "@/lib/utils";

const Stat = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap items-stretch rounded-md border border-c-line bg-c-surface",
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
        "flex-1 px-7 py-6 [&+&]:border-l [&+&]:border-c-line",
        className
      )}
      {...props}
    >
      <div className="mb-1.5 font-corp-mono text-[11px] uppercase tracking-wide text-c-ink-soft">{label}</div>
      <div className="font-corp text-[28px] font-semibold text-c-ink">{value}</div>
      {desc && <div className="mt-1 text-[12.5px] text-c-ink-soft">{desc}</div>}
    </div>
  )
);
StatItem.displayName = "StatItem";

export { Stat, StatItem };

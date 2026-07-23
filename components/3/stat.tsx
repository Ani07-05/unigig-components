import * as React from "react";
import { cn } from "@/lib/utils";

const Stat = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap items-stretch rounded-md border border-dl-line bg-dl-surface shadow-dl-sm",
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
        "flex-1 px-7 py-6 [&+&]:border-l [&+&]:border-dashed [&+&]:border-dl-line",
        className
      )}
      {...props}
    >
      <div className="mb-1.5 font-ledger-mono text-[10.5px] uppercase tracking-wider text-dl-ink-soft">{label}</div>
      <div className="font-ledger-mono text-[28px] font-bold tracking-wide text-dl-accent">{value}</div>
      {desc && <div className="mt-1 font-ledger-mono text-[12px] tracking-wide text-dl-ink-soft">{desc}</div>}
    </div>
  )
);
StatItem.displayName = "StatItem";

export { Stat, StatItem };

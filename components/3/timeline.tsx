import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative pl-8", className)}>
      <div className="absolute bottom-2 left-[7px] top-2 w-px border-l border-dashed border-dl-line" />
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-dl-surface bg-dl-primary" />
            <div className="mb-1 font-ledger-mono text-[10.5px] uppercase tracking-wider text-dl-ink-soft">{item.time}</div>
            <div className="font-ledger italic text-[16px] text-dl-ink">{item.title}</div>
            {item.description && <div className="mt-0.5 font-ledger-mono text-[12.5px] tracking-wide text-dl-ink-soft">{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Timeline };

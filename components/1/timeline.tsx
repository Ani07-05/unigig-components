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
    <div className={cn("relative pl-7", className)}>
      <div className="absolute bottom-2 left-[7px] top-2 w-[1.5px] bg-ink" />
      <div className="flex flex-col gap-7">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-7 top-1 h-3.5 w-3.5 rounded-full border-2 border-ink bg-coral" />
            <div className="mb-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft">{item.time}</div>
            <div className="text-[14.5px] font-semibold text-ink">{item.title}</div>
            {item.description && <div className="mt-0.5 text-[13.5px] text-ink-soft">{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Timeline };

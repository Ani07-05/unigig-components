"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function ChevronIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

function Collapse({ title, children, defaultOpen = false, className }: CollapseProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("overflow-hidden rounded-xl border-[1.5px] border-ink bg-card", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[14.5px] font-semibold text-ink"
      >
        {title}
        <ChevronIcon className={cn("h-4 w-4 flex-shrink-0 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="border-t border-dashed border-line px-5 py-4 text-[14px] text-ink-soft">{children}</div>}
    </div>
  );
}

export { Collapse };

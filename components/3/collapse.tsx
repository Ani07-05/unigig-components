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
    <div className={cn("overflow-hidden rounded-md border border-dl-line bg-dl-surface", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left font-ledger italic text-[16px] text-dl-ink"
      >
        {title}
        <ChevronIcon className={cn("h-4 w-4 flex-shrink-0 text-dl-accent transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="border-t border-dl-line px-6 py-5 font-ledger-mono text-[13px] text-dl-ink-soft">{children}</div>}
    </div>
  );
}

export { Collapse };

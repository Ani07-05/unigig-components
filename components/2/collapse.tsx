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
    <div className={cn("overflow-hidden rounded-md border border-c-line bg-c-surface", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left text-[14.5px] font-semibold text-c-ink"
      >
        {title}
        <ChevronIcon className={cn("h-4 w-4 flex-shrink-0 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="border-t border-c-line px-6 py-5 text-[14px] text-c-ink-soft">{children}</div>}
    </div>
  );
}

export { Collapse };

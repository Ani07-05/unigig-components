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

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("overflow-hidden rounded-md border border-dl-line bg-dl-surface", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} className={cn(i > 0 && "border-t border-dl-line")}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left font-ledger italic text-[16px] text-dl-ink"
            >
              {item.title}
              <ChevronIcon
                className={cn("h-4 w-4 flex-shrink-0 text-dl-accent transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 font-ledger-mono text-[13px] leading-relaxed text-dl-ink-soft">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };

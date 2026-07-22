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
    <div className={cn("overflow-hidden rounded-xl border-[1.5px] border-ink bg-card", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} className={cn(i > 0 && "border-t border-dashed border-line")}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[14.5px] font-semibold text-ink"
            >
              {item.title}
              <ChevronIcon
                className={cn("h-4 w-4 flex-shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-[14px] text-ink-soft">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };

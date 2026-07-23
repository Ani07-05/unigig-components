"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="border-2 border-black">
      {items.map((item, i) => (
        <div key={i} className={cn("border-black", i > 0 && "border-t-2")}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-bold text-[14px] transition-colors hover:bg-[#ffe500]"
          >
            {item.title}
            <span className="ml-2 flex-shrink-0 font-black">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="border-t-2 border-black bg-white px-4 py-3 text-[13.5px] text-black/70">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

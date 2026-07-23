"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const [idx, setIdx] = React.useState(0);
  return (
    <div className="relative overflow-hidden border-2 border-black">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {items.map((item, i) => (
          <div key={i} className="min-w-full">{item}</div>
        ))}
      </div>
      <button onClick={() => setIdx(Math.max(0, idx - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 border-2 border-black bg-[#ffe500] px-3 py-1 text-sm font-black shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)] hover:shadow-[1px_1px_0_#000]">
        &larr;
      </button>
      <button onClick={() => setIdx(Math.min(items.length - 1, idx + 1))} className="absolute right-2 top-1/2 -translate-y-1/2 border-2 border-black bg-[#ffe500] px-3 py-1 text-sm font-black shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)] hover:shadow-[1px_1px_0_#000]">
        &rarr;
      </button>
    </div>
  );
}

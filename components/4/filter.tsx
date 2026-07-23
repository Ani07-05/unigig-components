"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Filter({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-0">
      {options.map((opt, i) => (
        <button key={opt} onClick={() => onChange(opt)} className={cn("border-2 border-black px-4 py-2 text-[12px] font-black uppercase tracking-wide border-r-0 last:border-r-2 first:border-r-2", i > 0 && "border-l-0 first:border-l-2", value === opt ? "bg-[#ffe500]" : "bg-white hover:bg-[#ffe500]/40")}>
          {opt}
        </button>
      ))}
    </div>
  );
}

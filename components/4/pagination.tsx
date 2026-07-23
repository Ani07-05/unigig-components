"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Pagination({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (p: number) => void }) {
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => Math.max(1, page - 2) + i).filter(p => p <= totalPages);
  return (
    <div className="flex items-center gap-0">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="border-2 border-black px-3 py-2 font-black disabled:opacity-30 hover:bg-[#ffe500]">←</button>
      {pages.map(p => (
        <button key={p} onClick={() => onPageChange(p)} className={cn("border-y-2 border-r-2 border-black px-4 py-2 font-bold first:border-l-2 text-[13px]", p === page ? "bg-[#ffe500]" : "bg-white hover:bg-[#ffe500]/40")}>{p}</button>
      ))}
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="border-2 border-l-0 border-black px-3 py-2 font-black disabled:opacity-30 hover:bg-[#ffe500]">→</button>
    </div>
  );
}

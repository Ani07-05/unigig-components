"use client";
import * as React from "react";

export function Search({ placeholder = "Search...", onSearch }: { placeholder?: string; onSearch?: (v: string) => void }) {
  return (
    <div className="flex border-2 border-black shadow-[3px_3px_0_#000]">
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="flex-1 bg-white px-4 py-2 text-sm font-medium placeholder:text-black/40 outline-none"
      />
      <button className="border-l-2 border-black bg-[#ffe500] px-4 py-2 text-sm font-black uppercase tracking-wider hover:bg-black hover:text-[#ffe500] transition-colors">
        Search
      </button>
    </div>
  );
}

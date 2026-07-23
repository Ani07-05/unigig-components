"use client";
import * as React from "react";
export function Rating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <button key={i} onClick={() => onChange?.(i)} className={`text-[22px] font-black ${i <= value ? "text-[#ffe500] [text-shadow:1px_1px_0_#000]" : "text-black/20"}`}>★</button>
      ))}
    </div>
  );
}

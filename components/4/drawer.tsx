"use client";
import * as React from "react";
export function Drawer({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={() => onOpenChange(false)} />
      <div className="relative h-full w-80 border-l-2 border-black bg-white p-7 shadow-[-6px_0_0_#000]">
        <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 border-2 border-black bg-white px-2 py-0.5 font-black hover:bg-[#ffe500]">✕</button>
        {children}
      </div>
    </div>
  );
}

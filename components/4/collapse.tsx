"use client";
import * as React from "react";
export function Collapse({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-2 border-black">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-3 font-bold text-[14px] hover:bg-[#ffe500]">
        {title}<span className="font-black">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="border-t-2 border-black px-4 py-3 text-[13.5px] text-black/70">{children}</div>}
    </div>
  );
}

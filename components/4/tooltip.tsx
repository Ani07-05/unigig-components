"use client";
import * as React from "react";
export function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
  const [show, setShow] = React.useState(false);
  return (
    <span className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <span className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 border-2 border-black bg-[#ffe500] px-2.5 py-1 text-[11px] font-black uppercase whitespace-nowrap shadow-[2px_2px_0_#000]">{content}</span>}
    </span>
  );
}

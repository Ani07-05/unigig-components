"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Dock({ items }: { items: { icon: React.ReactNode; label: string; onClick?: () => void }[] }) {
  return (
    <div className="inline-flex items-end gap-2 border-2 border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000]">
      {items.map((item) => (
        <button key={item.label} onClick={item.onClick} title={item.label}
          className="group flex flex-col items-center gap-1 hover:-translate-y-2 transition-transform duration-150">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#ffe500] shadow-[2px_2px_0_#000] group-hover:shadow-[3px_3px_0_#000]">
            {item.icon}
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

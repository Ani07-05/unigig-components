"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Toggle({ defaultChecked, checked, onChange }: { defaultChecked?: boolean; checked?: boolean; onChange?: (v: boolean) => void }) {
  const [on, setOn] = React.useState(checked ?? defaultChecked ?? false);
  const val = checked !== undefined ? checked : on;
  return (
    <button
      role="switch"
      aria-checked={val}
      onClick={() => { setOn(!val); onChange?.(!val); }}
      className={cn("relative inline-flex h-7 w-12 border-2 border-black transition-colors", val ? "bg-[#ffe500]" : "bg-white")}
    >
      <span className={cn("absolute top-0.5 h-4 w-4 border-2 border-black bg-black transition-transform", val ? "translate-x-[22px]" : "translate-x-0.5")} />
    </button>
  );
}

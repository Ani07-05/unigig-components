"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
const styles = { success: "bg-[#ffe500] text-black border-black", error: "bg-[#ff2d78] text-white border-black", info: "bg-white text-black border-black" };
export function Toast({ variant = "info", onDismiss, children }: { variant?: "success" | "error" | "info"; onDismiss?: () => void; children: React.ReactNode }) {
  return (
    <div className={cn("flex items-center justify-between gap-4 border-2 px-4 py-3 shadow-[4px_4px_0_#000] text-[13px] font-bold", styles[variant])}>
      <span>{children}</span>
      {onDismiss && <button onClick={onDismiss} className="font-black text-[16px] leading-none opacity-60 hover:opacity-100">✕</button>}
    </div>
  );
}

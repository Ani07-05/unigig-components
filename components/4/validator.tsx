import * as React from "react";
import { cn } from "@/lib/utils";

export function Validator({ variant = "error", children, className }: { variant?: "error" | "success"; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[12px] font-bold", variant === "error" ? "text-[#ff2d78]" : "text-black", className)}>
      {variant === "error" ? "✕ " : "✓ "}{children}
    </p>
  );
}

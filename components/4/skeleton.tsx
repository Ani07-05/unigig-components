import * as React from "react";
import { cn } from "@/lib/utils";
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse border-2 border-black bg-[#ffe500]/40", className)} />;
}

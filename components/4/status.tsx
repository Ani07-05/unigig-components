import * as React from "react";
import { cn } from "@/lib/utils";
const colors = { online: "bg-[#ffe500]", busy: "bg-[#ff2d78]", away: "bg-black", offline: "bg-white border-2 border-black" };
export function Status({ variant = "online", pulse }: { variant?: "online" | "busy" | "away" | "offline"; pulse?: boolean }) {
  return <span className={cn("inline-block h-3 w-3", colors[variant], pulse && "animate-pulse")} />;
}

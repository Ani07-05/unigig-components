import * as React from "react";
import { cn } from "@/lib/utils";
const shapes = { circle: "rounded-none", hexagon: "rounded-none", square: "" };
export function Mask({ shape = "circle", className, children }: { shape?: keyof typeof shapes; className?: string; children?: React.ReactNode }) {
  return <div className={cn("overflow-hidden border-2 border-black", shape === "circle" ? "rounded-none" : "", className)}>{children}</div>;
}

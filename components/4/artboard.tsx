import * as React from "react";
import { cn } from "@/lib/utils";
const sizes = { phone: "w-[320px] h-[568px]", tablet: "w-[768px] h-[512px]", desktop: "w-full h-[400px]" };
export function Artboard({ size = "phone", className, children }: { size?: keyof typeof sizes; className?: string; children?: React.ReactNode }) {
  return <div className={cn("border-2 border-black bg-white shadow-[4px_4px_0_#000]", sizes[size], className)}>{children}</div>;
}

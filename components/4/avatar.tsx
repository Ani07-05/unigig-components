import * as React from "react";
import { cn } from "@/lib/utils";

const sizeMap = { sm: "h-7 w-7 text-[10px]", md: "h-9 w-9 text-[12px]", lg: "h-12 w-12 text-[14px]" };

export function Avatar({ src, alt, fallback, size = "md", className }: {
  src?: string; alt?: string; fallback?: string; size?: "sm" | "md" | "lg"; className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center justify-center border-2 border-black bg-[#ffe500] font-bold text-black", sizeMap[size], className)}>
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : <span>{fallback}</span>}
    </div>
  );
}

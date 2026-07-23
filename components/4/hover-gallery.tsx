"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function HoverGallery({ items }: { items: { src: string; alt: string }[] }) {
  const [active, setActive] = React.useState<number | null>(null);
  return (
    <div className="flex gap-2">
      {items.map((item, i) => (
        <div key={i} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
          className={cn("overflow-hidden border-2 border-black transition-all duration-300 cursor-pointer", active === i ? "flex-[3]" : "flex-1")}>
          <img src={item.src} alt={item.alt} className="h-40 w-full object-cover" />
        </div>
      ))}
    </div>
  );
}

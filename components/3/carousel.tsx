"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function ArrowIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

function Carousel({ items, className }: CarouselProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  function scrollToIndex(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
    setActive(i);
  }

  function go(delta: number) {
    const next = Math.max(0, Math.min(items.length - 1, active + delta));
    scrollToIndex(next);
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start shrink-0">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-dl-line bg-dl-surface text-dl-ink [&_svg]:h-4 [&_svg]:w-4"
        >
          <ArrowIcon className="rotate-180" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full border border-dl-line transition-colors",
                i === active ? "bg-dl-accent" : "bg-transparent"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-dl-line bg-dl-surface text-dl-ink [&_svg]:h-4 [&_svg]:w-4"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

export { Carousel };

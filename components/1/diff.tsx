"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DiffProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

function Diff({ before, after, className }: DiffProps) {
  const [pos, setPos] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  React.useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-hidden rounded-2xl border-[1.5px] border-ink bg-card",
        className
      )}
    >
      <div className="pointer-events-none">{after}</div>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {before}
      </div>
      <div
        className="absolute inset-y-0 z-10 flex w-0 -translate-x-1/2 cursor-ew-resize items-center justify-center"
        style={{ left: `${pos}%` }}
        onPointerDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
      >
        <div className="h-full w-[3px] bg-ink" />
        <div className="absolute flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink bg-card shadow-flat">
          <div className="flex gap-[3px]">
            <span className="h-4 w-[2px] bg-ink" />
            <span className="h-4 w-[2px] bg-ink" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Diff };

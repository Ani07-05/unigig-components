"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Hover3DCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
}

function Hover3DCard({ className, children, maxTilt = 12, style, ...props }: Hover3DCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - py) * 2 * maxTilt;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  function handleMouseLeave() {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, ...style }}
      className={cn(
        "rounded-md border border-dl-line bg-dl-surface p-7 shadow-dl transition-transform duration-150 ease-out will-change-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Hover3DCard };

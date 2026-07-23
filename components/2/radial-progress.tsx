import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadialProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
}

function RadialProgress({
  className,
  value,
  max = 100,
  size = 96,
  strokeWidth = 8,
  ...props
}: RadialProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct / 100);
  const center = size / 2;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--c-bg-2)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--c-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300 ease-out"
        />
      </svg>
      <span className="absolute font-corp-mono text-[14px] font-semibold text-c-ink">
        {Math.round(pct)}%
      </span>
    </div>
  );
}

export { RadialProgress };

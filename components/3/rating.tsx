"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function StarIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l2.7 5.9 6.3.6-4.8 4.2 1.4 6.3-5.6-3.4-5.6 3.4 1.4-6.3-4.8-4.2 6.3-.6Z" />
    </svg>
  );
}

export interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
  className?: string;
}

function Rating({ value, onChange, max = 5, readOnly = false, className }: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  return (
    <div
      className={cn("inline-flex items-center gap-1 text-dl-accent", className)}
      onMouseLeave={() => setHoverValue(null)}
      role="radiogroup"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          aria-checked={star === value}
          role="radio"
          className={cn(
            "outline-none",
            !readOnly && "cursor-pointer focus-visible:ring-2 focus-visible:ring-dl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dl-bg"
          )}
          onMouseEnter={() => !readOnly && setHoverValue(star)}
          onClick={() => !readOnly && onChange?.(star)}
        >
          <StarIcon filled={star <= displayValue} className="h-5 w-5" />
        </button>
      ))}
      <span className="ml-1.5 font-ledger-mono text-[12px] tracking-wide text-dl-ink-soft">{value}/{max}</span>
    </div>
  );
}

export { Rating };

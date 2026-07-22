"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const filterPillVariants = cva(
  "rounded-full border-[1.5px] border-ink px-4 py-2 text-[13.5px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      selected: {
        true: "bg-ink text-cream",
        false: "bg-transparent text-ink hover:bg-cream-2",
      },
    },
    defaultVariants: { selected: false },
  }
);

export interface FilterProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

function Filter({ options, value, onChange, className }: FilterProps) {
  const [internalValue, setInternalValue] = React.useState(options[0]);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="radiogroup">
      {options.map((option) => {
        const selected = option === activeValue;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            className={cn(filterPillVariants({ selected }))}
            onClick={() => {
              if (!isControlled) setInternalValue(option);
              onChange?.(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export { Filter, filterPillVariants };

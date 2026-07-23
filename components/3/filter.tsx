"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const filterPillVariants = cva(
  "rounded-[3px] border border-dl-line px-5 py-2.5 font-ledger-mono text-[12px] font-semibold uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-dl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dl-bg",
  {
    variants: {
      selected: {
        true: "border-dl-primary-dark bg-dl-primary text-dl-ink",
        false: "bg-transparent text-dl-ink hover:bg-dl-bg-2",
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
    <div className={cn("flex flex-wrap gap-2.5", className)} role="radiogroup">
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

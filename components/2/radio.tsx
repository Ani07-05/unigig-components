"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex cursor-pointer items-center",
          disabled && "cursor-not-allowed opacity-45"
        )}
      >
        <input ref={ref} type="radio" disabled={disabled} className="peer sr-only" {...props} />
        <span
          className={cn(
            "relative flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-c-line bg-c-surface transition-colors",
            "after:h-2.5 after:w-2.5 after:scale-0 after:rounded-full after:bg-c-primary after:transition-transform",
            "peer-checked:border-c-primary peer-checked:after:scale-100",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-c-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-c-bg",
            className
          )}
        />
      </label>
    );
  }
);
Radio.displayName = "Radio";

export { Radio };

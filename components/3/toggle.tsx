"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, checked, defaultChecked, onChange, disabled, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(!!defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    return (
      <label
        className={cn(
          "inline-flex cursor-pointer items-center",
          disabled && "cursor-not-allowed opacity-45"
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={(e) => {
            if (!isControlled) setInternalChecked(e.target.checked);
            onChange?.(e);
          }}
          className="peer sr-only"
          {...props}
        />
        <span
          className={cn(
            "relative flex h-6 w-11 flex-shrink-0 items-center rounded-[3px] border border-dl-line bg-dl-surface transition-colors",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-dl-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-dl-bg",
            isChecked && "bg-dl-primary",
            className
          )}
        >
          <span
            className={cn(
              "ml-[3px] h-[18px] w-[18px] rounded-[2px] border border-dl-line bg-dl-ink transition-transform",
              isChecked && "translate-x-[20px] border-dl-primary-dark bg-dl-accent"
            )}
          />
        </span>
      </label>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle };

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/2/icons";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
            "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-c-line bg-c-surface text-white transition-colors",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-c-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-c-surface",
            isChecked && "border-c-primary bg-c-primary",
            className
          )}
        >
          {isChecked && <CheckIcon className="h-3.5 w-3.5" />}
        </span>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

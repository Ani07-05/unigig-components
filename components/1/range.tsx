import * as React from "react";
import { cn } from "@/lib/utils";

export interface RangeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      className={cn(
        "h-[6px] w-full cursor-pointer appearance-none rounded-full bg-line outline-none",
        "focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-ink [&::-webkit-slider-thumb]:bg-cream",
        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[1.5px] [&::-moz-range-thumb]:border-ink [&::-moz-range-thumb]:bg-cream",
        className
      )}
      {...props}
    />
  )
);
Range.displayName = "Range";

export { Range };

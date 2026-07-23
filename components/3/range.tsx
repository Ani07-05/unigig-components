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
        "h-[6px] w-full cursor-pointer appearance-none rounded-sm bg-dl-line outline-none",
        "focus-visible:ring-2 focus-visible:ring-dl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dl-bg",
        "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-dl-primary-dark [&::-webkit-slider-thumb]:bg-dl-accent",
        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-dl-primary-dark [&::-moz-range-thumb]:bg-dl-accent",
        className
      )}
      {...props}
    />
  )
);
Range.displayName = "Range";

export { Range };

import * as React from "react";
import { cn } from "@/lib/utils";

function ChevronDownIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "w-full appearance-none rounded-[10px] border-[1.5px] border-ink bg-card px-3.5 py-3 pr-10 text-[15px] text-ink",
          "outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink" />
    </div>
  )
);
Select.displayName = "Select";

export { Select };

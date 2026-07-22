import * as React from "react";
import { cn } from "@/lib/utils";

/** Boxed field - for forms someone is actively filling out (Post a gig). */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-[10px] border-[1.5px] border-ink bg-card px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-soft/60",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

/**
 * Receipt-row input - for a value that's already known and just needs
 * confirming (Log in). Label sits left, value right-aligned in mono,
 * no visible box, dashed underline instead.
 */
export interface ReceiptInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ReceiptInput = React.forwardRef<HTMLInputElement, ReceiptInputProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex items-center justify-between gap-3.5 border-b border-dashed border-line py-3">
      <label htmlFor={id} className="font-mono text-[13.5px] text-ink-soft">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={cn(
          "min-w-0 flex-1 border-none bg-transparent text-right font-mono text-[14.5px] font-bold text-ink outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
);
ReceiptInput.displayName = "ReceiptInput";

export { Input, ReceiptInput };

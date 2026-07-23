import * as React from "react";
import { cn } from "@/lib/utils";

/** Boxed field - for forms someone is actively filling out (Post a gig). */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-dl-line bg-dl-surface px-4 py-3 font-ledger-mono text-[14px] tracking-wide text-dl-ink placeholder:text-dl-ink-soft/60",
        "outline-none focus-visible:ring-2 focus-visible:ring-dl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dl-surface",
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
 * solid underline instead of a visible box.
 */
export interface ReceiptInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ReceiptInput = React.forwardRef<HTMLInputElement, ReceiptInputProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex items-center justify-between gap-4 border-b border-dl-line py-3.5">
      <label htmlFor={id} className="font-ledger-mono text-[12.5px] tracking-wide text-dl-ink-soft">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={cn(
          "min-w-0 flex-1 border-none bg-transparent text-right font-ledger-mono text-[14px] font-semibold tracking-wide text-dl-ink outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
);
ReceiptInput.displayName = "ReceiptInput";

export { Input, ReceiptInput };

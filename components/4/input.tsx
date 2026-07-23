import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-[4px] border-2 border-black bg-white px-4 py-2.5 text-[14.5px] text-black placeholder:text-black/30",
        "outline-none transition-shadow focus:shadow-[4px_4px_0_#000]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

const LabeledInput = React.forwardRef<HTMLInputElement, LabeledInputProps>(
  ({ label, hint, id, className, ...props }, ref) => (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-[13px] font-bold uppercase tracking-wide text-black">
          {label}
        </label>
        {hint && <span className="text-[11px] text-black/50">{hint}</span>}
      </div>
      <Input ref={ref} id={id} className={className} {...props} />
    </div>
  )
);
LabeledInput.displayName = "LabeledInput";

export { Input, LabeledInput };

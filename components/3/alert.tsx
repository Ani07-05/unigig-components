import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// In this ledger's ink logic: brass = neutral / affirmative stamp,
// oxblood = flagged / corrected entry.
const alertVariants = cva(
  "flex w-full items-start gap-4 rounded-md border p-5 font-ledger-mono text-[13px]",
  {
    variants: {
      variant: {
        info: "border-dl-accent/50 bg-dl-accent-soft text-dl-ink [&_.alert-icon]:text-dl-accent",
        success: "border-dl-accent bg-dl-accent-soft text-dl-ink [&_.alert-icon]:text-dl-accent",
        warning: "border-dl-primary/60 bg-dl-primary-soft text-dl-ink [&_.alert-icon]:text-dl-primary",
        error: "border-dl-primary bg-dl-primary-soft text-dl-ink [&_.alert-icon]:text-dl-primary",
      },
    },
    defaultVariants: { variant: "info" },
  }
);

function InfoIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function SuccessIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5 5-6" />
    </svg>
  );
}

function WarningIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <line x1="12" y1="10" x2="12" y2="14.5" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ErrorIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
}

function CloseIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

const iconByVariant = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
} as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  onDismiss?: () => void;
}

function Alert({ className, variant, children, onDismiss, ...props }: AlertProps) {
  const Icon = iconByVariant[variant ?? "info"];
  return (
    <div className={cn(alertVariants({ variant, className }))} {...props}>
      <Icon className="alert-icon mt-0.5 h-5 w-5 flex-shrink-0" />
      <div className="min-w-0 flex-1 tracking-wide">{children}</div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="-m-1 flex-shrink-0 rounded p-1 text-dl-ink-soft transition-colors hover:bg-dl-primary hover:text-dl-ink"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { Alert, alertVariants };

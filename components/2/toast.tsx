"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toastVariants = cva("[&_.toast-icon]:text-c-ink", {
  variants: {
    variant: {
      info: "[&_.toast-icon]:text-c-primary",
      success: "[&_.toast-icon]:text-c-cyan",
      warning: "[&_.toast-icon]:text-c-yellow",
      error: "[&_.toast-icon]:text-c-magenta",
    },
  },
  defaultVariants: { variant: "info" },
});

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

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  onDismiss?: () => void;
  duration?: number;
}

function Toast({
  className,
  variant,
  children,
  onDismiss,
  duration = 4000,
  ...props
}: ToastProps) {
  const [mounted, setMounted] = React.useState(false);
  const Icon = iconByVariant[variant ?? "info"];

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  React.useEffect(() => {
    if (!onDismiss || duration <= 0) return;
    const timer = setTimeout(() => onDismiss(), duration);
    return () => clearTimeout(timer);
  }, [onDismiss, duration]);

  return (
    <div
      className={cn(
        "flex w-full max-w-sm items-center gap-4 rounded-lg border border-c-line bg-c-surface p-5 text-[14.5px] shadow-c transition-all duration-300 ease-out",
        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        toastVariants({ variant, className })
      )}
      {...props}
    >
      <Icon className="toast-icon h-5 w-5 flex-shrink-0" />
      <div className="min-w-0 flex-1">{children}</div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="-m-1.5 flex-shrink-0 rounded p-1.5 text-c-ink-soft transition-colors hover:bg-c-primary hover:text-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { Toast, toastVariants };

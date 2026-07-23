"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function Modal({ open, onOpenChange, children, className }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
      <div className="absolute inset-0" onClick={() => onOpenChange(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full max-w-md rounded-md border border-dl-line bg-dl-surface p-7 shadow-dl",
          className
        )}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-[3px] border border-dl-line bg-dl-bg text-dl-ink transition-colors hover:bg-dl-primary hover:text-dl-ink"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export interface ModalTriggerProps {
  trigger: React.ReactNode | ((open: () => void) => React.ReactNode);
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
  className?: string;
}

function ModalTrigger({ trigger, children, className }: ModalTriggerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {typeof trigger === "function" ? trigger(() => setOpen(true)) : (
        <span onClick={() => setOpen(true)}>{trigger}</span>
      )}
      <Modal open={open} onOpenChange={setOpen} className={className}>
        {typeof children === "function" ? children(() => setOpen(false)) : children}
      </Modal>
    </>
  );
}

export { Modal, ModalTrigger };

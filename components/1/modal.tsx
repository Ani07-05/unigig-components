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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="absolute inset-0" onClick={() => onOpenChange(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full max-w-md rounded-2xl border-[1.5px] border-ink bg-card p-6 shadow-flat",
          className
        )}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-ink bg-card text-ink transition-colors hover:bg-ink hover:text-cream"
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

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

function useDropdown() {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown components must be used inside <Dropdown>");
  return ctx;
}

export interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

function Dropdown({ children, className }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn("relative inline-block", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { open, setOpen } = useDropdown();
    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={open}
        onClick={(e) => {
          onClick?.(e);
          setOpen(!open);
        }}
        className={cn(
          "inline-flex items-center gap-2 rounded-[3px] border border-dl-line bg-dl-surface px-6 py-3.5 font-ledger-mono text-[13px] font-semibold uppercase tracking-wide text-dl-ink transition-colors hover:border-dl-primary-dark hover:bg-dl-primary hover:text-dl-ink",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
DropdownTrigger.displayName = "DropdownTrigger";

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "right";
}

function DropdownContent({ className, align = "left", children, ...props }: DropdownContentProps) {
  const { open } = useDropdown();
  if (!open) return null;
  return (
    <div
      className={cn(
        "absolute z-50 mt-1.5 min-w-[180px] overflow-hidden rounded-md border border-dl-line bg-dl-surface shadow-dl",
        align === "right" ? "right-0" : "left-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { setOpen } = useDropdown();
    return (
      <button
        ref={ref}
        type="button"
        onClick={(e) => {
          onClick?.(e);
          setOpen(false);
        }}
        className={cn(
          "flex w-full items-center gap-2.5 px-5 py-3.5 text-left font-ledger-mono text-[13px] font-semibold tracking-wide text-dl-ink hover:bg-dl-bg-2 active:bg-dl-primary-soft",
          "border-b border-dl-line last:border-b-0",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
DropdownItem.displayName = "DropdownItem";

export { Dropdown, DropdownTrigger, DropdownContent, DropdownItem };

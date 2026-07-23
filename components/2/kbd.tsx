import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-[24px] items-center justify-center rounded border border-c-line bg-c-surface px-2 py-1 font-corp-mono text-[12px] font-semibold text-c-ink shadow-c-sm",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export { Kbd };

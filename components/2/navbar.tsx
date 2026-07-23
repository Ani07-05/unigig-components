import * as React from "react";
import { cn } from "@/lib/utils";

export interface NavbarProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
}

function Navbar({ start, center, end, className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between border-b border-c-line bg-c-surface px-7 py-4.5",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-4">{start}</div>
      {center && <div className="flex flex-1 items-center justify-center gap-4">{center}</div>}
      <div className="flex flex-1 items-center justify-end gap-4">{end}</div>
    </nav>
  );
}

export { Navbar };

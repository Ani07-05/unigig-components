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
        "flex w-full items-center justify-between border-b-[1.5px] border-ink bg-cream px-6 py-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-3">{start}</div>
      {center && <div className="flex flex-1 items-center justify-center gap-3">{center}</div>}
      <div className="flex flex-1 items-center justify-end gap-3">{end}</div>
    </nav>
  );
}

export { Navbar };

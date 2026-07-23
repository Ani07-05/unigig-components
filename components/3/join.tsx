import * as React from "react";
import { cn } from "@/lib/utils";

export interface JoinProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}

function Join({ className, orientation = "horizontal", children, ...props }: JoinProps) {
  return (
    <div
      className={cn(
        "inline-flex",
        orientation === "horizontal"
          ? "flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-[3px] [&>*:last-child]:rounded-r-[3px] [&>*:not(:first-child)]:border-l-0"
          : "flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-[3px] [&>*:last-child]:rounded-b-[3px] [&>*:not(:first-child)]:border-t-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Join };

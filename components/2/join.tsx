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
          ? "flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:border-l-0"
          : "flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:border-t-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Join };

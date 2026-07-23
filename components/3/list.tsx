import * as React from "react";
import { cn } from "@/lib/utils";

const List = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("overflow-hidden rounded-md border border-dl-line bg-dl-surface", className)}
      {...props}
    />
  )
);
List.displayName = "List";

export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, leading, title, subtitle, trailing, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4 px-5 py-3.5 [&+&]:border-t [&+&]:border-dl-line",
        className
      )}
      {...props}
    >
      {leading && <div className="flex-shrink-0">{leading}</div>}
      <div className="min-w-0 flex-1">
        <div className="truncate font-ledger italic text-[15.5px] text-dl-ink">{title}</div>
        {subtitle && <div className="truncate font-ledger-mono text-xs tracking-wide text-dl-ink-soft">{subtitle}</div>}
      </div>
      {trailing && <div className="flex-shrink-0">{trailing}</div>}
    </div>
  )
);
ListItem.displayName = "ListItem";

export { List, ListItem };

import * as React from "react";
import { cn } from "@/lib/utils";

const List = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("overflow-hidden rounded-xl border-[1.5px] border-ink bg-card", className)}
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
        "flex items-center gap-3 px-4 py-3 [&+&]:border-t [&+&]:border-dashed [&+&]:border-line",
        className
      )}
      {...props}
    >
      {leading && <div className="flex-shrink-0">{leading}</div>}
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14.5px] font-semibold text-ink">{title}</div>
        {subtitle && <div className="truncate font-mono text-xs text-ink-soft">{subtitle}</div>}
      </div>
      {trailing && <div className="flex-shrink-0">{trailing}</div>}
    </div>
  )
);
ListItem.displayName = "ListItem";

export { List, ListItem };

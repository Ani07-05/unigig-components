import * as React from "react";
import { cn } from "@/lib/utils";

export interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface DockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  items: DockItem[];
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-c-line bg-c-surface px-4 py-3 shadow-c",
          className
        )}
        {...props}
      >
        {items.map((item, i) => (
          <button
            key={`${item.label}-${i}`}
            type="button"
            onClick={item.onClick}
            aria-label={item.label}
            aria-current={item.active ? "true" : undefined}
            className={cn(
              "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border transition-transform duration-150 ease-out hover:-translate-y-1 hover:scale-110 [&_svg]:h-5 [&_svg]:w-5",
              item.active
                ? "border-c-primary bg-c-primary text-white"
                : "border-transparent text-c-ink hover:border-c-line hover:bg-c-bg-2"
            )}
          >
            {item.icon}
          </button>
        ))}
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock };

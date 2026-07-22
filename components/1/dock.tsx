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
          "fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border-[1.5px] border-ink bg-card px-3 py-2.5 shadow-flat",
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
              "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border-[1.5px] transition-transform duration-150 ease-out hover:-translate-y-1 hover:scale-110 [&_svg]:h-5 [&_svg]:w-5",
              item.active
                ? "border-ink bg-ink text-cream"
                : "border-transparent text-ink hover:border-ink hover:bg-cream-2"
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

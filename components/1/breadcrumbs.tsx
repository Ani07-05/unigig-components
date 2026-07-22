import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

function ChevronIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)} {...props}>
      <ol className="flex items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronIcon className="h-3.5 w-3.5 flex-shrink-0 text-ink-soft" />
              )}
              {!isLast && item.href ? (
                <NextLink
                  href={item.href}
                  className="font-mono text-[13px] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </NextLink>
              ) : (
                <span
                  className={cn(
                    "font-mono text-[13px]",
                    isLast ? "font-bold text-ink" : "text-ink-soft"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumbs };

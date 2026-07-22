import * as React from "react";
import { cn } from "@/lib/utils";

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function ChevronIcon({ direction, ...props }: { direction: "left" | "right" } & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

function getPageList(page: number, totalPages: number): (number | "ellipsis")[] {
  const pages = new Set<number>([1, totalPages, page]);
  if (page - 1 >= 1) pages.add(page - 1);
  if (page + 1 <= totalPages) pages.add(page + 1);

  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(sorted[i]);
  }
  return result;
}

function Pagination({ page, totalPages, onPageChange, className, ...props }: PaginationProps) {
  const pageList = getPageList(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-transparent transition-colors hover:bg-cream-2 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronIcon direction="left" className="h-4 w-4" />
      </button>

      {pageList.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center font-mono text-[13px] text-ink-soft"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-current={p === page ? "page" : undefined}
            onClick={() => onPageChange(p)}
            className={cn(
              "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold transition-colors",
              p === page
                ? "bg-ink text-cream"
                : "border-[1.5px] border-ink bg-transparent hover:bg-cream-2"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        aria-label="Next page"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-transparent transition-colors hover:bg-cream-2 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronIcon direction="right" className="h-4 w-4" />
      </button>
    </nav>
  );
}

export { Pagination };

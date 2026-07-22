import * as React from "react";
import { cn } from "@/lib/utils";

/** Base card - every card in the app is this plus more structure. */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-card border-[1.5px] border-ink bg-card", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

/** Small stat block - mono label above a large Cabinet Grotesk number. */
function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="w-[170px] p-5">
      <span className="mb-2 block font-mono text-xs text-ink-soft">{label}</span>
      <b className="font-display text-[26px] font-extrabold">{value}</b>
    </Card>
  );
}

/** List row for buyer/seller dashboards - icon, title + meta, tag, price. */
function GigRow({
  icon,
  title,
  meta,
  price,
  tag,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  price: string;
  tag?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <Card className="flex w-full max-w-[520px] items-center gap-4 p-4">
      <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-ink bg-cream [&_svg]:h-[22px] [&_svg]:w-[22px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold">{title}</div>
        <div className="font-mono text-xs text-ink-soft">{meta}</div>
      </div>
      {tag}
      <div className="whitespace-nowrap font-mono text-[15px] font-bold">{price}</div>
      {action}
    </Card>
  );
}

/** Dashed-border, mono-type breakdown - used anywhere money needs an itemized receipt. */
function ReceiptCard({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
}) {
  return (
    <div className="max-w-[300px] rounded-xl border-[1.5px] border-dashed border-ink bg-cream p-[22px] font-mono text-[13.5px]">
      <div className="mb-3.5 text-[11px] uppercase tracking-wide text-ink-soft">{title}</div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={cn(
            "flex justify-between py-2",
            i < rows.length - 1 && "border-b border-dashed border-line",
            row.emphasis && "pt-3 font-bold"
          )}
        >
          <span className={row.emphasis ? "" : "text-ink-soft"}>{row.label}</span>
          <span>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

/** The pinned sticky-note card from the landing hero - hard offset shadow, no blur. */
function FloatingCard({
  tagLabel,
  icon,
  title,
  meta,
  price,
  className,
}: {
  tagLabel: string;
  icon: React.ReactNode;
  title: string;
  meta: string;
  price: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative max-w-[220px] rounded-2xl border-[1.5px] border-ink bg-card p-4 shadow-flat",
        className
      )}
    >
      <span className="absolute -top-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-coral" />
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        {tagLabel}
      </div>
      <div className="mb-2.5 [&_svg]:h-[26px] [&_svg]:w-[26px]">{icon}</div>
      <div className="mb-2.5 text-[14.5px] font-semibold">{title}</div>
      <div className="flex justify-between font-mono text-[13.5px] font-bold">
        <span className="font-normal text-ink-soft">{meta}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export { Card, StatCard, GigRow, ReceiptCard, FloatingCard };

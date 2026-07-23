import * as React from "react";
import { cn } from "@/lib/utils";

/** Base card - every card in the app is this plus more structure. */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-md border border-dl-line bg-dl-surface", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

/** Small stat block - mono label above a large ledger-mono number. */
function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="w-[190px] p-6 shadow-dl-sm">
      <span className="mb-2.5 block font-ledger-mono text-xs uppercase tracking-wider text-dl-ink-soft">{label}</span>
      <b className="font-ledger-mono text-[28px] font-bold tracking-wide text-dl-accent">{value}</b>
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
    <Card className="flex w-full max-w-[540px] items-center gap-5 p-5 shadow-dl-sm">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[3px] border border-dl-line bg-dl-bg text-dl-accent [&_svg]:h-[22px] [&_svg]:w-[22px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-ledger text-[17px] italic text-dl-ink">{title}</div>
        <div className="font-ledger-mono text-xs tracking-wide text-dl-ink-soft">{meta}</div>
      </div>
      {tag}
      <div className="whitespace-nowrap font-ledger-mono text-[15px] font-semibold tracking-wide text-dl-accent">{price}</div>
      {action}
    </Card>
  );
}

/** Ledger-style itemized breakdown - a carbon-copy docket for money moving. */
function ReceiptCard({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
}) {
  return (
    <div className="max-w-[320px] rounded-md border border-dl-line bg-dl-surface p-7 font-ledger-mono text-[13px] tracking-wide shadow-dl">
      <div className="mb-4 border-b border-dashed border-dl-line pb-3 font-ledger text-base italic text-dl-ink">{title}</div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={cn(
            "flex justify-between py-2.5",
            i < rows.length - 1 && "border-b border-dl-line/70",
            row.emphasis && "pt-3.5 font-semibold text-dl-accent"
          )}
        >
          <span className={row.emphasis ? "" : "text-dl-ink-soft"}>{row.label}</span>
          <span className={row.emphasis ? "" : "text-dl-ink"}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

/** Elevated summary card - deep warm-black lift, oxblood corner tick. */
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
        "relative max-w-[240px] rounded-md border border-dl-line bg-dl-surface p-5 shadow-dl",
        className
      )}
    >
      <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-dl-primary" />
      <div className="mb-2 font-ledger-mono text-[10.5px] uppercase tracking-wider text-dl-ink-soft">
        {tagLabel}
      </div>
      <div className="mb-3 text-dl-accent [&_svg]:h-[26px] [&_svg]:w-[26px]">{icon}</div>
      <div className="mb-3 font-ledger text-[17px] italic text-dl-ink">{title}</div>
      <div className="flex justify-between font-ledger-mono text-[13px] font-semibold tracking-wide text-dl-ink">
        <span className="font-normal text-dl-ink-soft">{meta}</span>
        <span className="text-dl-accent">{price}</span>
      </div>
    </div>
  );
}

export { Card, StatCard, GigRow, ReceiptCard, FloatingCard };

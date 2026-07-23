import * as React from "react";
import { cn } from "@/lib/utils";

/** Base card - every card in the app is this plus more structure. */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-md border border-c-line bg-c-surface", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

/** Small stat block - mono label above a large corp-sans number. */
function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="w-[190px] p-6">
      <span className="mb-2.5 block font-corp-mono text-xs uppercase tracking-wide text-c-ink-soft">{label}</span>
      <b className="font-corp text-[28px] font-semibold text-c-ink">{value}</b>
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
    <Card className="flex w-full max-w-[540px] items-center gap-5 p-5">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-c-line bg-c-bg text-c-primary [&_svg]:h-[22px] [&_svg]:w-[22px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold text-c-ink">{title}</div>
        <div className="font-corp-mono text-xs text-c-ink-soft">{meta}</div>
      </div>
      {tag}
      <div className="whitespace-nowrap font-corp-mono text-[15px] font-semibold text-c-ink">{price}</div>
      {action}
    </Card>
  );
}

/** Ledger-style itemized breakdown - used anywhere money needs a formal receipt. */
function ReceiptCard({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
}) {
  return (
    <div className="max-w-[320px] rounded-md border border-c-line bg-c-surface p-7 font-corp-mono text-[13.5px] shadow-c-sm">
      <div className="mb-4 text-[11px] uppercase tracking-wide text-c-ink-soft">{title}</div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={cn(
            "flex justify-between py-2.5",
            i < rows.length - 1 && "border-b border-c-line",
            row.emphasis && "pt-3.5 font-semibold text-c-primary"
          )}
        >
          <span className={row.emphasis ? "" : "text-c-ink-soft"}>{row.label}</span>
          <span className={row.emphasis ? "" : "text-c-ink"}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

/** Elevated summary card - quiet cool-toned shadow, no offset gimmick. */
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
        "relative max-w-[240px] rounded-md border border-c-line bg-c-surface p-5 shadow-c",
        className
      )}
    >
      <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-c-primary" />
      <div className="mb-2 font-corp-mono text-[11px] uppercase tracking-wide text-c-ink-soft">
        {tagLabel}
      </div>
      <div className="mb-3 text-c-primary [&_svg]:h-[26px] [&_svg]:w-[26px]">{icon}</div>
      <div className="mb-3 text-[14.5px] font-semibold text-c-ink">{title}</div>
      <div className="flex justify-between font-corp-mono text-[13.5px] font-semibold text-c-ink">
        <span className="font-normal text-c-ink-soft">{meta}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export { Card, StatCard, GigRow, ReceiptCard, FloatingCard };

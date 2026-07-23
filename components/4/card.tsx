import * as React from "react";
import { cn } from "@/lib/utils";

// Neobrutalism card — thick border, hard offset shadow
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-[6px] border-2 border-black bg-white", className)}
      {...props}
    />
  );
}

function StatCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={cn(
      "w-[170px] rounded-[6px] border-2 border-black p-5 shadow-[4px_4px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]",
      accent ? "bg-[#ffe500]" : "bg-white"
    )}>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-black/60">{label}</span>
      <b className="text-[28px] font-black text-black">{value}</b>
    </div>
  );
}

function GigRow({ title, meta, price, badge }: { title: string; meta: string; price: string; badge?: React.ReactNode }) {
  return (
    <Card className="flex items-center gap-4 px-4 py-3 shadow-[3px_3px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#000]">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[4px] border-2 border-black bg-[#ffe500]">
        <div className="h-2 w-2 rounded-none bg-black" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-bold text-black">{title}</div>
        <div className="text-[11px] font-medium uppercase tracking-wide text-black/50">{meta}</div>
      </div>
      {badge}
      <div className="flex-shrink-0 text-[15px] font-black text-black">{price}</div>
    </Card>
  );
}

// A neobrutalism "feature" card — big accent strip on top
function FeatureCard({ tag, title, description, color = "#ffe500" }: {
  tag: string; title: string; description: string; color?: string;
}) {
  return (
    <div className="rounded-[6px] border-2 border-black shadow-[4px_4px_0_#000] overflow-hidden">
      <div className="h-2" style={{ backgroundColor: color }} />
      <div className="p-5 bg-white">
        <span className="mb-2 inline-block border-2 border-black bg-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
          {tag}
        </span>
        <h3 className="mt-1 text-[16px] font-black text-black">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-snug text-black/60">{description}</p>
      </div>
    </div>
  );
}

export { Card, StatCard, GigRow, FeatureCard };

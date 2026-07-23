import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

function Hero({ className, eyebrow, title, description, children, ...props }: HeroProps) {
  return (
    <section
      className={cn(
        "l-hero-bg flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-md border border-dl-line px-6 text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="font-ledger-mono text-[11px] font-semibold uppercase tracking-wider text-dl-accent">
          {eyebrow}
        </span>
      )}
      <h1 className="font-ledger text-4xl italic text-dl-ink md:text-5xl">{title}</h1>
      {description && (
        <p className="max-w-xl font-ledger-mono text-[14px] tracking-wide text-dl-ink-soft">{description}</p>
      )}
      {children && <div className="mt-2 flex flex-wrap items-center justify-center gap-5">{children}</div>}
    </section>
  );
}

export { Hero };

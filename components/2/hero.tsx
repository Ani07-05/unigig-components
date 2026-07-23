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
        "flex min-h-[420px] flex-col items-center justify-center gap-6 px-6 text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="font-corp-mono text-[12px] font-semibold uppercase tracking-wide text-c-magenta">
          {eyebrow}
        </span>
      )}
      <h1 className="font-corp text-4xl font-semibold text-c-ink md:text-5xl">{title}</h1>
      {description && (
        <p className="max-w-xl text-[16px] text-c-ink-soft">{description}</p>
      )}
      {children && <div className="mt-2 flex flex-wrap items-center justify-center gap-5">{children}</div>}
    </section>
  );
}

export { Hero };

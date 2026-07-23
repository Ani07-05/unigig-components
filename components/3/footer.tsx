import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  links?: { label: string; href: string }[];
  children?: React.ReactNode;
}

function Footer({ className, links = [], children, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex flex-wrap items-center justify-between gap-5 border-t border-dashed border-dl-line bg-dl-bg px-7 py-9",
        className
      )}
      {...props}
    >
      <div className="font-ledger-mono text-[12px] tracking-wide text-dl-ink-soft">{children}</div>
      {links.length > 0 && (
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ledger-mono text-[12.5px] font-semibold tracking-wide text-dl-ink transition-colors hover:text-dl-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </footer>
  );
}

export { Footer };

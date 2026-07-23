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
        "flex flex-wrap items-center justify-between gap-5 border-t border-c-line bg-c-bg px-7 py-9",
        className
      )}
      {...props}
    >
      <div className="font-corp-mono text-[13px] text-c-ink-soft">{children}</div>
      {links.length > 0 && (
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-semibold text-c-ink transition-colors hover:text-c-primary"
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

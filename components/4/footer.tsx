import * as React from "react";
import NextLink from "next/link";
export function Footer({ links = [], children }: { links?: { label: string; href: string }[]; children?: React.ReactNode }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-black bg-[#ffe500] px-6 py-5">
      <div className="font-mono text-[12px] font-black uppercase tracking-widest">{children}</div>
      {links.length > 0 && (
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => <NextLink key={`${l.label}-${l.href}`} href={l.href} className="text-[12px] font-black uppercase tracking-wide underline underline-offset-2 hover:text-[#ff2d78]">{l.label}</NextLink>)}
        </nav>
      )}
    </footer>
  );
}

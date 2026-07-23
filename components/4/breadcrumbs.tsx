import * as React from "react";
import NextLink from "next/link";
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-0">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="mx-2 font-black text-black/40">/</span>}
          {item.href ? (
            <NextLink href={item.href} className="text-[13px] font-bold uppercase tracking-wide text-black underline underline-offset-2 hover:text-[#ff2d78]">{item.label}</NextLink>
          ) : (
            <span className="text-[13px] font-black uppercase tracking-wide">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

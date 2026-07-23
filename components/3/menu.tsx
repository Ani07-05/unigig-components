import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {}

function Menu({ className, children, ...props }: MenuProps) {
  return (
    <ul className={cn("flex w-full min-w-[180px] flex-col gap-1", className)} {...props}>
      {children}
    </ul>
  );
}

export interface MenuItemProps {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

function MenuItem({ icon, active, href, onClick, children, className }: MenuItemProps) {
  const content = (
    <>
      {icon && <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center [&_svg]:h-4 [&_svg]:w-4">{icon}</span>}
      <span className="flex-1 truncate text-left">{children}</span>
    </>
  );

  const rowClasses = cn(
    "flex w-full items-center gap-3 rounded-[3px] px-4 py-3 font-ledger-mono text-[13px] font-semibold tracking-wide transition-colors",
    active ? "bg-dl-primary text-dl-ink" : "text-dl-ink hover:bg-dl-bg-2",
    className
  );

  return (
    <li>
      {href ? (
        <NextLink href={href} onClick={onClick} className={rowClasses}>
          {content}
        </NextLink>
      ) : (
        <button type="button" onClick={onClick} className={rowClasses}>
          {content}
        </button>
      )}
    </li>
  );
}

export { Menu, MenuItem };

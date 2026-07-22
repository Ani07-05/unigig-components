import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {}

function Menu({ className, children, ...props }: MenuProps) {
  return (
    <ul className={cn("flex w-full min-w-[180px] flex-col gap-0.5", className)} {...props}>
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
    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[14px] font-semibold transition-colors",
    active ? "bg-ink text-cream" : "text-ink hover:bg-cream-2",
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

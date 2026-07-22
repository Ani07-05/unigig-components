import * as React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("inline-flex items-center gap-1 transition-colors", {
  variants: {
    variant: {
      default: "text-ink underline decoration-dashed underline-offset-4 hover:text-blue",
      muted: "text-ink-soft underline decoration-dashed underline-offset-4 hover:text-ink",
      external: "text-ink underline decoration-dashed underline-offset-4 hover:text-blue",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

function ExternalArrowIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, className }))}
        {...props}
      >
        {children}
        {variant === "external" && <ExternalArrowIcon className="h-3 w-3 flex-shrink-0" />}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

export { Link, linkVariants };

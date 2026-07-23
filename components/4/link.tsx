import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
const variants = {
  default: "font-bold underline underline-offset-2 text-black hover:text-[#ff2d78]",
  muted: "font-bold text-black/50 hover:text-black",
  external: "font-bold text-black underline underline-offset-2 hover:text-[#ff2d78] after:content-['_↗']",
};
export function Link({ href, variant = "default", className, children }: { href: string; variant?: keyof typeof variants; className?: string; children: React.ReactNode }) {
  return <NextLink href={href} className={cn(variants[variant], className)}>{children}</NextLink>;
}

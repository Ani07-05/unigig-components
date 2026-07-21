import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities
 * (e.g. `cn("px-2", "px-4")` -> "px-4", last one wins).
 * Every component in components/ui uses this so consumers can
 * override styles by passing a `className` prop without fighting
 * specificity.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

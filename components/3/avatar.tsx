import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "inline-flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-dl-line bg-dl-bg-2 font-ledger-mono font-semibold tracking-wide text-dl-ink",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-[10px]",
        default: "h-11 w-11 text-[12px]",
        lg: "h-16 w-16 text-[16px]",
      },
    },
    defaultVariants: { size: "default" },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, fallback, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(avatarVariants({ size, className }))} {...props}>
        {src ? (
          <img src={src} alt={alt ?? fallback ?? ""} className="h-full w-full object-cover" />
        ) : (
          <span>{fallback}</span>
        )}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };

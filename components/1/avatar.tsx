import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "inline-flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-ink bg-cream-2 font-mono font-bold text-ink",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-[11px]",
        default: "h-11 w-11 text-[13px]",
        lg: "h-16 w-16 text-[18px]",
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

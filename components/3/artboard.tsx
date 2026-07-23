import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const artboardVariants = cva(
  "max-w-full overflow-hidden rounded-md border border-dl-line bg-dl-surface shadow-dl-sm",
  {
    variants: {
      size: {
        phone: "h-[568px] w-[320px]",
        "phone-horizontal": "h-[320px] w-[568px]",
        tablet: "h-[576px] w-[768px]",
      },
    },
    defaultVariants: { size: "phone" },
  }
);

export interface ArtboardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof artboardVariants> {}

const Artboard = React.forwardRef<HTMLDivElement, ArtboardProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(artboardVariants({ size, className }))} {...props} />
  )
);
Artboard.displayName = "Artboard";

export { Artboard, artboardVariants };

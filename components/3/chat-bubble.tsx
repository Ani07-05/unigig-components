import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chatBubbleVariants = cva("max-w-[75%] px-5 py-3 text-[14px] leading-snug", {
  variants: {
    variant: {
      sent: "ml-auto rounded-md border border-dl-primary-dark bg-dl-primary text-dl-ink",
      received: "mr-auto rounded-md border border-dl-line bg-dl-surface text-dl-ink",
    },
  },
  defaultVariants: { variant: "received" },
});

export interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  meta?: React.ReactNode;
}

function ChatBubble({ className, variant, meta, children, ...props }: ChatBubbleProps) {
  return (
    <div className={cn("flex flex-col gap-1", variant === "sent" ? "items-end" : "items-start")}>
      <div className={cn(chatBubbleVariants({ variant, className }))} {...props}>
        {children}
      </div>
      {meta && (
        <span className="px-1 font-ledger-mono text-[10px] tracking-wide text-dl-ink-soft">{meta}</span>
      )}
    </div>
  );
}

export { ChatBubble, chatBubbleVariants };

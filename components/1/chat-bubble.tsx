import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chatBubbleVariants = cva("max-w-[75%] px-4 py-2.5 text-[14px] leading-snug", {
  variants: {
    variant: {
      sent: "ml-auto rounded-2xl rounded-br-md bg-ink text-cream",
      received: "mr-auto rounded-2xl rounded-bl-md border-[1.5px] border-ink bg-card text-ink",
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
        <span className="px-1 font-mono text-[10px] text-ink-soft">{meta}</span>
      )}
    </div>
  );
}

export { ChatBubble, chatBubbleVariants };

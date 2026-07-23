import * as React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Stack({ className, children, ...props }: StackProps) {
  const items = React.Children.toArray(children);
  const count = items.length;

  return (
    <div className={cn("grid [&>*]:col-start-1 [&>*]:row-start-1", className)} {...props}>
      {items.map((child, i) => {
        const offset = (count - 1 - i) * 10;
        const rotate = (i % 2 === 0 ? 1 : -1) * (count - 1 - i) * 2;
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
          key: (child as React.ReactElement).key ?? i,
          style: {
            transform: `translate(${offset}px, ${offset}px) rotate(${rotate}deg)`,
            zIndex: i,
            ...(child as React.ReactElement<{ style?: React.CSSProperties }>).props.style,
          },
        });
      })}
    </div>
  );
}

export { Stack };

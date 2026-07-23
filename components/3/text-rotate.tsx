"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextRotateProps {
  words: string[];
  interval?: number;
  className?: string;
}

function TextRotate({ words, interval = 2200, className }: TextRotateProps) {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 200);
      return () => clearTimeout(timeout);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={cn(
        "inline-block font-ledger italic text-dl-accent transition-all duration-200 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
        className
      )}
    >
      {words[index]}
    </span>
  );
}

export { TextRotate };

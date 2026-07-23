"use client";
import * as React from "react";

export function TextRotate({ words, interval = 2000 }: { words: string[]; interval?: number }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((prev) => (prev + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return (
    <span className="inline-block overflow-hidden">
      <span key={i} className="inline-block font-black text-[#ff2d78] animate-[slideUp_0.3s_ease-out]"
        style={{ animation: "slideUp 0.3s ease-out" }}>
        {words[i]}
      </span>
    </span>
  );
}

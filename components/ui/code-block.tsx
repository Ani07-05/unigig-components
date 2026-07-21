import { codeToTokens, type BundledTheme } from "shiki";
import { CopyButton } from "@/components/ui/copy-button";

const THEME: BundledTheme = "one-dark-pro";

export async function CodeBlock({
  code,
  lang = "tsx",
  filename,
}: {
  code: string;
  lang?: string;
  filename?: string;
}) {
  const { tokens, bg, fg } = await codeToTokens(code, { lang, theme: THEME });

  return (
    <div
      className="overflow-hidden text-[13px] leading-6"
      style={{ background: bg, color: fg }}
    >
      {/* toolbar */}
      <div
        className="flex items-center justify-between border-b border-white/8 px-5 py-2.5"
        style={{ background: bg }}
      >
        <span className="font-mono text-[11px] tracking-wide text-white/35">
          {filename ?? "component.tsx"}
        </span>
        <CopyButton code={code} />
      </div>

      {/* lines */}
      <pre className="overflow-x-auto px-5 py-5">
        {tokens.map((line, lineIdx) => (
          <div key={lineIdx} className="flex min-h-[1.6em]">
            <span
              className="mr-6 w-5 flex-shrink-0 select-none text-right font-mono text-[12px] leading-6"
              style={{ color: fg + "38" }}
            >
              {lineIdx + 1}
            </span>
            <span className="flex-1">
              {line.map((token, i) => (
                <span key={i} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}

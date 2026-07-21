import { Button } from "@/components/ui/button";
import { Input, ReceiptInput } from "@/components/ui/input";
import { Tag } from "@/components/ui/tag";
import { StatCard, GigRow, ReceiptCard, FloatingCard } from "@/components/ui/card";
import { TutorIcon, TechIcon, MoveIcon } from "@/components/ui/icons";
import { Search } from "@/components/ui/search";
import { CodeBlock } from "@/components/ui/code-block";
import { ComponentShowcase } from "@/components/ui/component-showcase";

// ─── raw source strings ───────────────────────────────────────────────────────

const BUTTON_CODE = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-ink font-semibold transition-colors disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "bg-ink text-cream hover:bg-blue hover:border-blue",
        ghost: "bg-transparent text-ink hover:bg-ink hover:text-cream",
      },
      size: {
        default: "px-5 py-3 text-[14.5px]",
        lg: "px-7 py-[15px] text-[15.5px]",
        sm: "px-4 py-[9px] text-[13px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`;

const INPUT_CODE = `import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-[10px] border-[1.5px] border-ink bg-card px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-soft/60",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export interface ReceiptInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ReceiptInput = React.forwardRef<HTMLInputElement, ReceiptInputProps>(
  ({ label, id, className, ...props }, ref) => (
    <div className="flex items-center justify-between gap-3.5 border-b border-dashed border-line py-3">
      <label htmlFor={id} className="font-mono text-[13.5px] text-ink-soft">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={cn(
          "min-w-0 flex-1 border-none bg-transparent text-right font-mono text-[14.5px] font-bold text-ink outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
);
ReceiptInput.displayName = "ReceiptInput";

export { Input, ReceiptInput };`;

const TAG_CODE = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-block whitespace-nowrap rounded-full px-[11px] py-[5px] font-mono text-[11px] font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        flash:    "bg-coral text-white",
        standard: "bg-mustard text-[#2b2205]",
        extended: "bg-green text-[#eafff2]",
        open:     "bg-mustard text-[#2b2205]",
        progress: "bg-blue text-white",
        done:     "bg-green text-[#eafff2]",
      },
    },
    defaultVariants: { variant: "flash" },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <span className={cn(tagVariants({ variant, className }))} {...props} />;
}

export { Tag, tagVariants };`;

const CARD_CODE = `import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-card border-[1.5px] border-ink bg-card", className)} {...props} />
  )
);
Card.displayName = "Card";

function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="w-[170px] p-5">
      <span className="mb-2 block font-mono text-xs text-ink-soft">{label}</span>
      <b className="font-display text-[26px] font-extrabold">{value}</b>
    </Card>
  );
}

function GigRow({ icon, title, meta, price, tag, action }: {
  icon: React.ReactNode; title: string; meta: string;
  price: string; tag?: React.ReactNode; action?: React.ReactNode;
}) {
  return (
    <Card className="flex w-full max-w-[520px] items-center gap-4 p-4">
      <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-ink bg-cream [&_svg]:h-[22px] [&_svg]:w-[22px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold">{title}</div>
        <div className="font-mono text-xs text-ink-soft">{meta}</div>
      </div>
      {tag}
      <div className="whitespace-nowrap font-mono text-[15px] font-bold">{price}</div>
      {action}
    </Card>
  );
}

function ReceiptCard({ title, rows }: {
  title: string;
  rows: { label: string; value: string; emphasis?: boolean }[];
}) {
  return (
    <div className="max-w-[300px] rounded-xl border-[1.5px] border-dashed border-ink bg-cream p-[22px] font-mono text-[13.5px]">
      <div className="mb-3.5 text-[11px] uppercase tracking-wide text-ink-soft">{title}</div>
      {rows.map((row, i) => (
        <div key={row.label} className={cn(
          "flex justify-between py-2",
          i < rows.length - 1 && "border-b border-dashed border-line",
          row.emphasis && "pt-3 font-bold"
        )}>
          <span className={row.emphasis ? "" : "text-ink-soft"}>{row.label}</span>
          <span>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function FloatingCard({ tagLabel, icon, title, meta, price, className }: {
  tagLabel: string; icon: React.ReactNode; title: string;
  meta: string; price: string; className?: string;
}) {
  return (
    <div className={cn("relative max-w-[220px] rounded-2xl border-[1.5px] border-ink bg-card p-4 shadow-flat", className)}>
      <span className="absolute -top-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-coral" />
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft">{tagLabel}</div>
      <div className="mb-2.5 [&_svg]:h-[26px] [&_svg]:w-[26px]">{icon}</div>
      <div className="mb-2.5 text-[14.5px] font-semibold">{title}</div>
      <div className="flex justify-between font-mono text-[13.5px] font-bold">
        <span className="font-normal text-ink-soft">{meta}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export { Card, StatCard, GigRow, ReceiptCard, FloatingCard };`;

const SEARCH_CODE = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/ui/icons";

export interface SearchSuggestion {
  id: string;
  label: string;
  meta?: string;
}

export interface SearchProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string) => void;
  onSelect?: (item: SearchSuggestion) => void;
  className?: string;
}

export function Search({ placeholder = "Search gigs…", suggestions = [], onSearch, onSelect, className }: SearchProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? suggestions.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  React.useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={cn("relative w-full max-w-md", className)}>
      <div className="flex items-center gap-2.5 rounded-[12px] border-[1.5px] border-ink bg-card px-3.5 py-3 focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 focus-within:ring-offset-cream">
        <SearchIcon className="h-[18px] w-[18px] flex-shrink-0 text-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); onSearch?.(e.target.value); }}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === "Escape") setOpen(false); }}
          onFocus={() => query && setOpen(true)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink-soft/60 outline-none"
        />
      </div>
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border-[1.5px] border-ink bg-card shadow-flat">
          {filtered.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => { setQuery(item.label); setOpen(false); onSelect?.(item); }}
                className={cn("flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-ink/5",
                  i < filtered.length - 1 && "border-b border-dashed border-line")}
              >
                <span className="flex-1 text-[14.5px] font-semibold">{item.label}</span>
                {item.meta && <span className="font-mono text-[11px] text-ink-soft">{item.meta}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && query.trim() && filtered.length === 0 && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border-[1.5px] border-ink bg-card px-4 py-3 shadow-flat">
          <span className="font-mono text-[13px] text-ink-soft">No gigs found for "{query}"</span>
        </div>
      )}
    </div>
  );
}`;

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function Home() {
  return (
    <main className="mx-auto max-w-4xl space-y-16 px-6 py-16">
      <header>
        <span className="mb-3 block font-mono text-xs uppercase tracking-wide text-coral">
          Component library
        </span>
        <h1 className="font-display text-4xl font-extrabold">UniGig UI kit</h1>
        <p className="mt-3 max-w-xl text-ink-soft">
          Every component below is a real file in <code>components/ui</code> — copy the code, paste the file. Edit it directly; there is no version to fall out of sync with.
        </p>
      </header>

      {/* ── Button ── */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">Button</h2>
        <ComponentShowcase code={<CodeBlock code={BUTTON_CODE} filename="components/ui/button.tsx" />}>
          <Button>Post a gig</Button>
          <Button variant="ghost">Log in</Button>
          <Button size="lg">Large</Button>
          <Button size="sm">Small</Button>
          <Button disabled>Disabled</Button>
        </ComponentShowcase>
      </section>

      {/* ── Input ── */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">Input</h2>
        <ComponentShowcase code={<CodeBlock code={INPUT_CODE} filename="components/ui/input.tsx" />}>
          <div className="w-full max-w-xs space-y-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold" htmlFor="title">Gig title</label>
              <Input id="title" placeholder="e.g. Help formatting my resume" />
            </div>
            <div className="rounded-2xl border-[1.5px] border-dashed border-ink bg-card p-5">
              <ReceiptInput id="email" label="Email" defaultValue="demo@unigig.app" />
              <ReceiptInput id="password" label="Password" type="password" defaultValue="unigig-demo" />
            </div>
          </div>
        </ComponentShowcase>
      </section>

      {/* ── Tag ── */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">Tag</h2>
        <ComponentShowcase code={<CodeBlock code={TAG_CODE} filename="components/ui/tag.tsx" />}>
          <Tag variant="flash">Flash</Tag>
          <Tag variant="standard">Standard</Tag>
          <Tag variant="extended">Extended</Tag>
          <Tag variant="open">Open</Tag>
          <Tag variant="progress">In progress</Tag>
          <Tag variant="done">Completed</Tag>
        </ComponentShowcase>
      </section>

      {/* ── Cards ── */}
      <section className="space-y-6">
        <h2 className="font-display text-xl font-bold">Cards</h2>

        <div className="space-y-2">
          <h3 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft">StatCard</h3>
          <ComponentShowcase code={<CodeBlock code={CARD_CODE} filename="components/ui/card.tsx" />}>
            <StatCard label="Posted" value="12" />
            <StatCard label="In escrow" value="₹850" />
          </ComponentShowcase>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft">GigRow</h3>
          <ComponentShowcase code={<CodeBlock code={CARD_CODE} filename="components/ui/card.tsx" />}>
            <GigRow
              icon={<TechIcon />}
              title="Fix my laptop's WiFi driver"
              meta="Standard · posted 2h ago"
              price="₹500"
              tag={<Tag variant="progress">In progress</Tag>}
            />
          </ComponentShowcase>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft">ReceiptCard</h3>
          <ComponentShowcase code={<CodeBlock code={CARD_CODE} filename="components/ui/card.tsx" />}>
            <ReceiptCard
              title="Sample payout — Standard gig"
              rows={[
                { label: "Job price", value: "₹500.00" },
                { label: "Commission (8%)", value: "−₹40.00" },
                { label: "You receive", value: "₹460.00", emphasis: true },
              ]}
            />
          </ComponentShowcase>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono text-[12px] uppercase tracking-wide text-ink-soft">FloatingCard</h3>
          <ComponentShowcase code={<CodeBlock code={CARD_CODE} filename="components/ui/card.tsx" />}>
            <FloatingCard tagLabel="#tutoring" icon={<TutorIcon />} title="Help with Calc II problem set" meta="Flash · 2 hrs" price="₹350" />
            <FloatingCard tagLabel="#moving-help" icon={<MoveIcon />} title="Hostel room shift — 3 boxes" meta="Extended" price="₹700" />
          </ComponentShowcase>
        </div>
      </section>

      {/* ── Search ── */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">Search</h2>
        <ComponentShowcase code={<CodeBlock code={SEARCH_CODE} filename="components/ui/search.tsx" />}>
          <Search
            placeholder="Search gigs…"
            suggestions={[
              { id: "1", label: "Help with Calc II problem set", meta: "Flash · ₹350" },
              { id: "2", label: "Fix my laptop's WiFi driver", meta: "Standard · ₹500" },
              { id: "3", label: "Hostel room shift — 3 boxes", meta: "Extended · ₹700" },
              { id: "4", label: "Resume formatting", meta: "Flash · ₹200" },
              { id: "5", label: "Photography for college fest", meta: "Standard · ₹1200" },
            ]}
          />
        </ComponentShowcase>
      </section>
    </main>
  );
}

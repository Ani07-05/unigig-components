import Link from "next/link";

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header>
      <Link href="/" className="mb-4 inline-block font-ledger-mono text-[11px] uppercase tracking-wider text-dl-ink-soft hover:text-dl-accent">
        ← Back
      </Link>
      <span className="mb-3 block font-ledger-mono text-[11px] uppercase tracking-wider text-dl-accent">{eyebrow}</span>
      <h1 className="font-ledger text-4xl italic text-dl-ink">{title}</h1>
      {description && <p className="mt-3 max-w-xl font-ledger-mono text-[13px] leading-relaxed tracking-wide text-dl-ink-soft">{description}</p>}
    </header>
  );
}

export { PageHeader };

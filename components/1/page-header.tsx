import Link from "next/link";

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header>
      <Link href="/" className="mb-3 inline-block font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink">
        ← Back
      </Link>
      <span className="mb-3 block font-mono text-xs uppercase tracking-wide text-coral">{eyebrow}</span>
      <h1 className="font-display text-4xl font-extrabold">{title}</h1>
      {description && <p className="mt-3 max-w-xl text-ink-soft">{description}</p>}
    </header>
  );
}

export { PageHeader };

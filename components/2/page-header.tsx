import Link from "next/link";

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header>
      <Link href="/" className="mb-4 inline-block font-corp-mono text-xs uppercase tracking-wide text-c-ink-soft hover:text-c-primary">
        ← Back
      </Link>
      <span className="mb-3 block font-corp-mono text-xs uppercase tracking-wide text-c-primary">{eyebrow}</span>
      <h1 className="font-corp text-4xl font-semibold text-c-ink">{title}</h1>
      {description && <p className="mt-3 max-w-xl text-c-ink-soft">{description}</p>}
    </header>
  );
}

export { PageHeader };

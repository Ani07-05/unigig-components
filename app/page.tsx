import Link from "next/link";

const THEMES = [
  { href: "/1", label: "Theme 1 - Cream" },
  { href: "/2", label: "Theme 2 - Corporate" },
  { href: "/3", label: "Theme 3 - Aubergine" },
  { href: "/4", label: "Theme 4 - Neobrutalism" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-4xl space-y-12">
        <header>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wide text-black/50">
            Component library
          </span>
          <h1 className="text-4xl font-extrabold">UniGig UI kit</h1>
          <p className="mt-3 max-w-xl text-black/60">
            Pick a theme below to see the full component set.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          {THEMES.map((theme, i) => (
            <Link
              key={theme.href}
              href={theme.href}
              className={
                i % 2 === 0
                  ? "inline-flex items-center rounded-full border-[1.5px] border-black bg-black px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white hover:text-black"
                  : "inline-flex items-center rounded-full border-[1.5px] border-black bg-transparent px-5 py-3 text-[14.5px] font-semibold text-black transition-colors hover:bg-black hover:text-white"
              }
            >
              {theme.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

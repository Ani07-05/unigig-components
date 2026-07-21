# UniGig UI

A component library built the way shadcn/ui builds theirs — not a package you
`npm install`, but source files you own in `components/ui/`.

## Why this architecture

shadcn's actual insight isn't the visual style — it's the distribution model.
Every "install" copies a `.tsx` file straight into your repo. You're not
importing from `node_modules`, so:

- you can open `components/ui/button.tsx` and change a line, right now, with
  no fork, no patch-package, no waiting on a maintainer
- there's no library version to fall out of sync with — the component *is*
  your code
- upgrading means re-copying a file if you want to, never a breaking `major`
  bump you didn't ask for

The tradeoff: you own maintenance too. That's the deal, same as it is for
shadcn itself.

## The four pieces, and what each one is for

**1. Tailwind CSS + CSS variables** (`app/globals.css`, `tailwind.config.ts`)
All color tokens (`--cream`, `--ink`, `--coral`, etc.) live as CSS variables.
`tailwind.config.ts` just points Tailwind's color names at those variables.
To retheme the whole app, edit the variables — never hunt through components
for hardcoded hex values.

**2. `class-variance-authority` (CVA)** (`components/ui/button.tsx`, `tag.tsx`)
Defines a component's variants once and gets TypeScript types for free.
`<Button variant="ghost" size="lg">` is fully autocompleted and type-checked
because CVA generates the prop types from the variant definition itself —
you can't pass `variant="danger"` if it isn't declared.

**3. `cn()` utility** (`lib/utils.ts`)
`clsx` for conditionally joining class names + `tailwind-merge` for resolving
conflicts (`cn("px-4", "px-6")` correctly keeps `px-6`, not both). Every
component accepts a `className` prop and merges it through `cn()` last, so
consumers can override styles without fighting specificity.

**4. Radix `Slot`** (`components/ui/button.tsx`)
Powers the `asChild` prop pattern — `<Button asChild><Link href="/post">...`
renders the `Link` as the actual DOM element while still getting the
button's styles and variant logic. No wrapper `<button><a>...` nesting.

## What's here

```
app/
  layout.tsx      root layout, loads fonts
  globals.css     design tokens as CSS variables
  page.tsx        demo page using every component
components/ui/
  button.tsx      Button — variant: primary | ghost, size: default | lg | sm
  input.tsx       Input (boxed) + ReceiptInput (inline, receipt-row style)
  tag.tsx         Tag — variant: flash | standard | extended | open | progress | done
  card.tsx        Card, StatCard, GigRow, ReceiptCard, FloatingCard
  icons.tsx       hand-coded icon set (TutorIcon, DeliveryIcon, TechIcon, ...)
lib/
  utils.ts        cn() — clsx + tailwind-merge
```

## Adding a new component

Follow the same shape as `tag.tsx` (the simplest file here) as a template:

1. Define variants with `cva()` — base classes + a `variants` object.
2. Type the props with `VariantProps<typeof yourVariants>`.
3. Merge `className` through `cn()` last, so overrides win.
4. Export the component and its variants function.

## Running it

```
npm install
npm run dev
```

Needs Node 18.17+. Opens the demo page at `localhost:3000` showing every
component from this kit.

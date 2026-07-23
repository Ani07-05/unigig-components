"use client";

import * as React from "react";
import { Button } from "@/components/3/button";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/components/3/dropdown";
import { Fab } from "@/components/3/fab";
import { Modal } from "@/components/3/modal";
import { Swap } from "@/components/3/swap";
import { ThemeController } from "@/components/3/theme-controller";

import { Accordion } from "@/components/3/accordion";
import { Avatar } from "@/components/3/avatar";
import { Badge } from "@/components/3/badge";
import { StatCard, GigRow, ReceiptCard, FloatingCard } from "@/components/3/card";
import { Carousel } from "@/components/3/carousel";
import { ChatBubble } from "@/components/3/chat-bubble";
import { Collapse } from "@/components/3/collapse";
import { Countdown } from "@/components/3/countdown";
import { Diff } from "@/components/3/diff";
import { Hover3DCard } from "@/components/3/hover-3d-card";
import { HoverGallery } from "@/components/3/hover-gallery";
import { Kbd } from "@/components/3/kbd";
import { List, ListItem } from "@/components/3/list";
import { Stat, StatItem } from "@/components/3/stat";
import { Status } from "@/components/3/status";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/3/table";
import { TextRotate } from "@/components/3/text-rotate";
import { Timeline } from "@/components/3/timeline";

import { Breadcrumbs } from "@/components/3/breadcrumbs";
import { Dock } from "@/components/3/dock";
import { Link } from "@/components/3/link";
import { Menu, MenuItem } from "@/components/3/menu";
import { Navbar } from "@/components/3/navbar";
import { Pagination } from "@/components/3/pagination";
import { Steps } from "@/components/3/steps";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/3/tab";

import { Checkbox } from "@/components/3/checkbox";
import { Fieldset } from "@/components/3/fieldset";
import { FileInput } from "@/components/3/file-input";
import { Filter } from "@/components/3/filter";
import { Label } from "@/components/3/label";
import { Radio } from "@/components/3/radio";
import { Range } from "@/components/3/range";
import { Rating } from "@/components/3/rating";
import { Select } from "@/components/3/select";
import { Input } from "@/components/3/input";
import { Textarea } from "@/components/3/textarea";
import { Toggle } from "@/components/3/toggle";
import { Validator } from "@/components/3/validator";

import { Artboard } from "@/components/3/artboard";
import { Divider } from "@/components/3/divider";
import { Drawer } from "@/components/3/drawer";
import { Footer } from "@/components/3/footer";
import { Hero } from "@/components/3/hero";
import { Indicator } from "@/components/3/indicator";
import { Join } from "@/components/3/join";
import { Mask } from "@/components/3/mask";
import { Stack } from "@/components/3/stack";

import { Alert } from "@/components/3/alert";
import { Loading } from "@/components/3/loading";
import { Progress } from "@/components/3/progress";
import { RadialProgress } from "@/components/3/radial-progress";
import { Skeleton } from "@/components/3/skeleton";
import { Toast } from "@/components/3/toast";
import { Tooltip } from "@/components/3/tooltip";

import { TutorIcon, TechIcon, MoveIcon, CheckIcon } from "@/components/3/icons";
import { Preview } from "@/components/3/preview";

const COUNTDOWN_TARGET = new Date("2026-08-01T00:00:00");

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-ledger-mono text-[11px] uppercase tracking-wider text-dl-ink-soft">
        <span className="text-dl-accent">§</span> {title}
      </h3>
      <Preview className="bg-dl-bg-2/60">{children}</Preview>
    </div>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={`sec-${num}`} className="scroll-mt-10 space-y-8">
      <div className="flex items-baseline gap-4 border-b border-dl-line pb-4">
        <span className="rounded-[3px] border border-dl-primary-dark bg-dl-primary px-2.5 py-1 font-ledger-mono text-[11px] font-bold tracking-wider text-dl-ink">
          SEC. {num}
        </span>
        <h2 className="font-ledger text-3xl italic text-dl-ink">{title}</h2>
        <span className="ml-auto hidden font-ledger-mono text-[11px] tracking-wider text-dl-ink-soft sm:inline">
          FORM 3-{num}/UG
        </span>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export default function ThemeThreePage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [themeOn, setThemeOn] = React.useState(false);
  const [ratingValue, setRatingValue] = React.useState(3);
  const [filterValue, setFilterValue] = React.useState("All");
  const [page, setPage] = React.useState(3);
  const [toastVisible, setToastVisible] = React.useState(true);

  return (
    <div className="l-grain min-h-screen bg-dl-bg font-ledger-mono text-dl-ink">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        {/* ---- docket header ---- */}
        <header className="mb-16 rounded-md border border-dl-line bg-dl-surface p-8 shadow-dl">
          <Link href="/" className="mb-6 inline-block font-ledger-mono text-[11px] uppercase tracking-wider text-dl-ink-soft hover:text-dl-accent">
            ← Back
          </Link>
          <span className="mb-2 block font-ledger-mono text-[10.5px] uppercase tracking-wider text-dl-accent">
            Theme 3 — Dispatch Ledger
          </span>
          <h1 className="mb-3 font-ledger text-4xl italic leading-[1.05] text-dl-ink">
            UniGig UI kit
          </h1>
          <p className="mb-6 max-w-xl font-ledger-mono text-[12px] leading-relaxed tracking-wide text-dl-ink-soft">
            Every component below is a real file in components/3 — night-shift
            docket paperwork: oxblood stamp ink, brass numerals, a lone
            italic serif against dense mono data.
          </p>
          <div className="grid grid-cols-2 gap-3 border-y border-dashed border-dl-line py-4 sm:w-64">
            <div>
              <div className="font-ledger-mono text-[10px] uppercase tracking-wider text-dl-ink-soft">Components</div>
              <div className="font-ledger-mono text-lg font-bold tracking-wide text-dl-accent">66</div>
            </div>
            <div>
              <div className="font-ledger-mono text-[10px] uppercase tracking-wider text-dl-ink-soft">Sections</div>
              <div className="font-ledger-mono text-lg font-bold tracking-wide text-dl-accent">06</div>
            </div>
          </div>
        </header>

        {/* ---- content column ---- */}
        <main className="min-w-0 space-y-24">
          <Section num="01" title="Actions">
            <Row title="Button">
              <Button>Post a gig</Button>
              <Button variant="outline">Log in</Button>
              <Button size="sm">Small</Button>
              <Button disabled>Disabled</Button>
            </Row>

            <Row title="Dropdown">
              <Dropdown>
                <DropdownTrigger>Options</DropdownTrigger>
                <DropdownContent>
                  <DropdownItem>Edit gig</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </Row>

            <Row title="FAB / Speed Dial">
              <div className="relative h-55 w-full">
                <Fab
                  icon={<CheckIcon />}
                  className="absolute bottom-4 right-4"
                  actions={[
                    { icon: <TechIcon />, label: "Tech gig" },
                    { icon: <TutorIcon />, label: "Tutoring gig" },
                    { icon: <MoveIcon />, label: "Moving gig" },
                  ]}
                />
              </div>
            </Row>

            <Row title="Modal">
              <Button onClick={() => setModalOpen(true)}>Open modal</Button>
              <Modal open={modalOpen} onOpenChange={setModalOpen}>
                <h3 className="mb-2.5 font-ledger text-lg italic text-dl-ink">Confirm posting</h3>
                <p className="mb-6 font-ledger-mono text-[13px] tracking-wide text-dl-ink-soft">This gig will go live immediately once posted.</p>
                <Button onClick={() => setModalOpen(false)}>Got it</Button>
              </Modal>
            </Row>

            <Row title="Swap">
              <Swap on={<CheckIcon />} off={<span className="font-ledger-mono text-[11px] font-semibold">?</span>} />
            </Row>

            <Row title="Theme Controller">
              <ThemeController checked={themeOn} onCheckedChange={setThemeOn} />
            </Row>
          </Section>

          <Section num="02" title="Data Display">
            <Row title="Accordion">
              <div className="w-full max-w-md">
                <Accordion
                  items={[
                    { title: "How does escrow work?", content: "Funds are held until the gig is marked complete." },
                    { title: "What's the commission?", content: "8% flat, taken from the final payout." },
                    { title: "Can I cancel a gig?", content: "Yes, up until a helper accepts it." },
                  ]}
                />
              </div>
            </Row>

            <Row title="Avatar">
              <Avatar fallback="AK" size="sm" />
              <Avatar fallback="AK" />
              <Avatar fallback="AK" size="lg" />
            </Row>

            <Row title="Badge">
              <Badge variant="solid">Solid</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="soft">Soft</Badge>
              <Badge variant="cyan">Cyan</Badge>
              <Badge variant="magenta">Magenta</Badge>
              <Badge variant="yellow">Yellow</Badge>
            </Row>

            <Row title="Card - StatCard">
              <StatCard label="Posted" value="12" />
              <StatCard label="In escrow" value="₹850" />
            </Row>

            <Row title="Card - GigRow">
              <GigRow
                icon={<TechIcon />}
                title="Fix my laptop's WiFi driver"
                meta="Standard · posted 2h ago"
                price="₹500"
                tag={<Badge variant="solid">In progress</Badge>}
              />
            </Row>

            <Row title="Card - ReceiptCard">
              <ReceiptCard
                title="Sample payout - Standard gig"
                rows={[
                  { label: "Job price", value: "₹500.00" },
                  { label: "Commission (8%)", value: "−₹40.00" },
                  { label: "You receive", value: "₹460.00", emphasis: true },
                ]}
              />
            </Row>

            <Row title="Card - FloatingCard">
              <FloatingCard tagLabel="#tutoring" icon={<TutorIcon />} title="Help with Calc II problem set" meta="Flash · 2 hrs" price="₹350" />
              <FloatingCard tagLabel="#moving-help" icon={<MoveIcon />} title="Hostel room shift - 3 boxes" meta="Extended" price="₹700" />
            </Row>

            <Row title="Carousel">
              <div className="w-full max-w-md">
                <Carousel
                  items={[
                    <StatCard key="1" label="Posted" value="12" />,
                    <StatCard key="2" label="In escrow" value="₹850" />,
                    <StatCard key="3" label="Completed" value="34" />,
                  ]}
                />
              </div>
            </Row>

            <Row title="Chat Bubble">
              <div className="flex w-full max-w-sm flex-col gap-2.5">
                <ChatBubble variant="received" meta="Priya · 2:04pm">Hey, are you still free to help move boxes?</ChatBubble>
                <ChatBubble variant="sent" meta="You · 2:05pm">Yep, on my way!</ChatBubble>
              </div>
            </Row>

            <Row title="Collapse">
              <div className="w-full max-w-md">
                <Collapse title="Payment details">
                  Payouts are sent within 24 hours of gig completion.
                </Collapse>
              </div>
            </Row>

            <Row title="Countdown">
              <Countdown target={COUNTDOWN_TARGET} />
            </Row>

            <Row title="Diff">
              <div className="h-40 w-full max-w-md">
                <Diff
                  before={<div className="flex h-full items-center justify-center bg-dl-bg-2 font-ledger-mono text-sm tracking-wide text-dl-ink-soft">Before</div>}
                  after={<div className="flex h-full items-center justify-center bg-dl-primary font-ledger-mono text-sm tracking-wide text-dl-ink">After</div>}
                />
              </div>
            </Row>

            <Row title="Hover 3D Card">
              <Hover3DCard className="flex h-40 w-55 items-center justify-center">
                <span className="font-ledger text-lg italic text-dl-ink">Tilt me</span>
              </Hover3DCard>
            </Row>

            <Row title="Hover Gallery">
              <HoverGallery
                images={[
                  { src: "https://picsum.photos/seed/gig1/200/200", alt: "Gig 1" },
                  { src: "https://picsum.photos/seed/gig2/200/200", alt: "Gig 2" },
                  { src: "https://picsum.photos/seed/gig3/200/200", alt: "Gig 3" },
                ]}
              />
            </Row>

            <Row title="Kbd">
              <Kbd>Ctrl</Kbd>
              <Kbd>K</Kbd>
            </Row>

            <Row title="List">
              <div className="w-full max-w-sm">
                <List>
                  <ListItem leading={<Avatar fallback="RS" size="sm" />} title="Fix WiFi driver" subtitle="Standard · ₹500" />
                  <ListItem leading={<Avatar fallback="AK" size="sm" />} title="Calc II tutoring" subtitle="Flash · ₹350" />
                </List>
              </div>
            </Row>

            <Row title="Stat">
              <Stat>
                <StatItem label="Posted" value="12" />
                <StatItem label="In escrow" value="₹850" />
                <StatItem label="Completed" value="34" />
              </Stat>
            </Row>

            <Row title="Status">
              <Status variant="online" pulse />
              <Status variant="busy" />
              <Status variant="away" />
              <Status variant="offline" />
            </Row>

            <Row title="Table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Gig</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Fix WiFi driver</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell>₹500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Calc II tutoring</TableCell>
                    <TableCell>Flash</TableCell>
                    <TableCell>₹350</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Row>

            <Row title="Text Rotate">
              <span className="font-ledger text-xl italic text-dl-ink">
                Post a <TextRotate words={["tutoring", "moving", "tech", "design"]} /> gig
              </span>
            </Row>

            <Row title="Timeline">
              <Timeline
                items={[
                  { time: "2:00pm", title: "Gig posted", description: "Fix WiFi driver - ₹500" },
                  { time: "2:14pm", title: "Helper accepted" },
                  { time: "3:40pm", title: "Marked complete" },
                ]}
              />
            </Row>
          </Section>

          <Section num="03" title="Navigation">
            <Row title="Breadcrumbs">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gigs", href: "/3" }, { label: "Fix WiFi driver" }]} />
            </Row>

            <Row title="Dock">
              <div className="relative h-25 w-full">
                <Dock
                  className="static translate-x-0"
                  items={[
                    { icon: <TechIcon />, label: "Tech", active: true },
                    { icon: <TutorIcon />, label: "Tutor" },
                    { icon: <MoveIcon />, label: "Moving" },
                  ]}
                />
              </div>
            </Row>

            <Row title="Link">
              <Link href="/3">Default link</Link>
              <Link href="/3" variant="muted">Muted link</Link>
              <Link href="/3" variant="external">External link</Link>
            </Row>

            <Row title="Menu">
              <div className="w-full max-w-55 rounded-md border border-dl-line bg-dl-surface p-3">
                <Menu>
                  <MenuItem icon={<TechIcon />} active>Tech gigs</MenuItem>
                  <MenuItem icon={<TutorIcon />}>Tutoring gigs</MenuItem>
                  <MenuItem icon={<MoveIcon />}>Moving gigs</MenuItem>
                </Menu>
              </div>
            </Row>

            <Row title="Navbar">
              <div className="w-full">
                <Navbar
                  start={<span className="font-ledger italic text-lg text-dl-ink">UniGig</span>}
                  end={<Button size="sm">Post a gig</Button>}
                />
              </div>
            </Row>

            <Row title="Pagination">
              <Pagination page={page} totalPages={12} onPageChange={setPage} />
            </Row>

            <Row title="Steps">
              <div className="w-full max-w-md">
                <Steps steps={["Details", "Price", "Review", "Post"]} current={2} />
              </div>
            </Row>

            <Row title="Tab">
              <div className="w-full max-w-md">
                <Tabs defaultValue="open">
                  <TabsList>
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="progress">In progress</TabsTrigger>
                    <TabsTrigger value="done">Done</TabsTrigger>
                  </TabsList>
                  <TabsContent value="open">3 gigs open.</TabsContent>
                  <TabsContent value="progress">1 gig in progress.</TabsContent>
                  <TabsContent value="done">34 gigs completed.</TabsContent>
                </Tabs>
              </div>
            </Row>
          </Section>

          <Section num="04" title="Data Input">
            <Row title="Checkbox">
              <label className="flex items-center gap-2.5 font-ledger-mono text-[13.5px] tracking-wide">
                <Checkbox defaultChecked /> Remember me
              </label>
            </Row>

            <Row title="Fieldset">
              <div className="w-full max-w-sm">
                <Fieldset legend="Payout details">
                  <div className="space-y-3.5">
                    <Input placeholder="Bank account number" />
                    <Input placeholder="IFSC code" />
                  </div>
                </Fieldset>
              </div>
            </Row>

            <Row title="File Input">
              <div className="w-full max-w-sm">
                <FileInput />
              </div>
            </Row>

            <Row title="Filter">
              <Filter options={["All", "Tech", "Tutoring", "Moving"]} value={filterValue} onChange={setFilterValue} />
            </Row>

            <Row title="Label">
              <Label htmlFor="demo-label" required>Gig title</Label>
            </Row>

            <Row title="Radio">
              <label className="flex items-center gap-2.5 font-ledger-mono text-[13.5px] tracking-wide">
                <Radio name="tier" defaultChecked /> Standard
              </label>
              <label className="flex items-center gap-2.5 font-ledger-mono text-[13.5px] tracking-wide">
                <Radio name="tier" /> Flash
              </label>
            </Row>

            <Row title="Range">
              <div className="w-full max-w-xs">
                <Range defaultValue={60} />
              </div>
            </Row>

            <Row title="Rating">
              <Rating value={ratingValue} onChange={setRatingValue} />
            </Row>

            <Row title="Select">
              <div className="w-full max-w-xs">
                <Select defaultValue="standard">
                  <option value="flash">Flash</option>
                  <option value="standard">Standard</option>
                  <option value="extended">Extended</option>
                </Select>
              </div>
            </Row>

            <Row title="Text Input">
              <div className="w-full max-w-xs">
                <Input placeholder="e.g. Help formatting my resume" />
              </div>
            </Row>

            <Row title="Textarea">
              <div className="w-full max-w-xs">
                <Textarea placeholder="Describe the gig…" />
              </div>
            </Row>

            <Row title="Toggle">
              <Toggle defaultChecked />
            </Row>

            <Row title="Validator">
              <div className="w-full max-w-xs space-y-2.5">
                <Input placeholder="Email" />
                <Validator variant="error">Enter a valid email address</Validator>
              </div>
            </Row>
          </Section>

          <Section num="05" title="Layout">
            <Row title="Artboard">
              <Artboard size="phone" className="flex items-center justify-center">
                <span className="font-ledger-mono text-xs tracking-wide text-dl-ink-soft">phone artboard</span>
              </Artboard>
            </Row>

            <Row title="Divider">
              <div className="w-full max-w-sm space-y-6">
                <Divider>OR</Divider>
                <Divider variant="dashed">TEAR HERE</Divider>
              </div>
            </Row>

            <Row title="Drawer">
              <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <h3 className="mb-2.5 font-ledger text-lg italic text-dl-ink">Filters</h3>
                <p className="font-ledger-mono text-[13px] tracking-wide text-dl-ink-soft">Drawer content goes here.</p>
              </Drawer>
            </Row>

            <Row title="Footer">
              <div className="w-full">
                <Footer links={[{ label: "About", href: "/3" }, { label: "Support", href: "/3" }]}>
                  © 2026 UniGig
                </Footer>
              </div>
            </Row>

            <Row title="Hero">
              <div className="w-full">
                <Hero eyebrow="Campus gigs" title="Get things done, get paid" description="Post a gig or pick one up in minutes.">
                  <Button>Post a gig</Button>
                  <Button variant="outline">Browse gigs</Button>
                </Hero>
              </div>
            </Row>

            <Row title="Indicator">
              <Indicator badge={<span className="flex h-4 w-4 items-center justify-center rounded-full bg-dl-primary font-ledger-mono text-[10px] font-semibold text-dl-ink">3</span>}>
                <Avatar fallback="AK" />
              </Indicator>
            </Row>

            <Row title="Join">
              <Join>
                <button className="border border-dl-line bg-dl-surface px-5 py-2.5 font-ledger-mono text-[12.5px] font-semibold tracking-wide text-dl-ink">Day</button>
                <button className="border border-dl-primary-dark bg-dl-primary px-5 py-2.5 font-ledger-mono text-[12.5px] font-semibold tracking-wide text-dl-ink">Week</button>
                <button className="border border-dl-line bg-dl-surface px-5 py-2.5 font-ledger-mono text-[12.5px] font-semibold tracking-wide text-dl-ink">Month</button>
              </Join>
            </Row>

            <Row title="Mask">
              <Mask shape="circle" className="h-20 w-20">
                <img src="https://picsum.photos/seed/mask1/160/160" alt="" className="h-full w-full object-cover" />
              </Mask>
              <Mask shape="hexagon" className="h-20 w-20">
                <img src="https://picsum.photos/seed/mask2/160/160" alt="" className="h-full w-full object-cover" />
              </Mask>
            </Row>

            <Row title="Stack">
              <Stack>
                <FloatingCard tagLabel="#tutoring" icon={<TutorIcon />} title="Calc II problem set" meta="Flash" price="₹350" />
                <FloatingCard tagLabel="#tech" icon={<TechIcon />} title="Fix WiFi driver" meta="Standard" price="₹500" />
              </Stack>
            </Row>
          </Section>

          <Section num="06" title="Feedback">
            <Row title="Alert">
              <div className="w-full max-w-md space-y-2.5">
                <Alert variant="info">Your gig is under review.</Alert>
                <Alert variant="success">Payout sent successfully.</Alert>
                <Alert variant="warning">Your listing expires in 2 hours.</Alert>
                <Alert variant="error">Payment failed - try again.</Alert>
              </div>
            </Row>

            <Row title="Loading">
              <Loading variant="spinner" />
              <Loading variant="ring" />
              <Loading variant="dots" />
            </Row>

            <Row title="Progress">
              <div className="w-full max-w-xs">
                <Progress value={65} />
              </div>
            </Row>

            <Row title="Radial Progress">
              <RadialProgress value={72} />
            </Row>

            <Row title="Skeleton">
              <div className="w-full max-w-xs space-y-2.5">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-24 w-full" />
              </div>
            </Row>

            <Row title="Toast">
              {toastVisible ? (
                <Toast variant="success" onDismiss={() => setToastVisible(false)}>
                  Gig posted successfully!
                </Toast>
              ) : (
                <Button size="sm" onClick={() => setToastVisible(true)}>Show toast again</Button>
              )}
            </Row>

            <Row title="Tooltip">
              <Tooltip content="Posts your gig live immediately">
                <Button size="sm">Hover me</Button>
              </Tooltip>
            </Row>
          </Section>
        </main>
      </div>
    </div>
  );
}

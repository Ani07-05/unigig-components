"use client";

import * as React from "react";
import { Button } from "@/components/4/button";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/components/4/dropdown";
import { FAB } from "@/components/4/fab";
import { Modal } from "@/components/4/modal";
import { Swap } from "@/components/4/swap";
import { ThemeController } from "@/components/4/theme-controller";

import { Accordion } from "@/components/4/accordion";
import { Avatar } from "@/components/4/avatar";
import { Badge } from "@/components/4/badge";
import { StatCard, GigRow, FeatureCard } from "@/components/4/card";
import { Carousel } from "@/components/4/carousel";
import { ChatBubble } from "@/components/4/chat-bubble";
import { Collapse } from "@/components/4/collapse";
import { Countdown } from "@/components/4/countdown";
import { Diff } from "@/components/4/diff";
import { Hover3DCard } from "@/components/4/hover-3d-card";
import { HoverGallery } from "@/components/4/hover-gallery";
import { Kbd } from "@/components/4/kbd";
import { List, ListItem } from "@/components/4/list";
import { Stat, StatItem } from "@/components/4/stat";
import { Status } from "@/components/4/status";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/4/table";
import { TextRotate } from "@/components/4/text-rotate";
import { Timeline } from "@/components/4/timeline";

import { Breadcrumbs } from "@/components/4/breadcrumbs";
import { Dock } from "@/components/4/dock";
import { Link } from "@/components/4/link";
import { Menu, MenuItem } from "@/components/4/menu";
import { Navbar } from "@/components/4/navbar";
import { Pagination } from "@/components/4/pagination";
import { Steps } from "@/components/4/steps";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/4/tab";

import { Checkbox } from "@/components/4/checkbox";
import { Fieldset } from "@/components/4/fieldset";
import { FileInput } from "@/components/4/file-input";
import { Filter } from "@/components/4/filter";
import { Label } from "@/components/4/label";
import { Radio } from "@/components/4/radio";
import { Range } from "@/components/4/range";
import { Rating } from "@/components/4/rating";
import { Select } from "@/components/4/select";
import { Input } from "@/components/4/input";
import { Textarea } from "@/components/4/textarea";
import { Toggle } from "@/components/4/toggle";
import { Validator } from "@/components/4/validator";

import { Artboard } from "@/components/4/artboard";
import { Divider } from "@/components/4/divider";
import { Drawer } from "@/components/4/drawer";
import { Footer } from "@/components/4/footer";
import { Hero } from "@/components/4/hero";
import { Indicator } from "@/components/4/indicator";
import { Join } from "@/components/4/join";
import { Mask } from "@/components/4/mask";
import { Stack } from "@/components/4/stack";

import { Alert } from "@/components/4/alert";
import { Loading } from "@/components/4/loading";
import { Progress } from "@/components/4/progress";
import { RadialProgress } from "@/components/4/radial-progress";
import { Skeleton } from "@/components/4/skeleton";
import { Toast } from "@/components/4/toast";
import { Tooltip } from "@/components/4/tooltip";

import { TutorIcon, TechIcon, MoveIcon, CheckIcon } from "@/components/4/icons";
import { Preview } from "@/components/4/preview";
import { PageHeader } from "@/components/4/page-header";
import { Search } from "@/components/4/search";

const COUNTDOWN_TARGET = new Date("2026-08-01T00:00:00");

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-mono text-[11px] font-black uppercase tracking-widest text-black/50">{title}</h3>
      <Preview>{children}</Preview>
    </div>
  );
}

function Category({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export default function ThemeFourPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [ratingValue, setRatingValue] = React.useState(3);
  const [filterValue, setFilterValue] = React.useState("All");
  const [page, setPage] = React.useState(3);
  const [toastVisible, setToastVisible] = React.useState(true);

  return (
    <main className="mx-auto max-w-4xl space-y-20 px-6 py-16 bg-white">
      <PageHeader title="Theme 4: Neobrutalism" description="Bold borders, yellow accents, hard shadows — every component in components/4" />

      <Category title="Actions">
        <Row title="Button">
          <div className="flex flex-wrap gap-3">
            <Button>Post a gig</Button>
            <Button variant="pink">Apply now</Button>
            <Button variant="white">Log in</Button>
            <Button variant="ghost">Cancel</Button>
            <Button disabled>Disabled</Button>
          </div>
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

        <Row title="FAB">
          <div className="relative h-20 w-full">
            <FAB icon={<CheckIcon />} className="absolute bottom-2 right-2" />
          </div>
        </Row>

        <Row title="Modal">
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <Modal open={modalOpen} onOpenChange={setModalOpen}>
            <h3 className="mb-2 text-lg font-black uppercase">Confirm posting</h3>
            <p className="mb-5 text-sm text-black/60">This gig will go live immediately once posted.</p>
            <Button onClick={() => setModalOpen(false)}>Got it</Button>
          </Modal>
        </Row>

        <Row title="Swap">
          <Swap on={<CheckIcon />} off={<span className="font-mono text-[11px] font-black">?</span>} />
        </Row>

        <Row title="Search">
          <div className="w-full max-w-sm">
            <Search placeholder="Search gigs..." />
          </div>
        </Row>

        <Row title="Theme Controller">
          <ThemeController />
        </Row>
      </Category>

      <Category title="Data Display">
        <Row title="Accordion">
          <div className="w-full max-w-md">
            <Accordion
              items={[
                { title: "How does escrow work?", content: "Funds are held until the gig is marked complete." },
                { title: "What is the commission?", content: "8% flat, taken from the final payout." },
                { title: "Can I cancel a gig?", content: "Yes, up until a helper accepts it." },
              ]}
            />
          </div>
        </Row>

        <Row title="Avatar">
          <div className="flex gap-3 items-center">
            <Avatar fallback="AK" size="sm" />
            <Avatar fallback="AK" />
            <Avatar fallback="AK" size="lg" />
          </div>
        </Row>

        <Row title="Badge">
          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="pink">Pink</Badge>
            <Badge variant="black">Black</Badge>
          </div>
        </Row>

        <Row title="Card - StatCard">
          <div className="flex gap-3">
            <StatCard label="Posted" value="12" />
            <StatCard label="In escrow" value="850" />
          </div>
        </Row>

        <Row title="Card - GigRow">
          <GigRow
            icon={<TechIcon />}
            title="Fix my laptop WiFi driver"
            meta="Standard · posted 2h ago"
            price="500"
            tag={<Badge>In progress</Badge>}
          />
        </Row>

        <Row title="Card - FeatureCard">
          <div className="flex gap-3 flex-wrap">
            <FeatureCard icon={<TechIcon />} tag="Category" title="Tech gigs" description="Hardware and software help" />
            <FeatureCard icon={<TutorIcon />} tag="Category" title="Tutoring" description="Study help and problem sets" />
          </div>
        </Row>

        <Row title="Carousel">
          <div className="w-full max-w-md">
            <Carousel
              items={[
                <div key="1" className="p-6 bg-[#ffe500] border-2 border-black font-black text-center">Slide 1</div>,
                <div key="2" className="p-6 bg-[#ff2d78] border-2 border-black font-black text-center text-white">Slide 2</div>,
                <div key="3" className="p-6 bg-black border-2 border-black font-black text-center text-[#ffe500]">Slide 3</div>,
              ]}
            />
          </div>
        </Row>

        <Row title="Chat Bubble">
          <div className="flex w-full max-w-sm flex-col gap-3">
            <ChatBubble message="Hey, are you still free to help move boxes?" side="left" name="Priya" />
            <ChatBubble message="Yep, on my way!" side="right" name="You" />
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
          <Countdown targetDate={COUNTDOWN_TARGET} />
        </Row>

        <Row title="Diff">
          <div className="w-full max-w-md">
            <Diff before={"price: 500\nstatus: open"} after={"price: 650\nstatus: active"} />
          </div>
        </Row>

        <Row title="Hover 3D Card">
          <Hover3DCard>
            <div className="flex h-32 w-48 items-center justify-center font-black text-lg">Tilt me</div>
          </Hover3DCard>
        </Row>

        <Row title="Hover Gallery">
          <HoverGallery
            items={[
              { src: "https://picsum.photos/seed/gig1/200/200", alt: "Gig 1" },
              { src: "https://picsum.photos/seed/gig2/200/200", alt: "Gig 2" },
              { src: "https://picsum.photos/seed/gig3/200/200", alt: "Gig 3" },
            ]}
          />
        </Row>

        <Row title="Kbd">
          <div className="flex gap-1">
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </div>
        </Row>

        <Row title="List">
          <div className="w-full max-w-sm">
            <List>
              <ListItem leading={<Avatar fallback="RS" size="sm" />} title="Fix WiFi driver" subtitle="Standard · 500" />
              <ListItem leading={<Avatar fallback="AK" size="sm" />} title="Calc II tutoring" subtitle="Flash · 350" />
            </List>
          </div>
        </Row>

        <Row title="Stat">
          <Stat>
            <StatItem label="Posted" value="12" />
            <StatItem label="In escrow" value="850" />
            <StatItem label="Completed" value="34" />
          </Stat>
        </Row>

        <Row title="Status">
          <div className="flex gap-3 items-center">
            <Status variant="online" pulse />
            <Status variant="busy" />
            <Status variant="away" />
            <Status variant="offline" />
          </div>
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
                <TableCell>500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Calc II tutoring</TableCell>
                <TableCell>Flash</TableCell>
                <TableCell>350</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Row>

        <Row title="Text Rotate">
          <span className="text-xl font-black uppercase">
            Post a{" "}<TextRotate words={["tutoring", "moving", "tech", "design"]} /> gig
          </span>
        </Row>

        <Row title="Timeline">
          <Timeline
            items={[
              { time: "2:00pm", title: "Gig posted", description: "Fix WiFi driver" },
              { time: "2:14pm", title: "Helper accepted" },
              { time: "3:40pm", title: "Marked complete" },
            ]}
          />
        </Row>
      </Category>

      <Category title="Navigation">
        <Row title="Breadcrumbs">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gigs", href: "/2" }, { label: "Fix WiFi driver" }]} />
        </Row>

        <Row title="Dock">
          <div className="relative h-28 w-full">
            <Dock
              items={[
                { icon: <TechIcon />, label: "Tech" },
                { icon: <TutorIcon />, label: "Tutor" },
                { icon: <MoveIcon />, label: "Moving" },
              ]}
            />
          </div>
        </Row>

        <Row title="Link">
          <Link href="/2">Default link</Link>
        </Row>

        <Row title="Menu">
          <div className="w-full max-w-48 border-2 border-black p-2">
            <Menu>
              <MenuItem icon={<TechIcon />}>Tech gigs</MenuItem>
              <MenuItem icon={<TutorIcon />}>Tutoring</MenuItem>
              <MenuItem icon={<MoveIcon />}>Moving</MenuItem>
            </Menu>
          </div>
        </Row>

        <Row title="Navbar">
          <div className="w-full">
            <Navbar
              start={<span className="font-black uppercase text-lg">UniGig</span>}
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

        <Row title="Tabs">
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
      </Category>

      <Category title="Data Input">
        <Row title="Checkbox">
          <label className="flex items-center gap-2 text-sm font-bold">
            <Checkbox defaultChecked /> Remember me
          </label>
        </Row>

        <Row title="Fieldset">
          <div className="w-full max-w-sm">
            <Fieldset legend="Payout details">
              <div className="space-y-3 pt-2">
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
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm font-bold">
              <Radio name="tier" defaultChecked /> Standard
            </label>
            <label className="flex items-center gap-2 text-sm font-bold">
              <Radio name="tier" /> Flash
            </label>
          </div>
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
            <Textarea placeholder="Describe the gig..." />
          </div>
        </Row>

        <Row title="Toggle">
          <Toggle defaultChecked />
        </Row>

        <Row title="Validator">
          <div className="w-full max-w-xs space-y-2">
            <Input placeholder="Email" />
            <Validator variant="error">Enter a valid email address</Validator>
          </div>
        </Row>
      </Category>

      <Category title="Layout">
        <Row title="Artboard">
          <Artboard size="phone" className="flex items-center justify-center">
            <span className="font-mono text-xs text-black/40">phone artboard</span>
          </Artboard>
        </Row>

        <Row title="Divider">
          <div className="w-full max-w-sm">
            <Divider>OR</Divider>
          </div>
        </Row>

        <Row title="Drawer">
          <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <h3 className="mb-2 text-lg font-black uppercase">Filters</h3>
            <p className="text-black/60 text-sm">Drawer content goes here.</p>
          </Drawer>
        </Row>

        <Row title="Footer">
          <div className="w-full">
            <Footer links={[{ label: "About", href: "/2" }, { label: "Support", href: "/2" }]}>
              2026 UniGig
            </Footer>
          </div>
        </Row>

        <Row title="Hero">
          <div className="w-full">
            <Hero eyebrow="Campus gigs" title="Get things done, get paid" description="Post a gig or pick one up in minutes.">
              <Button>Post a gig</Button>
              <Button variant="white">Browse gigs</Button>
            </Hero>
          </div>
        </Row>

        <Row title="Indicator">
          <Indicator badge={<span className="flex h-5 w-5 items-center justify-center bg-[#ff2d78] border-2 border-black text-[10px] font-black text-white">3</span>}>
            <Avatar fallback="AK" />
          </Indicator>
        </Row>

        <Row title="Join">
          <Join>
            <button className="px-4 py-2 text-[13px] font-black bg-white">Day</button>
            <button className="px-4 py-2 text-[13px] font-black bg-[#ffe500]">Week</button>
            <button className="px-4 py-2 text-[13px] font-black bg-white">Month</button>
          </Join>
        </Row>

        <Row title="Mask">
          <Mask className="h-20 w-20">
            <img src="https://picsum.photos/seed/mask1/160/160" alt="" className="h-full w-full object-cover" />
          </Mask>
        </Row>

        <Row title="Stack">
          <Stack>
            <div className="p-4 font-black">Gig 1: Calc II tutoring</div>
            <div className="p-4 font-black">Gig 2: Fix WiFi driver</div>
          </Stack>
        </Row>
      </Category>

      <Category title="Feedback">
        <Row title="Alert">
          <div className="w-full max-w-md space-y-2">
            <Alert variant="info">Your gig is under review.</Alert>
            <Alert variant="success">Payout sent successfully.</Alert>
            <Alert variant="warning">Your listing expires in 2 hours.</Alert>
            <Alert variant="error">Payment failed - try again.</Alert>
          </div>
        </Row>

        <Row title="Loading">
          <div className="flex gap-4 items-center">
            <Loading variant="spinner" />
            <Loading variant="dots" />
          </div>
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
          <div className="w-full max-w-xs space-y-2">
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
      </Category>
    </main>
  );
}

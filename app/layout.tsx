import type { Metadata } from "next";
import { Space_Mono, IBM_Plex_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Space Mono is on Google Fonts, so next/font handles it (self-hosted,
// zero layout shift). Cabinet Grotesk and General Sans are Fontshare-only -
// loaded via <link> below and referenced through the --font-cabinet /
// --font-general variables set in globals.css.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// Theme 2 (corporate) typography - IBM Plex Sans/Mono, both on Google Fonts.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

// Theme 3 (dispatch ledger) display type - a lone, warm italic-capable
// serif for headline moments, everything else in that theme stays mono.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "UniGig UI",
  description: "UniGig's component library - cream base, hard borders, flat shadows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${plexSans.variable} ${plexMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=general-sans@400,500,600&display=swap"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

// Space Mono is on Google Fonts, so next/font handles it (self-hosted,
// zero layout shift). Cabinet Grotesk and General Sans are Fontshare-only —
// loaded via <link> below and referenced through the --font-cabinet /
// --font-general variables set in globals.css.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "UniGig UI",
  description: "UniGig's component library — cream base, hard borders, flat shadows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
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

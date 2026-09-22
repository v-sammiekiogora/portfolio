import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sammy Mati — Product, technology, data, and AI",
    template: "%s — Sammy Mati",
  },
  description: site.description,
  openGraph: {
    title: "Sammy Mati",
    description: site.description,
    url: site.url,
    siteName: "Sammy Mati",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: `${site.url}/sammy-skyline.png`,
        width: 1536,
        height: 1024,
        alt: "Portrait illustration of Sammy Mati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sammy Mati",
    description: site.description,
    images: [`${site.url}/sammy-skyline.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

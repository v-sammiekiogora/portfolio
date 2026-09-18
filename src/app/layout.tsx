import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
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
  metadataBase: new URL("https://sammymati.com"),
  title: {
    default: "Sammy Mati — Product, technology, and curiosity",
    template: "%s — Sammy Mati",
  },
  description:
    "Sammy Mati is a product and technology person in Nairobi, thinking about learning, data, AI, UX, and how things could work better.",
  openGraph: {
    title: "Sammy Mati",
    description:
      "Product, technology, data, AI, and the things I am curious about.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sammy Mati",
    description:
      "Product, technology, data, AI, and the things I am curious about.",
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

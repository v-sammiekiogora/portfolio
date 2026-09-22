import type { Metadata } from "next";
import { Currently } from "@/components/Currently";
import { PageHeader } from "@/components/PageHeader";
import { PhotoStrip } from "@/components/PhotoStrip";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Sammy Mati is building, thinking about, learning, exploring, reading, and doing outside work.",
  alternates: {
    canonical: `${site.url}/now`,
  },
};

export default function NowPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Now · Updated September 2026"
        title="What I’m up to"
        intro="A lightweight snapshot of where my attention is going — not a productivity report, just a useful marker in time."
      />
      <section className="site-shell pb-16 sm:pb-24">
        <Currently />
      </section>
      <PhotoStrip />
    </main>
  );
}

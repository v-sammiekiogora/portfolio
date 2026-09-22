import type { Metadata } from "next";
import { Currently } from "@/components/Currently";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Sammy Kiogora is building, thinking about, learning, exploring, reading, and doing outside work.",
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
      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="eyebrow">Currently</p>
          <p className="font-display text-2xl italic text-accent">
            Subject to curiosity.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-lg sm:text-xl">
          <span>Coffee + product discovery</span>
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
          <span>Learning data science</span>
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
          <span>Experimenting with AI</span>
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
          <span>Football</span>
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
          <span>The next hike</span>
        </div>
      </section>
    </main>
  );
}

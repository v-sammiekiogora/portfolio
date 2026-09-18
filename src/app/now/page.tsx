import type { Metadata } from "next";
import { Currently } from "@/components/Currently";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Now",
  description: "What Sammy Mati is working on, learning, and exploring now.",
};

export default function NowPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Now · Updated September 2026"
        title="What I’m up to"
        intro="A small, editable snapshot of where my attention is going these days."
      />
      <section className="site-shell pb-24">
        <Currently />
      </section>
      <section className="site-shell section-rule grid gap-8 py-20 sm:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">Currently</p>
          <p className="font-display text-3xl italic text-accent">
            Subject to curiosity.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-xl sm:text-3xl">
          <span>Coffee + product discovery</span>
          <span className="text-accent">✦</span>
          <span>Learning data science</span>
          <span className="text-accent">✦</span>
          <span>Experimenting with AI</span>
          <span className="text-accent">✦</span>
          <span>Football</span>
          <span className="text-accent">✦</span>
          <span>The next hike</span>
        </div>
      </section>
    </main>
  );
}

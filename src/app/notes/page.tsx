import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { noteTopics } from "@/data/notes";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "A future home for Sammy Mati’s notes on products, learning, AI, data, UX, technology, and building.",
  alternates: {
    canonical: `${site.url}/notes`,
  },
};

export default function NotesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Notes"
        title="Things I’ve been thinking about"
        intro="This will be a place for observations, working theories, discoveries, and lessons from making things. It is deliberately quiet until there is something real to publish."
      />

      <section className="site-shell pb-16 sm:pb-24">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-[0.65fr_1.35fr]">
          <div className="bg-ink p-6 text-paper sm:p-10">
            <p className="eyebrow">No posts yet</p>
            <h2 className="display text-4xl sm:text-5xl">
              An empty page can be honest.
            </h2>
          </div>
          <div className="bg-paper p-6 sm:p-10">
            <p className="max-w-2xl text-lg leading-relaxed">
              I’m building a native writing archive rather than filling this
              page with article-shaped placeholders. When a note is ready, it
              will appear here with a clear date and a useful point of view.
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="eyebrow">Likely threads</p>
          <h2 className="display text-4xl">The notebook’s edges.</h2>
        </div>
        <ul className="grid gap-px bg-line sm:grid-cols-2">
          {noteTopics.map((topic, index) => (
            <li className="bg-paper p-5" key={topic}>
              <span className="font-display italic text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 font-display text-2xl">{topic}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PhotoStrip } from "@/components/PhotoStrip";

export const metadata: Metadata = {
  title: "About",
  description:
    "A little more about Sammy Mati, a product and technology person in Nairobi.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title="A person, not a profile"
        intro="I’m Sammy Mati. I ask a lot of questions, notice small details, and enjoy turning complicated things into something people can actually use."
      />
      <section className="site-shell section-rule grid gap-8 py-12 sm:grid-cols-[1fr_2fr] sm:py-16">
        <div>
          <p className="font-display text-2xl italic">
            Curiosity is the through line.
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Work is one part of the story. The questions usually spill into
            everything else.
          </p>
        </div>
        <div className="max-w-3xl space-y-6 text-lg leading-[1.7]">
          <p>
            I’ve always liked figuring out how things work — and, perhaps more
            importantly, why they sometimes don’t. I can spend a long time
            pulling apart a product decision, following a strange pattern in
            some data, or noticing the one step in an experience that makes
            everything after it harder.
          </p>
          <p>
            Nairobi is home. It’s where I build, learn, watch the city move, and
            keep finding reminders that useful technology has to understand the
            real world around it — not an imaginary, frictionless version of
            one.
          </p>
          <p>
            Over nearly ten years, that curiosity has taken me through product,
            technology, UX, data, and AI. These days, some of it goes into
            GitHub Learn, where I think about how developers discover learning
            and move from wanting to know something to actually making
            something.
          </p>
          <p>
            I’m less interested in technology for its own sake than in what it
            helps people understand, change, or create. I like thoughtful
            interfaces, honest constraints, useful data, and products that
            respect people’s time.
          </p>
          <p>
            Curiosity doesn’t clock out. Away from a screen, you’ll find me
            watching football, looking for the next hiking route, exploring an
            interesting place, or paying attention to a detail I nearly walked
            past.
          </p>
        </div>
      </section>
      <section className="site-shell section-rule py-12 sm:py-16">
        <p className="eyebrow">A few things that feel like me</p>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Questions", "Usually more of them than answers — which is the interesting part."],
            ["Making", "The quickest way I know to turn a vague thought into something real."],
            ["Movement", "A football match, a trail, a walk through somewhere unfamiliar."],
            ["Noticing", "Interfaces, patterns, people, and the details hiding in plain sight."],
          ].map(([title, copy], index) => (
            <article className="min-h-48 bg-paper p-5" key={title}>
              <p className="font-display text-xl italic text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-8 font-display text-2xl tracking-[-0.035em]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <PhotoStrip />
      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-2">
        <h2 className="display text-4xl sm:text-5xl">Want the resume version?</h2>
        <p className="max-w-lg self-end text-base">
          The chronology lives on{" "}
          <a
            className="text-link font-bold"
            href="https://www.linkedin.com/in/sammy-mati/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          . This space is for the more interesting bits in between.
        </p>
      </section>
    </main>
  );
}

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
        intro="I’m Sammy — a technology and product person from Nairobi, trying to stay curious and make useful things."
      />
      <section className="site-shell section-rule grid gap-10 py-16 sm:grid-cols-[1fr_2fr] sm:py-24">
        <p className="font-display text-3xl italic">
          Work is one part of the story.
        </p>
        <div className="max-w-3xl space-y-7 text-xl leading-[1.75]">
          <p>
            For nearly ten years, I’ve moved across product, technology, UX,
            data, and AI. Not because I was collecting labels, but because I
            kept following the questions: What are people trying to do? Where
            are they getting stuck? What would make this clearer or more useful?
          </p>
          <p>
            Today I’m a Program / Product Manager working on GitHub Learn. I
            think about how developers discover learning, navigate it, and turn
            an idea into something they can build.
          </p>
          <p>
            I care about products that respect people’s attention. I like
            details, honest constraints, thoughtful interfaces, and data that
            helps us ask better questions rather than pretend we have perfect
            answers.
          </p>
          <p>
            Outside that, there is football, hiking, coffee, Nairobi, and a
            growing list of things I want to learn.
          </p>
        </div>
      </section>
      <PhotoStrip />
      <section className="site-shell section-rule grid gap-8 py-20 sm:grid-cols-2">
        <h2 className="display text-5xl sm:text-7xl">Want the resume version?</h2>
        <p className="max-w-lg self-end text-lg">
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

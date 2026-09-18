import Link from "next/link";

export function Intro() {
  return (
    <section className="site-shell section-rule grid gap-8 py-16 sm:grid-cols-[1fr_2fr] sm:py-20">
      <div>
        <p className="eyebrow">A bit about me</p>
        <p className="font-display text-2xl italic">Mostly curious.</p>
      </div>
      <div className="max-w-3xl space-y-5 text-xl leading-[1.65] sm:text-[1.5rem]">
        <p>
          I’m a technology person from Nairobi. My career has grown around
          software, products, and people — the useful, complicated space where
          those three meet.
        </p>
        <p>
          I work on GitHub Learn, thinking about discovery, learning, and
          making. I’m interested in technology, product, data, AI — and in
          questions that lead somewhere useful.
        </p>
        <Link className="text-link text-base font-bold" href="/about">
          More about me →
        </Link>
      </div>
    </section>
  );
}

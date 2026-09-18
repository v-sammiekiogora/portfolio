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
          I’m Sammy Mati, a curious builder from Nairobi. I’m drawn to the
          hidden logic behind everyday things: the reason an interface feels
          obvious, a system feels frustrating, or one good question changes
          the direction of an idea.
        </p>
        <p>
          My interests move between product, technology, data, AI, and people.
          Some of that curiosity goes into GitHub Learn. The rest goes into
          small experiments, learning new things, football, long walks, and
          wondering what I should make next.
        </p>
        <Link className="text-link text-base font-bold" href="/about">
          More about me →
        </Link>
      </div>
    </section>
  );
}

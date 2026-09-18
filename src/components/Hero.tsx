"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const thoughts = [
  "building things.",
  "thinking about products.",
  "asking too many questions.",
  "curious about AI.",
  "learning data.",
  "from Nairobi.",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % thoughts.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-hero site-shell">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow !mb-0">Nairobi, Kenya · 1°17′S 36°49′E</p>
        <p className="hidden text-[0.68rem] font-bold tracking-[0.08em] uppercase sm:block">
          Product · Technology · Data · AI
        </p>
      </div>

      <div className="grid items-end gap-6 lg:grid-cols-[1fr_20rem]">
        <h1 className="display text-[clamp(4.3rem,11.5vw,10.2rem)]">
          Sammy
          <br />
          Mati<span className="text-accent">.</span>
        </h1>
        <div className="pb-2 lg:pb-5">
          <p className="max-w-md text-lg leading-relaxed sm:text-xl">
            I like figuring out how things work, why they don’t, and how they
            could work better.
          </p>
          <p className="mt-5 text-xl">
            <span className="sr-only">Currently exploring new ideas.</span>
            <span aria-hidden="true">
              Currently{" "}
              <span
                className="hero-word font-display italic"
                key={thoughts[index]}
              >
                {thoughts[index]}
              </span>
            </span>
          </p>
        </div>
      </div>

      <nav className="home-links" aria-label="Featured links">
        <Link href="/about">
          <span>01 · A little more human</span>
          <strong>About me</strong>
          <span aria-hidden="true">→</span>
        </Link>
        <a
          href="https://medium.com/design-bootcamp/ux-case-study-designing-an-auto-garage-mobile-app-4abc11be152"
          target="_blank"
          rel="noreferrer"
        >
          <span>02 · Product / UX / Africa</span>
          <strong>Autobuddy case study</strong>
          <span aria-hidden="true">↗</span>
        </a>
        <Link href="/now">
          <span>03 · Where attention is going</span>
          <strong>What I’m up to</strong>
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </section>
  );
}

"use client";

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
    <section className="site-shell flex min-h-[76svh] flex-col justify-between pb-10 pt-16 sm:pt-24">
      <p className="eyebrow">Nairobi, Kenya · 1°17′S 36°49′E</p>
      <h1 className="display max-w-[1100px] text-[clamp(4.5rem,13.5vw,11.5rem)]">
        Hi, I’m
        <br />
        Sammy Mati<span className="text-accent">.</span>
      </h1>
      <div className="grid items-end gap-6 border-t border-line pt-5 sm:grid-cols-2">
        <p className="max-w-lg text-lg leading-relaxed sm:text-xl">
          I like figuring out how things work, why they don’t work, and how
          they could work better.
        </p>
        <p className="justify-self-start text-2xl sm:justify-self-end sm:text-3xl">
          <span className="sr-only">Currently exploring new ideas.</span>
          <span aria-hidden="true">
          Currently{" "}
          <span className="hero-word font-display italic" key={thoughts[index]}>
            {thoughts[index]}
          </span>
          </span>
        </p>
      </div>
    </section>
  );
}

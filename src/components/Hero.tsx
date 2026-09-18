"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const thoughts = [
  "building things.",
  "thinking about products.",
  "asking too many questions.",
  "curious about AI.",
  "learning data.",
  "planning the next hike.",
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

      <h1 className="display whitespace-nowrap text-[clamp(3.4rem,8.8vw,7.2rem)]">
        Sammy Mati<span className="text-accent">.</span>
      </h1>

      <div className="home-dashboard">
        <div className="home-statement">
          <p className="eyebrow">The short version</p>
          <p className="max-w-xl text-base leading-relaxed sm:text-lg">
            I’m a product and technology person. For over ten years, I’ve
            worked where software, UX, data, AI, and people overlap. Today, I
            help shape how developers discover and learn on GitHub Learn.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            I like useful questions, thoughtful interfaces, football, long
            walks, and figuring out why things don’t work — then making them a
            little better.
          </p>
          <p className="mt-4 border-t border-line pt-3 text-base">
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

        <div
          className="home-portrait"
        >
          <Image
            src="/sammy-skyline.png"
            alt="Sammy Mati smiling at his desk, surrounded by notes, books, plants, and a city view."
            fill
            priority
            sizes="(min-width: 760px) 60vw, 100vw"
          />
        </div>
      </div>

      <dl className="home-glance" aria-label="Sammy Mati at a glance">
        <div>
          <dt>Working on</dt>
          <dd>Developer learning and discovery</dd>
        </div>
        <div>
          <dt>Learning</dt>
          <dd>Data science and useful AI</dd>
        </div>
        <div>
          <dt>Beyond the screen</dt>
          <dd>Football, hiking, interesting places</dd>
        </div>
      </dl>
    </section>
  );
}

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
            I’m a Nairobi-based product and technology person. For nearly a
            decade, I’ve worked where software, UX, data, AI, and people
            overlap. Today, I help shape how developers discover and learn on
            GitHub Learn.
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
          className="home-illustration"
          role="img"
          aria-label="An abstract map of Sammy Mati’s curiosity, connecting Nairobi, product ideas, data, football, and the next hike."
        >
          <svg viewBox="0 0 640 360" aria-hidden="true">
            <rect className="illustration-paper" x="0" y="0" width="640" height="360" />
            <circle className="illustration-sun" cx="516" cy="74" r="42" />
            <path
              className="illustration-hills"
              d="M0 278 C90 212 151 265 224 223 C304 178 352 266 427 216 C506 164 565 205 640 155 V360 H0 Z"
            />
            <path
              className="illustration-route"
              d="M75 282 C118 231 181 312 231 254 C277 202 328 257 367 198 C406 139 463 176 515 116"
            />
            <g className="illustration-node">
              <circle cx="76" cy="282" r="10" />
              <circle cx="231" cy="254" r="10" />
              <circle cx="367" cy="198" r="10" />
              <circle cx="515" cy="116" r="10" />
            </g>
            <g className="illustration-city">
              <path d="M100 304 V237 H125 V304 M131 304 V264 H162 V304 M171 304 V220 H198 V304" />
              <path d="M179 220 V194 M174 194 H184 M106 251 H119 M178 236 H191 M178 251 H191 M178 266 H191" />
            </g>
            <g className="illustration-ball">
              <circle cx="304" cy="304" r="28" />
              <path d="M304 288 L319 299 L313 316 H295 L289 299 Z M304 288 V278 M319 299 L329 294 M313 316 L320 326 M295 316 L287 326 M289 299 L279 294" />
            </g>
            <g className="illustration-data">
              <path d="M424 285 V253 M447 285 V230 M470 285 V262 M493 285 V210" />
              <path d="M413 285 H505" />
            </g>
            <text x="92" y="328">NAIROBI</text>
            <text x="352" y="174">WHY?</text>
            <text x="486" y="52">NEXT</text>
          </svg>
          <p>Ideas rarely travel in straight lines.</p>
        </div>
      </div>
    </section>
  );
}

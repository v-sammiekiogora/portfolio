import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero-copy">
        <p className="eyebrow">Nairobi, Kenya · Product and technology</p>
        <h1 className="display hero-title">
          Hi, I’m Sammy<span className="text-accent">.</span>
        </h1>
        <p className="display hero-statement">
          I build products at the intersection of technology, data, AI and
          people.
        </p>
        <p className="hero-intro">
          Over 10 years across software, QA, product management, UX, data, AI,
          developer experiences, and technology platforms.
        </p>
        <p className="hero-focus">
          Currently shaping how developers discover and learn on GitHub.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/work">
            View my work <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-secondary" href="/about">
            My story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          src={`${basePath}/sammy-skyline.png`}
          alt="Sammy Mati smiling at his desk, surrounded by product notes, books, plants, and a city view."
          fill
          priority
          sizes="(min-width: 900px) 48vw, 100vw"
        />
      </div>
    </section>
  );
}

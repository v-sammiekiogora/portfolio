import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  alternates: {
    canonical: `${site.url}/`,
  },
};

const selectedWork = workItems.filter((item) => item.slug === "github-learn");

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    email: `mailto:${site.email}`,
    homeLocation: {
      "@type": "Place",
      name: site.location,
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Product management",
      "Developer experiences",
      "Data",
      "Artificial intelligence",
      "User experience",
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      <section className="site-shell section-rule compact-section">
        <div className="compact-intro">
          <div>
            <p className="eyebrow">In brief</p>
            <h2 className="display compact-title">
              Product thinking grounded in how things actually work.
            </h2>
          </div>
          <p className="compact-copy">
            I like making complicated systems clearer and more useful —
            following the evidence, understanding the trade-offs, and staying
            close to the people using the product.
          </p>
        </div>
        <dl className="fact-strip">
          <div>
            <dt>10+</dt>
            <dd>years across product and technology</dd>
          </div>
          <div>
            <dt>Now</dt>
            <dd>shaping discovery and learning on GitHub</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>technology, data, AI, and people</dd>
          </div>
        </dl>
      </section>

      <section className="site-shell section-rule compact-section">
        <div className="compact-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display compact-title">A few things worth opening.</h2>
          </div>
          <Link className="text-link compact-link" href="/work">
            View all work →
          </Link>
        </div>
        <div className="work-list">
          {selectedWork.map((item, index) => (
            <article className="work-list-item" key={item.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>
                  <Link href={`/work/${item.slug}`}>{item.title}</Link>
                </h3>
              </div>
              <p>{item.summary}</p>
              <Link
                className="work-list-arrow"
                href={`/work/${item.slug}`}
                aria-label={`View ${item.title}`}
              >
                →
              </Link>
            </article>
          ))}
          <article className="work-list-item">
            <span>02</span>
            <div>
              <p className="eyebrow">Product · UX · Africa</p>
              <h3>
                <a href={site.autobuddy} target="_blank" rel="noreferrer">
                  Autobuddy
                </a>
              </h3>
            </div>
            <p>
              A mobile-first automotive garage management concept with a
              published UX case study.
            </p>
            <a
              className="work-list-arrow"
              href={site.autobuddy}
              target="_blank"
              rel="noreferrer"
              aria-label="Read the Autobuddy case study"
            >
              ↗
            </a>
          </article>
        </div>
      </section>

      <section className="site-shell section-rule compact-section compact-close">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 className="display compact-title">Curious, evidence-led, practical.</h2>
          <p className="compact-copy">
            Start with the problem. Make the complexity visible. Stay close to
            the people using the product. Ship, learn, and improve.
          </p>
          <Link className="text-link compact-link" href="/about">
            More about me →
          </Link>
        </div>
        <div>
          <p className="eyebrow">Right now</p>
          <h2 className="display compact-title">GitHub Learn.</h2>
          <p className="compact-copy">
            Thinking about how developers discover what to learn and move from
            curiosity to making.
          </p>
          <Link className="text-link compact-link" href="/now">
            What I’m up to →
          </Link>
        </div>
      </section>
    </main>
  );
}

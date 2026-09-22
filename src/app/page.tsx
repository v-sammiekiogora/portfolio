import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionIntro } from "@/components/SectionIntro";
import { WorkCard } from "@/components/WorkCard";
import { noteTopics } from "@/data/notes";
import { nowItems } from "@/data/now";
import { site, waysOfWorking } from "@/data/site";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  alternates: {
    canonical: `${site.url}/`,
  },
};

const selectedWork = workItems.filter((item) => item.featured);

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
      "Product leadership",
      "Developer experiences",
      "Artificial intelligence",
      "Data",
      "User experience",
      "Technology platforms",
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      <section className="site-section site-shell section-rule">
        <SectionIntro
          eyebrow="Selected work"
          title="Work with a story behind it"
          copy="A growing collection of product decisions, systems thinking, and lessons. In-progress stories say so plainly."
          href="/work"
          linkLabel="See all work"
        />
        <div className="work-grid">
          {selectedWork.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="site-section site-shell section-rule">
        <SectionIntro
          eyebrow="What can be said today"
          title="By the numbers, without the theatre"
          copy="Only facts already supported by this site are shown here. Product-impact metrics will be added when they can be sourced."
        />
        <dl className="number-grid">
          <div>
            <dt>10+</dt>
            <dd>years across software, QA, product, data, AI, and UX</dd>
            <small>Source: Sammy’s current career summary</small>
          </div>
          <div>
            <dt>1</dt>
            <dd>published external case study: Autobuddy</dd>
            <small>Source: published Medium case study</small>
          </div>
          <div>
            <dt>5</dt>
            <dd>selected work stories being documented</dd>
            <small>Source: this portfolio’s work index</small>
          </div>
        </dl>
      </section>

      <section className="site-section site-shell section-rule">
        <SectionIntro
          eyebrow="How I work"
          title="Curious, evidence-led, and close to the problem"
          copy="Not a rigid process. More a set of habits that help teams see clearly and keep moving."
        />
        <ol className="principle-list">
          {waysOfWorking.map((principle, index) => (
            <li key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-section site-shell split-preview section-rule">
        <div>
          <p className="eyebrow">Currently</p>
          <h2 className="display section-title">Attention, right now</h2>
          <p className="preview-copy">{nowItems[0].value}</p>
          <Link className="text-link section-link" href="/now">
            See what I’m up to <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div>
          <p className="eyebrow">Notes</p>
          <h2 className="display section-title">Writing, when it earns a place</h2>
          <p className="preview-copy">
            No manufactured thought leadership. This space is ready for useful
            observations on {noteTopics.slice(0, 3).join(", ")} and more.
          </p>
          <Link className="text-link section-link" href="/notes">
            Visit the empty notebook <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="site-section site-shell about-preview section-rule">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="display section-title">A person, not a profile</h2>
        </div>
        <div>
          <p>
            I ask a lot of questions, notice small details, and enjoy turning
            complicated things into something people can actually use.
          </p>
          <Link className="button button-secondary" href="/about">
            Read my story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="contact-panel" className="contact-panel">
        <div className="site-shell contact-panel-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display section-title">Have a thoughtful question?</h2>
          </div>
          <div>
            <p>
              Email is the simplest way to reach me. LinkedIn and GitHub are
              there if you want more context first.
            </p>
            <div className="button-row">
              <a className="button button-light" href={`mailto:${site.email}`}>
                Email Sammy <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link light-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link light-link"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

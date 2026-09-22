import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkCard } from "@/components/WorkCard";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product and technology work by Sammy Mati, with honest notes about what is documented and what is still being shaped.",
  alternates: {
    canonical: `${site.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Selected work"
        title="Work, with the rough edges left in"
        intro="Product stories about learning, developer experiences, platforms, and commerce. I only claim what I can explain; the rest is clearly marked as work in progress."
      />

      <section className="site-shell pb-16 sm:pb-24" aria-label="Case studies">
        <div className="work-grid">
          {workItems.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="eyebrow">Also in the archive</p>
          <h2 className="display text-4xl sm:text-5xl">Autobuddy.</h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed">
            A mobile-first automotive garage management concept designed with
            African contexts in mind. This is the one project with an existing
            published case study.
          </p>
          <ul className="tag-list" aria-label="Autobuddy topics">
            <li>Product</li>
            <li>UX</li>
            <li>Africa</li>
          </ul>
          <a
            className="text-link font-extrabold"
            href={site.autobuddy}
            target="_blank"
            rel="noreferrer"
          >
            Read the Autobuddy case study ↗
          </a>
        </div>
      </section>

      <section className="contact-panel">
        <div className="site-shell contact-panel-inner">
          <div>
            <p className="eyebrow">The chronology</p>
            <h2 className="display text-4xl sm:text-6xl">
              Want the resume version?
            </h2>
          </div>
          <div>
            <p>
              LinkedIn has the career timeline. This space is for the product
              thinking, decisions, and lessons around the work.
            </p>
            <a
              className="button button-light"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

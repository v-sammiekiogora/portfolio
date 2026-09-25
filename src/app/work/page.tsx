import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work by Sammy Mati across developer learning and automotive services.",
  alternates: {
    canonical: `${site.url}/work`,
  },
};

const githubLearn = workItems.find((item) => item.slug === "github-learn");
const wowzi = workItems.find((item) => item.slug === "creator-commerce");

if (!githubLearn || !wowzi) {
  throw new Error("GitHub Learn and Wowzi work items are required.");
}

const projects = [
  {
    title: githubLearn.title,
    eyebrow: githubLearn.eyebrow,
    summary: githubLearn.summary,
    status: githubLearn.status,
    href: `/work/${githubLearn.slug}`,
  },
  {
    title: "AutoBuddy",
    eyebrow: "Product · UX · Africa",
    summary:
      "A mobile-first automotive garage management concept designed with African contexts in mind.",
    status: "Published case study",
    href: "/work/autobuddy",
  },
  {
    title: wowzi.title,
    eyebrow: wowzi.eyebrow,
    summary: wowzi.summary,
    status: wowzi.status,
    href: `/work/${wowzi.slug}`,
  },
] as const;

export default function WorkPage() {
  return (
    <main id="main">
      <header className="site-shell work-index-header">
        <p className="eyebrow">Selected work</p>
        <div className="work-index-intro">
          <h1 className="display">
            Work<span className="text-accent">.</span>
          </h1>
          <p>
            Product stories spanning developer learning, creator commerce, and
            automotive services—shared with the context and evidence available.
          </p>
        </div>
      </header>

      <section className="site-shell work-index" aria-labelledby="work-index-title">
        <h2 className="sr-only" id="work-index-title">
          Project archive
        </h2>
        {projects.map((project, index) => (
          <article className="work-index-row" key={project.href}>
            <div className="work-index-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="work-index-title">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>
                <Link href={project.href}>{project.title}</Link>
              </h3>
            </div>
            <div className="work-index-detail">
              <p className="work-index-summary">{project.summary}</p>
              <p className="work-index-status">{project.status}</p>
            </div>
            <Link
              className="work-index-link"
              href={project.href}
              aria-label={`Read the ${project.title} case study`}
            >
              <span>View case study</span>
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="site-shell work-index-close">
        <p className="eyebrow">The short version</p>
        <div>
          <h2 className="display">Prefer the one-page read?</h2>
          <a
            className="text-link"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            View my resume on LinkedIn ↗
          </a>
        </div>
      </section>
    </main>
  );
}

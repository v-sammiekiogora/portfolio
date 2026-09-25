import Link from "next/link";
import styles from "./RelatedWork.module.css";

const projects = [
  {
    slug: "creator-commerce",
    title: "Wowzi",
    eyebrow: "Lead Product Management · Creator commerce",
    summary:
      "Evolving an established two-sided platform—and the way it was built.",
    href: "/work/creator-commerce",
  },
  {
    slug: "autobuddy",
    title: "AutoBuddy",
    eyebrow: "Product · UX · Africa",
    summary:
      "Turning an auto garage’s everyday operations into one product concept.",
    href: "/work/autobuddy",
  },
  {
    slug: "github-learn",
    title: "GitHub Learn",
    eyebrow: "Product · Developer learning · AI",
    summary:
      "Shaping how developers discover learning and move from curiosity to making.",
    href: "/work/github-learn",
  },
];

export function RelatedWork({ currentSlug }: { currentSlug: string }) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 2);

  return (
    <section
      aria-labelledby="related-work-title"
      className={`site-shell ${styles.related}`}
    >
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">Keep exploring</p>
          <h2 className="display" id="related-work-title">
            Related work.
          </h2>
        </div>
        <Link className="text-link" href="/work">
          All work →
        </Link>
      </div>
      <div className={styles.grid}>
        {relatedProjects.map((project, index) => (
          <Link
            className={styles.project}
            href={project.href}
            key={project.slug}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{project.eyebrow}</p>
              <h3 className="display">{project.title}</h3>
              <small>{project.summary}</small>
            </div>
            <strong aria-hidden="true">↗</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

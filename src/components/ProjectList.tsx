import { projects } from "@/data/projects";

export function ProjectList({
  limit,
  compact = false,
}: {
  limit?: number;
  compact?: boolean;
}) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div>
      {visibleProjects.map((project) => (
        <article
          className={`project-row grid gap-7 border-t border-line ${
            compact
              ? "py-8 sm:grid-cols-[4rem_1fr_12rem] sm:py-10"
              : "py-8 sm:grid-cols-[3rem_1fr_0.5fr] sm:py-10"
          }`}
          key={project.number}
        >
          <p className="font-display text-2xl italic text-accent">
            {project.number}
          </p>
          <div>
            <ul
              className="mb-5 flex flex-wrap gap-2 text-[0.66rem] font-extrabold tracking-[0.1em] uppercase"
              aria-label="Project topics"
            >
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <h3 className="display mb-4 text-4xl sm:text-5xl">
              {project.title}
            </h3>
            <p className="max-w-xl text-lg leading-relaxed">
              {project.summary}
            </p>
            {!compact && (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                {project.detail}
              </p>
            )}
            {project.href && (
              <a
                className="text-link mt-7 inline-block text-sm font-bold"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel} ↗
              </a>
            )}
          </div>
          <div
            className={`project-preview text-ink ${
              compact ? "min-h-40" : ""
            }`}
            aria-hidden="true"
          />
        </article>
      ))}
    </div>
  );
}

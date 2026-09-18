import { projects } from "@/data/projects";

export function ProjectList({ limit }: { limit?: number }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div>
      {visibleProjects.map((project) => (
        <article
          className="project-row grid gap-7 border-t border-line py-10 sm:grid-cols-[4rem_1fr_0.65fr] sm:py-14"
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
            <h3 className="display mb-5 text-5xl sm:text-7xl">
              {project.title}
            </h3>
            <p className="max-w-xl text-xl leading-relaxed">
              {project.summary}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {project.detail}
            </p>
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
            className="project-preview text-ink"
            aria-hidden="true"
          />
        </article>
      ))}
    </div>
  );
}

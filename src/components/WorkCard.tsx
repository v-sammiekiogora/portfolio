import Link from "next/link";
import type { WorkItem } from "@/data/work";

export function WorkCard({
  item,
  index,
}: {
  item: WorkItem;
  index: number;
}) {
  return (
    <article className="work-card">
      <div className="work-card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{item.status}</span>
      </div>
      <p className="eyebrow">{item.eyebrow}</p>
      <h3>
        <Link href={`/work/${item.slug}`}>{item.title}</Link>
      </h3>
      <p className="work-card-summary">{item.summary}</p>
      <ul className="tag-list" aria-label={`${item.title} themes`}>
        {item.themes.slice(0, 3).map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>
      <Link className="work-card-link" href={`/work/${item.slug}`}>
        Read the story <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

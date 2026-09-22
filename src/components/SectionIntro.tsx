import Link from "next/link";

export function SectionIntro({
  eyebrow,
  title,
  copy,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display section-title">{title}</h2>
      </div>
      {(copy || (href && linkLabel)) && (
        <div className="section-intro-aside">
          {copy && <p>{copy}</p>}
          {href && linkLabel && (
            <Link className="text-link section-link" href={href}>
              {linkLabel} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

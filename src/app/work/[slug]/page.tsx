import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WowziCaseStudy } from "@/components/WowziCaseStudy";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = workItems.find((workItem) => workItem.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `${site.url}/work/${item.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const item = workItems.find((workItem) => workItem.slug === slug);

  if (!item) {
    notFound();
  }

  if (item.slug === "creator-commerce") {
    return <WowziCaseStudy />;
  }

  const relatedItems = workItems
    .filter((workItem) => workItem.slug !== item.slug)
    .slice(0, 2);

  return (
    <main id="main">
      <header className="site-shell py-12 sm:py-20">
        <Link className="text-link text-xs font-extrabold" href="/work">
          ← All work
        </Link>
        <div className="mt-12 grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
          <div>
            <p className="eyebrow">{item.eyebrow}</p>
            <h1 className="display max-w-4xl text-[clamp(3rem,8vw,7.5rem)]">
              {item.title}
              <span className="text-accent">.</span>
            </h1>
          </div>
          <div className="border-l border-accent pl-5">
            <p className="text-lg leading-relaxed">{item.summary}</p>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.12em] text-muted">
              {item.status}
            </p>
          </div>
        </div>
        <ul className="tag-list mt-10" aria-label={`${item.title} topics`}>
          {item.themes.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>

      <div className="site-shell border-t border-line">
        {item.sections.map((section, index) => (
          <section
            className="grid gap-6 border-b border-line py-10 sm:grid-cols-[0.4fr_1.6fr] sm:py-14"
            key={section.id}
            id={section.id}
          >
            <div>
              <p className="font-display text-xl italic text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xs font-extrabold uppercase tracking-[0.12em]">
                {section.title}
              </h2>
            </div>
            <div className="max-w-3xl space-y-5 text-lg leading-[1.75]">
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul className="grid gap-3 border-t border-line pt-5">
                  {section.items.map((entry) => (
                    <li
                      className="grid grid-cols-[1rem_1fr] gap-3 before:text-accent before:content-['↳']"
                      key={entry}
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              )}
              {section.placeholder && (
                <p className="border-l-2 border-accent bg-soft px-4 py-3 text-sm font-bold text-muted">
                  {section.placeholder}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>

      {relatedItems.length > 0 && (
        <section className="site-shell py-14 sm:py-20">
          <p className="eyebrow">Related work</p>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {relatedItems.map((relatedItem) => (
              <article className="bg-paper p-6" key={relatedItem.slug}>
                <h2 className="display text-3xl">{relatedItem.title}</h2>
                <p className="mt-3 max-w-lg text-sm text-muted">
                  {relatedItem.summary}
                </p>
                <Link
                  className="text-link mt-6 inline-block text-xs font-extrabold"
                  href={`/work/${relatedItem.slug}`}
                >
                  View project →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

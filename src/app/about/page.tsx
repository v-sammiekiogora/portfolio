import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { expertise, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A concise introduction to Sammy Mati, his product practice, and the interests that shape his work.",
  alternates: {
    canonical: `${site.url}/about`,
  },
};

const principles = [
  "Start with the problem",
  "Follow the evidence",
  "Make complexity visible",
  "Stay close to the user",
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title="A person, not a profile"
        intro="I’m Sammy Mati. I like figuring out how things work, why they don’t, and how they could work better."
      />

      <section className="site-shell section-rule compact-section about-brief">
        <div className="about-story">
          <p>
            My work has moved across software, QA, product management, UX,
            data, AI, developer experiences, and technology platforms. That
            range helps me see both the system and the person trying to use it.
          </p>
          <p>
            Today, I work on GitHub Learn, thinking about how developers
            discover learning and move from curiosity to making.
          </p>
        </div>
        <dl className="about-facts">
          <div>
            <dt>Experience</dt>
            <dd>10+ years across product and technology</dd>
          </div>
          <div>
            <dt>Interested in</dt>
            <dd>Products, developer experiences, data, AI, and learning</dd>
          </div>
          <div>
            <dt>Outside work</dt>
            <dd>
              Farming, football, hiking, interesting places, and details worth
              noticing
            </dd>
          </div>
        </dl>
      </section>

      <section className="site-shell section-rule compact-section about-columns">
        <div>
          <p className="eyebrow">What I bring</p>
          <ul className="about-tags">
            {expertise.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">How I work</p>
          <ol className="about-principles">
            {principles.map((principle, index) => (
              <li key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {principle}
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}

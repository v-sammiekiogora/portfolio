import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PhotoStrip } from "@/components/PhotoStrip";
import { expertise, site, waysOfWorking } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, product philosophy, and interests behind Sammy Mati’s work.",
  alternates: {
    canonical: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title="A person, not a profile"
        intro="I’m Sammy Mati. I ask a lot of questions, notice small details, and enjoy turning complicated things into something people can actually use."
      />

      <section className="site-shell section-rule grid gap-8 py-12 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="font-display text-2xl italic">
            Curiosity is the through line.
          </p>
        </div>
        <div className="max-w-3xl space-y-6 text-lg leading-[1.75]">
          <p>
            I’ve always liked figuring out how things work — and, perhaps more
            importantly, why they sometimes don’t. I can spend a long time
            pulling apart a product decision, following an unexpected pattern
            in some data, or noticing the one step in an experience that makes
            everything after it harder.
          </p>
          <p>
            Over more than ten years, that curiosity has moved across software,
            quality assurance, product management, UX, data, AI, developer
            experiences, and technology platforms. Each discipline has changed
            how I see the next one.
          </p>
          <p>
            Today, some of that thinking goes into GitHub Learn, where I focus
            on how developers discover learning and move from wanting to know
            something to making something.
          </p>
          <p>
            I’m less interested in technology for its own sake than in what it
            helps people understand, change, or create. I like thoughtful
            interfaces, honest constraints, useful data, and products that
            respect people’s time.
          </p>
        </div>
      </section>

      <section className="site-shell section-rule py-14 sm:py-20">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Career story</p>
            <h2 className="display text-4xl sm:text-6xl">
              The shape so far.
            </h2>
          </div>
          <div className="section-intro-aside">
            <p>
              This is intentionally incomplete. I’d rather leave a gap than
              turn a career into a neat story that is not true.
            </p>
          </div>
        </div>
        <ol className="grid gap-0 border-y border-line">
          <li className="grid gap-4 border-b border-line py-7 sm:grid-cols-[10rem_1fr]">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
              Earlier chapters
            </p>
            <div>
              <h3 className="font-display text-2xl">
                Software, QA, product, UX, data, AI, and technology platforms
              </h3>
              <p className="mt-3 max-w-2xl text-muted">
                The disciplines are confirmed; the exact dates, employers,
                titles, and sequence need Sammy’s input before they are
                published here.
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-7 sm:grid-cols-[10rem_1fr]">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
              Current chapter
            </p>
            <div>
              <h3 className="font-display text-2xl">GitHub Learn</h3>
              <p className="mt-3 max-w-2xl text-muted">
                Product and program work around developer learning, discovery,
                navigation, and the path from curiosity to making.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="site-shell section-rule grid gap-10 py-14 sm:grid-cols-2 sm:py-20">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 className="display text-4xl sm:text-6xl">
            Principles over process.
          </h2>
        </div>
        <ol className="space-y-6">
          {waysOfWorking.map((principle, index) => (
            <li className="border-t border-line pt-4" key={principle.title}>
              <p className="font-display text-lg italic text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-2xl">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.copy}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-shell section-rule grid gap-10 py-14 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="eyebrow">Areas of practice</p>
          <h2 className="display text-4xl">What I bring.</h2>
        </div>
        <ul className="grid gap-px bg-line sm:grid-cols-2">
          {expertise.map((area) => (
            <li className="bg-paper p-4 font-display text-xl" key={area}>
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-[0.65fr_1.35fr] sm:py-20">
        <div>
          <p className="eyebrow">Away from the work</p>
          <h2 className="display text-4xl">Still curious.</h2>
        </div>
        <p className="max-w-3xl text-lg leading-[1.75]">
          Curiosity doesn’t clock out. Away from a screen, you’ll find me
          watching football, looking for the next hiking route, exploring an
          interesting place, or paying attention to a detail I nearly walked
          past.
        </p>
      </section>

      <PhotoStrip />

      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-2">
        <h2 className="display text-4xl sm:text-5xl">
          Want the resume version?
        </h2>
        <p className="max-w-lg self-end text-base">
          The chronology lives on{" "}
          <a
            className="text-link font-bold"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          . This space is for the more interesting bits in between.
        </p>
      </section>
    </main>
  );
}

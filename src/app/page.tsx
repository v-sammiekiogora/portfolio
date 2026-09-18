import Link from "next/link";
import { Currently } from "@/components/Currently";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Notes } from "@/components/Notes";
import { PhotoStrip } from "@/components/PhotoStrip";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Currently compact />
      <Intro />
      <section className="site-shell py-20 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected archive</p>
            <h2 className="display text-6xl sm:text-8xl">Things I’ve made.</h2>
          </div>
          <Link className="text-link hidden text-sm font-bold sm:block" href="/things">
            See everything →
          </Link>
        </div>
        <ProjectList limit={3} />
      </section>
      <section className="site-shell py-20 sm:py-28">
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Open tabs in my head</p>
            <h2 className="display text-6xl sm:text-8xl">
              Things I’ve been
              <br />
              thinking about.
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-relaxed text-muted sm:justify-self-end">
            Product observations, AI questions, useful discoveries, and lessons
            from building. Notes in progress, because thinking rarely arrives
            finished.
          </p>
        </div>
        <Notes limit={3} />
      </section>
      <PhotoStrip />
      <section className="site-shell section-rule grid gap-8 py-20 sm:grid-cols-2 sm:py-28">
        <h2 className="display text-5xl sm:text-7xl">Want the resume version?</h2>
        <div className="max-w-lg self-end">
          <p className="mb-6 text-lg leading-relaxed">
            This site is about what I notice, make, and wonder about. For the
            professional-history version, LinkedIn has the dates and details.
          </p>
          <a
            className="text-link font-bold"
            href="https://www.linkedin.com/in/sammy-mati/"
            target="_blank"
            rel="noreferrer"
          >
            Find me on LinkedIn ↗
          </a>
        </div>
      </section>
    </main>
  );
}

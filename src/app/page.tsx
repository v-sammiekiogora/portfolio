import Link from "next/link";
import { Currently } from "@/components/Currently";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Currently compact />
      <Intro />
      <section className="site-shell py-16 sm:py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected archive</p>
            <h2 className="display text-6xl sm:text-8xl">Things I’ve made.</h2>
          </div>
          <Link className="text-link hidden text-sm font-bold sm:block" href="/things">
            See everything →
          </Link>
        </div>
        <ProjectList limit={2} compact />
        <Link className="text-link mt-8 inline-block text-sm font-bold" href="/things">
          See the full archive →
        </Link>
      </section>
      <section className="site-shell section-rule grid gap-8 py-14 sm:grid-cols-2 sm:py-16">
        <h2 className="display text-4xl sm:text-5xl">Want the resume version?</h2>
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

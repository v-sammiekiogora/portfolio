import { site } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-ink text-paper">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2 className="display text-4xl sm:text-5xl">
              Let’s talk
              <br />
              about things<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end sm:items-end">
            <p className="mb-5 max-w-md text-base">
              Product ideas, developer experiences, curious questions, or a
              thoughtful introduction. I’m listening.
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-bold">
              <a
                className="text-link"
                href={`mailto:${site.email}`}
              >
                Email me
              </a>
              <a
                className="text-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="text-link"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 border-t border-white/20 pt-5 text-[0.68rem] font-bold tracking-[0.08em] uppercase sm:grid-cols-3">
          <p>© 2026 Sammy Mati</p>
          <p>Product leadership / Developer experiences / AI / Data</p>
          <p className="sm:text-right">
            Made with curiosity, probably too much coffee, and code.
          </p>
        </div>
      </div>
    </footer>
  );
}

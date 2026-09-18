export function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-ink text-paper">
      <div className="site-shell py-16 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2 className="display text-6xl sm:text-8xl">
              Let’s talk
              <br />
              about things<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end sm:items-end">
            <p className="mb-6 max-w-md text-lg">
              Product ideas, curious questions, a good hiking route, or a
              football opinion. I’m listening.
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-bold">
              <a
                className="text-link"
                href="https://www.linkedin.com/in/sammy-mati/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="text-link"
                href="https://github.com/v-sammiekiogora"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-4 border-t border-white/20 pt-5 text-[0.68rem] font-bold tracking-[0.08em] uppercase sm:grid-cols-3">
          <p>Sammy Mati · Nairobi, Kenya</p>
          <p>Product / Technology / Data / AI</p>
          <p className="sm:text-right">
            Made with curiosity, probably too much coffee, and code.
          </p>
        </div>
      </div>
    </footer>
  );
}

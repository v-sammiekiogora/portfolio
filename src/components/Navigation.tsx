import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Things I’ve made", href: "/things" },
  { label: "Notes", href: "/notes" },
  { label: "Now", href: "/now" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <header className="site-shell flex items-start justify-between gap-6 py-5 sm:py-7">
      <Link
        href="/"
        className="font-display text-xl font-semibold tracking-[-0.04em] no-underline"
        aria-label="Sammy Mati, home"
      >
        Sammy<span className="text-accent">.</span>
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="flex max-w-2xl flex-wrap justify-end gap-x-4 gap-y-2 text-[0.68rem] font-bold tracking-[0.08em] uppercase sm:gap-x-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link className="nav-link" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/sammy-mati/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

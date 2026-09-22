"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header site-shell">
      <Link
        href="/"
        className="relative z-50 font-display text-xl font-semibold tracking-[-0.04em] no-underline"
        aria-label="Sammy Mati, home"
        onClick={closeMenu}
      >
        Sammy Mati<span className="text-accent">.</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        id="primary-navigation"
        className="primary-navigation"
        data-open={isOpen}
        aria-label="Primary navigation"
      >
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <Link className="nav-link" href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="nav-link"
              href="mailto:sammiekiogora@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://medium.com/design-bootcamp/ux-case-study-designing-an-auto-garage-mobile-app-4abc11be152"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Case study ↗
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/sammy-mati/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              LinkedIn ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

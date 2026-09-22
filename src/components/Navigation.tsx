"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="site-header site-shell">
      <Link
        href="/"
        className="wordmark"
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
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <li key={link.label}>
                <Link
                  className="nav-link"
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              className="nav-link"
              href="/#contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/sammy-mati/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

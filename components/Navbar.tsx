"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_#e5e7eb]" : "border-b border-zinc-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-[68px] flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => go("#hero")}
          className="font-serif text-xl text-ink hover:opacity-70 transition-opacity leading-none"
        >
          Yun Deng
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className="text-[11px] tracking-[0.14em] uppercase text-stone font-medium hover:text-ink transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => go("#contact")}
            className="text-[11px] tracking-[0.14em] uppercase font-medium bg-ink text-white px-5 py-2.5 rounded-full hover:bg-stone transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="bg-white border-t border-zinc-200 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => go(link.href)}
                className="text-[11px] tracking-[0.14em] uppercase text-stone font-medium hover:text-ink w-full text-left transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go("#contact")}
              className="text-[11px] tracking-[0.14em] uppercase font-medium bg-ink text-white px-5 py-2.5 rounded-full hover:bg-stone transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

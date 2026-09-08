"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
    The lock has to go on <html>, not <body>. globals.css sets
    `html { overflow-x: hidden }`, and once the root element's overflow is
    anything other than `visible` the body's overflow stops propagating to
    the viewport — so `body.style.overflow = "hidden"` silently did nothing
    and the page scrolled behind the open menu.
  */
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escape closes the menu — expected of any overlay
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  /*
    Close on resize past the breakpoint. The toggle is `display: none` above
    768px, so a visitor who opened the menu on a narrow window and then
    widened it would otherwise be left with an overlay and a scroll lock and
    no visible way to dismiss either.
  */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const mq = window.matchMedia("(min-width: 769px)");
    if (mq.matches) {
      setMobileMenuOpen(false);
      return;
    }
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`nav ${scrolled ? "scrolled" : ""} ${
          mobileMenuOpen ? "is-open" : ""
        }`}
      >
        <div className="container">
          <div className="nav-inner">
            <a
              href="#hero"
              className="nav-logo"
              onClick={() => setMobileMenuOpen(false)}
            >
              MS<span>.</span>
            </a>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <button
              className="nav-toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/*
        Deliberately a sibling of <nav>, not a child. `nav.scrolled` applies
        `backdrop-filter`, and a non-none backdrop-filter makes an element the
        containing block for its fixed-position descendants. Nested inside nav,
        this overlay's `inset: 0` resolved against the nav bar instead of the
        viewport, so after scrolling 60px the "full-screen" menu collapsed to a
        strip across the top. Out here the containing block is always the
        viewport, so it can't happen.
      */}
      <div
        className={`nav-mobile-overlay ${mobileMenuOpen ? "is-open" : ""}`}
        id="mobile-menu"
      >
        <ul className="nav-mobile-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

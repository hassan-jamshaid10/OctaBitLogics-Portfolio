"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Tech",       href: "#technologies" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

interface NavbarProps {
  activeSection: string;
  onNavClick: (href: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mounted,     setMounted]     = useState(false);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const navLinksRef  = useRef<(HTMLAnchorElement | null)[]>([]);
  const pillRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = hoveredLink ?? activeSection;
    const idx    = NAV_LINKS.findIndex((l) => l.href === `#${target}`);
    const el     = navLinksRef.current[idx];
    const ind    = indicatorRef.current;
    const pill   = pillRef.current;
    if (el && ind && pill) {
      const eRect = el.getBoundingClientRect();
      const pRect = pill.getBoundingClientRect();
      ind.style.width = `${eRect.width}px`;
      ind.style.left  = `${eRect.left - pRect.left}px`;
    }
  }, [hoveredLink, activeSection]);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavClick(href);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 2.5rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s cubic-bezier(.4,0,.2,1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease,
                      opacity 0.5s ease,
                      transform 0.5s cubic-bezier(.4,0,.2,1);
          opacity: 0;
          transform: translateY(-20px);
        }

        .navbar.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        /* Transparent on hero, frosted glass when scrolled past */
        .navbar.scrolled {
background: linear-gradient(135deg, #3BADB0 0%, #1f4080 48%, #1B2E5E 100%);
          backdrop-filter: blur(22px) saturate(180%);
          -webkit-backdrop-filter: blur(22px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 4px 40px rgba(0,0,0,0.2);
        }

        /* ── LOGO ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          text-decoration: none;
          animation: navItemIn 0.6s cubic-bezier(.4,0,.2,1) 0.15s both;
        }

        .logo-img {
          width: 45px;
          height: 45px;
          border-radius: 9px;
          object-fit: cover;
          transition: transform 0.3s ease;
          border: 1.5px solid rgba(255,255,255,0.35);
        }

        .logo:hover .logo-img {
          transform: rotate(-6deg) scale(1.08);
        }

        .logo-text {
          font-family: 'Oxanium', monospace;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.06em;
          color: white;
          line-height: 1;
        }

        .logo-text span {
          display: block;
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* ── NAV PILL ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          position: relative;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 100px;
          padding: 5px;
          animation: navItemIn 0.6s cubic-bezier(.4,0,.2,1) 0.25s both;
        }

        .nav-indicator {
          position: absolute;
          height: calc(100% - 10px);
          top: 5px;
          border-radius: 100px;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(255,255,255,0.35);
          transition: left  0.35s cubic-bezier(.4,0,.2,1),
                      width 0.35s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
          z-index: 0;
        }

        .nav-link {
          position: relative;
          z-index: 1;
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.75);
          padding: 7px 14px;
          border-radius: 100px;
          transition: color 0.22s ease;
          white-space: nowrap;
        }

        .nav-link.active,
        .nav-link:hover { color: white; }

        /* ── CTA ── */
        .nav-cta {
          font-family: 'Oxanium', monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: white;
          border: none;
          color: var(--teal);
          padding: 9px 22px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          animation: navItemIn 0.6s cubic-bezier(.4,0,.2,1) 0.35s both;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          background: rgba(255,255,255,0.92);
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 10px;
          animation: navItemIn 0.6s cubic-bezier(.4,0,.2,1) 0.2s both;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE DRAWER ── */
        .mobile-menu {
          position: fixed;
          top: 72px; left: 0; right: 0;
          background: linear-gradient(135deg, rgba(59,173,176,0.97) 0%, rgba(27,46,94,0.98) 100%);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transform: translateY(-110%) scaleY(0.92);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1),
                      opacity   0.3s ease;
          transform-origin: top;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }

        .mobile-link {
          font-family: 'Oxanium', monospace;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.8);
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-link::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          opacity: 0;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }

        .mobile-link.active,
        .mobile-link:hover {
          background: rgba(255,255,255,0.15);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }

        .mobile-link.active::before,
        .mobile-link:hover::before { opacity: 1; }

        @keyframes navItemIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none !important; }
          .hamburger { display: flex; }
          .navbar { padding: 0 1.25rem; }
        }
      `}</style>

      <nav className={[
        "navbar",
        scrolled ? "scrolled" : "",
        mounted  ? "mounted"  : "",
      ].join(" ")}>

        {/* Logo */}
        <div className="logo" onClick={() => onNavClick("#home")}>
          <img src="/octa.png" alt="OctaBitLogics Logo" className="logo-img" />
          <div className="logo-text">
            OctaBitLogics
            <span>Software Studio</span>
          </div>
        </div>

        {/* Desktop pill */}
        <div className="nav-links" ref={pillRef}>
          <div className="nav-indicator" ref={indicatorRef} />
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => { navLinksRef.current[i] = el; }}
              href={link.href}
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
              onClick={(e) => handleNav(e, link.href)}
              onMouseEnter={() => setHoveredLink(link.href.slice(1))}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="nav-cta" onClick={() => onNavClick("#contact")}>
          Get Started
        </button>

        {/* Hamburger */}
        <div
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-link${activeSection === link.href.slice(1) ? " active" : ""}`}
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
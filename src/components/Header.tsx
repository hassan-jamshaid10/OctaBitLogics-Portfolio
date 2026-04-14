"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-split" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (href: string) => void;
}

export default function Navbar({ activeSection = "home", onNavClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pillRef = useRef<HTMLDivElement>(null);

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
    let targetIdx = -1;
    if (hoveredLink) {
      targetIdx = NAV_LINKS.findIndex((l) => l.href === hoveredLink);
    } else {
      targetIdx = NAV_LINKS.findIndex((l) =>
        l.href.startsWith('/') ? pathname === l.href : pathname === '/' && activeSection === l.href.slice(1)
      );
    }

    const el = navLinksRef.current[targetIdx];
    const ind = indicatorRef.current;
    const pill = pillRef.current;
    if (el && ind && pill) {
      const eRect = el.getBoundingClientRect();
      const pRect = pill.getBoundingClientRect();
      ind.style.width = `${eRect.width}px`;
      ind.style.left = `${eRect.left - pRect.left}px`;
      ind.style.opacity = '1';
    } else if (ind) {
      ind.style.opacity = '0';
    }
  }, [hoveredLink, activeSection, pathname]);

  const navigateToSection = useCallback((sectionId: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollToSection', sectionId.replace('#', ''));
    }
    router.push('/');
  }, [router]);

  const handleNav = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href.startsWith('/')) {
      router.push(href);
    } else {
      if (pathname !== '/') {
        navigateToSection(href);
      } else {
        if (onNavClick) onNavClick(href);
      }
    }
  }, [pathname, router, onNavClick, navigateToSection]);

  const handleLogoClick = useCallback(() => {
    if (pathname !== '/') {
      navigateToSection('home');
    } else {
      if (onNavClick) onNavClick('#home');
    }
  }, [pathname, navigateToSection, onNavClick]);

  const handleCtaClick = useCallback(() => {
    if (pathname !== '/') {
      navigateToSection('contact');
    } else {
      if (onNavClick) onNavClick('#contact');
    }
  }, [pathname, navigateToSection, onNavClick]);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 2.5rem;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(.4,0,.2,1);
          opacity: 0;
          transform: translateY(-20px);
        }

        .navbar.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        /* Scrolled state */
        .navbar.scrolled {
          background: rgba(11, 18, 36, 0.88);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border-bottom: 1px solid rgba(59,173,176,0.15);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
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
          width: 50px;
          height: 50px;
          object-fit: contain;
          transition: transform 0.3s ease;
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

        /* ── NAV LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
          animation: navItemIn 0.6s cubic-bezier(.4,0,.2,1) 0.25s both;
        }

        .nav-indicator {
          position: absolute;
          height: 2px;
          bottom: -6px;
          border-radius: 2px;
          background: #a7fff9;
          transition: left 0.35s cubic-bezier(.4,0,.2,1),
                      width 0.35s cubic-bezier(.4,0,.2,1),
                      opacity 0.3s ease;
          pointer-events: none;
          z-index: 0;
          box-shadow: 0 0 10px rgba(167, 255, 249, 0.4);
        }

        .nav-link {
          position: relative;
          z-index: 1;
          font-family: 'Oxanium', monospace;
          font-size: 0.95rem; /* Increased from 0.76rem */
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.65);
          transition: color 0.22s ease;
          white-space: nowrap;
        }

        .nav-link.active,
        .nav-link:hover { color: white; }

        /* ── CTA ── */
        .nav-cta {
          font-family: 'Oxanium', monospace;
          font-size: 0.88rem; /* Increased from 0.74rem to balance with nav links */
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
          background: rgba(8, 13, 30, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1.5rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transform: translateY(-110%) scaleY(0.92);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1),
                      opacity   0.3s ease;
          transform-origin: top;
          z-index: 999;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu.open {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }

        .mobile-link {
          font-family: 'Oxanium', monospace;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          padding: 14px 20px;
          border-radius: 12px;
          border: 1px solid transparent;
          background: rgba(255,255,255,0.02);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-link::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #3badb0;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: scale(0.5);
          flex-shrink: 0;
          box-shadow: 0 0 8px #3badb0;
        }

        .mobile-link.active,
        .mobile-link:hover {
          background: rgba(59,173,176,0.1);
          color: white;
          border-color: rgba(59,173,176,0.25);
        }

        .mobile-link.active::before,
        .mobile-link:hover::before { 
          opacity: 1; 
          transform: scale(1);
        }

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
        mounted ? "mounted" : "",
      ].join(" ")}>

        {/* Logo */}
        <div className="logo" onClick={handleLogoClick}>
          <img src="/octa.png" alt="OctaBitLogics Logo" className="logo-img" />
          <div className="logo-text">
            OctaBitLogics
            <span>Software Studio</span>
          </div>
        </div>

        {/* Desktop pill */}
        <div className="nav-links" ref={pillRef}>
          <div className="nav-indicator" ref={indicatorRef} />
          {NAV_LINKS.map((link, i) => {
            const isActive = link.href.startsWith('/') ? pathname === link.href : pathname === '/' && activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                ref={(el) => { navLinksRef.current[i] = el; }}
                href={link.href}
                className={`nav-link${isActive ? " active" : ""}`}
                onClick={(e) => handleNav(e, link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <button className="nav-cta" onClick={handleCtaClick}>
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
        {NAV_LINKS.map((link) => {
          const isActive = link.href.startsWith('/') ? pathname === link.href : pathname === '/' && activeSection === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-link${isActive ? " active" : ""}`}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
}
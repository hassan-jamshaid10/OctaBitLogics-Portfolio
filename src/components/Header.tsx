"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollToSection", sectionId.replace("#", ""));
    }
    router.push("/");
  }, [router]);

  const handleNav = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      if (pathname !== "/") {
        navigateToSection(href);
      } else {
        if (onNavClick) onNavClick(href);
      }
    }
  }, [pathname, router, onNavClick, navigateToSection]);

  const handleLogoClick = useCallback(() => {
    if (pathname !== "/") {
      navigateToSection("home");
    } else {
      if (onNavClick) onNavClick("#home");
    }
  }, [pathname, navigateToSection, onNavClick]);

  const handleCtaClick = useCallback(() => {
    setMenuOpen(false);
    router.push("/contact");
  }, [router]);

  const isActive = (href: string) =>
    href.startsWith("/")
      ? pathname === href
      : pathname === "/" && activeSection === href.slice(1);

  // Force white nav text when hero background is dark (projects & contact)
  const isHeroDark = (pathname.startsWith("/projects") || pathname === "/contact") && !scrolled;

  return (
    <>
      <style>{`
        /* ══ Navbar ══ */
        .obl-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          background: transparent;
          border-bottom: 1px solid transparent;
          opacity: 0;
          transform: translateY(-16px);
          transition:
            background 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease, backdrop-filter 0.4s ease,
            opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .obl-nav.mounted { opacity: 1; transform: translateY(0); }
        .obl-nav.scrolled {
          background: rgba(250, 249, 253, 0.78);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          border-bottom: 1px solid rgba(0, 32, 70, 0.07);
          box-shadow: 0 8px 32px rgba(0, 32, 70, 0.06);
        }
        
        /* ── Hero Dark Mode (Projects Page) ── */
        .obl-nav.hero-dark .obl-link { color: rgba(255, 255, 255, 0.85); }
        .obl-nav.hero-dark .obl-link.active { color: #ffffff; }
        .obl-nav.hero-dark .obl-link:hover { color: #ffffff; background: rgba(255, 255, 255, 0.1); }
        .obl-nav.hero-dark .obl-logo-img { filter: brightness(0) invert(1); }
        .obl-nav.hero-dark .obl-hamburger span { background: #ffffff; }
        .obl-nav.hero-dark .obl-hamburger { border-color: rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.05); }

        .obl-nav-inner {
          width: 100%; max-width: 1280px;
          margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          height: 100%;
        }

        /* ── Layout ── */
        .obl-left {
          display: flex;
          align-items: center;
          gap: 40px;
          height: 100%;
        }
        .obl-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* ── Logo ── */
        .obl-logo {
          display: flex; align-items: center;
          cursor: pointer; user-select: none;
        }
        .obl-logo-img { width: 188px; height: 52px; object-fit: contain; display: block; }

        /* ── Desktop links ── */
        .obl-links { display: flex; align-items: center; gap: 4px; height: 100%; }
        
        .obl-link-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%; /* Important for hover bridge */
        }

        .obl-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem; font-weight: 500;
          text-decoration: none; color: #44474e;
          padding: 9px 14px; border-radius: 10px;
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }
        .obl-link::after {
          content: ''; position: absolute;
          left: 14px; right: 14px; bottom: 4px;
          height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #2ECC40, #3BADB0);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .obl-link:hover { color: #002046; background: rgba(0, 32, 70, 0.04); }
        .obl-link:hover::after { transform: scaleX(1); }
        .obl-link.active { color: #002046; font-weight: 700; }
        .obl-link.active::after { transform: scaleX(1); }

        /* ── Hover Subtab (Square Card) ── */
        .obl-subtab {
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%) translateY(15px);
          width: 250px;
          height: 250px;
          border-radius: 16px;
          /* Statement banner gradient */
          background: radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.18) 0%, transparent 55%),
                      linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0, 32, 70, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #fff;
          pointer-events: none;
        }
        .obl-link-wrapper:hover .obl-subtab {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        /* Invisible bridge so mouse doesn't fall off */
        .obl-subtab::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 20px;
        }
        .obl-subtab-inner h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }
        .obl-subtab-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          line-height: 1.5;
          color: rgba(255,255,255,0.7);
          margin: 0 0 1.5rem 0;
        }
        .obl-subtab-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #2ECC40;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s ease;
        }
        .obl-link-wrapper:hover .obl-subtab-link:hover {
          transform: translateX(4px);
        }

        /* ── CTA: brand arrow-chip language ── */
        .obl-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem; font-weight: 700; letter-spacing: 0.01em;
          color: #ffffff; background: #002046;
          border: none; cursor: pointer;
          padding: 7px 7px 7px 18px; border-radius: 4px;
          box-shadow: 0 6px 18px rgba(0, 32, 70, 0.18);
          white-space: nowrap;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s ease, background 0.3s ease;
        }
        .obl-cta .obl-cta-chip {
          width: 28px; height: 28px; border-radius: 2px;
          background: #2ECC40; color: #002046;
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .obl-cta:hover {
          transform: translateY(-2px); background: #002a5c;
          box-shadow: 0 10px 24px rgba(0, 32, 70, 0.25), 0 0 14px rgba(46, 204, 64, 0.22);
        }
        .obl-cta:hover .obl-cta-chip { transform: rotate(-8deg); }
        .obl-cta:active { transform: scale(0.96); }

        /* ── Hamburger ── */
        .obl-hamburger {
          display: none; flex-direction: column;
          justify-content: center; align-items: center; gap: 5px;
          cursor: pointer; width: 42px; height: 42px;
          background: rgba(0, 32, 70, 0.05);
          border: 1px solid rgba(0, 32, 70, 0.1);
          border-radius: 12px;
        }
        .obl-hamburger span {
          display: block; width: 20px; height: 2px;
          background: #002046; border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .obl-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .obl-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .obl-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .obl-mobile-menu {
          position: fixed; top: 88px; left: 14px; right: 14px;
          z-index: 999;
          background: rgba(250, 249, 253, 0.92);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          border: 1px solid rgba(0, 32, 70, 0.08);
          border-radius: 20px;
          padding: 12px;
          display: flex; flex-direction: column; gap: 4px;
          box-shadow: 0 24px 60px rgba(0, 32, 70, 0.14);
          transform: translateY(-12px) scale(0.98);
          opacity: 0; pointer-events: none;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
        }
        .obl-mobile-menu.open {
          transform: translateY(0) scale(1);
          opacity: 1; pointer-events: auto;
        }
        .obl-mobile-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem; font-weight: 500;
          text-decoration: none; color: #44474e;
          padding: 13px 16px; border-radius: 12px;
          display: flex; align-items: center;
          transition: all 0.2s ease;
        }
        .obl-mobile-link::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #2ECC40; margin-right: 12px;
          opacity: 0; transform: scale(0);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .obl-mobile-link.active,
        .obl-mobile-link:hover {
          background: rgba(0, 32, 70, 0.05); color: #002046;
        }
        .obl-mobile-link.active { font-weight: 700; }
        .obl-mobile-link.active::before,
        .obl-mobile-link:hover::before { opacity: 1; transform: scale(1); }

        .obl-mobile-cta {
          margin-top: 8px;
          display: inline-flex; align-items: center;
          justify-content: space-between; gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem; font-weight: 700;
          color: #ffffff; background: #002046;
          border: none; cursor: pointer;
          padding: 9px 9px 9px 18px; border-radius: 4px;
          box-shadow: 0 8px 22px rgba(0, 32, 70, 0.2);
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .obl-mobile-cta:hover { background: #002a5c; }
        .obl-mobile-cta:active { transform: scale(0.98); }
        .obl-mobile-cta .obl-cta-chip {
          width: 34px; height: 34px; border-radius: 2px;
          background: #2ECC40; color: #002046;
          display: inline-flex; align-items: center; justify-content: center;
        }

        @media (max-width: 900px) {
          .obl-links, .obl-cta { display: none !important; }
          .obl-hamburger { display: flex; }
          .obl-nav-inner { padding: 0 20px; }
          .obl-left { gap: 10px; }
          .obl-logo-img { width: 164px; height: 46px; }
        }
      `}</style>

      <nav className={["obl-nav", scrolled ? "scrolled" : "", mounted ? "mounted" : "", isHeroDark ? "hero-dark" : ""].join(" ")}>
        <div className="obl-nav-inner">

          <div className="obl-left">
            {/* Logo */}
            <div className="obl-logo" onClick={handleLogoClick}>
              <img src="/octabit-logo-transparent.png" alt="OctaBitLogics" className="obl-logo-img" />
            </div>

            {/* Desktop links */}
            <div className="obl-links">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="obl-link-wrapper">
                  <a
                    href={link.href}
                    className={`obl-link${isActive(link.href) ? " active" : ""}`}
                    onClick={(e) => handleNav(e, link.href)}
                  >
                    {link.label}
                  </a>

                  {/* Square Hover Card */}
                  <div className="obl-subtab">
                    <div className="obl-subtab-inner">
                      <h4>{link.label}</h4>
                      <p>Discover our {link.label.toLowerCase()} tailored for your business needs.</p>
                      <div className="obl-subtab-link">
                        Explore <span style={{ fontSize: "1rem" }}>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="obl-right">
            {/* CTA */}
            <button className="obl-cta" onClick={handleCtaClick}>
              Get Started
              <span className="obl-cta-chip">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {/* Hamburger */}
            <div
              className={`obl-hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`obl-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`obl-mobile-link${isActive(link.href) ? " active" : ""}`}
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <button className="obl-mobile-cta" onClick={handleCtaClick}>
          Get Started
          <span className="obl-cta-chip">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
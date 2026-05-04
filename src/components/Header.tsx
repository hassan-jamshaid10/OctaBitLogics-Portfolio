"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about-split" },
  { label: "Projects",   href: "/projects" },
  { label: "Services",   href: "#services" },
  { label: "Blogs",      href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (href: string) => void;
}

export default function Navbar({ activeSection = "home", onNavClick }: NavbarProps) {
  const pathname = usePathname();
  const router   = useRouter();

  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [mounted,    setMounted]    = useState(false);

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
    if (pathname !== "/") {
      navigateToSection("contact");
    } else {
      if (onNavClick) onNavClick("#contact");
    }
  }, [pathname, navigateToSection, onNavClick]);

  const isActive = (href: string) =>
    href.startsWith("/")
      ? pathname === href
      : pathname === "/" && activeSection === href.slice(1);

  return (
    <>
      <style>{`
        /* ── Navbar ── */
        .obl-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem 0 0;
          background: #ffffff;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 1px 8px rgba(0,0,0,0.06);
          transition: box-shadow 0.4s cubic-bezier(.4,0,.2,1);
          opacity: 0;
          transform: translateY(-20px);
        }
        .obl-nav.mounted {
          opacity: 1;
          transform: translateY(0);
        }
        .obl-nav.scrolled {
          background: #ffffff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .obl-nav-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .obl-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          user-select: none;
          margin-left: 1.5rem;
        }
        .obl-logo-img {
          width: 200px;
          height: 56px;
          object-fit: contain;
        }
        .obl-logo:hover .obl-logo-img { transform: none; }

        /* ── Desktop links ── */
        .obl-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .obl-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          color: #44474e;
          transition: color 0.22s ease;
          position: relative;
          white-space: nowrap;
        }
        .obl-link.active {
          color: #002046;
          font-weight: 700;
          border-bottom: 2px solid #1b6d1e;
          padding-bottom: 2px;
        }
        .obl-link:hover { color: #002046; }

        /* ── CTA Button ── */
        .obl-cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          background: #1b365d;
          color: #87a0cd;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .obl-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(27,54,93,0.25);
        }
        .obl-cta:active { transform: scale(0.96); }

        /* ── Hamburger ── */
        .obl-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px 8px;
          background: rgba(0,32,70,0.06);
          border: 1px solid rgba(0,32,70,0.12);
          border-radius: 8px;
        }
        .obl-hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: #002046;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }
        .obl-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .obl-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .obl-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .obl-mobile-menu {
          position: fixed;
          top: 80px; left: 0; right: 0;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0,32,70,0.08);
          padding: 1.25rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transform: translateY(-110%) scaleY(0.92);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
          transform-origin: top;
          z-index: 999;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }
        .obl-mobile-menu.open {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }
        .obl-mobile-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          color: #44474e;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .obl-mobile-link.active,
        .obl-mobile-link:hover {
          background: rgba(0,32,70,0.04);
          color: #002046;
          border-color: rgba(0,32,70,0.08);
        }
        .obl-mobile-cta {
          margin-top: 0.5rem;
          background: #1b365d;
          color: #87a0cd;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
          text-align: center;
        }
        .obl-mobile-cta:hover { opacity: 0.88; }

        @media (max-width: 900px) {
          .obl-links, .obl-cta { display: none !important; }
          .obl-hamburger { display: flex; }
          .obl-nav { padding: 0 1.25rem; }
        }
      `}</style>

      <nav className={["obl-nav", scrolled ? "scrolled" : "", mounted ? "mounted" : ""].join(" ")}>
        <div className="obl-nav-inner">
          {/* Logo */}
          <div className="obl-logo" onClick={handleLogoClick}>
            <img src="/octabit final.png" alt="OctaBitLogics" className="obl-logo-img" />
          </div>

          {/* Desktop links */}
          <div className="obl-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`obl-link${isActive(link.href) ? " active" : ""}`}
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="obl-cta" onClick={handleCtaClick}>Get Started</button>

          {/* Hamburger */}
          <div
            className={`obl-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
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
        <button className="obl-mobile-cta" onClick={handleCtaClick}>Get Started</button>
      </div>
    </>
  );
}
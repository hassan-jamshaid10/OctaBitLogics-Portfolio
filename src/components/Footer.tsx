"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const CLOUD_PARTNERS = [
  {
    name: "Google Cloud",
    url: "https://cdn.simpleicons.org/googlecloud",
  },
  {
    // name: "Microsoft Azure",
    url: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg",
  },
  {
    // name: "AWS",
    url: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="ftr">
      <style>{`
        #ftr {
          background:
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(46, 204, 64, 0.06) 0%, transparent 55%),
            linear-gradient(160deg, #001530 0%, #002046 40%, #011a38 100%);
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          position: relative;
          overflow: hidden;
        }

        /* Subtle diagonal pattern */
        #ftr::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            rgba(255,255,255,0.015) 0px,
            rgba(255,255,255,0.015) 1px,
            transparent 1px,
            transparent 40px
          );
          pointer-events: none;
        }

        .ftr-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* ── Top: tagline + nav ── */
        .ftr-main {
          padding: 4rem 0 3rem;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* Brand col */
        .ftr-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .ftr-tagline {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .ftr-tagline span { color: #2ECC40; }
        .ftr-desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
          max-width: 300px;
          margin: 0;
        }

        /* Location */
        .ftr-location {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
        }
        .ftr-flag {
          width: 40px;
          height: 28px;
          border-radius: 0;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        /* Nav columns */
        .ftr-col-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin: 0 0 1.25rem;
        }

        .ftr-nav-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .ftr-nav-list a {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
        }
        .ftr-nav-list a:hover { color: #2ECC40; padding-left: 6px; }

        /* Socials */
        .ftr-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ftr-social-btn {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: all 0.25s ease;
          background: rgba(255,255,255,0.03);
        }
        .ftr-social-btn:hover {
          border-color: #2ECC40;
          color: #2ECC40;
          background: rgba(46,204,64,0.08);
          transform: translateY(-3px);
        }

        /* ── Cloud partners strip ── */
        .ftr-partners {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .ftr-partners-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          white-space: nowrap;
        }
        .ftr-partners-logos {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .ftr-cloud-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          filter: grayscale(1) brightness(0) invert(1);
          opacity: 0.35;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .ftr-cloud-logo:hover { opacity: 0.75; filter: none; }
        .ftr-cloud-logo img { height: 24px; width: auto; display: block; }
        .ftr-cloud-logo span {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
        }

        /* ── Bottom bar ── */
        .ftr-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.5rem 0;
        }
        .ftr-copy {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }
        .ftr-legal {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .ftr-legal a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-legal a:hover { color: rgba(255,255,255,0.7); }

        /* Responsive */
        @media (max-width: 960px) {
          .ftr-main { grid-template-columns: 1fr 1fr; gap: 3rem; padding: 3rem 0 2.5rem; }
          .ftr-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .ftr-wrap { padding: 0 20px; }
          .ftr-main { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .ftr-partners { gap: 1.5rem; }
          .ftr-bottom { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
        }
        @media (max-width: 420px) {
          .ftr-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ftr-wrap">

        {/* ── Main content ── */}
        <div className="ftr-main">

          {/* Brand */}
          <div className="ftr-brand">
            <h2 className="ftr-tagline">
              Engineering the<br />future of <span>software</span>.
            </h2>
            <p className="ftr-desc">
              Precision-engineered AI solutions and elite software architecture,
              built to scale for ambitious businesses globally.
            </p>
            <div className="ftr-location">
              <img
                src="https://flagcdn.com/w80/pk.png"
                alt="Pakistan"
                className="ftr-flag"
              />
              <img
                src="https://flagcdn.com/w80/us.png"
                alt="USA"
                className="ftr-flag"
              />
              <img
                src="https://flagcdn.com/w80/eu.png"
                alt="European Union"
                className="ftr-flag"
              />
              Lahore, Pakistan · Working Globally
            </div>
            <div className="ftr-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="ftr-social-btn" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="ftr-col-title">Navigation</p>
            <ul className="ftr-nav-list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link href={l.href}>{l.label}</Link>
                  ) : (
                    <a href={l.href}>{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="ftr-col-title">Get In Touch</p>
            <ul className="ftr-nav-list">
              <li><a href="mailto:info@octabitlogics.com">info@octabitlogics.com</a></li>
              <li><a href="tel:+923215353105">+92 321 535 3105</a></li>
              <li><a href="#contact">Start a Project</a></li>
              <li><a href="#contact">Request a Quote</a></li>
            </ul>
          </div>

        </div>

        {/* ── Cloud Partners ── */}
        <div className="ftr-partners">
          <span className="ftr-partners-label">Cloud Partners</span>
          <div className="ftr-partners-logos">
            {CLOUD_PARTNERS.map((p) => (
              <div key={p.name} className="ftr-cloud-logo">
                <img src={p.url} alt={p.name} />
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="ftr-bottom">
          <p className="ftr-copy">© {YEAR} OctaBitLogics. All rights reserved.</p>
          <nav className="ftr-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import SectionLink from "./SectionLink";

// ── SVG icons ─────────────────────────────────────────────────────────────────
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

// ── Navigation data ────────────────────────────────────────────────────────────
const PRODUCT_LINKS = [
  { label: "Features",  href: "#services",   isSection: true },
  { label: "Pricing",   href: "#contact",    isSection: true },
  { label: "Solutions", href: "#services",   isSection: true },
];
const COMPANY_LINKS = [
  { label: "About Us", href: "about-split", isSection: true },
  { label: "Careers",  href: "#contact",    isSection: false, to: "/contact" },
  { label: "Contact",  href: "contact",     isSection: true },
];
const SOCIALS = [
  { Icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { Icon: IconGithub,   label: "GitHub",   href: "#" },
  { Icon: IconTwitter,  label: "Twitter",  href: "#" },
];

const CURRENT_YEAR = new Date().getFullYear();

const FU = (delay: number) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true as const },
  transition:  { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function Footer() {
  return (
    <footer id="ftr">
      <style>{`
        #ftr {
          background: #f9fafb;
          border-top: 1px solid #e3e2e6;
          font-family: 'Inter', sans-serif;
          color: #1a1b1e;
        }

        .ftr-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── Main grid ── */
        .ftr-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 2rem;
          padding: 3.5rem 0 3rem;
        }

        /* Brand column */
        .ftr-brand-col {}
        .ftr-logo-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .ftr-logo-img {
          width: 36px; height: 36px;
          object-fit: contain;
        }
        .ftr-brand-name {
          font-family: 'Manrope', sans-serif;
          font-size: 1.15rem;
          font-weight: 900;
          color: #002046;
          letter-spacing: -0.01em;
        }
        .ftr-brand-name span { color: #22c55e; }
        .ftr-brand-desc {
          font-size: 0.85rem;
          line-height: 1.65;
          color: #6b7280;
          max-width: 260px;
        }

        /* Nav columns */
        .ftr-nav-col {}
        .ftr-col-title {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 1rem;
        }
        .ftr-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .ftr-nav-list a {
          font-size: 0.85rem;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .ftr-nav-list a:hover { color: #1e3a6e; text-decoration: underline; text-underline-offset: 4px; }

        /* Social links */
        .ftr-socials-col {}
        .ftr-social-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .ftr-social-link {
          font-size: 0.85rem;
          color: #6b7280;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: color 0.2s ease;
        }
        .ftr-social-link:hover { color: #1e3a6e; text-decoration: underline; text-underline-offset: 4px; }

        /* ── Bottom bar ── */
        .ftr-bottom-bar {
          border-top: 1px solid #e3e2e6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.5rem 0;
        }
        .ftr-copy {
          font-size: 0.82rem;
          color: #6b7280;
        }
        .ftr-legal {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .ftr-legal a {
          font-size: 0.82rem;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-legal a:hover { color: #1e3a6e; text-decoration: underline; text-underline-offset: 4px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .ftr-top { grid-template-columns: 1fr 1fr; gap: 2rem; padding: 3rem 0 2.5rem; }
          .ftr-brand-col { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .ftr-wrap { padding: 0 16px; }
          .ftr-top { grid-template-columns: 1fr 1fr; }
          .ftr-brand-col { grid-column: 1 / -1; }
          .ftr-bottom-bar { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .ftr-top { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ftr-wrap">
        <motion.div className="ftr-top" {...FU(0)}>

          {/* Brand column */}
          <motion.div className="ftr-brand-col" {...FU(0)}>
            <div className="ftr-logo-row">
              <img src="/octa.png" alt="OctaBitLogics" className="ftr-logo-img" />
              <span className="ftr-brand-name">OctaBit<span>logics</span></span>
            </div>
            <p className="ftr-brand-desc">
              Empowering the future with precision-engineered AI and elite software architecture.
            </p>
          </motion.div>

          {/* Product column */}
          <motion.div className="ftr-nav-col" {...FU(0.08)}>
            <p className="ftr-col-title">Product</p>
            <ul className="ftr-nav-list">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.label}>
                  {item.isSection ? (
                    <SectionLink section={item.href.replace("#", "")} className="">
                      {item.label}
                    </SectionLink>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company column */}
          <motion.div className="ftr-nav-col" {...FU(0.14)}>
            <p className="ftr-col-title">Company</p>
            <ul className="ftr-nav-list">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  {item.isSection ? (
                    <SectionLink section={item.href} className="">
                      {item.label}
                    </SectionLink>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us column */}
          <motion.div className="ftr-socials-col" {...FU(0.2)}>
            <p className="ftr-col-title">Follow Us</p>
            <div className="ftr-social-row">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a key={label} href={href} className="ftr-social-link" aria-label={label}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom bar */}
        <motion.div className="ftr-bottom-bar" {...FU(0.1)}>
          <p className="ftr-copy">© {CURRENT_YEAR} OctaBitLogics. Precision in Intelligence.</p>
          <nav className="ftr-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";
import BackgroundNightfall from "./BackgroundNightfall";

// ── Social SVGs ───────────────────────────────────────────────────────────────
const IconFacebook = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const IconInstagram = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);
const IconLinkedin = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
const IconX = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
);
const IconYoutube = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
);
const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);
const IconMapPin = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES_LINKS = [
    "Custom Software Dev",
    "Mobile App Development",
    "AI & Automation",
    "Cloud & DevOps",
    "UI/UX Design",
    "Staff Augmentation",
];
const INDUSTRIES_LINKS = [
    "FinTech",
    "E-Commerce",
    "Healthcare",
    "Real Estate",
    "Logistics",
    "SaaS & B2B",
];
const USEFUL_LINKS = ["About Us", "Contact Us", "Home"];
const COMPANY_LINKS = ["Who We Are", "Blogs", "Contact"];

const SOCIALS = [
    { Icon: IconFacebook, label: "Facebook" },
    { Icon: IconInstagram, label: "Instagram" },
    { Icon: IconLinkedin, label: "LinkedIn" },
    { Icon: IconX, label: "X" },
    { Icon: IconYoutube, label: "YouTube" },
];

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: "easeOut", delay },
});

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="ftr">
            {/* ── Scoped styles ─────────────────────────────────────────────────── */}
            <style>{`
        /* Root */
        #ftr {
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg, #3BADB0 0%, #1f4080 48%, #1B2E5E 100%);
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          color: #ffffff;
        }

        /* ── Blobs ── */
        .ftr-blob1 {
          position: absolute; top: -140px; left: -130px;
          width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .ftr-blob2 {
          position: absolute; bottom: -100px; right: -90px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.14) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ── Wrapper ── */
        .ftr-wrap {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── Divider ── */
        .ftr-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin: 0;
        }

        /* ════════════════════════════════════════
           TOP SECTION  (logo col + 4 nav cols)
           ════════════════════════════════════════ */
        .ftr-top {
          display: grid;
          grid-template-columns: 320px 1fr 1fr 1fr 1fr;
          gap: 3rem;
          padding: 4rem 0 3.5rem;
        }

        /* ── Logo column ── */
        .ftr-logo-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.1rem;
        }
        .ftr-logo-img {
          width: 52px; height: 52px;
          border-radius: 13px;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 0 18px rgba(59,173,176,0.5);
        }
        .ftr-brand-block { display: flex; flex-direction: column; }
        .ftr-brand-name {
          font-family: 'Oxanium', monospace;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: #fff;
        }
        .ftr-brand-name span { color: #3BADB0; }
        .ftr-brand-sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 2px;
        }

        .ftr-tagline {
          font-size: 0.88rem;
          line-height: 1.72;
          color: rgba(255,255,255,0.62);
          margin-bottom: 1.4rem;
        }

        /* Phone / email chips */
        .ftr-contact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.6rem;
        }
        .ftr-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          padding: 6px 14px;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .ftr-chip:hover {
          background: rgba(59,173,176,0.22);
          border-color: #3BADB0;
          color: #fff;
        }
        .ftr-chip svg { flex-shrink: 0; opacity: 0.75; }

        /* Follow us */
        .ftr-follow-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.75rem;
        }
        .ftr-socials {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .ftr-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ftr-social:hover {
          background: #3BADB0;
          border-color: #a7fff9;
          color: #fff;
          box-shadow: 0 0 15px rgba(59,173,176,0.45);
          transform: translateY(-2px);
        }

        /* ── Nav columns ── */
        .ftr-col-heading {
          font-family: 'Oxanium', monospace;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          margin-bottom: 1.2rem;
          position: relative;
          padding-bottom: 0.7rem;
        }
        .ftr-col-heading::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 28px; height: 2px;
          background: #3BADB0;
          border-radius: 2px;
        }

        .ftr-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .ftr-nav-link {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          transition: color 0.22s ease, padding-left 0.22s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ftr-nav-link::before {
          content: '';
          display: inline-block;
          width: 5px; height: 1.5px;
          background: rgba(59,173,176,0.7);
          border-radius: 2px;
          transition: width 0.22s ease;
          flex-shrink: 0;
        }
        .ftr-nav-link:hover { color: #a7fff9; }
        .ftr-nav-link:hover::before { width: 10px; }

        /* ════════════════════════════════════════
           MIDDLE STRIP  (Address | Contact | Follow)
           ════════════════════════════════════════ */
        .ftr-strip {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .ftr-strip-cell {
          padding: 1.6rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ftr-strip-cell:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .ftr-strip-heading {
          font-family: 'Oxanium', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.25rem;
        }

        .ftr-addr-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.55;
        }
        .ftr-addr-item svg { flex-shrink: 0; margin-top: 3px; color: #3BADB0; }

        .ftr-contact-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.72);
        }
        .ftr-contact-row svg { color: #3BADB0; flex-shrink: 0; }
        .ftr-contact-row a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-contact-row a:hover { color: #a7fff9; }

        /* ════════════════════════════════════════
           BOTTOM BAR
           ════════════════════════════════════════ */
        .ftr-bottom {
          padding: 1.4rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .ftr-copy {
          font-family: 'Oxanium', monospace;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.04em;
        }
        .ftr-legal {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .ftr-legal a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-legal a:hover { color: #a7fff9; }
        .ftr-legal-sep {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ftr-top {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .ftr-top > *:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .ftr-top {
            grid-template-columns: 1fr 1fr;
            padding: 3rem 0 2.5rem;
          }
          .ftr-top > *:first-child { grid-column: 1 / -1; }
          .ftr-strip { grid-template-columns: 1fr; }
          .ftr-strip-cell:not(:last-child) { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .ftr-wrap { padding: 0 1.25rem; }
        }
        @media (max-width: 480px) {
          .ftr-top { grid-template-columns: 1fr; }
          .ftr-bottom { flex-direction: column; align-items: flex-start; }
          .ftr-legal { flex-wrap: wrap; }
        }
      `}</style>

            {/* Animated day-to-night background */}
            <BackgroundNightfall />

            {/* Decorative blobs */}
            <div className="ftr-blob1" />
            <div className="ftr-blob2" />

            <div className="ftr-wrap">

                {/* ══════════════════════════════════════════
            TOP: Logo column + 4 nav columns
            ══════════════════════════════════════════ */}
                <motion.div className="ftr-top" {...fadeUp(0)}>

                    {/* ── Brand / Logo column ── */}
                    <motion.div {...fadeUp(0)}>
                        <div className="ftr-logo-row">
                            <img src="/octa.png" alt="OctaBitLogics Logo" className="ftr-logo-img" />
                            <div className="ftr-brand-block">
                                <span className="ftr-brand-name">
                                    <span>OctaBit</span>Logics
                                </span>
                                <span className="ftr-brand-sub">Software Studio</span>
                            </div>
                        </div>

                        <p className="ftr-tagline">
                            OctaBitLogics is a global technology partner delivering end-to-end
                            services including custom software, AI automation, cloud infrastructure,
                            and modern mobile experiences.
                        </p>

                        <div className="ftr-contact-chips">
                            <a href="tel:+18001234567" className="ftr-chip">
                                <IconPhone /> +1 (800) 123-4567
                            </a>
                            <a href="mailto:hello@octabitlogics.com" className="ftr-chip">
                                <IconMail /> hello@octabitlogics.com
                            </a>
                        </div>

                        <p className="ftr-follow-label">Follow Us</p>
                        <div className="ftr-socials">
                            {SOCIALS.map(({ Icon, label }) => (
                                <a key={label} href="#" className="ftr-social" aria-label={label}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Services column ── */}
                    <motion.div {...fadeUp(0.08)}>
                        <p className="ftr-col-heading">Services</p>
                        <nav className="ftr-nav-links">
                            {SERVICES_LINKS.map((item) => (
                                <a key={item} href="#services" className="ftr-nav-link">{item}</a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* ── Industries column ── */}
                    <motion.div {...fadeUp(0.14)}>
                        <p className="ftr-col-heading">Industries</p>
                        <nav className="ftr-nav-links">
                            {INDUSTRIES_LINKS.map((item) => (
                                <a key={item} href="#" className="ftr-nav-link">{item}</a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* ── Useful Links column ── */}
                    <motion.div {...fadeUp(0.20)}>
                        <p className="ftr-col-heading">Useful Links</p>
                        <nav className="ftr-nav-links">
                            {USEFUL_LINKS.map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(/ /g, "")}`} className="ftr-nav-link">{item}</a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* ── Company column ── */}
                    <motion.div {...fadeUp(0.26)}>
                        <p className="ftr-col-heading">Company</p>
                        <nav className="ftr-nav-links">
                            {COMPANY_LINKS.map((item) => (
                                <a key={item} href="#" className="ftr-nav-link">{item}</a>
                            ))}
                        </nav>
                    </motion.div>

                </motion.div>

                {/* ══════════════════════════════════════════
            MIDDLE INFO STRIP  (Address | Contact | Follow)
            ══════════════════════════════════════════ */}
                <motion.div className="ftr-strip" {...fadeUp(0.1)}>

                    {/* Address */}
                    <div className="ftr-strip-cell">
                        <p className="ftr-strip-heading">Address</p>
                        <div className="ftr-addr-item">
                            <IconMapPin />
                            <span>🇺🇸&nbsp; 150 E El St #1810, New York, NY 10017</span>
                        </div>
                        <div className="ftr-addr-item">
                            <IconMapPin />
                            <span>🇵🇰&nbsp; 11th Floor, Hafeez Tower, Sector&nbsp;R DHA Phase&nbsp;2, Lahore</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="ftr-strip-cell">
                        <p className="ftr-strip-heading">Contact Us</p>
                        <div className="ftr-contact-row">
                            <IconPhone />
                            <a href="tel:+18001234567">+1 (800) 123-4567</a>
                        </div>
                        <div className="ftr-contact-row">
                            <IconMail />
                            <a href="mailto:hello@octabitlogics.com">hello@octabitlogics.com</a>
                        </div>
                    </div>

                    {/* Follow us (repeated for the strip layout) */}
                    <div className="ftr-strip-cell">
                        <p className="ftr-strip-heading">Follow Us</p>
                        <div className="ftr-socials">
                            {SOCIALS.map(({ Icon, label }) => (
                                <a key={label} href="#" className="ftr-social" aria-label={label}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                </motion.div>

                {/* ══════════════════════════════════════════
            BOTTOM BAR
            ══════════════════════════════════════════ */}
                <motion.div className="ftr-bottom" {...fadeUp(0.18)}>
                    <p className="ftr-copy">&copy; {year} OctaBitLogics. All rights reserved.</p>
                    <div className="ftr-legal">
                        <a href="#">Terms &amp; Conditions</a>
                        <span className="ftr-legal-sep" />
                        <a href="#">Privacy Policy</a>
                        <span className="ftr-legal-sep" />
                        <a href="#">Cookie Policy</a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}

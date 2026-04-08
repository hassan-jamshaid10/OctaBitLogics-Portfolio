"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

// ── Case studies data ─────────────────────────────────────────────────────────
const CASES = [
  {
    id: 1,
    industry: "SaaS (US)",
    logo: "OBL",
    logoSub: "OCTABITLOGICS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&fit=crop",
    title: "Automated SaaS Analytics Platform for Real-Time Business Intelligence",
    stats: [
      { value: "40%", label: "increase in user retention" },
      { value: "3×", label: "faster report generation" },
      { value: "60%", label: "reduction in manual tasks" },
    ],
  },
  {
    id: 2,
    industry: "FinTech (PK)",
    logo: "FT",
    logoSub: "FINTECH CLIENT",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&fit=crop",
    title: "Custom AI-Driven Payment Pipeline for Fraud Detection & Risk Scoring",
    stats: [
      { value: "35%", label: "reduction in fraud cases" },
      { value: "50%", label: "faster transaction processing" },
      { value: "28%", label: "improvement in risk accuracy" },
    ],
  },
  {
    id: 3,
    industry: "Healthcare (UK)",
    logo: "HC",
    logoSub: "HEALTH CLIENT",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop",
    title: "Cloud-Native Patient Data Pipeline for Resource & Billing Optimization",
    stats: [
      { value: "20%", label: "increase in billing accuracy" },
      { value: "15h", label: "saved per week" },
      { value: "45%", label: "boost in staff efficiency" },
    ],
  },
  {
    id: 4,
    industry: "E-Commerce (US)",
    logo: "EC",
    logoSub: "ECOM CLIENT",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&fit=crop",
    title: "Full-Stack E-Commerce Platform with AI-Powered Recommendation Engine",
    stats: [
      { value: "55%", label: "uplift in conversion rate" },
      { value: "30%", label: "increase in avg order value" },
      { value: "2×", label: "faster page load times" },
    ],
  },
  {
    id: 5,
    industry: "Logistics (EU)",
    logo: "LG",
    logoSub: "LOGISTICS CLIENT",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&fit=crop",
    title: "Real-Time Fleet Tracking & Route Optimization with ML-Powered Dispatch",
    stats: [
      { value: "22%", label: "drop in fuel costs" },
      { value: "38%", label: "faster delivery times" },
      { value: "90%", label: "on-time delivery rate" },
    ],
  },
];

const VISIBLE = 3;

export default function CaseStudies() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxOffset = CASES.length - VISIBLE;
  const prev = () => setOffset((o) => Math.max(o - 1, 0));
  const next = () => setOffset((o) => Math.min(o + 1, maxOffset));
  const visible = isMobile ? CASES : CASES.slice(offset, offset + VISIBLE);

  return (
    <section id="case-studies">
      <style>{`
        #case-studies {
          background: #ffffff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }
        #case-studies::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none; z-index: 0;
        }

        .cs-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── Header ── */
        .cs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .cs-heading {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #1B2E5E;
          line-height: 1.15;
        }
        .cs-heading span { color: #3BADB0; }

        .cs-header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cs-all-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #3BADB0;
          border: 1.5px solid #3BADB0;
          background: transparent;
          padding: 9px 20px; border-radius: 100px;
          cursor: pointer;
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .cs-all-btn:hover { background: #3BADB0; color: #fff; }

        .cs-nav-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(27,46,94,0.2);
          background: #fff; color: #1B2E5E;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.18s;
        }
        .cs-nav-btn:hover:not(:disabled) {
          background: #3BADB0; border-color: #3BADB0; color: #fff;
          transform: scale(1.08);
        }
        .cs-nav-btn:disabled { opacity: 0.28; cursor: default; }

        /* ── Card grid ── */
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ── FULL-IMAGE card ── */
        .cs-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          /* fixed tall aspect */
          aspect-ratio: 3 / 4;
          cursor: pointer;
        }

        /* background photo */
        .cs-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
          z-index: 0;
        }
        .cs-card:hover .cs-img { transform: scale(1.06); }

        /* strong gradient scrim — clear top, dark bottom */
        .cs-scrim {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(6,14,31,0.15) 0%,
            rgba(6,14,31,0.25) 35%,
            rgba(6,14,31,0.82) 70%,
            rgba(6,14,31,0.96) 100%
          );
          transition: background 0.35s ease;
        }
        .cs-card:hover .cs-scrim {
          background: linear-gradient(
            to bottom,
            rgba(6,14,31,0.2) 0%,
            rgba(6,14,31,0.32) 35%,
            rgba(6,14,31,0.88) 65%,
            rgba(6,14,31,0.97) 100%
          );
        }

        /* all content sits on top of scrim */
        .cs-content {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column;
          justify-content: space-between;
          padding: 16px;
        }

        /* ── logo badge (top-left) ── */
        .cs-logo-badge {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: rgba(6,14,31,0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 8px 12px;
          width: fit-content;
          line-height: 1;
        }
        .cs-logo-initials {
          font-family: 'Oxanium', monospace;
          font-size: 1.05rem; font-weight: 800;
          color: #3BADB0; letter-spacing: 0.04em;
        }
        .cs-logo-sub {
          font-size: 0.4rem; font-weight: 600;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          margin-top: 3px;
        }

        /* ── bottom content block ── */
        .cs-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .cs-industry-tag {
          font-family: 'Oxanium', monospace;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
        }
        .cs-title {
          font-family: 'Oxanium', monospace;
          font-size: 0.92rem; font-weight: 700;
          color: #ffffff; line-height: 1.4;
        }

        /* stats row */
        .cs-stats {
          display: flex;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 0.85rem;
        }
        .cs-stat {
          flex: 1;
          display: flex; flex-direction: column; gap: 2px;
        }
        .cs-stat + .cs-stat {
          border-left: 1px solid rgba(255,255,255,0.12);
          padding-left: 0.75rem;
        }
        .cs-stat-value {
          font-family: 'Oxanium', monospace;
          font-size: 1.25rem; font-weight: 800;
          color: #3BADB0; line-height: 1;
        }
        .cs-stat-label {
          font-size: 0.62rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.3;
        }

        /* ── Outlined Read More button ── */
        .cs-read-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #ffffff;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.55);
          border-radius: 100px;
          padding: 10px 22px;
          cursor: pointer;
          width: fit-content;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.18s;
        }
        .cs-read-btn:hover {
          background: #3BADB0;
          border-color: #3BADB0;
          color: #fff;
          transform: scale(1.03);
        }

        /* ── Pagination dots ── */
        .cs-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .cs-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(27,46,94,0.15);
          border: none; cursor: pointer;
          transition: background 0.22s, transform 0.18s;
          padding: 0;
        }
        .cs-dot.active { background: #3BADB0; transform: scale(1.35); }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .cs-inner { padding: 0; }
          .cs-header { padding: 0 1.75rem; }
          .cs-grid { 
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 1.75rem;
            gap: 1.25rem;
            padding: 0 1.75rem 2rem 1.75rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            width: 100%;
            max-width: 100vw;
            min-width: 0;
          }
          .cs-grid::-webkit-scrollbar { display: none; }
          .cs-card {
            min-width: 85vw;
            scroll-snap-align: start;
          }
          .cs-nav-btn { display: none; }
          .cs-dots { display: none; }
        }
        @media (max-width: 600px) {
          #case-studies { padding: 3.5rem 0; }
          .cs-card { aspect-ratio: 4 / 3; min-width: 85vw; }
          .cs-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.2rem;
            margin-bottom: 2rem;
            padding: 0 1.5rem;
          }
          .cs-heading { font-size: 1.65rem; }
          .cs-grid { 
            padding: 0 1.5rem 2rem 1.5rem; 
            scroll-padding-left: 1.5rem;
          }
        }
      `}</style>

      <div className="cs-inner">
        {/* ── Header ── */}
        <ScrollReveal y={15} duration={0.45} delay={0}>
          <div className="cs-header">
            <h2 className="cs-heading">
              Spotlight on <span>Client Success Stories</span>
            </h2>
            <div className="cs-header-right">
              <button className="cs-all-btn">All Case Studies →</button>
              <button className="cs-nav-btn" onClick={prev} disabled={offset === 0} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="cs-nav-btn" onClick={next} disabled={offset >= maxOffset} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Cards ── */}
        <ScrollReveal y={20} duration={0.5} delay={0.1}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={offset}
              className="cs-grid"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {visible.map((c) => (
                <div key={c.id} className="cs-card">
                  {/* Full-bleed photo */}
                  <img src={c.image} alt={c.title} className="cs-img" loading="lazy" />

                  {/* Gradient scrim */}
                  <div className="cs-scrim" />

                  {/* All content on top */}
                  <div className="cs-content">
                    {/* Top: logo badge */}
                    <div className="cs-logo-badge">
                      <span className="cs-logo-initials">{c.logo}</span>
                      <span className="cs-logo-sub">{c.logoSub}</span>
                    </div>

                    {/* Bottom: industry → title → stats → button */}
                    <div className="cs-bottom">
                      <span className="cs-industry-tag">{c.industry}</span>
                      <p className="cs-title">{c.title}</p>

                      <div className="cs-stats">
                        {c.stats.map((s) => (
                          <div key={s.label} className="cs-stat">
                            <span className="cs-stat-value">{s.value}</span>
                            <span className="cs-stat-label">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <button className="cs-read-btn">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>

        {/* Pagination dots */}
        <div className="cs-dots">
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <button
              key={i}
              className={`cs-dot${offset === i ? " active" : ""}`}
              onClick={() => setOffset(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
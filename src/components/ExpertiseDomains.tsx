"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
  {
    id: "ecommerce",
    num: "01",
    title: "E-Commerce",
    tag: "Retail & D2C",
    description:
      "We build high-conversion storefronts, AI-driven recommendation engines, and CRM integrations that turn browsers into loyal customers — at any scale.",
    stats: [{ v: "3×", l: "Average Revenue Lift" }, { v: "40%", l: "Cart Abandonment Drop" }],
  },
  {
    id: "logistics",
    num: "02",
    title: "Logistics",
    tag: "Supply Chain",
    description:
      "From real-time fleet tracking to demand forecasting, we engineer the operational backbone that keeps supply chains resilient and cost-efficient.",
    stats: [{ v: "60%", l: "Operational Efficiency" }, { v: "2×", l: "Faster Fulfillment" }],
  },
  {
    id: "realestate",
    num: "03",
    title: "Real Estate",
    tag: "PropTech",
    description:
      "Predictive valuation models, smart property search, and investor dashboards — transforming fragmented data into confident decisions.",
    stats: [{ v: "85%", l: "Forecast Accuracy" }, { v: "50%", l: "Lead Qualification Speed" }],
  },
  {
    id: "marketing",
    num: "04",
    title: "Marketing",
    tag: "Growth & Analytics",
    description:
      "Attribution modelling, audience segmentation, and AI-generated creative at scale. We make every marketing dollar traceable and amplified.",
    stats: [{ v: "4×", l: "Campaign ROI" }, { v: "90%", l: "Attribution Accuracy" }],
  },
  {
    id: "software",
    num: "05",
    title: "Software & Technology",
    tag: "SaaS & Platforms",
    description:
      "We ship production-grade SaaS platforms, developer tools, and AI-powered APIs — architected for the millions-of-users scale from day one.",
    stats: [{ v: "99.9%", l: "Uptime SLA" }, { v: "15ms", l: "Avg API Latency" }],
  },
  {
    id: "health",
    num: "06",
    title: "Health & Medical",
    tag: "HealthTech",
    description:
      "Computer vision diagnostics, HIPAA-compliant data pipelines, and patient outcome models that give clinicians time back — and better answers.",
    stats: [{ v: "80%", l: "Efficiency Gain" }, { v: "30%", l: "Diagnostic Speed" }],
  },
];

export default function ExpertiseDomains() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="expertise">
      <style>{`
        /* ── Section ── */
        #expertise {
          background: #faf9fd;
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* animated diagonal line pattern */
        #expertise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              -55deg,
              rgba(0, 32, 70, 0.03) 0px,
              rgba(0, 32, 70, 0.03) 1px,
              transparent 1px,
              transparent 40px
            );
          pointer-events: none;
        }

        /* large ghost text background */
        .exp-ghost {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Manrope', sans-serif;
          font-size: clamp(6rem, 15vw, 14rem);
          font-weight: 900;
          color: rgba(0, 32, 70, 0.03);
          white-space: nowrap;
          letter-spacing: -0.05em;
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }

        .exp-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .exp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .exp-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .exp-h2 span {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .exp-header-right {
          max-width: 340px;
          font-size: 0.92rem;
          line-height: 1.7;
          color: #74777f;
          flex-shrink: 0;
          padding-bottom: 4px;
        }

        /* ── Domain rows ── */
        .exp-list {
          border-top: 1px solid rgba(0, 32, 70, 0.1);
        }

        .exp-row {
          border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        /* animated left accent bar */
        .exp-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #2ECC40, #3BADB0);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .exp-row.open::before,
        .exp-row:hover::before {
          transform: scaleY(1);
        }

        .exp-row-head {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.6rem 1.5rem 1.6rem 2rem;
          transition: background 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .exp-row:hover .exp-row-head,
        .exp-row.open .exp-row-head {
          background: rgba(0, 32, 70, 0.02);
        }

        .exp-num {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: rgba(0, 32, 70, 0.25);
          min-width: 28px;
          transition: color 0.3s ease;
        }
        .exp-row.open .exp-num,
        .exp-row:hover .exp-num {
          color: #2ECC40;
        }

        .exp-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0, 32, 70, 0.4);
          background: rgba(0, 32, 70, 0.05);
          padding: 4px 12px;
          border-radius: 0;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .exp-row.open .exp-tag,
        .exp-row:hover .exp-tag {
          background: rgba(46, 204, 64, 0.1);
          color: #1ca832;
        }

        .exp-row-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.35rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: #002046;
          letter-spacing: -0.02em;
          flex: 1;
          transition: color 0.3s ease;
        }
        .exp-row.open .exp-row-title,
        .exp-row:hover .exp-row-title {
          color: #002046;
        }

        /* Plus → X indicator */
        .exp-indicator {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(0, 32, 70, 0.15);
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          color: #002046;
        }
        .exp-row.open .exp-indicator {
          background: #002046;
          border-color: #002046;
          color: #ffffff;
          transform: rotate(45deg);
        }
        .exp-row:hover:not(.open) .exp-indicator {
          border-color: #2ECC40;
          color: #2ECC40;
        }

        /* ── Expanded content ── */
        .exp-body {
          padding: 0 2rem 2rem 4.5rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .exp-desc {
          font-size: 0.97rem;
          line-height: 1.8;
          color: #44474e;
          margin: 0 0 1.5rem;
          max-width: 520px;
        }

        .exp-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #002046;
          text-decoration: none;
          border-bottom: 2px solid #2ECC40;
          padding-bottom: 2px;
          transition: color 0.25s ease, gap 0.25s ease;
        }
        .exp-link:hover {
          color: #2ECC40;
          gap: 12px;
        }

        /* Stats */
        .exp-stats {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-top: 0.25rem;
        }

        .exp-stat {
          border-left: 3px solid #2ECC40;
          padding-left: 1.25rem;
        }

        .exp-stat-val {
          font-family: 'Manrope', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          color: #002046;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .exp-stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #74777f;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* counter animation */
        @keyframes exp-countup {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exp-stat-val { animation: exp-countup 0.4s ease both; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          #expertise { padding: 4.5rem 20px; }
          .exp-header { flex-direction: column; align-items: flex-start; }
          .exp-header-right { max-width: 100%; }
          .exp-body { grid-template-columns: 1fr; gap: 2rem; padding-left: 2rem; }
        }
        @media (max-width: 600px) {
          .exp-row-head { gap: 1rem; padding: 1.2rem 1rem 1.2rem 1.5rem; }
          .exp-tag { display: none; }
          .exp-body { padding: 0 1rem 1.5rem 1.5rem; }
        }
      `}</style>

      {/* ghost background text */}
      <div className="exp-ghost">EXPERTISE</div>

      <div className="exp-inner">

        {/* Header */}
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="exp-h2">
            Our Impact Across<br />
            <span>Industries</span>
          </h2>
          <p className="exp-header-right">
            Pairing precision engineering with deep industry experience, we deliver
            AI-powered solutions tailored to overcome sector-specific challenges.
          </p>
        </motion.div>

        {/* Domain rows */}
        <div className="exp-list">
          {DOMAINS.map((d, i) => {
            const isOpen = active === d.id;
            return (
              <motion.div
                key={d.id}
                className={`exp-row${isOpen ? " open" : ""}`}
                onClick={() => setActive(isOpen ? null : d.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Row header */}
                <div className="exp-row-head">
                  <span className="exp-num">{d.num}</span>
                  <span className="exp-tag">{d.tag}</span>
                  <span className="exp-row-title">{d.title}</span>
                  <div className="exp-indicator">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                      <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                    </svg>
                  </div>
                </div>

                {/* Expanded body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="exp-body">
                        <div>
                          <p className="exp-desc">{d.description}</p>
                          <a href="#contact" className="exp-link">
                            Start a project
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                        <div className="exp-stats">
                          {d.stats.map((s, si) => (
                            <motion.div
                              key={si}
                              className="exp-stat"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.1 + 0.1 }}
                            >
                              <div className="exp-stat-val">{s.v}</div>
                              <div className="exp-stat-label">{s.l}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
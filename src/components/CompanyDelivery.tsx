"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MODELS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dedicated teams",
    desc: "Access a team of specialists who work as an extension of your organization with ongoing responsibility for defined workflows."
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Project-based delivery",
    desc: "Support for well-defined projects with a clear scope, timeline, and outcomes."
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M16 3h5v5" />
        <path d="M21 3l-7 7" />
        <path d="M21 16v5h-5" />
        <path d="M21 21l-7-7" />
        <path d="M3 21l7-7" />
        <path d="M3 16v5h5" />
        <path d="M8 3H3v5" />
        <path d="M3 3l7 7" />
      </svg>
    ),
    title: "Hybrid delivery model",
    desc: "A shared operational model where responsibilities are divided between your internal team and our specialists. Routine tasks and process execution are handled by us, while your team focuses on strategy, decision-making, and oversight."
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <rect x="4" y="2" width="16" height="20" />
        <path d="M12 18h.01" />
        <path d="M8 6h.01" />
        <path d="M12 6h.01" />
        <path d="M16 6h.01" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
    title: "Offshore development center",
    desc: "Flexible operational support that can be scaled up whenever workloads increase. Our team steps in to handle time-sensitive tasks or short-term requirements, allowing you to maintain continuity and performance without long-term commitments."
  }
];

const CompanyDelivery = React.memo(function CompanyDelivery() {
  return (
    <section id="company-delivery">
      <style>{`
        #company-delivery {
          background: #faf9fd;
          padding: 8rem 40px;
          font-family: inherit;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }

        .cd-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .cd-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: center;
        }

        .cd-h2 {
          font-family: inherit;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .cd-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .cd-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #74777f;
          margin: 0;
          max-width: 480px;
        }

        .cd-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: 1px solid rgba(0, 32, 70, 0.2);
          color: #002046;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cd-btn:hover {
          background: #002046;
          color: #ffffff;
        }

        /* ── Grid ── */
        .cd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(0, 32, 70, 0.1);
          border-left: 1px solid rgba(0, 32, 70, 0.1);
        }

        /* Make the 4th item span differently or flow naturally */
        /* To match picture: 3 columns top row? No, picture shows 3 columns wide. */
        /* Wait, picture shows "Dedicated teams", "Project-based", "Hybrid" in a row. */
        /* And "Offshore development center" is below "Dedicated teams". */
        /* So it's a 3-column grid where items just wrap. */

        .cd-card {
          padding: 3rem 2rem;
          border-right: 1px solid rgba(0, 32, 70, 0.1);
          border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          display: flex;
          flex-direction: column;
          background: #ffffff;
          transition: background 0.3s ease;
          box-sizing: border-box;
          min-width: 0;
        }

        .cd-card:hover {
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(27,46,94,0.04);
        }

        .cd-icon {
          color: #3BADB0;
          margin-bottom: 1.5rem;
        }

        .cd-card-title {
          font-family: inherit;
          font-size: 1.25rem;
          font-weight: 800;
          color: #002046;
          margin: 0 0 4rem 0;
        }

        .cd-card-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #74777f;
          margin: 0;
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          #company-delivery { padding: 5rem 40px; }
          .cd-header { grid-template-columns: 1fr; gap: 2rem; }
          .cd-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          #company-delivery { padding: 4rem 20px; }
          .cd-h2 br { display: none; }
        }
        @media (max-width: 600px) {
          .cd-grid { grid-template-columns: 1fr; }
          .cd-card { padding: 2rem 1.5rem; }
          .cd-card-title { margin-bottom: 1.5rem; }
        }
        @media (max-width: 480px) {
          .cd-h2 { font-size: 1.5rem; }
        }
        @media (max-width: 400px) {
          #company-delivery { padding: 3.5rem 16px; }
          .cd-h2 { font-size: 1.3rem; }
          .cd-card { padding: 1.75rem 1.25rem; }
          .cd-header { gap: 1.5rem; }
        }
        @media (max-width: 360px) {
          #company-delivery { padding: 3rem 14px; }
          .cd-h2 { font-size: 1.15rem; }
          .cd-card { padding: 1.5rem 1rem; }
        }
      `}</style>

      <div className="cd-inner">
        <div className="cd-header">
          <motion.h2 
            className="cd-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            We work as a long-term partner, built<br />
            for trust and momentum
          </motion.h2>
          <motion.div 
            className="cd-header-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="cd-desc">
              From onboarding and project chartering to phased execution and governance,
              we prioritise transparency and shared ownership.
            </p>
            <Link href="/how-we-deliver" className="cd-btn">
              Learn how we deliver
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="cd-grid">
          {MODELS.map((model, i) => (
            <motion.div 
              key={i} 
              className="cd-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="cd-icon">{model.icon}</div>
              <h3 className="cd-card-title">{model.title}</h3>
              <p className="cd-card-desc">{model.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CompanyDelivery;

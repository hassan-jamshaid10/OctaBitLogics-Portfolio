"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    value: "17+",
    label: "YEARS IN BUSINESS AND COUNTING"
  },
  {
    value: "73%",
    label: "OF CLIENTS RETURN FOR LONG-TERM\nPARTNERSHIPS"
  },
  {
    value: "800+",
    label: "PROFESSIONALS ON BOARD"
  },
  {
    value: "10+",
    label: "YEARS OF LAUNCHING AND BUILDING AI\nPRODUCTS"
  }
];

// Icons
const DesignIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <rect x="3" y="3" width="6" height="6" />
    <rect x="15" y="3" width="6" height="6" />
    <rect x="9" y="15" width="6" height="6" />
    <path d="M6 9v3h12V9" />
    <path d="M12 12v3" />
  </svg>
);

const BuildIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M16 4l-8 16" />
  </svg>
);

const ScaleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

export default function WhoWeAre() {
  return (
    <section id="who-we-are">
      <style>{`
        #who-we-are {
          background: #faf9fd;
          padding: 6rem 40px;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wwa-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #74777f;
          text-transform: uppercase;
          margin-bottom: 2rem;
          text-align: center;
        }

        .wwa-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.4;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 6rem auto;
          letter-spacing: -0.02em;
        }

        .wwa-highlight {
          color: #3BADB0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .wwa-icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: linear-gradient(135deg, #3BADB0 0%, #2ECC40 100%);
          color: #ffffff;
          border-radius: 4px;
          vertical-align: middle;
          margin: 0 4px;
          position: relative;
          top: -2px;
        }

        .wwa-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .wwa-stat-col {
          display: flex;
          flex-direction: column;
          padding: 0 2rem;
          position: relative;
        }

        .wwa-stat-col:not(:first-child)::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0, 32, 70, 0.1);
        }

        .wwa-stat-val {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .wwa-stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #74777f;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.6;
          white-space: pre-line;
        }

        @media (max-width: 1024px) {
          .wwa-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 0;
          }
          .wwa-stat-col:nth-child(3)::before {
            display: none;
          }
        }

        @media (max-width: 600px) {
          #who-we-are { padding: 4rem 20px; }
          .wwa-stats-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem 0;
          }
          .wwa-stat-col { padding: 0 1rem; }
          .wwa-stat-col::before { display: none !important; }
          .wwa-h2 { font-size: 1.5rem; line-height: 1.5; }
        }
      `}</style>

      <div className="wwa-eyebrow">WHO WE ARE</div>
      
      <h2 className="wwa-h2">
        We're an AI-first engineering partner<br />
        helping organizations{" "}
        <span className="wwa-highlight">
          design <span className="wwa-icon-box"><DesignIcon /></span>
        </span>,{" "}
        <span className="wwa-highlight">
          build <span className="wwa-icon-box"><BuildIcon /></span>
        </span>,{" "}
        and{" "}
        <span className="wwa-highlight">
          scale <span className="wwa-icon-box"><ScaleIcon /></span>
        </span>{" "}
        intelligent systems that deliver<br />
        lasting business value.
      </h2>

      <div className="wwa-stats-grid">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i} 
            className="wwa-stat-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="wwa-stat-val">{stat.value}</div>
            <div className="wwa-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

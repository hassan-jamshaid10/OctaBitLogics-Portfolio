"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ── Products Data ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "sporttek",
    name: "SportTek",
    tagline: "Dual-Sided Sports Venue Booking Platform",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=900&q=80&fit=crop",
    desc: "A mobile-first booking platform designed specifically for the Pakistani market, bridging the gap between sports enthusiasts and venue owners in real-time.",
    features: [
      {
        title: "Player Experience",
        detail: "Browse nearby courts, filter by location/sport, apply promos, check real-time slots, and pay instantly via Easypaisa, JazzCash, or bank transfer in under a minute.",
      },
      {
        title: "Owner Command Center",
        detail: "A full management dashboard with color-coded timelines separating app bookings from manual walk-ins, plus accept/decline countdown timers.",
      },
      {
        title: "Real-Time Sync",
        detail: "Removes WhatsApp friction. When a player books and pays, the owner is alerted instantly, and the slot locks globally to prevent double-bookings.",
      },
    ],
    tech: ["Mobile-First", "Real-Time Sync", "Fintech Integration", "Dashboard"],
  },
  {
    id: "launchpulse",
    name: "LaunchPulse AI",
    tagline: "AI-Powered Startup Evaluation & Prediction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    desc: "A comprehensive platform that combines modern web technologies with machine learning to help founders and investors make data-driven decisions.",
    features: [
      {
        title: "Success Prediction",
        detail: "Leverages machine learning models to analyze startup metrics and predict success probability, giving investors deeper confidence.",
      },
      {
        title: "Risk & Market Fit",
        detail: "Provides automated risk factor analysis, growth potential assessments, and a proprietary market fit scoring algorithm.",
      },
      {
        title: "Document Management",
        detail: "Secure vault and intelligent parsing for pitch decks, financial models, and business plans.",
      },
    ],
    tech: ["Next.js", "tRPC", "PostgreSQL", "Machine Learning"],
  },
  {
    id: "tactevac",
    name: "TACT-EVAC",
    tagline: "Tactical Airbase Evacuation Simulator",
    image: "https://images.unsplash.com/photo-1583097144883-9bfaaf578875?w=900&q=80&fit=crop",
    desc: "A highly advanced Unity 6 AI-driven military simulation where autonomous tow robots evacuate high-value aircraft to bunkers during red-alert scenarios.",
    features: [
      {
        title: "Full-Scale Military Base",
        detail: "Features runways, hangars, ATC towers, air defenses, and 12 bunkers. Hosts 70+ aircraft including B-2 Spirits, F-35s, B-52s, and AWACS.",
      },
      {
        title: "AI Swarm Logic",
        detail: "On red alert, 22 NavMesh-based tow robots dispatch via an 8-tier priority queue (strategic assets first), towing aircraft to the nearest open bunker.",
      },
      {
        title: "Tactical HUD",
        detail: "Commanders monitor the chaos via a real-time tactical HUD, tracking robot status, bunker capacity, and a 35-camera CCTV surveillance system.",
      },
    ],
    tech: ["Unity 6", "NavMesh AI", "Swarm Logic", "Simulation"],
  },
];

// ── Shared Card Component ─────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
}: {
  product: typeof PRODUCTS[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className={`prd-card ${isEven ? "prd-even" : "prd-odd"}`}>
      <div className="prd-img-col">
        <div className="prd-img-wrap">
          <img src={product.image} alt={product.name} className="prd-img" loading="lazy" />
          <div className="prd-img-scrim" />
          <div className="prd-img-glow" />
        </div>
      </div>

      <div className="prd-content-col">
        <div className="prd-number">0{index + 1}</div>

        <h3 className="prd-name">{product.name}</h3>
        <p className="prd-tagline">{product.tagline}</p>

        <div className="prd-tech-pills">
          {product.tech.map((t) => (
            <span key={t} className="prd-tech-pill">{t}</span>
          ))}
        </div>

        <p className="prd-desc">{product.desc}</p>

        <div className="prd-features">
          {product.features.map((f, i) => (
            <div key={i} className="prd-feature">
              <div className="prd-feat-indicator" />
              <div>
                <div className="prd-feat-title">{f.title}</div>
                <div className="prd-feat-detail">{f.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <section id="products">
      <style>{`
        #products {
          background: #ffffff;
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }
        #products::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none; z-index: 0;
        }

        .prd-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── Header ── */
        .prd-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .prd-badge {
          display: inline-flex;
          align-items: center;
          font-family: 'Oxanium', monospace;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #3BADB0;
          background: rgba(59,173,176,0.1);
          border: 1px solid rgba(59,173,176,0.25);
          padding: 6px 16px; border-radius: 100px;
          margin-bottom: 1.5rem;
        }
        .prd-heading {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #1B2E5E;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .prd-heading span {
          background: linear-gradient(135deg, #3BADB0 0%, #1f4080 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── List Layout ── */
        .prd-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        /* ── Card ── */
        .prd-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .prd-even .prd-content-col { order: 1; }
        .prd-even .prd-img-col { order: 2; }
        
        .prd-odd .prd-img-col { order: 1; }
        .prd-odd .prd-content-col { order: 2; }

        /* ── Imagery ── */
        .prd-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(27,46,94,0.12);
          border: 1px solid rgba(59,173,176,0.15);
        }
        .prd-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .prd-img-wrap:hover .prd-img {
          transform: scale(1.05);
        }
        .prd-img-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(45deg, rgba(27,46,94,0.3) 0%, transparent 60%);
          mix-blend-mode: multiply;
        }
        .prd-img-glow {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(59,173,176,0.2) 0%, transparent 50%);
          mix-blend-mode: screen;
        }

        /* ── Content ── */
        .prd-content-col {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .prd-number {
          font-family: 'Oxanium', monospace;
          font-size: 6rem;
          font-weight: 900;
          line-height: 0.8;
          color: rgba(59,173,176,0.08); /* watermark */
          position: absolute;
          top: -2.5rem; left: -1rem;
          z-index: 0;
          pointer-events: none;
        }
        
        .prd-name {
          font-family: 'Oxanium', monospace;
          font-size: 2.2rem;
          font-weight: 800;
          color: #1B2E5E;
          margin-bottom: 0.3rem;
          position: relative; z-index: 1;
        }
        .prd-tagline {
          font-family: 'Oxanium', monospace;
          font-size: 0.95rem;
          font-weight: 700;
          color: #3BADB0;
          margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }

        /* Pills */
        .prd-tech-pills {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }
        .prd-tech-pill {
          font-family: 'Oxanium', monospace;
          font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(27,46,94,0.65);
          border: 1px solid rgba(27,46,94,0.15);
          padding: 4px 10px; border-radius: 6px;
          background: rgba(27,46,94,0.03);
        }

        .prd-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(27,46,94,0.7);
          margin-bottom: 2rem;
          position: relative; z-index: 1;
        }

        /* Features List */
        .prd-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative; z-index: 1;
        }
        .prd-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .prd-feat-indicator {
          flex-shrink: 0;
          width: 24px; height: 24px;
          border-radius: 6px;
          background: rgba(59,173,176,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
          position: relative;
        }
        .prd-feat-indicator::after {
          content: '';
          width: 8px; height: 8px;
          background: #3BADB0;
          border-radius: 2px;
        }
        
        .prd-feat-title {
          font-family: 'Oxanium', monospace;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1B2E5E;
          margin-bottom: 0.3rem;
        }
        .prd-feat-detail {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(27,46,94,0.6);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .prd-card {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .prd-even .prd-content-col, .prd-odd .prd-content-col { order: 2; }
          .prd-even .prd-img-col, .prd-odd .prd-img-col { order: 1; }
          .prd-list { gap: 5rem; }
        }
        @media (max-width: 600px) {
          .prd-inner { padding: 0 1.25rem; }
          #products { padding: 5rem 0 6rem; }
          .prd-heading { font-size: 2rem; }
          .prd-number { font-size: 4rem; top: -1.5rem; }
          .prd-footer { margin-top: 4rem; }
        }

        /* ── Footer Button ── */
        .prd-footer {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }
        .prd-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1B2E5E;
          background: transparent;
          border: 2px solid #1B2E5E;
          padding: 12px 32px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .prd-more-btn:hover {
          background: #3BADB0;
          border-color: #3BADB0;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59,173,176,0.3);
        }
      `}</style>

      <div className="prd-inner">
        <div className="prd-header">
          <div className="prd-badge">Our Arsenal</div>
          <h2 className="prd-heading">
            Flagship Products <span>&amp; Projects</span>
          </h2>
        </div>

        <div className="prd-list">
          {PRODUCTS.map((prod, index) => (
            <ProductCard key={prod.id} product={prod} index={index} />
          ))}
        </div>

        <div className="prd-footer">
          <button className="prd-more-btn">
            View More Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
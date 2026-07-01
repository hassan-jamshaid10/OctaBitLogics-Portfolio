"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    id: "ecommerce",
    num: "01",
    title: "E-Commerce & Retail",
    tag: "D2C · Marketplace",
    tagColor: "#2ECC40",
    desc: "High-conversion storefronts, AI recommendation engines, and seamless omnichannel experiences that turn visitors into loyal customers.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "health",
    num: "02",
    title: "Health & MedTech",
    tag: "HealthTech · HIPAA",
    tagColor: "#3BADB0",
    desc: "Computer vision diagnostics, patient outcome models, and HIPAA-compliant pipelines that give clinicians better answers, faster.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "fintech",
    num: "03",
    title: "Fintech & Banking",
    tag: "Payments · Lending",
    tagColor: "#F4C430",
    desc: "Fraud detection, open-banking APIs, and real-time payment infrastructure built for regulatory compliance and enterprise scale.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "logistics",
    num: "04",
    title: "Logistics & Supply Chain",
    tag: "Fleet · Fulfilment",
    tagColor: "#FF6B35",
    desc: "Real-time fleet tracking, demand forecasting, and warehouse automation that keeps supply chains resilient and cost-efficient.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "realestate",
    num: "05",
    title: "Real Estate & PropTech",
    tag: "PropTech · Investment",
    tagColor: "#9B59B6",
    desc: "Predictive valuation models, smart property search, and investor dashboards transforming fragmented data into confident decisions.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "education",
    num: "06",
    title: "EdTech & E-Learning",
    tag: "LMS · AI Tutoring",
    tagColor: "#2ECC40",
    desc: "Adaptive learning platforms, AI-powered tutoring engines, and enterprise LMS solutions that personalize education at scale.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "saas",
    num: "07",
    title: "SaaS & Software",
    tag: "Platforms · APIs",
    tagColor: "#3BADB0",
    desc: "Production-grade SaaS platforms, developer tools, and AI-powered APIs — architected for millions-of-users scale from day one.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "marketing",
    num: "08",
    title: "Marketing & AdTech",
    tag: "Growth · Analytics",
    tagColor: "#E74C3C",
    desc: "Attribution modelling, audience segmentation, and AI-generated creative at scale — every marketing dollar made traceable and amplified.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    size: "small",
  },
];

export default function IndustriesWeServe() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries-we-serve">
      <style>{`
        /* ── Section ── */
        #industries-we-serve {
          background: #faf9fd;
          padding: 8rem 40px;
          position: relative;
          overflow: hidden;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
        }

        /* Subtle diagonal line texture (matches region section) */
        #industries-we-serve::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            rgba(0, 32, 70, 0.025) 0px,
            rgba(0, 32, 70, 0.025) 1px,
            transparent 1px,
            transparent 40px
          );
          pointer-events: none;
        }

        /* Ghost watermark */
        .iws-ghost {
          position: absolute;
          bottom: -3rem;
          right: -1rem;
          font-family: inherit;
          font-size: clamp(5rem, 14vw, 13rem);
          font-weight: 900;
          color: rgba(0, 32, 70, 0.04);
          white-space: nowrap;
          letter-spacing: -0.05em;
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }

        .iws-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .iws-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .iws-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 1rem;
        }
        .iws-label::before {
          content: none;
          flex-shrink: 0;
        }

        .iws-h2 {
          font-family: inherit;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .iws-h2 span {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .iws-header-right {
          max-width: 380px;
          font-size: 0.92rem;
          line-height: 1.75;
          color: #74777f;
          flex-shrink: 0;
          padding-bottom: 4px;
        }

        /* ── Mosaic Grid ── */
        .iws-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 16px;
        }

        /* Large hero cards: 2 col × 2 row */
        .iws-card.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        /* ── Card base ── */
        .iws-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 2px;
          box-shadow: 0 2px 12px rgba(0, 32, 70, 0.08);
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
          min-width: 0;
          box-sizing: border-box;
        }
        .iws-card:hover {
          box-shadow: 0 16px 48px rgba(0, 32, 70, 0.18);
          transform: translateY(-3px);
        }

        /* image zoom */
        .iws-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          display: block;
        }
        .iws-card:hover .iws-card-img {
          transform: scale(1.09);
        }

        /* gradient overlay — always present, heavier on hover */
        .iws-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 18, 42, 0.93) 0%,
            rgba(0, 18, 42, 0.5) 45%,
            rgba(0, 18, 42, 0.08) 100%
          );
          transition: background 0.5s ease;
        }
        .iws-card:hover .iws-card-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 18, 42, 0.97) 0%,
            rgba(0, 18, 42, 0.65) 52%,
            rgba(0, 18, 42, 0.12) 100%
          );
        }

        /* accent border on hover */
        .iws-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2.5px solid transparent;
          border-radius: 2px;
          transition: border-color 0.35s ease;
          pointer-events: none;
          z-index: 3;
        }
        .iws-card:hover::after {
          border-color: var(--accent, #2ECC40);
        }

        /* top-right number badge */
        .iws-card-top {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          font-family: inherit;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.25);
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        .iws-card:hover .iws-card-top { opacity: 0; }

        /* ── Card Content (bottom) ── */
        .iws-card-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.6rem 1.4rem;
          z-index: 2;
        }
        .iws-card.large .iws-card-content {
          padding: 2.2rem 2rem;
        }

        .iws-card-num {
          font-family: inherit;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.45rem;
          transition: color 0.3s;
        }
        .iws-card:hover .iws-card-num { color: var(--accent, #2ECC40); }

        .iws-card-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 0.6rem;
          width: fit-content;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.3s ease;
        }
        .iws-card:hover .iws-card-tag {
          background: rgba(46, 204, 64, 0.15);
          color: var(--accent, #2ECC40);
          border-color: color-mix(in srgb, var(--accent, #2ECC40) 40%, transparent);
        }

        .iws-card-title {
          font-family: inherit;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.18;
          margin: 0 0 0.7rem;
          font-size: 1.1rem;
        }
        .iws-card.large .iws-card-title {
          font-size: clamp(1.35rem, 2.4vw, 1.8rem);
          margin-bottom: 0.8rem;
        }

        /* description — slides up on hover */
        .iws-card-desc {
          font-size: 0.82rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          max-width: 320px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.4s ease;
        }
        .iws-card:hover .iws-card-desc {
          max-height: 130px;
          opacity: 1;
        }
        .iws-card.large .iws-card-desc {
          font-size: 0.9rem;
          max-width: 420px;
        }



        /* ── Bottom CTA ── */
        .iws-cta {
          margin-top: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          border: 1px solid rgba(0, 32, 70, 0.1);
          background: #ffffff;
          border-radius: 2px;
          gap: 2rem;
          box-shadow: 0 2px 16px rgba(0, 32, 70, 0.06);
        }

        .iws-cta-text {
          font-family: inherit;
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          font-weight: 800;
          color: #002046;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .iws-cta-text span {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .iws-cta-sub {
          font-size: 0.85rem;
          color: #74777f;
          margin: 0.3rem 0 0;
        }

        .iws-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.85rem 2rem;
          background: #002046;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-decoration: none;
          border-radius: 0;
          border: 2px solid #002046;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
          text-transform: uppercase;
          align-self: flex-start;
        }
        .iws-cta-btn:hover {
          background: transparent;
          color: #002046;
        }
        .iws-cta-btn svg { transition: transform 0.3s ease; }
        .iws-cta-btn:hover svg { transform: translateX(4px); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .iws-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          #industries-we-serve { padding: 5rem 20px; }
          .iws-header { flex-direction: column; align-items: flex-start; gap: 1.5rem; margin-bottom: 2.5rem; }
          .iws-header-right { max-width: 100%; font-size: 0.9rem; }
          .iws-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; }
          .iws-card.large { grid-column: span 2; grid-row: span 1; }
          .iws-cta { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          .iws-h2 br { display: none; }
          .iws-cta-btn { padding: 0.7rem 1.4rem; font-size: 0.78rem; letter-spacing: 0.04em; gap: 8px; flex-shrink: unset; align-self: flex-start; }
        }
        @media (max-width: 500px) {
          #industries-we-serve { padding: 4rem 16px; }
          .iws-grid { grid-template-columns: 1fr; grid-auto-rows: 210px; gap: 12px; }
          .iws-card.large { grid-column: span 1; }
          .iws-cta { padding: 1.25rem; }
          .iws-cta-btn { padding: 0.65rem 1.2rem; font-size: 0.74rem; gap: 6px; }
          .iws-h2 { font-size: 1.5rem; }
          .iws-card-content { padding: 1.2rem 1rem; }
        }
        @media (max-width: 400px) {
          #industries-we-serve { padding: 3.5rem 14px; }
          .iws-grid { grid-auto-rows: 185px; gap: 10px; }
          .iws-h2 { font-size: 1.3rem; }
          .iws-cta { gap: 0.9rem; padding: 1.1rem; }
          .iws-cta-text { font-size: 0.9rem; }
          .iws-cta-sub { font-size: 0.78rem; }
          .iws-cta-btn { font-size: 0.7rem; padding: 0.6rem 1rem; }
        }
        @media (max-width: 360px) {
          #industries-we-serve { padding: 3rem 12px; }
          .iws-grid { grid-auto-rows: 170px; }
          .iws-h2 { font-size: 1.15rem; }
          .iws-card-title { font-size: 0.95rem; }
        }
      `}</style>

      <div className="iws-ghost">INDUSTRIES</div>

      <div className="iws-inner">

        {/* Header */}
        <motion.div
          className="iws-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="iws-label">Industries We Serve</div>
            <h2 className="iws-h2">
              Deep expertise across<br />
              <span>every major sector</span>
            </h2>
          </div>
          <p className="iws-header-right">
            From fintech to healthcare, we pair precision engineering with
            sector-specific knowledge to deliver AI-powered solutions that
            move the needle not just the metrics.
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <div className="iws-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              className={`iws-card ${ind.size}`}
              style={{ "--accent": ind.tagColor } as React.CSSProperties}
              onMouseEnter={() => setHovered(ind.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="iws-card-img"
                loading="lazy"
              />
              <div className="iws-card-overlay" />
              <div className="iws-card-top">{ind.num}</div>

              <div className="iws-card-content">
                <div className="iws-card-num">{ind.num}</div>
                <div className="iws-card-tag">{ind.tag}</div>
                <h3 className="iws-card-title">{ind.title}</h3>
                <p className="iws-card-desc">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          className="iws-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="iws-cta-text">
              Don&apos;t see your industry?{" "}
              <span>We build for every sector.</span>
            </p>
            <p className="iws-cta-sub">
              Tell us your challenge, we&apos;ll engineer the solution.
            </p>
          </div>
          <a href="/contact" className="iws-cta-btn">
            Start a Conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8h11M9 3.5 13.5 8 9 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

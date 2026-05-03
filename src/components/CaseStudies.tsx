"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── Projects data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    slug: "saas-analytics",
    category: "FINTECH • AI ANALYTICS",
    title: "NeuralTrade Pro",
    desc: "A deep-learning forecasting engine processing 2M+ transactions/sec with 15ms latency for global hedge funds.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&fit=crop",
  },
  {
    id: 2,
    slug: "healthcare-pipeline",
    category: "HEALTHCARE • COMPUTER VISION",
    title: "OptiScan Med",
    desc: "Advanced computer vision software for real-time pathology detection in diagnostic medical imaging.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <style>{`
        #case-studies {
          background: #002046;
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
          min-height: unset;
        }

        .proj-wrap {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .proj-header {
          margin-bottom: 4rem;
        }
        .proj-badge {
          display: inline-block;
          background: #4ade80;
          color: #002202;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 5px 16px;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }
        .proj-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #ffffff;
        }

        /* ── Cards grid ── */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        /* ── Individual project card ── */
        .proj-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .proj-img-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          background: #e3e2e6;
        }
        .proj-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .proj-card:hover .proj-img { transform: scale(1.05); }

        /* Hover overlay */
        .proj-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,32,70,0.8), transparent);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .proj-card:hover .proj-img-overlay { opacity: 1; }

        /* "Explore" badge in center on hover */
        .proj-explore {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .proj-card:hover .proj-explore { opacity: 1; }
        .proj-explore-btn {
          background: #1b6d1e;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
        }

        /* Card text */
        .proj-category {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #87da7d;
          margin-bottom: 0.5rem;
        }
        .proj-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #4ade80;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .proj-desc {
          display: inline-block;
          background: #4ade80;
          color: #002202;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 9999px;
        }

        /* View all link */
        .proj-view-all {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        .proj-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #4ade80;
          text-decoration: none;
          border: 1.5px solid rgba(74,222,128,0.35);
          padding: 12px 28px;
          border-radius: 9999px;
          transition: all 0.25s ease;
        }
        .proj-view-all-btn:hover {
          background: rgba(74,222,128,0.08);
          border-color: #4ade80;
        }

        /* Responsive */
        @media (max-width: 768px) {
          #case-studies { padding: 4rem 16px; }
          .proj-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <div className="proj-wrap">
        {/* Header */}
        <motion.div
          className="proj-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="proj-badge">Portfolio 2024</span>
          <h2 className="proj-h2">Selected Projects</h2>
        </motion.div>

        {/* Project cards */}
        <motion.div
          className="proj-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.id}
              className="proj-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {/* Image */}
              <div className="proj-img-wrap">
                <img src={p.image} alt={p.title} className="proj-img" loading="lazy" />
                <div className="proj-img-overlay" />
                <div className="proj-explore">
                  <span className="proj-explore-btn">Explore Case Study</span>
                </div>
              </div>

              {/* Meta */}
              <p className="proj-category">{p.category}</p>
              <h3 className="proj-title">{p.title}</h3>
              <span className="proj-desc">{p.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <div className="proj-view-all">
          <Link href="/projects" className="proj-view-all-btn">
            View All Projects
            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
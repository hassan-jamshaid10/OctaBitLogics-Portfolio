"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── Service data with CDN images ──────────────────────────────────────────────
const SERVICES_LARGE = [
  {
    slug: "ai-and-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80&fit=crop",
    imageAlt: "AI & Machine Learning",
    icon: "psychology",
    iconBg: "#4ade80",
    title: "AI & Machine Learning",
    desc: "Custom LLMs, computer vision, and predictive analytics built on proprietary enterprise-safe frameworks.",
    bullets: ["NLP & LLM Orchestration", "Edge-AI Optimization"],
  },
  {
    slug: "data-engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&fit=crop",
    imageAlt: "Data Engineering",
    icon: "database",
    iconBg: "#22c55e",
    title: "Data Engineering",
    desc: "Robust pipelines that turn chaotic data streams into organized, high-fidelity intelligence reservoirs.",
    bullets: ["Real-time ETL Pipelines", "Data Lakehouse Architecture"],
  },
];

const SERVICES_SMALL = [
  {
    slug: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80&fit=crop",
    imageAlt: "UI/UX Design",
    icon: "grid_view",
    iconBg: "#4ade80",
    iconColor: "#ffffff",
    title: "UI/UX Design",
    desc: "Cognitive-led design systems that humanize complex data visualizations.",
  },
  {
    slug: "cloud-and-devops",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80&fit=crop",
    imageAlt: "DevOps & MLOps",
    icon: "terminal",
    iconBg: "#22c55e",
    iconColor: "#ffffff",
    title: "DevOps & MLOps",
    desc: "Automated deployment cycles ensuring zero-downtime model updates.",
  },
  {
    slug: "custom-software-development",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80&fit=crop",
    imageAlt: "Cloud Solutions",
    icon: "cloud",
    iconBg: "#16a34a",
    iconColor: "#ffffff",
    title: "Cloud Solutions",
    desc: "Scalable cloud-native infrastructure on AWS, GCP, and Azure.",
  },
];

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Services() {
  return (
    <section id="services">
      <style>{`
        /* ── Section shell ── */
        #services {
          background: linear-gradient(135deg, #001428 0%, #002046 50%, #001830 100%);
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
          min-height: unset;
        }

        /* animated grid overlay */
        #services::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(46,204,64,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,204,64,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* glow orb – top right */
        #services::after {
          content: '';
          position: absolute; top: -200px; right: -200px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(46,204,64,0.1) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* glow orb – bottom left */
        .srv-glow-bl {
          position: absolute; bottom: -180px; left: -180px;
          width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,32,70,0.15) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .srv-wrap {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Section header ── */
        .srv-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .srv-header-left { max-width: 600px; }

        .srv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 1rem;
        }
        .srv-eyebrow::before,
        .srv-eyebrow::after {
          content: '';
          display: block;
          width: 24px; height: 1.5px;
          background: #2ECC40;
          border-radius: 2px;
          opacity: 0.6;
        }

        .srv-section-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }
        .srv-section-h2 .hl {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .srv-section-p {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
        }
        .srv-catalog-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #4ade80;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.25);
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .srv-catalog-btn:hover {
          background: rgba(74,222,128,0.18);
          border-color: rgba(74,222,128,0.5);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(74,222,128,0.15);
        }
        .srv-catalog-btn .srv-arrow-icon { color: #4ade80; transition: transform 0.2s; }
        .srv-catalog-btn:hover .srv-arrow-icon { transform: translateX(3px); }

        /* ── Bento Grid ── */
        .srv-bento {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        /* Large cards: span 3 */
        .srv-card-lg {
          grid-column: span 3;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
        }
        .srv-card-lg:hover {
          border-color: rgba(46,204,64,0.4);
          box-shadow: 0 16px 48px rgba(46,204,64,0.15), 0 4px 24px rgba(0,0,0,0.3);
          transform: translateY(-8px);
        }

        /* Small cards: span 2 */
        .srv-card-sm {
          grid-column: span 2;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
        }
        .srv-card-sm:hover {
          border-color: rgba(46,204,64,0.4);
          box-shadow: 0 16px 48px rgba(46,204,64,0.15), 0 4px 24px rgba(0,0,0,0.3);
          transform: translateY(-8px);
        }

        /* Card image */
        .srv-card-img-wrap {
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .srv-card-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,20,40,0.5) 100%);
          border-radius: 12px;
        }
        .srv-card-lg .srv-card-img-wrap { height: 200px; }
        .srv-card-sm .srv-card-img-wrap { height: 130px; }
        .srv-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .srv-card-lg:hover .srv-card-img,
        .srv-card-sm:hover .srv-card-img { transform: scale(1.06); }

        /* Icon box */
        .srv-icon-box {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        .srv-card-lg:hover .srv-icon-box,
        .srv-card-sm:hover .srv-icon-box {
          transform: scale(1.12);
          box-shadow: 0 8px 24px rgba(46,204,64,0.3);
        }
        .srv-card-sm .srv-icon-box { width: 44px; height: 44px; border-radius: 12px; }

        .srv-icon-box span {
          font-size: 1.6rem;
          color: white;
        }
        .srv-card-sm .srv-icon-box span { font-size: 1.3rem; }

        /* Card text */
        .srv-card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.6rem;
          line-height: 1.25;
        }
        .srv-card-sm .srv-card-title { font-size: 1.05rem; }
        .srv-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.55);
          flex: 1;
        }
        .srv-card-sm .srv-card-desc { font-size: 0.85rem; }

        /* Bullet list */
        .srv-bullets {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1rem;
        }
        .srv-bullet {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
        }
        .srv-bullet span.icon { font-size: 1rem; color: #2ECC40; }

        /* Responsive */
        @media (max-width: 1024px) {
          .srv-card-lg { grid-column: span 6; }
          .srv-card-sm { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          #services { padding: 4rem 16px; }
          .srv-bento { grid-template-columns: 1fr; }
          .srv-card-lg, .srv-card-sm { grid-column: 1 / -1; }
          .srv-header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* bottom-left glow orb */}
      <div className="srv-glow-bl" />

      <div className="srv-wrap">
        {/* Header row */}
        <motion.div
          className="srv-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="srv-header-left">
            <div className="srv-eyebrow">What We Do</div>
            <h2 className="srv-section-h2">Core <span className="hl">Competencies</span></h2>
            <p className="srv-section-p">
              We deliver end-to-end technical excellence across the entire stack, from hardware-accelerated
              ML models to fluid design experiences.
            </p>
          </div>
          <Link href="/services" className="srv-catalog-btn">
            View Service Catalog&nbsp;
            <span className="srv-arrow-icon material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
          </Link>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="srv-bento"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Large cards */}
          {SERVICES_LARGE.map((s) => (
            <motion.div
              key={s.slug}
              className="srv-card-lg"
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <div className="srv-card-img-wrap">
                <img className="srv-card-img" src={s.image} alt={s.imageAlt} loading="lazy" />
              </div>
              <div className="srv-icon-box" style={{ background: s.iconBg }}>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="srv-card-title">{s.title}</h3>
              <p className="srv-card-desc">{s.desc}</p>
              <ul className="srv-bullets">
                {s.bullets.map((b) => (
                  <li key={b} className="srv-bullet">
                    <span className="icon material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Small cards */}
          {SERVICES_SMALL.map((s) => (
            <motion.div
              key={s.slug}
              className="srv-card-sm"
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <div className="srv-card-img-wrap">
                <img className="srv-card-img" src={s.image} alt={s.imageAlt} loading="lazy" />
              </div>
              <div className="srv-icon-box" style={{ background: s.iconBg }}>
                <span className="material-symbols-outlined" style={{ color: s.iconColor, fontSize: "1.3rem" }}>{s.icon}</span>
              </div>
              <h3 className="srv-card-title">{s.title}</h3>
              <p className="srv-card-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
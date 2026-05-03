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
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    title: "UI/UX Design",
    desc: "Cognitive-led design systems that humanize complex data visualizations.",
  },
  {
    slug: "cloud-and-devops",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80&fit=crop",
    imageAlt: "DevOps & MLOps",
    icon: "terminal",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    title: "DevOps & MLOps",
    desc: "Automated deployment cycles ensuring zero-downtime model updates.",
  },
  {
    slug: "custom-software-development",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80&fit=crop",
    imageAlt: "Cloud Solutions",
    icon: "cloud",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
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
        #services {
          background: #faf9fd;
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
          min-height: unset;
        }

        .srv-wrap {
          max-width: 1280px;
          margin: 0 auto;
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
        .srv-section-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.2rem);
          font-weight: 700;
          color: #002046;
          margin-bottom: 1rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .srv-section-p {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #44474e;
        }
        .srv-catalog-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1b6d1e;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: gap 0.2s;
          white-space: nowrap;
        }
        .srv-catalog-btn:hover { gap: 0.7rem; }
        .srv-catalog-btn .srv-arrow-icon { color: #1b6d1e; }

        /* ── Bento Grid ── */
        .srv-bento {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }

        /* Large cards: span 3 */
        .srv-card-lg {
          grid-column: span 3;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .srv-card-lg:hover {
          border-color: rgba(27,109,30,0.3);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
        }

        /* Small cards: span 2 */
        .srv-card-sm {
          grid-column: span 2;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .srv-card-sm:hover {
          border-color: rgba(27,109,30,0.3);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
        }

        /* Card image */
        .srv-card-img-wrap {
          width: 100%;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }
        .srv-card-lg .srv-card-img-wrap { height: 192px; }
        .srv-card-sm .srv-card-img-wrap { height: 128px; }
        .srv-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .srv-card-lg:hover .srv-card-img,
        .srv-card-sm:hover .srv-card-img { transform: scale(1.05); }

        /* Icon box */
        .srv-icon-box {
          width: 52px; height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .srv-card-lg:hover .srv-icon-box,
        .srv-card-sm:hover .srv-icon-box { transform: scale(1.1); }
        .srv-card-sm .srv-icon-box { width: 44px; height: 44px; }

        .srv-icon-box span {
          font-size: 1.6rem;
          color: white;
        }
        .srv-card-sm .srv-icon-box span {
          font-size: 1.3rem;
          /* color set via style prop */
        }

        /* Card text */
        .srv-card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #002046;
          margin-bottom: 0.6rem;
          line-height: 1.25;
        }
        .srv-card-sm .srv-card-title { font-size: 1.05rem; }
        .srv-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #44474e;
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
        }
        .srv-bullet {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #1a1b1e;
        }
        .srv-bullet span.icon { font-size: 1rem; color: #1b6d1e; }

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
            <h2 className="srv-section-h2">Core Competencies</h2>
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
"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: "⚡",
    title: "Rapid Development",
    desc: "Ship production-ready features at lightning speed using modern frameworks and proven architecture patterns.",
    tag: "Engineering",
  },
  {
    icon: "🧠",
    title: "AI Integration",
    desc: "Embed intelligent capabilities — LLMs, RAG pipelines, and predictive models — directly into your product.",
    tag: "Artificial Intelligence",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces that users love. From wireframes to polished design systems ready for production.",
    tag: "Design",
  },
  {
    icon: "🔒",
    title: "Secure by Design",
    desc: "Enterprise-grade security baked into every layer — authentication, data protection, and compliance-ready.",
    tag: "Security",
  },
  {
    icon: "🌐",
    title: "Cloud & DevOps",
    desc: "Infinitely scalable infrastructure on AWS, Vercel, or GCP — CI/CD, monitoring, zero-downtime deploys.",
    tag: "Infrastructure",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    desc: "Turn raw data into actionable intelligence with custom dashboards, event tracking, and reporting pipelines.",
    tag: "Data",
  },
];

export default function Services() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref}>
      <style>{`
        #services { background: var(--off-white); }

        .services-inner {
          max-width: 1000px;
          width: 100%;
          padding: 0 1rem;
        }

        .services-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .services-header.in { opacity:1; transform:none; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.1rem;
        }

        .service-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease,
                      box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(59,173,176,0.06) 0%,
            transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 16px 48px rgba(59,173,176,0.13);
          border-color: var(--border-strong);
        }

        .service-card:hover::before { opacity: 1; }

        /* Staggered reveal */
        .services-grid.in .service-card:nth-child(1) { opacity:1; transform:none; transition-delay:0.05s; }
        .services-grid.in .service-card:nth-child(2) { opacity:1; transform:none; transition-delay:0.12s; }
        .services-grid.in .service-card:nth-child(3) { opacity:1; transform:none; transition-delay:0.19s; }
        .services-grid.in .service-card:nth-child(4) { opacity:1; transform:none; transition-delay:0.26s; }
        .services-grid.in .service-card:nth-child(5) { opacity:1; transform:none; transition-delay:0.33s; }
        .services-grid.in .service-card:nth-child(6) { opacity:1; transform:none; transition-delay:0.40s; }

        .service-icon {
          font-size: 1.8rem;
          margin-bottom: 0.85rem;
          display: block;
        }

        .service-tag {
          display: inline-block;
          font-family: 'Oxanium', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--teal);
          background: rgba(59,173,176,0.09);
          border: 1px solid var(--border);
          padding: 3px 10px;
          border-radius: 100px;
          margin-bottom: 0.6rem;
        }

        .service-title {
          font-family: 'Oxanium', monospace;
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .service-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Corner accent line */
        .service-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40px; height: 3px;
          border-radius: 0 0 4px 0;
          background: linear-gradient(90deg, var(--teal), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::after { opacity: 1; }

        @media (max-width: 860px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 520px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="services-inner">
        <div className={`services-header${visible ? " in" : ""}`}>
          <div className="section-tag">Services</div>
          <h2>What We Offer</h2>
          <p className="lead">End-to-end solutions — from strategy and design to engineering and deployment.</p>
        </div>

        <div className={`services-grid${visible ? " in" : ""}`}>
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <div className="service-tag">{s.tag}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
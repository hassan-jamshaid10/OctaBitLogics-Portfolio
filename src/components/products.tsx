"use client";

import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  {
    icon: "🧠",
    name: "OctaCore",
    tagline: "Intelligence Engine",
    desc: "Our flagship AI reasoning engine that powers real-time decisions, document analysis, and autonomous workflows at enterprise scale.",
    color: "rgba(59,173,176,0.08)",
    border: "rgba(59,173,176,0.3)",
  },
  {
    icon: "📊",
    name: "OctaDash",
    tagline: "Analytics Platform",
    desc: "Beautiful, configurable dashboards that surface what matters most, built for non-technical stakeholders and power users alike.",
    color: "rgba(27,46,94,0.06)",
    border: "rgba(27,46,94,0.2)",
  },
  {
    icon: "🔗",
    name: "OctaLink",
    tagline: "Integration Hub",
    desc: "Connect any tool in your stack with zero friction. Pre-built connectors, webhook support, and a drag-and-drop workflow builder.",
    color: "rgba(59,173,176,0.06)",
    border: "rgba(59,173,176,0.25)",
  },
];

export default function Products() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" ref={ref}>
      <style>{`
        #products {
          background: linear-gradient(160deg, rgba(27,46,94,0.04) 0%, var(--off-white) 100%);
        }

        .products-inner {
          max-width: 1000px;
          width: 100%;
          padding: 0 1rem;
        }

        .products-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .products-header.in { opacity: 1; transform: none; }

        /* Tab selector */
        .product-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 0.6s ease 0.2s;
        }

        .product-tabs.in { opacity: 1; }

        .product-tab {
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          padding: 8px 20px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .product-tab.active {
          background: linear-gradient(135deg, var(--teal), var(--navy));
          color: var(--white);
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(59,173,176,0.25);
        }

        .product-tab:not(.active):hover {
          border-color: var(--teal);
          color: var(--teal);
        }

        /* Product showcase */
        .product-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .product-showcase.in { opacity:1; transform:none; }

        /* Fade on tab switch */
        .product-showcase.switching {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .product-visual {
          aspect-ratio: 1;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .product-icon-large {
          font-size: 5rem;
          position: relative;
          z-index: 1;
          animation: iconFloat 4s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        .product-visual-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(59,173,176,0.25);
          animation: ringExpand 3s ease-in-out infinite;
        }

        .pvr1 { width: 120px; height: 120px; animation-delay: 0s; }
        .pvr2 { width: 180px; height: 180px; animation-delay: 0.5s; }
        .pvr3 { width: 240px; height: 240px; animation-delay: 1s; }

        @keyframes ringExpand {
          0%,100% { transform: scale(1); opacity: 0.5; }
          50%      { transform: scale(1.05); opacity: 0.2; }
        }

        .product-info { padding: 1rem 0; }

        .product-name {
          font-family: 'Oxanium', monospace;
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--navy), var(--teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          margin-bottom: 0.2rem;
        }

        .product-tagline {
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 1.25rem;
        }

        .product-desc {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .product-cta {
          font-family: 'Oxanium', monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: transparent;
          border: 1.5px solid var(--teal);
          color: var(--teal);
          padding: 10px 22px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .product-cta:hover {
          background: linear-gradient(135deg, var(--teal), var(--navy));
          color: var(--white);
          border-color: transparent;
          box-shadow: 0 0 20px var(--teal-glow);
        }

        @media (max-width: 700px) {
          .product-showcase { grid-template-columns: 1fr; }
          .product-visual { max-width: 280px; margin: 0 auto; }
          .product-name { font-size: 1.8rem; }
        }
      `}</style>

      <div className="products-inner">
        <div className={`products-header${visible ? " in" : ""}`}>
          <div className="section-tag">Products</div>
          <h2>Our Product Suite</h2>
          <p className="lead">A growing ecosystem of tools built to work seamlessly together.</p>
        </div>

        <div className={`product-tabs${visible ? " in" : ""}`}>
          {PRODUCTS.map((p, i) => (
            <button
              key={p.name}
              className={`product-tab${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              {p.name}
            </button>
          ))}
        </div>

        {PRODUCTS.map((p, i) =>
          i === active ? (
            <div
              className={`product-showcase${visible ? " in" : ""}`}
              key={p.name}
            >
              <div
                className="product-visual"
                style={{ background: p.color, borderColor: p.border }}
              >
                <div className="product-visual-ring pvr1" />
                <div className="product-visual-ring pvr2" />
                <div className="product-visual-ring pvr3" />
                <div className="product-icon-large">{p.icon}</div>
              </div>

              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-tagline">{p.tagline}</div>
                <p className="product-desc">{p.desc}</p>
                <button className="product-cta">Learn More →</button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
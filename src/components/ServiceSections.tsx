"use client";
import React from "react";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "product-dev",
    title: "Product Based\nDevelopment",
    desc: "From initial concept to full-scale production deployment, our product-centric approach ensures what we build solves real problems.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <path d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  },
  {
    id: "web-dev",
    title: "Web\nDevelopment",
    desc: "Enterprise-grade web applications built for scale. We engineer robust, secure platforms using modern stacks like Next.js and Node.js.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <rect x="15" y="40" width="45" height="45" rx="8" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
        <rect x="40" y="15" width="45" height="45" rx="8" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  },
  {
    id: "mobile-dev",
    title: "Mobile\nDevelopment",
    desc: "Award-winning native and cross-platform mobile experiences that are smooth, intuitive, and keep users engaged.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <rect x="30" y="10" width="40" height="80" rx="20" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  },
  {
    id: "devops",
    title: "DevOps &\nCloud",
    desc: "We design resilient cloud infrastructures and implement continuous integration pipelines to accelerate your deployment frequency.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <circle cx="34" cy="34" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
        <circle cx="66" cy="34" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
        <circle cx="34" cy="66" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
        <circle cx="66" cy="66" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  },
  {
    id: "ai-ml",
    title: "AI & Machine\nLearning",
    desc: "Integrate large language models, computer vision, and predictive analytics directly into your core business processes.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <path d="M50 5 C50 40, 60 50, 95 50 C60 50, 50 60, 50 95 C50 60, 40 50, 5 50 C40 50, 50 40, 50 5 Z" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  },
  {
    id: "ui-ux",
    title: "UI/UX\nDesign",
    desc: "We craft intuitive, pixel-perfect interfaces backed by deep user research. Design systems that ensure brand consistency.",
    icon: (
      <svg className="icon-svg" viewBox="0 0 100 100">
        <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z M50 35 A 15 15 0 1 1 50 65 A 15 15 0 1 1 50 35 Z" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
      </svg>
    )
  }
];

const ServiceSections = React.memo(function ServiceSections() {
  return (
    <section id="service-sections">
      <style>{`
        #service-sections {
          background: #faf9fd;
          padding: 6rem 40px;
          font-family: inherit;
          position: relative;
        }

        .ss-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .ss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(0, 32, 70, 0.1);
          background: #ffffff;
        }

        .ss-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 3rem 2.5rem;
          border-right: 1px solid rgba(0, 32, 70, 0.1);
          border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          cursor: pointer;
          transition: background 0.3s ease;
          overflow: hidden;
        }

        .ss-card:nth-child(3n) {
          border-right: none;
        }

        .ss-card:nth-last-child(-n+3) {
          border-bottom: none;
        }

        .ss-card:hover {
          background: rgba(0, 32, 70, 0.02);
        }

        .ss-card-icon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 3rem;
        }

        .ss-card-title {
          font-family: inherit;
          font-size: 1.35rem;
          font-weight: 800;
          color: #002046;
          line-height: 1.25;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          white-space: pre-line;
        }

        .ss-card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #44474e;
          margin: 0;
        }

        /* SVG Gradients and filters */
        .icon-svg {
          width: 110px;
          height: 110px;
          filter: drop-shadow(0 10px 20px rgba(46, 204, 64, 0.15));
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ss-card:hover .icon-svg {
          transform: scale(1.08) translateY(-5px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ss-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ss-card {
            border-right: 1px solid rgba(0, 32, 70, 0.1);
            border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          }
          .ss-card:nth-child(3n) {
            border-right: 1px solid rgba(0, 32, 70, 0.1);
          }
          .ss-card:nth-child(2n) {
            border-right: none;
          }
          .ss-card:nth-last-child(-n+3) {
            border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          }
          .ss-card:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }

        @media (max-width: 1024px) {
          #service-sections { padding: 4.5rem 20px; }
          .ss-card { padding: 2.5rem 2rem; }
        }
        @media (max-width: 600px) {
          #service-sections { padding: 3.5rem 16px; }
          .ss-grid { grid-template-columns: 1fr; }
          .ss-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(0, 32, 70, 0.1) !important;
            padding: 2rem 1.5rem;
          }
          .ss-card:last-child { border-bottom: none !important; }
          .icon-svg { width: 80px; height: 80px; }
          .ss-card-icon { margin-bottom: 2rem; }
        }
      `}</style>

      <div className="ss-inner">
        <motion.div 
          className="ss-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Defs for gradients and filters */}
          <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true">
            <defs>
              <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2ECC40" />
                <stop offset="100%" stopColor="#3BADB0" />
              </linearGradient>
              <filter id="grainAndBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.25 0" in="noise" result="coloredNoise" />
                <feComposite in="coloredNoise" in2="SourceGraphic" operator="in" result="noisyShape" />
                <feBlend mode="overlay" in="noisyShape" in2="SourceGraphic" result="final" />
              </filter>
            </defs>
          </svg>

          {SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              className="ss-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              onClick={() => {
                const el = document.getElementById(srv.id);
                if (!el) return;
                const offset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }}
            >
              <div className="ss-card-icon">
                {srv.icon}
              </div>
              <h3 className="ss-card-title">{srv.title}</h3>
              <p className="ss-card-desc">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default ServiceSections;

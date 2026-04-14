"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent, useCallback } from "react";
import Link from "next/link";
import BackgroundNightfall from "./BackgroundNightfall";

// --- ANIMATED ICONS ---
// These custom components use Framer Motion for continuous, physics-based character/scenario animations.

const SoftwareDevIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Laptop base and screen */}
    <rect x="8" y="14" width="44" height="28" rx="2" stroke="#3BADB0" strokeWidth="2" />
    <path d="M4 46H56L52 50H8L4 46Z" fill="#3BADB0" fillOpacity="0.3" stroke="#3BADB0" strokeWidth="2" />
    {/* Animated code lines */}
    <motion.line x1="14" y1="22" x2="30" y2="22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
    />
    <motion.line x1="14" y1="28" x2="40" y2="28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3, delay: 0.5, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
    />
    <motion.line x1="14" y1="34" x2="24" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3, delay: 1, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
    />
    {/* Spinning Gear */}
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ originX: "42px", originY: "32px" }}>
      <circle cx="42" cy="32" r="4" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M42 26V28M42 36V38M36 32H38M46 32H48" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M37.5 27.5L39 29M45 29L46.5 27.5M39 35L37.5 36.5M46.5 36.5L45 35" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </motion.g>
  </svg>
);

const MobileAppIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Phone Frame */}
    <rect x="18" y="6" width="24" height="48" rx="4" stroke="#3BADB0" strokeWidth="2" />
    <circle cx="30" cy="50" r="1.5" fill="#3BADB0" />
    {/* Scrolling Content Blocks */}
    <defs>
      <clipPath id="screenClip"><rect x="20" y="10" width="20" height="36" /></clipPath>
    </defs>
    <g clipPath="url(#screenClip)">
      <motion.g animate={{ y: [0, -30, 0] }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}>
        <rect x="22" y="14" width="16" height="10" rx="2" fill="#ffffff" fillOpacity="0.5" />
        <rect x="22" y="28" width="16" height="16" rx="2" fill="#ffffff" fillOpacity="0.2" />
        <rect x="22" y="48" width="16" height="10" rx="2" fill="#ffffff" fillOpacity="0.5" />
      </motion.g>
    </g>
    {/* Animated Thumb/Touch Interaction */}
    <motion.circle cx="30" cy="30" r="4" fill="#3BADB0" fillOpacity="0.8"
      animate={{ scale: [1, 1.5, 1], opacity: [0, 0.8, 0], y: [15, 0, 15] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const AIAIutomationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Robot Head */}
    <path d="M16 24V44C16 46.2091 17.7909 48 20 48H40C42.2091 48 44 46.2091 44 44V24C44 21.7909 42.2091 20 40 20H20C17.7909 20 16 21.7909 16 24Z" stroke="#3BADB0" strokeWidth="2" />
    <path d="M26 12V20M34 12V20" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="10" r="2" fill="#3BADB0" />
    <circle cx="34" cy="10" r="2" fill="#3BADB0" />
    {/* Blinking Eyes */}
    <motion.line x1="22" y1="30" x2="28" y2="30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"
      animate={{ scaleY: [1, 0, 1, 1, 1] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.5, 1] }}
    />
    <motion.line x1="32" y1="30" x2="38" y2="30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"
      animate={{ scaleY: [1, 0, 1, 1, 1] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.5, 1] }}
    />
    {/* Scanning Laser */}
    <motion.line x1="18" y1="24" x2="42" y2="24" stroke="#a7fff9" strokeWidth="1" strokeLinecap="round"
      animate={{ y: [0, 20, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
    />
    {/* Neural nodes connecting outside */}
    <motion.circle cx="8" cy="30" r="2" fill="#ffffff" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="52" cy="30" r="2" fill="#ffffff" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
    <motion.line x1="10" y1="30" x2="16" y2="30" stroke="#ffffff" strokeDasharray="2 2" animate={{ strokeDashoffset: [4, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
    <motion.line x1="44" y1="30" x2="50" y2="30" stroke="#ffffff" strokeDasharray="2 2" animate={{ strokeDashoffset: [4, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
  </svg>
);

const CloudIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Cloud Shape */}
    <motion.path
      d="M44 32C44.5 32 45 32 45.4294 32.1388C48.0694 32.9904 50 35.4851 50 38.5C50 42.0899 47.0899 45 43.5 45H17.5C13.3579 45 10 41.6421 10 37.5C10 33.3579 13.3579 30 17.5 30C17.7538 30 18.0047 30.0126 18.2519 30.0371C19.7891 25.4093 24.1611 22 29.5 22C35.8513 22 41 27.1487 41 33.5C41 33.5135 41 33.527 40.9999 33.5404C42.4276 32.5513 43.3444 32 44 32Z"
      stroke="#3BADB0" strokeWidth="2" fill="rgba(59,173,176,0.1)"
      animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Servers */}
    <rect x="20" y="50" width="20" height="6" rx="1" stroke="#ffffff" strokeWidth="1.5" />
    <rect x="20" y="58" width="20" height="6" rx="1" stroke="#ffffff" strokeWidth="1.5" />
    <motion.circle cx="24" cy="53" r="1" fill="#a7fff9" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
    <motion.circle cx="24" cy="61" r="1" fill="#a7fff9" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
    {/* Uploading Data Blocks */}
    <motion.rect x="28" y="28" width="4" height="4" rx="1" fill="#ffffff"
      animate={{ y: [18, -4], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
    />
    <motion.rect x="34" y="28" width="4" height="4" rx="1" fill="#ffffff"
      animate={{ y: [18, -4], opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "easeOut" }}
    />
  </svg>
);

const UIDesignIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Layout Wireframe */}
    <rect x="8" y="10" width="44" height="40" rx="2" stroke="#3BADB0" strokeWidth="2" />
    <rect x="8" y="10" width="14" height="40" rx="2" fill="#3BADB0" fillOpacity="0.2" stroke="#3BADB0" strokeWidth="2" />
    <line x1="22" y1="20" x2="52" y2="20" stroke="#3BADB0" strokeWidth="2" />
    <rect x="28" y="28" width="18" height="12" rx="2" fill="#ffffff" fillOpacity="0.3" />

    {/* Animated Cursor Arrow */}
    <motion.path
      d="M36 34L44 48L40 48L36 56L34 56L38 48L32 48L36 34Z"
      fill="#ffffff" stroke="#1B2E5E" strokeWidth="1"
      animate={{ x: [-10, 5, -10], y: [-5, 10, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Ripple click effect */}
    <motion.circle cx="43" cy="46" r="2" stroke="#a7fff9" strokeWidth="1"
      animate={{ scale: [1, 3], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }}
    />
  </svg>
);


const SERVICES = [
  {
    slug: "custom-software-development",
    icon: <SoftwareDevIcon />,
    title: "Custom Software Development",
    desc: "We architect and build robust, scalable software tailored to your exact requirements, from internal tools to enterprise platforms.",
    colSpan: "span 4",
  },
  {
    slug: "mobile-app-development",
    icon: <MobileAppIcon />,
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile experiences built for performance, intuition, and scale.",
    colSpan: "span 2",
  },
  {
    slug: "ai-and-automation",
    icon: <AIAIutomationIcon />,
    title: "AI & Automation",
    desc: "Integrate LLMs, build RAG pipelines, and automate workflows. We make AI a genuine part of your product.",
    colSpan: "span 2",
  },
  {
    slug: "cloud-and-devops",
    icon: <CloudIcon />,
    title: "Cloud & DevOps",
    desc: "Modern cloud infrastructure and CI/CD pipelines built for reliability and developer velocity at every stage.",
    colSpan: "span 2",
  },
  {
    slug: "ui-ux-design",
    icon: <UIDesignIcon />,
    title: "UI / UX Design",
    desc: "Interfaces that are beautiful and functional. We design product experiences that users love, grounded in research.",
    colSpan: "span 2",
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// Individual Card Component that tracks mouse movement for a glow effect
function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(function ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`bento-card bento-item-${i}`}
      onMouseMove={handleMouseMove}
      style={{ gridColumn: s.colSpan }}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      }}
    >
      <motion.div
        className="bento-glow-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="bento-card-inner">
        <div className="bento-card-content">
          <div className="srv-anim-icon-wrap">{s.icon}</div>
          <div className="srv-text-content">
            <h3 className="srv-title">{s.title}</h3>
            <p className="srv-desc">{s.desc}</p>
          </div>
        </div>
        <Link href={`/services/${s.slug}`} className="srv-btn">
          Explore <ArrowIcon />
        </Link>
      </div>
    </motion.div>
  );
}


export default function Services() {
  return (
    <section id="services">
      <style>{`
        #services {
          background: linear-gradient(145deg, #3BADB0 0%, #1f4080 48%, #1B2E5E 100%);
          padding: 8rem 3rem;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }



        /* Ambient subtle shapes mirroring original theme */
        .srv-blob1 {
          position: absolute; top: -120px; left: -120px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .srv-blob2 {
          position: absolute; bottom: -100px; right: -80px;
          width: 460px; height: 460px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.15) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .srv-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .srv-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .srv-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(8px);
        }

        .srv-tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px #ffffff;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .srv-header h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }

        /* ── Bento Grid ── */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
          width: 100%;
        }

        .bento-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          /* Reverted card background back to original deep glassy navy look */
          background: rgba(10, 18, 40, 0.55);
          border: 1px solid rgba(59,173,176,0.22);
          backdrop-filter: blur(16px);
          overflow: hidden;
          transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }

        .bento-card:hover {
          border-color: rgba(59,173,176,0.6);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,173,176,0.3) inset;
        }

        .bento-glow-overlay {
          position: absolute;
          inset: -1px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .bento-card:hover .bento-glow-overlay {
          opacity: 1;
        }

        .bento-card-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.2rem;
          height: 100%;
          min-height: 320px;
        }

        .bento-card-content { display: flex; flex-direction: column; gap: 1.5rem; }

        .srv-anim-icon-wrap {
          width: 70px; height: 70px;
          background: rgba(59,173,176,0.08);
          border: 1px solid rgba(59,173,176,0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.4s ease;
        }

        .bento-card:hover .srv-anim-icon-wrap {
          background: rgba(59,173,176,0.2);
        }

        .srv-title {
          font-family: 'Oxanium', monospace;
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }

        .srv-desc {
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }

        .srv-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 20px;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          width: fit-content;
          transition: all 0.3s ease;
          margin-top: 2rem;
        }

        .bento-card:hover .srv-btn {
          border-color: #3BADB0;
          color: #3BADB0;
          background: rgba(59,173,176,0.1);
        }

        .srv-btn svg { transition: transform 0.3s ease; }
        .srv-btn:hover svg { transform: translateX(4px); }

        /* Responsive Grid Adjustments */
        @media (max-width: 1024px) {
          .bento-card { grid-column: span 3 !important; }
          .bento-item-4 { grid-column: span 6 !important; } 
        }

        @media (max-width: 768px) {
          #services { padding: 5rem 1.25rem; }
          .srv-header h2 { font-size: 2.2rem; }
          .bento-card { grid-column: span 6 !important; min-height: 280px; padding: 2rem; }
        }
      `}</style>

      <BackgroundNightfall />

      <div className="srv-blob1" />
      <div className="srv-blob2" />

      <div className="srv-inner">
        <motion.div
          className="srv-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="srv-tag">
            <span className="srv-tag-dot" />
            What We Build
          </div>
          <h2>Our Core Services</h2>
        </motion.div>

        <motion.div
          className="bento-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
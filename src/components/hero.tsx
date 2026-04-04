"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavClick: (href: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section id="home" className="hero">
      <style>{`
        #home.hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          background: #0b1224;
          isolation: isolate;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: saturate(1.1) contrast(1.05);
        }

        /* ✅ more transparent overlay (was ~0.85–0.9) */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            135deg,
            rgba(59,173,176,0.58) 0%,
            rgba(31,64,128,0.58) 48%,
            rgba(27,46,94,0.62) 100%
          );
        }

        /* ✅ lighter vignette (was darker) */
        .hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(
            ellipse at center,
            rgba(0,0,0,0.10) 0%,
            rgba(0,0,0,0.28) 70%,
            rgba(0,0,0,0.38) 100%
          );
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1100px;
          padding: 0 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.26);
          border-radius: 100px;
          padding: 6px 14px 6px 10px;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(10px);
        }

        .badge-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(255,255,255,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .badge-dot-inner {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #ffffff;
        }

        .badge-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
          white-space: nowrap;
        }

        .hero-h1 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.2rem, 4.6vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          margin: 0 0 1rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .w1, .w2, .w3, .w4, .w5, .w6, .w7 {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .w1 { background-image: linear-gradient(135deg, #3BADB0 0%, #a7fff9 100%); }
        .w2 { background-image: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%); }
        .w3 { background-image: linear-gradient(135deg, #3BADB0 0%, #1f4080 60%, #1B2E5E 100%); }
        .w4 { background-image: linear-gradient(135deg, #93c5fd 0%, #1f4080 100%); }
        .w5 { background-image: linear-gradient(135deg, #e0f2fe 0%, #3BADB0 100%); }
        .w6 { background-image: linear-gradient(135deg, #c7d2fe 0%, #1B2E5E 100%); }
        .w7 { background-image: linear-gradient(135deg, #ffffff 0%, #3BADB0 100%); }

        .hero-p {
          font-size: 1.02rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.78);
          max-width: 720px;
          margin: 0 auto 1.75rem;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.25rem;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #ffffff;
          color: #3BADB0;
          border: none;
          padding: 13px 28px;
          border-radius: 100px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 8px 30px rgba(0,0,0,0.22);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 44px rgba(0,0,0,0.28);
          background: rgba(255,255,255,0.94);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.42);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 100px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
          backdrop-filter: blur(10px);
        }

        .cta-secondary:hover {
          border-color: rgba(255,255,255,0.70);
          background: rgba(255,255,255,0.10);
        }

        @media (max-width: 600px) {
          #home.hero { padding-top: 72px; }
          .hero-inner { padding: 0 1.25rem; }
          .hero-h1 { font-size: clamp(2rem, 9vw, 2.6rem); }
          .hero-p { font-size: 0.95rem; line-height: 1.75; }
          .hero-ctas { width: 100%; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
        }
      `}</style>

      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />
      <div className="hero-vignette" />

      <div className="hero-inner">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="badge-dot">
            <span className="badge-dot-inner" />
          </span>
          <span className="badge-label">Just Getting Started</span>
        </motion.div>

        <motion.h1
          className="hero-h1"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
          }}
        >
          {[
            { text: "Fresh", cls: "w1" },
            { text: "Ideas.", cls: "w2" },
            { text: "Real", cls: "w3" },
            { text: "Ambition.", cls: "w4" },
            { text: "Day", cls: "w5" },
            { text: "One", cls: "w6" },
            { text: "Energy.", cls: "w7" },
          ].map((w, i) => (
            <motion.span
              key={`${w.text}-${i}`}
              style={{ display: "inline-block", marginRight: "0.35em" }}
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={w.cls}
            >
              {w.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-p"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          We are a team of bold, creative minds with deep professional experience. We bring an unstoppable love for modern tech, vibrant innovation, and rigorous execution to every project we take on.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
        >
          <button className="cta-primary" onClick={() => onNavClick("#services")}>
            What We Do →
          </button>
          <button className="cta-secondary" onClick={() => onNavClick("#about")}>
            Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
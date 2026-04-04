"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Exact Cloudinary video URLs ───────────────────────────────────────────────
const VIDEOS = [
  "https://res.cloudinary.com/ddcblcups/video/upload/v1775331186/v1.mp4",
  "https://res.cloudinary.com/ddcblcups/video/upload/v1775330949/v2.mp4",
  "https://res.cloudinary.com/ddcblcups/video/upload/v1775330956/v3.mp4",
];

// ── Slide content — synced 1:1 with VIDEOS array ─────────────────────────────
const SLIDES = [
  {
    badge: "Just Getting Started",
    words: [
      { text: "Fresh", cls: "w1" },
      { text: "Ideas.", cls: "w2" },
      { text: "Real", cls: "w3" },
      { text: "Ambition.", cls: "w4" },
      { text: "Day", cls: "w5" },
      { text: "One", cls: "w6" },
      { text: "Energy.", cls: "w7" },
    ],
    body: "We are a team of bold, creative minds with deep professional experience. We bring an unstoppable love for modern tech, vibrant innovation, and rigorous execution to every project we take on.",
    cta1: { label: "What We Do →", href: "#services" },
    cta2: { label: "Our Story", href: "#about" },
  },
  {
    badge: "AI-Powered Solutions",
    words: [
      { text: "Intelligent", cls: "w3" },
      { text: "Systems.", cls: "w2" },
      { text: "Built", cls: "w1" },
      { text: "For", cls: "w4" },
      { text: "The", cls: "w6" },
      { text: "Future.", cls: "w5" },
    ],
    body: "We architect AI-driven automation, LLM-powered pipelines and smart infrastructure that puts your business years ahead of the curve — ready to scale on day one.",
    cta1: { label: "Explore AI →", href: "#services" },
    cta2: { label: "See Our Work", href: "#projects" },
  },
  {
    badge: "Cloud & DevOps Excellence",
    words: [
      { text: "Scalable", cls: "w5" },
      { text: "Cloud.", cls: "w1" },
      { text: "Reliable", cls: "w2" },
      { text: "DevOps.", cls: "w3" },
      { text: "Infinite", cls: "w7" },
      { text: "Scale.", cls: "w4" },
    ],
    body: "Modern cloud infrastructure and CI/CD pipelines engineered for zero-downtime deployments, auto-scaling resilience, and the developer velocity your team deserves.",
    cta1: { label: "Cloud Solutions →", href: "#services" },
    cta2: { label: "Get In Touch", href: "#contact" },
  },
] as const;

const SLIDE_DURATION = 5_000; // ms

// ── Framer Motion variants ────────────────────────────────────────────────────
const textFade = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  },
  exit: {
    opacity: 0, y: -14, filter: "blur(5px)",
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] as [number, number, number, number] }
  },
};

const wordFade = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: {
      duration: 0.6, delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    },
  }),
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

// ── Component ─────────────────────────────────────────────────────────────────
interface HeroProps {
  onNavClick: (href: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // ── 5-second video auto-advance ──
  useEffect(() => {
    const advance = () => setIndex((prev) => (prev + 1) % VIDEOS.length);
    const timer = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  // ── 15-second text auto-advance (1 full video cycle) ──
  useEffect(() => {
    const advanceText = () => setTextIndex((prev) => (prev + 1) % SLIDES.length);
    const textTimer = setInterval(advanceText, SLIDE_DURATION * VIDEOS.length);
    return () => clearInterval(textTimer);
  }, []);

  const slide = SLIDES[textIndex];

  return (
    <section id="home" className="hero">
      <style>{`
        /* ── Section ── */
        #home.hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          background: #060e1f;
          isolation: isolate;
        }

        /* ── All videos render at once for zero gap ── */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: saturate(1.1) contrast(1.05);
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .hero-video.active {
          opacity: 1;
        }

        /* ── Color + vignette overlays ── */
        .hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            135deg,
            rgba(59,173,176,0.32) 0%,
            rgba(31,64,128,0.32) 48%,
            rgba(27,46,94,0.42) 100%
          );
        }
        .hero-vignette {
          position: absolute; inset: 0; z-index: 2;
          background: radial-gradient(
            ellipse at center,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.28) 68%,
            rgba(0,0,0,0.45) 100%
          );
          pointer-events: none;
        }

        /* ── Content wrapper ── */
        .hero-inner {
          position: relative; z-index: 3;
          width: 100%; max-width: 1100px;
          padding: 0 2rem;
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.26);
          border-radius: 100px;
          padding: 6px 14px 6px 10px;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(10px);
        }
        .badge-dot {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .badge-dot-inner {
          width: 8px; height: 8px; border-radius: 50%;
          background: #3BADB0;
          box-shadow: 0 0 8px rgba(59,173,176,0.9);
          animation: pulseDot 1.8s ease infinite;
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.35); opacity: 0.65; }
        }
        .badge-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.92); white-space: nowrap;
        }

        /* ── Heading ── */
        .hero-h1 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.2rem, 4.6vw, 4rem);
          font-weight: 900; line-height: 1.05;
          margin: 0 0 1rem; color: #fff; letter-spacing: -0.02em;
        }
        .w1,.w2,.w3,.w4,.w5,.w6,.w7 {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text; color: transparent;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
        }
        .w1 { background-image: linear-gradient(135deg, #3BADB0 0%, #a7fff9 100%); }
        .w2 { background-image: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.88) 100%); }
        .w3 { background-image: linear-gradient(135deg, #a7fff9 0%, #3BADB0 100%); }
        .w4 { background-image: linear-gradient(135deg, #ffffff 0%, #a7fff9 100%); }
        .w5 { background-image: linear-gradient(135deg, #e0f2fe 0%, #3BADB0 100%); }
        .w6 { background-image: linear-gradient(135deg, #c7d2fe 0%, #ffffff 100%); }
        .w7 { background-image: linear-gradient(135deg, #ffffff 0%, #a7fff9 100%); }

        /* ── Body ── */
        .hero-p {
          font-size: 1.02rem; line-height: 1.85;
          color: rgba(255,255,255,0.93);
          text-shadow: 0 4px 16px rgba(0,0,0,0.55);
          max-width: 700px; margin: 0 auto 1.75rem;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem;
        }
        .cta-primary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: 'Oxanium', monospace; font-size: 0.78rem;
          font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
          background: #fff; color: #1B2E5E; border: none;
          padding: 13px 28px; border-radius: 100px; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 8px 28px rgba(0,0,0,0.25);
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(0,0,0,0.3); background: rgba(255,255,255,0.93); }
        .cta-secondary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: 'Oxanium', monospace; font-size: 0.78rem;
          font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.4); color: #fff;
          padding: 12px 24px; border-radius: 100px; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(10px);
        }
        .cta-secondary:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.11); }

        /* ── Slide dots ── */
        .hero-dots {
          display: flex; align-items: center; gap: 0.7rem;
        }
        .hero-dot-btn {
          width: 36px; height: 4px; border-radius: 2px;
          background: rgba(255,255,255,0.22);
          border: none; padding: 0; cursor: pointer;
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .hero-dot-btn.active { background: rgba(255,255,255,0.28); }
        .hero-dot-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          background: #3BADB0; border-radius: 2px;
          transition: width 0.15s linear;
        }

        /* ── Bottom sweep progress bar ── */
        .hero-progress {
          position: absolute; bottom: 0; left: 0;
          height: 3px; z-index: 5;
          background: linear-gradient(90deg, #3BADB0, #a7fff9);
          transition: width 0.15s linear;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          #home.hero { padding-top: 72px; }
          .hero-inner { padding: 0 1.25rem; }
          .hero-h1 { font-size: clamp(1.9rem, 9vw, 2.5rem); }
          .hero-p { font-size: 0.94rem; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
          .hero-ctas { width: 100%; }
        }
      `}</style>

      {/* ── Multiple Pre-Loaded Videos ── */}
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          className={`hero-video ${i === index ? "active" : ""}`}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      <div className="hero-overlay" />
      <div className="hero-vignette" />

      {/* ── Content ── */}
      <div className="hero-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={textIndex}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Badge */}
            <motion.div className="hero-badge" variants={textFade}>
              <span className="badge-dot"><span className="badge-dot-inner" /></span>
              <span className="badge-label">{slide.badge}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="hero-h1">
              {slide.words.map((w, i) => (
                <motion.span
                  key={`${w.text}-${i}`}
                  style={{ display: "inline-block", marginRight: "0.35em" }}
                  custom={i}
                  variants={wordFade}
                  className={w.cls}
                >
                  {w.text}
                </motion.span>
              ))}
            </h1>

            {/* CTAs */}
            <motion.div className="hero-ctas" variants={textFade}>
              <button className="cta-primary" onClick={() => onNavClick(slide.cta1.href)}>{slide.cta1.label}</button>
              <button className="cta-secondary" onClick={() => onNavClick(slide.cta2.href)}>{slide.cta2.label}</button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
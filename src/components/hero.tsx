"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavClick: (href: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero({ onNavClick }: HeroProps) {
  const handleConsult = useCallback(() => onNavClick("#contact"), [onNavClick]);
  const handleEcosystem = useCallback(() => onNavClick("#services"), [onNavClick]);

  return (
    <section id="home">
      <style>{`
        /* ── Hero Section ── */
        #home {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          overflow: hidden;
          background: #faf9fd;
        }

        /* ── Background blobs ── */
        .hero-blob-top {
          position: absolute;
          top: -15%;
          right: -10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-blob-bottom {
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 32, 70, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Content grid ── */
        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 40px 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
        }

        /* ── Left column ── */
        .hero-left { display: flex; flex-direction: column; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 12px;
          background: rgba(46, 204, 64, 0.1);
          border: 1px solid rgba(46, 204, 64, 0.2);
          border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #2ECC40;
          width: fit-content;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .hero-badge-dot {
          width: 8px; height: 8px;
          background: #2ECC40;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(46, 204, 64, 0.5);
        }

        .hero-h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #002046;
          margin: 0;
        }
        .hero-h1 .accent { 
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-p {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #44474e;
          max-width: 480px;
          margin-top: 1.5rem;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2.25rem;
        }
        .hero-btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: #002046;
          color: #ffffff;
          border: none;
          padding: 18px 36px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,32,70,0.2);
        }
        .hero-btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0,32,70,0.3), 0 0 15px rgba(46,204,64,0.3);
          background: #002a5c;
        }
        .hero-btn-primary:active { transform: scale(0.96); }

        .hero-btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: transparent;
          color: #002046;
          border: 2px solid #e3e2e6;
          padding: 16px 36px;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-btn-secondary:hover {
          border-color: #2ECC40;
          color: #2ECC40;
          background: rgba(46,204,64,0.04);
          transform: translateY(-2px);
        }
        .hero-btn-secondary:active { transform: scale(0.96); }

        /* ── Right column ── */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 12px;
          transform: rotate(2deg);
          box-shadow: 0 40px 100px rgba(0,32,70,0.15);
          position: relative;
          z-index: 1;
        }
        .hero-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
        }

        /* ── Stat widget ── */
        .hero-stat-widget {
          position: absolute;
          bottom: -24px;
          left: -24px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          max-width: 240px;
        }
        .hero-stat-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .hero-stat-icon {
          width: 48px; height: 48px;
          background: #2ECC40;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(46,204,64,0.3);
        }
        .hero-stat-icon span {
          font-size: 1.5rem;
          color: white;
        }
        .hero-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          color: #74777f;
          margin-bottom: 2px;
        }
        .hero-stat-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #002046;
        }
        .hero-stat-bar-bg {
          width: 100%;
          height: 4px;
          background: #e3e2e6;
          border-radius: 9999px;
          overflow: hidden;
        }
        .hero-stat-bar-fill {
          height: 100%;
          width: 99.8%;
          background: #2ECC40;
          border-radius: 9999px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 4rem 24px 3rem;
          }
          .hero-right { margin-top: 2.5rem; }
          .hero-stat-widget { bottom: -20px; left: -12px; }
        }
        @media (max-width: 600px) {
          .hero-h1 { font-size: 2.1rem; }
          .hero-p  { font-size: 0.96rem; }
          .hero-ctas { flex-direction: column; }
          .hero-btn-primary, .hero-btn-secondary { text-align: center; width: 100%; }
          .hero-card { transform: none; }
          .hero-stat-widget { position: static; margin-top: 1rem; max-width: 100%; }
        }
      `}</style>

      {/* Background decorative blobs */}
      <div className="hero-blob-top" />
      <div className="hero-blob-bottom" />

      <div className="hero-inner">
        {/* ── Left column ── */}
        <div className="hero-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now Scaling Enterprise AI
            </div>
          </motion.div>

          <motion.h1 className="hero-h1" custom={0.1} variants={fadeUp} initial="hidden" animate="show">
            Precision in <br />
            <span className="accent">Intelligence</span>
          </motion.h1>

          <motion.p className="hero-p" custom={0.2} variants={fadeUp} initial="hidden" animate="show">
            Elite software services architecture for the AI-first world. We bridge the gap between
            experimental research and scalable production software with surgical precision.
          </motion.p>

          <motion.div className="hero-ctas" custom={0.32} variants={fadeUp} initial="hidden" animate="show">
            <button className="hero-btn-primary" onClick={handleConsult}>
              Consult Our Experts
            </button>
            <button className="hero-btn-secondary" onClick={handleEcosystem}>
              View Ecosystem
            </button>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="hero-card"
            animate={{ 
              y: [0, -15, 0],
              rotate: [2, 3, 2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              className="hero-img"
              src="/hero_ai_architecture_1777929290313.png"
              alt="Futuristic AI neural network architecture"
            />
          </motion.div>

          {/* Stat widget */}
          <motion.div 
            className="hero-stat-widget"
            animate={{ 
              y: [0, 10, 0],
              x: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="hero-stat-top">
              <div className="hero-stat-icon">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              </div>
              <div>
                <p className="hero-stat-label">Model Accuracy</p>
                <p className="hero-stat-value">99.8%</p>
              </div>
            </div>
            <div className="hero-stat-bar-bg">
              <div className="hero-stat-bar-fill" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProjectsCTA() {
  const router = useRouter();

  return (
    <section id="projects-cta">
      <style>{`
        #projects-cta {
          padding: 4rem 40px 5rem;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }

        .cta-box {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          overflow: hidden;
          padding: 3.5rem 2rem 3.5rem 3rem;
          background: linear-gradient(120deg, #002046 0%, #013a6b 35%, #0a5c50 70%, #1a8a60 100%);
          display: flex;
          align-items: center;
          gap: 2.5rem;
          color: #ffffff;
          box-sizing: border-box;
        }

        /* soft backlight behind the window */
        .cta-box::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 14%;
          width: 500px;
          height: 500px;
          transform: translateY(-50%);
          background: radial-gradient(circle at center, rgba(120,220,180,0.15) 0%, transparent 62%);
          filter: blur(45px);
          pointer-events: none;
        }

        /* ── LEFT TEXT ── */
        .cta-left { position: relative; z-index: 3; flex: 1 1 400px; max-width: 460px; min-width: 0; box-sizing: border-box; }

        .cta-eyebrow {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 1.2rem;
        }

        .cta-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 1rem;
          word-break: break-word;
        }

        .cta-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.65);
          max-width: 400px;
          margin: 0 0 2rem;
          word-break: break-word;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.75rem 1.8rem;
          background: transparent;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          border: 1.5px solid rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'Inter', sans-serif;
        }
        .cta-btn:hover { background: rgba(255,255,255,0.1); border-color: #fff; transform: translateX(3px); }
        .cta-btn svg { transition: transform 0.25s ease; }
        .cta-btn:hover svg { transform: translateX(4px); }

        /* ════════════════════════════════════
           DESKTOP APP WINDOW — fully visible
        ════════════════════════════════════ */
        .cta-window {
          position: relative;
          z-index: 2;
          flex: 1 1 640px;
          max-width: 760px;
          display: flex;
          flex-direction: column;
          background: #0a0f1e;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 30px 70px rgba(0,0,15,0.45),
                      0 12px 24px rgba(0,0,15,0.30),
                      inset 0 1px 0 rgba(255,255,255,0.08);
          overflow: hidden;
        }

        /* light frosted header — sits ABOVE the screenshot (does not cover it) */
        .win-bar {
          flex-shrink: 0;
          height: 34px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .win-dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.85; }
        .win-dot.r { background: #ff5f57; }
        .win-dot.y { background: #febc2e; }
        .win-dot.g { background: #28c840; }

        /* full screenshot, shown at its natural ratio (no cropping) */
        .win-screen {
          position: relative;
          overflow: hidden;
          background: #0a0f1e;
        }
        .win-screen img {
          width: 100%;
          height: auto;
          display: block;
        }
        /* subtle glass sheen */
        .win-screen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(118deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 30%);
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          #projects-cta { padding: 3rem 20px 0; }
          .cta-box {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
            padding: 3rem 2rem 0;
            gap: 0;
            width: 100%;
          }
          .cta-left { flex: none; width: 100%; max-width: 100%; margin: 0 auto; box-sizing: border-box; }
          .cta-desc { max-width: 100%; margin-left: auto; margin-right: auto; }
          .cta-btn { margin: 0 auto; display: inline-flex; }
          .cta-box::before { display: none; }
          .cta-window {
            flex: none;
            width: 100%;
            max-width: 100%;
            margin: 2.5rem 0 0;
            border-radius: 14px 14px 0 0;
            border-bottom: none;
            box-sizing: border-box;
          }
        }
        @media (max-width: 768px) {
          #projects-cta { padding: 2.5rem 16px 0; }
          .cta-box { padding: 2.5rem 1.5rem 0; }
          .cta-h2 { font-size: 1.5rem; }
          .cta-desc { font-size: 0.92rem; }
          .cta-btn { padding: 0.7rem 1.4rem; font-size: 0.85rem; }
          .cta-window { margin-top: 2rem; }
        }
        @media (max-width: 480px) {
          #projects-cta { padding: 2rem 12px 0; }
          .cta-box { padding: 2rem 1.1rem 0; }
          .cta-h2 { font-size: 1.3rem; }
          .cta-eyebrow { font-size: 0.68rem; margin-bottom: 0.8rem; letter-spacing: 0.16em; }
          .cta-desc { font-size: 0.86rem; margin-bottom: 1.4rem; }
          .cta-btn { padding: 0.6rem 1.2rem; font-size: 0.8rem; gap: 7px; }
          .cta-window { margin-top: 1.5rem; border-radius: 10px 10px 0 0; }
          .win-bar { height: 28px; }
          .win-dot { width: 8px; height: 8px; }
        }
        @media (max-width: 360px) {
          #projects-cta { padding: 1.75rem 10px 0; }
          .cta-box { padding: 1.75rem 1rem 0; }
          .cta-h2 { font-size: 1.15rem; }
          .cta-desc { font-size: 0.82rem; }
          .cta-btn { padding: 0.55rem 1rem; font-size: 0.76rem; width: 100%; justify-content: center; }
          .cta-window { margin-top: 1.25rem; }
        }
      `}</style>

      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left: Text */}
        <div className="cta-left">
          <div className="cta-eyebrow">Our Work</div>
          <h2 className="cta-h2">Explore the projects that define us</h2>
          <p className="cta-desc">
            From AI-powered platforms to enterprise-grade web apps — see the real work we've shipped for global clients across industries.
          </p>
          <button onClick={() => router.push('/projects')} className="cta-btn">
            Explore Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right: Desktop window (fully visible) */}
        <motion.div
          className="cta-window"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="win-bar">
            <span className="win-dot r" />
            <span className="win-dot y" />
            <span className="win-dot g" />
          </div>
          <div className="win-screen">
            {/* ↓ Desktop screenshot */}
            <img src="/l1.png" alt="Project desktop" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
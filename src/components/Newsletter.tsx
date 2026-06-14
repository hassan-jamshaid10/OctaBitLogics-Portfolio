"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter">
      <style>{`
        /* ── Section wrapper — white bg like CaseStudies ── */
        #newsletter {
          padding: 5rem 40px;
          background: #faf9fd;
        }

        .nl-wrap {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Main card — two-panel layout ── */
        .nl-card {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 32, 70, 0.14);
        }

        /* ── Left panel — statement banner gradient ── */
        .nl-left {
          position: relative;
          padding: 3.5rem 3.5rem 3rem;
          background:
            radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.14) 0%, transparent 55%),
            linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        /* Subtle diagonal light streak like statement banner */
        .nl-left::before {
          content: '';
          position: absolute; top: -30%; right: 5%;
          width: 55%; height: 160%;
          background: linear-gradient(115deg, transparent 40%, rgba(46, 204, 64, 0.08) 50%, transparent 60%);
          transform: rotate(8deg);
          pointer-events: none;
        }

        .nl-left-content {
          position: relative;
          z-index: 2;
        }

        .nl-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: #ffffff;
          margin: 0 0 1rem 0;
        }

        .nl-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 2rem 0;
          max-width: 420px;
        }

        /* ── Email input ── */
        .nl-input-wrap {
          margin-bottom: 1.5rem;
        }
        .nl-input {
          width: 100%;
          max-width: 380px;
          padding: 14px 18px;
          border-radius: 0;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease;
          box-sizing: border-box;
        }
        .nl-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .nl-input:focus {
          border-color: rgba(46, 204, 64, 0.6);
          background: rgba(255, 255, 255, 0.1);
        }

        /* ── Buttons row ── */
        .nl-btns {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .nl-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: #002046;
          background: #2ECC40;
          padding: 13px 24px;
          border-radius: 0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nl-btn-primary:hover {
          background: #27b837;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(46, 204, 64, 0.35);
        }
        .nl-btn-primary:active { transform: scale(0.97); }

        .nl-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          background: transparent;
          padding: 13px 24px;
          border-radius: 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .nl-btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* ── Right panel — vivid blue accent ── */
        .nl-right {
          position: relative;
          background: linear-gradient(145deg, #013a6b 0%, #0a5c50 40%, #11806a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          overflow: hidden;
        }
        /* Circular glow overlay */
        .nl-right::before {
          content: '';
          position: absolute;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
          top: 10%; right: -10%;
          pointer-events: none;
        }
        .nl-right::after {
          content: '';
          position: absolute;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.15) 0%, transparent 70%);
          bottom: 5%; left: 10%;
          pointer-events: none;
        }

        /* ── Floating document mockup (pure CSS) ── */
        .nl-doc-stack {
          position: relative;
          z-index: 2;
          width: 260px;
          height: 340px;
        }

        /* Back document (slightly rotated) */
        .nl-doc-back {
          position: absolute;
          width: 240px; height: 310px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 14px;
          top: 20px; left: 24px;
          transform: rotate(4deg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
        }

        /* Front document */
        .nl-doc-front {
          position: absolute;
          width: 240px; height: 310px;
          background: #ffffff;
          border-radius: 14px;
          top: 0; left: 0;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          overflow: hidden;
        }

        /* Gradient sweep on top of front doc */
        .nl-doc-front::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 60%; height: 45%;
          background: radial-gradient(ellipse at top right, rgba(26, 109, 255, 0.12), transparent 70%);
          pointer-events: none;
        }

        .nl-doc-logo {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          color: #002046;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
          opacity: 0.5;
        }

        .nl-doc-badge {
          display: inline-block;
          width: fit-content;
          background: rgba(0, 80, 200, 0.1);
          color: #0050c8;
          font-family: 'Inter', sans-serif;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          margin: 12px 0 16px;
        }

        .nl-doc-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #002046;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: auto;
        }

        .nl-doc-footer {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: #74777f;
          line-height: 1.5;
          border-top: 1px solid rgba(0, 32, 70, 0.08);
          padding-top: 14px;
          margin-top: 16px;
        }

        /* ── Floating animation ── */
        @keyframes nl-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .nl-doc-stack {
          animation: nl-float 6s ease-in-out infinite;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          #newsletter { padding: 3.5rem 20px; }
          .nl-card {
            grid-template-columns: 1fr;
          }
          .nl-left { padding: 2.5rem 2rem; }
          .nl-right {
            padding: 3rem 2rem;
            min-height: 320px;
          }
          .nl-doc-stack { width: 220px; height: 290px; }
          .nl-doc-front, .nl-doc-back { width: 200px; height: 260px; }
        }
        @media (max-width: 500px) {
          .nl-left { padding: 2rem 1.5rem; }
          .nl-input { max-width: 100%; }
          .nl-btns { flex-direction: column; align-items: stretch; }
          .nl-btn-primary, .nl-btn-secondary { justify-content: center; }
        }
      `}</style>

      <div className="nl-wrap">
        <div className="nl-card">

          {/* ── Left: Content ── */}
          <div className="nl-left">
            <div className="nl-left-content">
              <h2 className="nl-title">
                Subscribe to Our<br />Newsletter
              </h2>
              <p className="nl-sub">
                Stay ahead with insights on AI, engineering, and digital
                transformation — delivered straight to your inbox.
              </p>

              <div className="nl-input-wrap">
                <input
                  type="email"
                  className="nl-input"
                  placeholder="Work email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="nl-btns">
                <button className="nl-btn-primary" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Subscribe now
                </button>
                <a href="#blogs" className="nl-btn-secondary">
                  Browse all blogs
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Document mockup ── */}
          <div className="nl-right">
            <div className="nl-doc-stack">
              <div className="nl-doc-back" />
              <div className="nl-doc-front">
                <div className="nl-doc-logo">OctaBitLogics</div>
                <div className="nl-doc-badge">Newsletter</div>
                <div className="nl-doc-title">
                  Weekly Insights<br />
                  on AI &amp; Tech
                </div>
                <div className="nl-doc-footer">
                  A curated digest of trends,<br />
                  tutorials &amp; case studies.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

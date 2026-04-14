"use client";

import BackgroundNightfall from "./BackgroundNightfall";
import ScrollReveal from "./ScrollReveal";
import LivingCharacter from "./LivingCharacter";
import Link from "next/link";

export default function StatementBanner() {
  return (
    <section id="statement-banner">
      <style>{`
        #statement-banner {
          background: linear-gradient(135deg, #3BADB0 0%, #1f4080 45%, #1B2E5E 100%);
          padding: 5rem 6rem;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        /* blob top-right */
        #statement-banner::before {
          content: '';
          position: absolute; top: -100px; right: -100px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        /* blob mid-bottom */
        #statement-banner::after {
          content: '';
          position: absolute; bottom: -80px; left: 30%;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .sb-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .sb-left {
          position: relative; z-index: 1;
        }

        .sb-left h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.9rem, 3.2vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.12;
          margin-bottom: 2rem;
        }

        .sb-hl {
          background: linear-gradient(135deg, #a8edee 0%, #3BADB0 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: underline;
          text-decoration-color: rgba(59,173,176,0.45);
          text-underline-offset: 4px;
        }

        .sb-divider {
          position: absolute;
          left: 50%;
          top: 15%;
          bottom: 15%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(167, 255, 249, 0.3), rgba(59, 173, 176, 0.5), rgba(167, 255, 249, 0.3), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .sb-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #1B2E5E;
          background: #ffffff;
          border: none;
          padding: 11px 22px;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sb-btn:hover {
          background: #e8f8f8;
          transform: translateX(3px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.18);
        }
        .sb-btn svg { transition: transform 0.2s ease; }
        .sb-btn:hover svg { transform: translateX(3px); }

        .sb-right {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .sb-right p {
          font-size: 0.9rem;
          line-height: 1.82;
          color: rgba(255,255,255,0.78);
        }
        .sb-right p:first-child {
          color: rgba(255,255,255,0.92);
        }

        @media (max-width: 860px) {
          #statement-banner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 4rem 2.5rem;
          }
          .sb-divider { display: none; }
        }
        @media (max-width: 480px) {
          #statement-banner { padding: 3.5rem 1.5rem; }
        }
      `}</style>

      <BackgroundNightfall nightGradient="linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%)" />

      <div className="sb-dots" />
      <div className="sb-divider" />

      {/* LEFT */}
      <div className="sb-left">
        <ScrollReveal>
          <h2>
            We&apos;re <span className="sb-hl">creatives</span>,{" "}
            driven by professional excellence
          </h2>
          <Link href="/engineering-approach" className="sb-btn">
            Our engineering approach
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>

      {/* RIGHT */}
      <div className="sb-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollReveal delay={0.2} style={{ position: "relative", zIndex: 10, width: '100%' }}>
          <LivingCharacter />
        </ScrollReveal>
      </div>
    </section>
  );
}
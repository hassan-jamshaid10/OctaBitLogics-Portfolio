"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsHero() {
    return (
        <section className="ow-hero">
            <style>{`
        .ow-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 48px 110px;
          background: linear-gradient(125deg, #002046 0%, #013a6b 40%, #0a5c50 75%, #1a8a60 112%);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        /* soft top glow */
        .ow-hero::before {
          content: '';
          position: absolute;
          top: -180px;
          left: 30%;
          width: 680px;
          height: 680px;
          background: radial-gradient(circle at center, rgba(120,220,200,0.18) 0%, transparent 62%);
          filter: blur(50px);
          pointer-events: none;
        }
        /* faint diagonal light streak (signature) */
        .ow-hero::after {
          content: '';
          position: absolute;
          top: -10%;
          left: 62%;
          width: 150px;
          height: 130%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent);
          transform: rotate(14deg);
          filter: blur(8px);
          pointer-events: none;
        }

        .ow-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ow-hero-left { max-width: 660px; }

        .ow-eyebrow {
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 1.6rem;
        }

        .ow-h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.4rem, 4.8vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 1.4rem;
        }
        .ow-h1 span { color: #a7fff9; }

        .ow-sub {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.68);
          max-width: 500px;
          margin: 0 0 2.4rem;
        }

        .ow-actions { display: flex; flex-wrap: wrap; gap: 0.9rem; }

        .ow-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 0.85rem 1.7rem;
          border-radius: 0;            /* square corners */
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
        }
        .ow-cta.primary {
          background: #ffffff;
          color: #002046;
          box-shadow: 0 10px 26px rgba(0,0,0,0.22);
        }
        .ow-cta.primary:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(0,0,0,0.3); }
        .ow-cta.ghost {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.55);
        }
        .ow-cta.ghost:hover { background: rgba(255,255,255,0.1); border-color: #fff; transform: translateY(-2px); }
        .ow-cta svg { transition: transform 0.22s ease; }
        .ow-cta:hover svg { transform: translateX(4px); }

        @media (max-width: 640px) {
          .ow-hero { padding: 120px 22px 84px; }
        }
      `}</style>

            <div className="ow-hero-inner">
                <div className="ow-hero-left">
                    <div className="ow-eyebrow">Our Work</div>
                    <h1 className="ow-h1">
                        Engineering that ships,<br />
                        <span>outcomes that scale.</span>
                    </h1>
                    <p className="ow-sub">
                        From defence-grade AI systems to dual-sided marketplaces — explore the
                        products we've designed, built, and shipped for teams across industries.
                    </p>
                    <div className="ow-actions">
                        <Link href="/contact" className="ow-cta primary">
                            Start a project <ArrowRight size={18} />
                        </Link>
                        <a href="#work" className="ow-cta ghost">
                            View case studies
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
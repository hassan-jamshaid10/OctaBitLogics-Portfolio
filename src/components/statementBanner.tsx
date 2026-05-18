"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return value;
}

const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "×", label: "Avg. ROI for Clients" },
];

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Precision Engineering",
    desc: "Every line of code and data pipeline is crafted with obsessive attention to quality, performance, and maintainability.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Client-First Culture",
    desc: "We embed ourselves in your business goals, not just your tech stack — delivering real outcomes, not just deliverables.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Gen‑Z Speed, Enterprise Rigor",
    desc: "Fearless creativity meets battle-tested standards. We ship fast without cutting corners — ever.",
  },
];

export default function StatementBanner() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const counts = [
    useCountUp(STATS[0].value, 1600, inView),
    useCountUp(STATS[1].value, 1800, inView),
    useCountUp(STATS[2].value, 1400, inView),
    useCountUp(STATS[3].value, 1200, inView),
  ];

  return (
    <section id="statement-banner" ref={ref}>
      <style>{`
        /* ─── Section shell ──────────────────────────────────────────────── */
        #statement-banner {
          background: #002046;
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
        }

        /* subtle mesh grid overlay */
        #statement-banner::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* teal glow blob top-right */
        #statement-banner::after {
          content: '';
          position: absolute; top: -180px; right: -180px;
          width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        /* second glow blob bottom-left */
        .sb2-blob2 {
          position: absolute; bottom: -200px; left: -150px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ─── Layout ─────────────────────────────────────────────────────── */
        .sb2-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ─── Top: headline + sub ────────────────────────────────────────── */
        .sb2-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: end;
          margin-bottom: 4rem;
        }

        .sb2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 1.25rem;
        }
        .sb2-eyebrow::before {
          content: '';
          display: block;
          width: 28px; height: 1.5px;
          background: #2ECC40;
          border-radius: 2px;
        }

        .sb2-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
        }

        .sb2-h2 .hl-teal {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sb2-right-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
        }

        .sb2-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.78;
          color: rgba(255,255,255,0.6);
          margin: 0;
          max-width: 480px;
        }

        .sb2-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #002046;
          background: #2ECC40;
          padding: 14px 28px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: fit-content;
          box-shadow: 0 8px 20px rgba(46,204,64,0.3);
        }
        .sb2-cta:hover {
          background: #39e64e;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 32px rgba(46,204,64,0.4);
        }
        .sb2-cta svg { transition: transform 0.22s ease; }
        .sb2-cta:hover svg { transform: translateX(3px); }

        /* ─── Stats strip ────────────────────────────────────────────────── */
        .sb2-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(46,204,64,0.15);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3.5rem;
        }

        .sb2-stat {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          border-right: 1px solid rgba(74,222,128,0.1);
          transition: background 0.3s ease;
        }
        .sb2-stat:last-child { border-right: none; }
        .sb2-stat:hover { background: rgba(74,222,128,0.05); }

        .sb2-stat-num {
          font-family: 'Manrope', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #2ECC40;
        }
        .sb2-stat-suffix {
          font-size: 1.6rem;
          font-weight: 700;
          color: rgba(74,222,128,0.7);
        }
        .sb2-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
          margin-top: 0.15rem;
        }

        /* ─── Pillars ────────────────────────────────────────────────────── */
        .sb2-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .sb2-pillar {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .sb2-pillar::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #2ECC40, #3BADB0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .sb2-pillar:hover {
          border-color: rgba(74,222,128,0.25);
          background: rgba(74,222,128,0.04);
          transform: translateY(-4px);
        }
        .sb2-pillar:hover::before { transform: scaleX(1); }

        .sb2-pillar-ico {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(46,204,64,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #2ECC40;
          margin-bottom: 1.1rem;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .sb2-pillar:hover .sb2-pillar-ico {
          background: rgba(74,222,128,0.18);
        }

        .sb2-pillar-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.55rem;
          letter-spacing: -0.01em;
        }
        .sb2-pillar-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        /* ─── Responsive ─────────────────────────────────────────────────── */
        @media (max-width: 960px) {
          .sb2-top { grid-template-columns: 1fr; gap: 1.5rem; }
          .sb2-stats { grid-template-columns: repeat(2, 1fr); }
          .sb2-stat { border-bottom: 1px solid rgba(74,222,128,0.1); }
          .sb2-stat:nth-child(2), .sb2-stat:nth-child(4) { border-right: none; }
          .sb2-stat:nth-child(3), .sb2-stat:nth-child(4) { border-bottom: none; }
          .sb2-pillars { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          #statement-banner { padding: 4.5rem 20px; }
          .sb2-stats { grid-template-columns: 1fr 1fr; }
          .sb2-pillars { grid-template-columns: 1fr; }
          .sb2-stat-num { font-size: 2rem; }
        }
      `}</style>

      <div className="sb2-blob2" />

      <div className="sb2-inner">

        {/* ── Top: headline + CTA ── */}
        <div className="sb2-top">
          <div>
            <div className="sb2-eyebrow">Why OctaBit</div>
            <h2 className="sb2-h2">
              Built for teams that{" "}
              <span className="hl-teal">refuse to settle</span>
            </h2>
          </div>
          <div className="sb2-right-col">
            <p className="sb2-sub">
              We pair the fearless creativity of a Gen‑Z studio with
              battle-tested engineering standards — so you get products that
              look extraordinary, perform flawlessly, and scale without limits.
            </p>
            <Link href="/engineering-approach" className="sb2-cta">
              Our engineering approach
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="sb2-stats">
          {STATS.map((s, i) => (
            <div className="sb2-stat" key={s.label}>
              <div className="sb2-stat-num">
                {counts[i]}<span className="sb2-stat-suffix">{s.suffix}</span>
              </div>
              <div className="sb2-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Pillars ── */}
        <div className="sb2-pillars">
          {PILLARS.map((p) => (
            <div className="sb2-pillar" key={p.title}>
              <div className="sb2-pillar-ico">{p.icon}</div>
              <h3 className="sb2-pillar-title">{p.title}</h3>
              <p className="sb2-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
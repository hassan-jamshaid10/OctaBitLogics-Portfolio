"use client";
import React, { useRef, useState, useEffect } from "react";
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
  { value: 5, suffix: "", label: "Core Service Areas" },
  { value: 20, suffix: "+", label: "Technologies We Ship With" },
  { value: 6, suffix: "", label: "Industries Served" },
  { value: 48, suffix: "hr", label: "Response Commitment" },
];

// Cloud infrastructure logos — loaded from the Simple Icons CDN.
// slug = simpleicons.org identifier; name shown next to the mark.
// If your CSP restricts images, allow https://cdn.simpleicons.org in img-src.
const LOGOS = [
  { slug: "amazonwebservices", url: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { slug: "googlecloud", name: "Google Cloud" },
  { slug: "microsoftazure", url: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg" },
  { slug: "digitalocean", name: "DigitalOcean" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "vercel", name: "Vercel" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "docker", name: "Docker" },
];

const StatementBanner = React.memo(function StatementBanner() {
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
        /* Section: blue -> green gradient (the app's text gradient, as background) */
        #statement-banner {
          position: relative;
          overflow: hidden;
          padding: 5rem 40px 3rem;
          background:
            radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.18) 0%, transparent 55%),
            linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
        }
        #statement-banner::before {
          content: '';
          position: absolute; top: -30%; right: 5%;
          width: 55%; height: 160%;
          background: linear-gradient(115deg, transparent 40%, rgba(46, 204, 64, 0.12) 50%, transparent 60%);
          transform: rotate(8deg);
          pointer-events: none;
        }
        .sb-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
        }

        /* Top: headline left, sub + button right */
        .sb-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 4rem;
        }
        .sb-h2 {
          font-family: inherit;
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.08;
          color: #ffffff; margin: 0; max-width: 680px;
        }
        .sb-h2 .dot { color: #2ECC40; }

        .sb-right {
          display: flex; flex-direction: column; align-items: flex-end;
          gap: 1.5rem; padding-top: 0.5rem;
        }
        .sb-sub {
          font-family: inherit;
          font-size: 1rem; line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          margin: 0; max-width: 340px; text-align: left;
        }
        .sb-cta {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-family: inherit;
          font-size: 0.92rem; font-weight: 700;
          color: #002046; background: #ffffff;
          padding: 14px 26px; border-radius: 4px;
          text-decoration: none; white-space: nowrap;
          transition: all 0.3s ease;
        }
        .sb-cta:hover { background: #2ECC40; transform: translateY(-2px); }
        .sb-cta svg { transition: transform 0.25s ease; }
        .sb-cta:hover svg { transform: translateX(3px); }

        /* Stats row: big numbers + thin vertical dividers */
        .sb-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          padding: 2.5rem 0;
          margin-bottom: 3.5rem;
        }
        .sb-stat { padding: 0 2rem; position: relative; }
        .sb-stat:not(:last-child)::after {
          content: '';
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 1px; background: rgba(255, 255, 255, 0.18);
        }
        .sb-stat-num {
          font-family: inherit;
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          font-weight: 800; letter-spacing: -0.04em; line-height: 1;
          color: #ffffff;
          display: flex; align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        .sb-stat-suffix {
          font-size: 0.5em; font-weight: 700;
          color: #2ECC40;
          margin-top: 0.3em; margin-left: 2px;
        }
        .sb-stat-label {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.74rem; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6); line-height: 1.5;
        }

        /* Logo strip — scrolling cloud-provider marquee */
        .sb-logos-head {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          text-align: center; margin-bottom: 1.75rem;
        }
        .sb-logos-track {
          position: relative; overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .sb-logos-row {
          display: flex; align-items: center; gap: 4rem;
          width: max-content;
          animation: sb-scroll 30s linear infinite;
        }
        .sb-logos-track:hover .sb-logos-row { animation-play-state: paused; }
        @keyframes sb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .sb-logo {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
          filter: grayscale(1) brightness(0) invert(1);
          opacity: 0.55;
          transition: filter 0.35s ease, opacity 0.35s ease, transform 0.35s ease;
        }
        .sb-logo:hover { filter: none; opacity: 1; transform: scale(1.08); }
        .sb-logo img { height: 32px; width: auto; display: block; }
        .sb-logo span {
          font-family: inherit;
          font-weight: 700; font-size: 1.05rem;
          color: #ffffff; white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .sb-logos-row { animation: none; flex-wrap: wrap; justify-content: center; }
        }

        /* Responsive */
        @media (max-width: 960px) {
          .sb-top { grid-template-columns: 1fr; gap: 2rem; }
          .sb-right { align-items: flex-start; }
          .sb-stats { grid-template-columns: repeat(2, 1fr); gap: 2rem 0; }
          .sb-stat:nth-child(2)::after { display: none; }
          .sb-stat { padding: 1rem 1.5rem; }
          .sb-logos { justify-content: center; gap: 1.5rem; }
        }
        @media (max-width: 600px) {
          #statement-banner { padding: 4rem 20px 2.5rem; }
          .sb-stats { grid-template-columns: 1fr 1fr; }
          .sb-logo { font-size: 1rem; }
        }
        @media (max-width: 420px) {
          .sb-stats { grid-template-columns: 1fr; }
          .sb-stat:not(:last-child)::after { display: none; }
          .sb-stat { padding: 0.75rem 0; }
        }
      `}</style>

      <div className="sb-inner">

        {/* Top: headline + CTA */}
        <div className="sb-top">
          <h2 className="sb-h2">
            Serious engineering from a team that owns every detail
            <span className="dot">.</span>
          </h2>
          <div className="sb-right">
            <p className="sb-sub">
              A focused studio built by experienced engineers. Every project gets our full attention, from architecture to launch and beyond.
            </p>
            <Link href="/contact" className="sb-cta">
              Work with us
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="sb-stats">
          {STATS.map((s, i) => (
            <div className="sb-stat" key={s.label}>
              <div className="sb-stat-num">
                {counts[i]}<span className="sb-stat-suffix">{s.suffix}</span>
              </div>
              <div className="sb-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logo strip — cloud providers marquee */}
        <p className="sb-logos-head">Engineered on world-class cloud infrastructure</p>
        <div className="sb-logos-track">
          <div className="sb-logos-row">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div className="sb-logo" key={`${l.slug}-${i}`}>
                <img
                  src={l.url || `https://cdn.simpleicons.org/${l.slug}`}
                  alt={l.name}
                  loading="lazy"
                  decoding="async"
                />
                <span>{l.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

export default StatementBanner;

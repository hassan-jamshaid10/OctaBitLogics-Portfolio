"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    icon: "◈",
    title: "Precision Engineering",
    desc: "Every line of code is deliberate. We architect systems that are robust, maintainable, and built to grow with your business.",
  },
  {
    icon: "◉",
    title: "Design-Led Thinking",
    desc: "We lead with aesthetics and user experience, ensuring every interface is as intuitive as it is visually striking.",
  },
  {
    icon: "◎",
    title: "Agile & Transparent",
    desc: "Fast iterations with clear communication at every step. You're never in the dark about where your project stands.",
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <style>{`
        #about {
          background: linear-gradient(160deg, rgba(59,173,176,0.04) 0%, var(--off-white) 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1000px;
          width: 100%;
          padding: 0 1rem;
        }

        /* Left column */
        .about-left .section-tag,
        .about-left h2,
        .about-left .about-p {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .about-left.in .section-tag { opacity:1; transform:none; transition-delay:0.05s; }
        .about-left.in h2            { opacity:1; transform:none; transition-delay:0.15s; }
        .about-left.in .about-p      { opacity:1; transform:none; transition-delay:0.25s; }

        .about-p {
          font-size: 0.98rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        .about-highlight {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.75rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--teal);
          border: 1px solid var(--border-strong);
          padding: 8px 16px;
          border-radius: 100px;
          width: fit-content;
          opacity: 0;
          transform: translateX(-16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }

        .about-left.in .about-highlight { opacity:1; transform:none; }

        .about-highlight-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--teal);
          animation: blip 1.6s ease infinite;
        }

        /* Right column — pillar cards */
        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pillar-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 1.25rem 1.5rem;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.6s ease, transform 0.6s ease,
                      box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .pillar-card:hover {
          box-shadow: 0 10px 36px rgba(59,173,176,0.1);
          border-color: var(--border-strong);
          transform: translateX(0) translateY(-2px) !important;
        }

        .about-pillars.in .pillar-card:nth-child(1) { opacity:1; transform:none; transition-delay:0.1s; }
        .about-pillars.in .pillar-card:nth-child(2) { opacity:1; transform:none; transition-delay:0.22s; }
        .about-pillars.in .pillar-card:nth-child(3) { opacity:1; transform:none; transition-delay:0.34s; }

        .pillar-icon {
          font-family: 'Oxanium', monospace;
          font-size: 1.4rem;
          color: var(--teal);
          flex-shrink: 0;
          margin-top: 2px;
          line-height: 1;
        }

        .pillar-title {
          font-family: 'Oxanium', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.35rem;
        }

        .pillar-desc {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        @media (max-width: 780px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-highlight { margin-top: 1.25rem; }
        }
      `}</style>

      <div className="about-grid">
        {/* Left */}
        <div className={`about-left${visible ? " in" : ""}`}>
          <div className="section-tag">About Us</div>
          <h2>We Build With<br />Purpose & Craft</h2>
          <p className="about-p">
            Octabit Logics is a software product studio obsessed with quality.
            We partner with startups and enterprises to design, build, and launch
            digital experiences that stand out — and stand the test of time.
          </p>
          <div className="about-highlight">
            <span className="about-highlight-dot" />
            Based in Lahore · Working Globally
          </div>
        </div>

        {/* Right */}
        <div className={`about-pillars${visible ? " in" : ""}`}>
          {PILLARS.map((p) => (
            <div className="pillar-card" key={p.title}>
              <div className="pillar-icon">{p.icon}</div>
              <div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
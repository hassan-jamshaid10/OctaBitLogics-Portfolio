"use client";

const SERVICES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Custom Software Development",
    desc: "We architect and build robust, scalable software tailored to your exact requirements — from internal tools to enterprise platforms.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile experiences built for performance, intuition, and scale — on iOS and Android alike.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: "AI & Automation",
    desc: "Integrate LLMs, build RAG pipelines, and automate complex workflows. We make AI a genuine part of your product — not an afterthought.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Cloud & DevOps",
    desc: "Modern cloud infrastructure, CI/CD pipelines, and IaC — built for reliability, security, and developer velocity at every stage of growth.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3BADB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Interfaces that are as beautiful as they are functional. We design product experiences that users love — grounded in research and refined by craft.",
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Services() {
  return (
    <section id="services">
      <style>{`
        #services {
          background: linear-gradient(145deg, #3BADB0 0%, #1f4080 48%, #1B2E5E 100%);
          padding: 5rem 3rem;
          position: relative;
          overflow: hidden;
        }

        /* dot-grid overlay */
        #services::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none; z-index: 0;
        }

        .srv-blob1 {
          position: absolute; top: -120px; left: -120px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.22) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .srv-blob2 {
          position: absolute; bottom: -100px; right: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(27,46,94,0.4) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .srv-inner {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
        }

        /* header */
        .srv-header { text-align: center; margin-bottom: 3rem; }

        .srv-tag {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-family: 'Oxanium', monospace; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.06);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 1rem;
        }
        .srv-tag-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #3BADB0; animation: srvBlip 1.8s ease infinite;
        }
        @keyframes srvBlip { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.5)} }

        .srv-header h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          font-weight: 800; color: #fff; line-height: 1.1;
        }

        /* grid */
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        /* center the last 2 cards */
        .srv-grid .srv-card:nth-child(4) { grid-column: 1 / 2; }
        .srv-grid .srv-card:nth-child(5) { grid-column: 2 / 3; }

        /* card */
        .srv-card {
          background: rgba(10, 18, 40, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(59,173,176,0.22);
          border-radius: 10px;
          padding: 2rem 1.8rem 1.8rem;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        /* top gradient line */
        .srv-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3BADB0, #1B2E5E);
          border-radius: 10px 10px 0 0;
          opacity: 0; transition: opacity 0.3s ease;
        }

        /* octagon watermark */
        .srv-card::after {
          content: '';
          position: absolute; top: -20px; right: -20px;
          width: 80px; height: 80px;
          background: rgba(59,173,176,0.07);
          clip-path: polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
          transition: transform 0.4s ease, background 0.3s ease;
        }

        .srv-card:hover {
          border-color: rgba(59,173,176,0.5);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,173,176,0.1);
          transform: translateY(-4px);
        }
        .srv-card:hover::before { opacity: 1; }
        .srv-card:hover::after { transform: rotate(22.5deg) scale(1.2); background: rgba(59,173,176,0.12); }

        .srv-icon {
          width: 42px; height: 42px;
          background: rgba(59,173,176,0.12);
          border: 1px solid rgba(59,173,176,0.28);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.2rem;
          position: relative; z-index: 1;
          transition: background 0.3s ease;
        }
        .srv-card:hover .srv-icon { background: rgba(59,173,176,0.22); }

        .srv-title {
          font-family: 'Oxanium', monospace;
          font-size: 1rem; font-weight: 800;
          color: #fff; margin-bottom: 0.75rem; line-height: 1.25;
          position: relative; z-index: 1;
        }

        .srv-desc {
          font-size: 0.82rem; line-height: 1.78;
          color: rgba(255,255,255,0.58);
          margin-bottom: 1.6rem; flex: 1;
          position: relative; z-index: 1;
        }

        .srv-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.22);
          padding: 7px 16px; border-radius: 6px;
          cursor: pointer; width: fit-content;
          position: relative; z-index: 1;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .srv-btn:hover {
          border-color: #3BADB0; color: #3BADB0;
          background: rgba(59,173,176,0.08);
        }
        .srv-btn svg { transition: transform 0.2s ease; }
        .srv-btn:hover svg { transform: translateX(3px); }

        /* responsive */
        @media (max-width: 860px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
          .srv-grid .srv-card:nth-child(4),
          .srv-grid .srv-card:nth-child(5) { grid-column: auto; }
        }
        @media (max-width: 560px) {
          #services { padding: 4rem 1.25rem; }
          .srv-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="srv-blob1" />
      <div className="srv-blob2" />

      <div className="srv-inner">
        <div className="srv-header">
          <div className="srv-tag">
            <span className="srv-tag-dot" />
            What We Build
          </div>
          <h2>Our Core Services</h2>
        </div>

        <div className="srv-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="srv-card">
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <p className="srv-desc">{s.desc}</p>
              <button className="srv-btn">
                Read More <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
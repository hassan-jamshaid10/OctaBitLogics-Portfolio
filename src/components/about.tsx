"use client";

const PILLARS = [
  "Precision Engineering",
  "Technology Partner",
  "Built to Scale",
  "Agile & Transparent",
];

export default function AboutSplit() {
  return (
    <section id="about-split">
      <style>{`
        #about-split {
          background: #ffffff;
          padding: 6rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* dot-grid ambient bg */
        #about-split::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .as-wrap {
          position: relative; z-index: 1;
          width: 100%; max-width: 1100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(27,46,94,0.10), 0 8px 24px rgba(59,173,176,0.08);
        }

        /* ── LEFT PANEL ── */
        .as-left {
          background: linear-gradient(145deg,
            rgba(59,173,176,0.09) 0%,
            rgba(27,46,94,0.06) 100%
          );
          border: 1px solid rgba(59,173,176,0.18);
          border-right: none;
          padding: 4rem 3.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 520px;
        }

        /* corner glow */
        .as-left::after {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .as-est {
          font-family: 'Oxanium', monospace;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #3BADB0;
          display: flex; align-items: center; gap: 0.5rem;
          margin-bottom: 1.6rem;
        }
        .as-est::before {
          content: '';
          display: inline-block; width: 18px; height: 1px;
          background: #3BADB0;
        }

        .as-left h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.6rem, 2.5vw, 2.25rem);
          font-weight: 800; line-height: 1.1;
          color: #1B2E5E;
        }
        .as-left h2 span {
          background: linear-gradient(135deg, #3BADB0 0%, #1B2E5E 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .as-left-body {
          margin-top: auto;
          padding-top: 2.5rem;
        }

        .as-left-body p {
          font-size: 0.875rem; line-height: 1.88; color: #4e6070;
          border-top: 1px solid rgba(59,173,176,0.2);
          padding-top: 1.5rem;
          margin-bottom: 1.35rem;
        }

        .as-pills {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
        }
        .as-pill {
          font-family: 'Oxanium', monospace;
          font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #3BADB0;
          border: 1px solid rgba(59,173,176,0.28);
          background: rgba(59,173,176,0.06);
          padding: 4px 11px; border-radius: 100px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .as-pill:hover {
          background: rgba(59,173,176,0.12);
          border-color: rgba(59,173,176,0.45);
        }

        /* ── RIGHT PANEL ── */
        .as-right {
          background: linear-gradient(145deg, #3BADB0 0%, #1f4080 55%, #1B2E5E 100%);
          padding: 4rem 3.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 520px;
        }

        /* decorative octagon shapes */
        .as-right::before {
          content: '';
          position: absolute; bottom: -60px; right: -60px;
          width: 280px; height: 280px;
          background: rgba(255,255,255,0.04);
          clip-path: polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
          pointer-events: none;
        }
        .as-right::after {
          content: '';
          position: absolute; top: -40px; left: -40px;
          width: 180px; height: 180px;
          background: rgba(255,255,255,0.03);
          clip-path: polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
          pointer-events: none;
        }

        .as-mission-tag {
          font-family: 'Oxanium', monospace;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; gap: 0.5rem;
          margin-bottom: 1.6rem;
        }
        .as-mission-tag::before {
          content: '';
          display: inline-block; width: 18px; height: 1px;
          background: rgba(255,255,255,0.4);
        }

        .as-right h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.6rem, 2.5vw, 2.25rem);
          font-weight: 800; line-height: 1.1;
          color: #ffffff;
        }
        .as-right h2 em {
          font-style: normal;
          color: rgba(255,255,255,0.55);
        }

        .as-right-body {
          margin-top: auto;
          padding-top: 2.5rem;
        }

        .as-right-body p {
          font-size: 0.875rem; line-height: 1.88;
          color: rgba(255,255,255,0.7);
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 1.5rem;
          margin-bottom: 1.35rem;
        }

        .as-loc {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          padding: 5px 13px; border-radius: 100px;
        }
        .as-loc-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #3BADB0;
          animation: asBlip 1.8s ease infinite;
        }
        @keyframes asBlip {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.3; transform:scale(.5); }
        }

        /* responsive */
        @media (max-width: 860px) {
          .as-wrap { grid-template-columns: 1fr; }
          .as-left { border-right: 1px solid rgba(59,173,176,0.18); border-bottom: none; }
          .as-left, .as-right { min-height: auto; padding: 3rem 2.25rem; }
        }
        @media (max-width: 480px) {
          #about-split { padding: 4rem 1.25rem; }
        }
      `}</style>

      <div className="as-wrap">
        {/* LEFT */}
        <div className="as-left">
          <div>
            <div className="as-est">Est. 2025</div>
            <h2>
              OctaBitLogics was built to{" "}
              <span>bridge the gap</span>{" "}
              between great ideas and great execution.
            </h2>
          </div>

          <div className="as-left-body">
            <p>
              As digital systems grew more complex and interconnected, businesses needed more than
              individual solutions. They needed a technology partner who gets into the trenches —
              from idea to launch and beyond.
            </p>
            <div className="as-pills">
              {PILLARS.map((p) => (
                <span key={p} className="as-pill">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="as-right">
          <div>
            <div className="as-mission-tag">Our Mission</div>
            <h2>
              We're here to help leaders build systems{" "}
              <em>that last.</em>
            </h2>
          </div>

          <div className="as-right-body">
            <p>
              To make powerful, enterprise-grade technology accessible to businesses at every stage —
              through pragmatic engineering, honest collaboration, and a relentless focus on outcomes
              that matter. We combine sharp engineering, modern architecture, and a deep understanding
              of emerging tech to deliver solutions that scale for the future.
            </p>
            <div className="as-loc">
              <span className="as-loc-dot" />
              Based in Lahore · Working Globally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
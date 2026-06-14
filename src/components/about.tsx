"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  "Precision Engineering",
  "Technology Partner",
  "Built to Scale",
  "Agile & Transparent",
];

const STATS = [
  { value: "100", unit: "%", label: "Client-first, transparent delivery" },
  { value: "2026", unit: "",  label: "Established · working globally" },
  { value: "∞",    unit: "",  label: "Built to scale, end to end" },
];

const TAGS = [
  { text: "Product Studio",  type: "industry" as const },
  { text: "Custom Software", type: "service" as const },
  { text: "AI Solutions",    type: "service" as const },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function AboutSplit() {
  return (
    <section id="about-split">
      <style>{`
        /* ── Section — light, same as case studies ── */
        #about-split {
          position: relative;
          padding: 6rem 40px;
          background: #faf9fd;
          overflow: hidden;
        }
        #about-split::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(0, 32, 70, 0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        #about-split::after {
          content: '';
          position: absolute; top: -10%; left: -10%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }
        .about-wrap {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          z-index: 1;
        }

        /* ── Header ── */
        .about-eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.22em;
          color: rgba(0, 32, 70, 0.55);
          margin: 0 0 1.25rem;
        }
        .eyebrow-rule {
          display: inline-block; width: 36px; height: 1px;
          background: linear-gradient(90deg, transparent, #2ECC40);
        }
        .about-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;
          margin: 0 0 3rem;
          max-width: 900px;
          color: #002046;
        }
        .about-title .accent {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ── Single flat white card — everything lives inside it ── */
        .company-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0, 32, 70, 0.1);
          border-radius: 4px; overflow: hidden;
          padding: 3.5rem;
          box-shadow: 0 30px 80px rgba(0, 32, 70, 0.1);
        }
        .company-card::after {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cc-label {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.68rem; font-weight: 600;
          color: #2ECC40; letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }
        .cc-headline {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.12;
          color: #002046; margin: 0 0 1.75rem;
          max-width: 760px;
          position: relative; z-index: 1;
        }
        .cc-headline em {
          font-style: normal;
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cc-body {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem; line-height: 1.8;
          color: rgba(0, 32, 70, 0.7);
          margin: 0 0 2.5rem;
          max-width: 740px;
          position: relative; z-index: 1;
        }

        /* tags */
        .cc-tags {
          display: flex; flex-wrap: wrap; gap: 0.6rem;
          margin-bottom: 3rem;
          position: relative; z-index: 1;
        }
        .cc-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          padding: 8px 16px; border-radius: 4px; white-space: nowrap;
        }
        .cc-tag.industry { color: #002046; background: transparent; border: 1.5px solid rgba(0, 32, 70, 0.18); }
        .cc-tag.service { color: #2ECC40; background: rgba(46, 204, 64, 0.1); border: 1px solid rgba(46, 204, 64, 0.25); }

        /* stats row — same card, separated by a thin rule */
        .cc-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(0, 32, 70, 0.1);
          position: relative; z-index: 1;
        }
        .cc-stat { display: flex; flex-direction: column; }
        .cc-stat-num {
          font-family: 'Manrope', sans-serif;
          font-size: 2.4rem; font-weight: 800; letter-spacing: -0.02em;
          color: #002046; line-height: 1;
          margin-bottom: 0.6rem;
        }
        .cc-stat-num span { color: #2ECC40; }
        .cc-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          color: rgba(0, 32, 70, 0.6);
          letter-spacing: 0.02em; line-height: 1.5;
        }

        /* principles row — also inside the card */
        .cc-principles {
          display: flex; flex-wrap: wrap; align-items: center;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(0, 32, 70, 0.1);
          position: relative; z-index: 1;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          font-weight: 700; color: #002046;
          letter-spacing: -0.01em;
        }
        .cc-principles .p-label {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.68rem; font-weight: 600;
          color: #2ECC40; letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-right: 1.5rem;
        }
        .cc-principles .item { white-space: nowrap; }
        .cc-principles .item:not(:last-child)::after {
          content: '·';
          margin: 0 12px;
          color: #2ECC40;
          font-weight: 800;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          #about-split { padding: 4rem 20px; }
          .about-title { margin-bottom: 2rem; }
          .company-card { padding: 2.25rem; }
          .cc-stats { grid-template-columns: 1fr; gap: 1.75rem; }
          .cc-principles { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .cc-principles .p-label { margin-right: 0; }
          .cc-principles .item:not(:last-child)::after { display: none; }
        }
      `}</style>

      <div className="about-wrap">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="about-eyebrow">
            <span className="eyebrow-rule" />
            ABOUT THE STUDIO
          </p>
          <h2 className="about-title">
            A software studio{" "}
            <span className="accent">
              bridging fresh tech<br />with professional rigor.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="company-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cc-label">— Who we are</span>
          <h3 className="cc-headline">
            We design, build &amp; ship <em>platforms that inspire.</em>
          </h3>
          <p className="cc-body">
            OctaBitLogics is a software company crafting products and services for the
            AI-first world. We make powerful, enterprise-grade technology accessible
            through creative problem-solving and honest collaboration &mdash; combining
            refined engineering, modern architecture, and a deep understanding of
            emerging tech to deliver solutions that look stunning and scale flawlessly.
          </p>

          <div className="cc-tags">
            {TAGS.map((t) => (
              <span key={t.text} className={`cc-tag ${t.type}`}>{t.text}</span>
            ))}
          </div>

          <div className="cc-stats">
            {STATS.map((s) => (
              <div className="cc-stat" key={s.label}>
                <span className="cc-stat-num">
                  {s.value}{s.unit && <span>{s.unit}</span>}
                </span>
                <span className="cc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="cc-principles">
            <span className="p-label">— How we work</span>
            {PRINCIPLES.map((p) => (
              <span key={p} className="item">{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
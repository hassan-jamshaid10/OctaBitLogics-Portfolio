"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 24,  suffix: "h",  label: "Response Time",      sub: "guaranteed reply"     },
  { num: 100, suffix: "%",  label: "Client Satisfaction", sub: "across all projects"  },
  { num: 50,  suffix: "+",  label: "Projects Delivered",  sub: "and counting"         },
  { num: 10,  suffix: "+",  label: "Countries Served",    sub: "globally deployed"    },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.round((target * step) / steps));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function ContactHero() {
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "remarkable together.";
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (textIndex < fullText.length) {
      const t = setTimeout(() => setTextIndex((p) => p + 1), 52);
      return () => clearTimeout(t);
    }
  }, [textIndex, fullText.length]);

  return (
    <section id="contact-hero">
      <style>{`
        #contact-hero {
          position: relative;
          padding-top: 150px;
          padding-bottom: 4rem;
          background: #ffffff;
          overflow: hidden;
          font-family: inherit;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ch-glow {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(59,173,176,0.45) 0%, rgba(0,32,70,0.15) 40%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .ch-glow-accent {
          position: absolute;
          top: 20%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(46,204,64,0.07) 0%, transparent 60%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .ch-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ch-eyebrow {
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #74777f;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .ch-h1 {
          font-family: inherit;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #002046 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
        }

        .ch-sub {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #74777f;
          max-width: 600px;
          margin: 0 0 4rem 0;
        }

        .ch-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #2ECC40;
          vertical-align: middle;
          margin-left: 2px;
          animation: ch-blink 1s step-end infinite;
        }

        @keyframes ch-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .ch-stats {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 900px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid rgba(59,173,176,0.2);
          padding-top: 2.8rem;
          margin-top: auto;
        }

        .ch-stat {
          text-align: center;
          padding: 0 1.5rem;
          border-right: 1px solid rgba(59,173,176,0.15);
        }

        .ch-stat:last-child {
          border-right: none;
        }

        .ch-stat-val {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #002046 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }

        .ch-stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1B2E5E;
          margin-bottom: 0.2rem;
        }

        .ch-stat-sub {
          font-size: 0.75rem;
          color: #74777f;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .ch-glow { width: 100%; height: 300px; }
          .ch-stats { grid-template-columns: repeat(2, 1fr); gap: 2.5rem 0; border-top: none; padding-top: 0; }
          .ch-stat { border-right: none; padding: 1.5rem 1rem; border: 1px solid rgba(59,173,176,0.15); border-radius: 12px; }
        }

        @media (max-width: 480px) {
          #contact-hero { padding-top: 120px; }
          .ch-stats { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        }
      `}</style>

      <div className="ch-glow" />
      <div className="ch-glow-accent" />

      <div className="ch-content">
        <motion.div
          className="ch-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT US
        </motion.div>

        <motion.h1
          className="ch-h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let&rsquo;s build something,<br />
          {fullText.substring(0, textIndex)}
          <span className="ch-cursor" />
        </motion.h1>

        <motion.p
          className="ch-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Have a project in mind or a challenge to solve? Our team is ready
          to turn your ideas into scalable, high-performance solutions.
        </motion.p>
      </div>

      <motion.div
        ref={statsRef}
        className="ch-stats"
        initial="hidden"
        animate={statsInView ? "show" : "hidden"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            className="ch-stat"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="ch-stat-val">
              <CountUp target={s.num} suffix={s.suffix} active={statsInView} />
            </div>
            <div className="ch-stat-label">{s.label}</div>
            <div className="ch-stat-sub">{s.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

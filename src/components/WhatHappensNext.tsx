"use client";

import { motion } from "framer-motion";

const NEXT_STEPS = [
  { num: "01", title: "We Review",      desc: "Our team reviews your inquiry within 24 hours." },
  { num: "02", title: "Discovery Call", desc: "We schedule a call to understand your requirements in depth." },
  { num: "03", title: "Proposal",       desc: "We craft a tailored proposal with timeline and cost breakdown." },
  { num: "04", title: "Kick-off",       desc: "Project begins with dedicated engineers assigned to your team." },
];

export default function WhatHappensNext() {
  return (
    <section id="what-happens-next">
      <style>{`
        #what-happens-next {
          padding: 5rem 40px;
          background: #faf9fd;
          font-family: inherit;
        }

        .whn-inner { max-width: 1280px; margin: 0 auto; }

        .whn-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 0.75rem;
        }
        .whn-heading {
          font-family: inherit;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #002046;
          letter-spacing: -0.03em;
          margin: 0 0 3rem 0;
        }

        .whn-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .whn-card {
          padding: 2rem 1.75rem;
          border: 1px solid rgba(0,32,70,0.1);
          background: #ffffff;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .whn-card:hover {
          border-color: rgba(46,204,64,0.5);
          box-shadow: 0 8px 30px rgba(0,32,70,0.08);
          transform: translateY(-3px);
        }

        .whn-card-num {
          font-family: inherit;
          font-size: 2.8rem;
          font-weight: 800;
          color: rgba(0,32,70,0.07);
          line-height: 1;
          margin-bottom: 1.25rem;
        }
        .whn-card-title {
          font-family: inherit;
          font-size: 1.05rem;
          font-weight: 800;
          color: #002046;
          margin-bottom: 0.5rem;
        }
        .whn-card-desc {
          font-size: 0.87rem;
          color: rgba(0,32,70,0.52);
          line-height: 1.65;
        }

        .whn-card-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 3px;
          background: #2ECC40;
          transition: width 0.4s ease;
        }
        .whn-card:hover .whn-card-bar { width: 100%; }

        @media (max-width: 960px) {
          .whn-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          #what-happens-next { padding: 3.5rem 20px; }
          .whn-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="whn-inner">
        <p className="whn-label">Our Process</p>
        <h2 className="whn-heading">What happens next?</h2>
        <div className="whn-grid">
          {NEXT_STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className="whn-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="whn-card-num">{num}</div>
              <div className="whn-card-title">{title}</div>
              <div className="whn-card-desc">{desc}</div>
              <div className="whn-card-bar" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

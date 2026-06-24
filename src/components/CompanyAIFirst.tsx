"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CompanyAIFirst() {
  return (
    <section id="company-aifirst">
      <style>{`
        #company-aifirst {
          position: relative;
          background: #faf9fd;
          padding: 8rem 40px;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          width: 100%;
        }

        /* We'll keep a subtle glow effect on the right as a nod to the reference image, but adapted for light mode */
        .ai-bg-glow {
          position: absolute;
          top: 0;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 173, 176, 0.1) 0%, transparent 60%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .ai-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }

        .ai-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ai-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 3rem 0;
        }

        .ai-highlight {
          color: #3BADB0;
          position: relative;
          display: inline-block;
        }

        .ai-highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 3px;
          background: #2ECC40;
        }

        .ai-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #002046;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 0;
          transition: all 0.3s ease;
        }

        .ai-btn:hover {
          background: #2ECC40;
          color: #002046;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(46, 204, 64, 0.2);
        }

        .ai-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ai-p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #74777f;
          margin: 0;
        }

        @media (max-width: 1024px) {
          #company-aifirst { padding: 5rem 40px; }
          .ai-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 768px) {
          #company-aifirst { padding: 4rem 20px; }
        }
        @media (max-width: 600px) {
          .ai-p { font-size: 1rem; }
          .ai-h2 { margin-bottom: 2rem; }
        }
      `}</style>

      <div className="ai-bg-glow" />

      <div className="ai-inner">
        <motion.div 
          className="ai-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="ai-h2">
            We're <span className="ai-highlight">AI-first</span>, built with responsibility
          </h2>
          <Link href="/engineering-approach" className="ai-btn">
            Our AI-first approach
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          className="ai-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="ai-p">
            Being AI-first at OctaBitLogics does not mean adding AI everywhere. It means applying intelligence where it improves decisions, reduces friction, and strengthens systems over time.
          </p>
          <p className="ai-p">
            We embed AI into products, platforms, and operations in ways that are governed, secure, and aligned to business readiness, from early strategy and validation to production-grade.
          </p>
          <p className="ai-p">
            Our role is to help organisations get the balance right.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

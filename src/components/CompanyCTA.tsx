"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    title: "What we help organizations build",
    desc: "Explore our capabilities across engineering, AI, and digital systems.",
    linkText: "View our services",
    href: "#services"
  },
  {
    title: "How we work",
    desc: "Understand our delivery model, engagement approaches, and governance.",
    linkText: "See our approach",
    href: "#company-delivery"
  },
  {
    title: "Our thinking",
    desc: "Insights on AI, engineering, and building systems that last.",
    linkText: "Read our blog",
    href: "/blogs"
  }
];

export default function CompanyCTA() {
  return (
    <section id="company-cta">
      <style>{`
        #company-cta {
          position: relative;
          background:
            radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.14) 0%, transparent 55%),
            linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
          padding: 8rem 40px;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .cta-bg-glow1 {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 173, 176, 0.2) 0%, transparent 60%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-bg-glow2 {
          position: absolute;
          bottom: -20%;
          right: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.2) 0%, transparent 60%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        .cta-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4rem 0;
          letter-spacing: -0.02em;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .cta-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .cta-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .cta-card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 2rem 0;
        }

        .cta-card-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 3rem 0;
          flex-grow: 1;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .cta-link:hover {
          gap: 10px;
          color: #3BADB0;
        }

        @media (max-width: 900px) {
          #company-cta { padding: 5rem 40px; }
          .cta-h2 { margin-bottom: 2.5rem; }
          .cta-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          #company-cta { padding: 4rem 20px; }
          .cta-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cta-bg-glow1" />
      <div className="cta-bg-glow2" />

      <div className="cta-inner">
        <motion.h2 
          className="cta-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What's your next move?
        </motion.h2>

        <div className="cta-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              className="cta-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="cta-card-title">{card.title}</h3>
              <p className="cta-card-desc">{card.desc}</p>
              <Link href={card.href} className="cta-link">
                {card.linkText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

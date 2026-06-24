"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OurServices() {
  return (
    <section id="our-services">
      <style>{`
        #our-services {
          background: #ffffff;
          padding: 6rem 40px;
          font-family: 'Inter', sans-serif;
          position: relative;
        }

        .os-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .os-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .os-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #002046;
          margin: 0;
          letter-spacing: -0.03em;
        }

        .os-view-all {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.2rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #002046;
          border: 1px solid rgba(0, 32, 70, 0.15);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .os-view-all:hover {
          background: rgba(0, 32, 70, 0.05);
          border-color: rgba(0, 32, 70, 0.3);
        }

        .os-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(0, 32, 70, 0.1);
          background: #ffffff;
        }

        .os-card {
          position: relative;
          display: flex;
          flex-direction: column;
          aspect-ratio: 1 / 1.15;
          padding: 2.5rem 2rem;
          border-right: 1px solid rgba(0, 32, 70, 0.1);
          cursor: pointer;
          transition: background 0.3s ease;
          overflow: hidden;
        }

        .os-card:last-child {
          border-right: none;
        }

        .os-card:hover {
          background: rgba(0, 32, 70, 0.02);
        }

        .os-card-icon {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .os-card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #002046;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* SVG Gradients and filters */
        .icon-svg {
          width: 130px;
          height: 130px;
          filter: drop-shadow(0 10px 20px rgba(46, 204, 64, 0.15));
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .os-card:hover .icon-svg {
          transform: scale(1.08) translateY(-5px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          #our-services { padding: 4.5rem 20px; }
          .os-grid { grid-template-columns: repeat(2, 1fr); }
          .os-card:nth-child(2) { border-right: none; }
          .os-card:nth-child(1),
          .os-card:nth-child(2) { border-bottom: 1px solid rgba(0, 32, 70, 0.1); }
          .os-card { aspect-ratio: 1 / 1; }
        }

        @media (max-width: 600px) {
          #our-services { padding: 3.5rem 16px; }
          .os-grid { grid-template-columns: 1fr; }
          .os-card {
            border-right: none;
            border-bottom: 1px solid rgba(0, 32, 70, 0.1);
            aspect-ratio: auto;
            min-height: 280px;
          }
          .os-card:last-child { border-bottom: none; }
          .os-header { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
        }
        @media (max-width: 400px) {
          .os-card { min-height: 240px; padding: 1.5rem !important; }
        }
      `}</style>

      <div className="os-inner">
        <motion.div 
          className="os-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="os-title">Our services</h2>
          <Link href="/services" className="os-view-all">
            View all services
          </Link>
        </motion.div>

        <motion.div 
          className="os-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Defs for gradients and filters */}
          <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true">
            <defs>
              <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2ECC40" />
                <stop offset="100%" stopColor="#3BADB0" />
              </linearGradient>
              <filter id="grainAndBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.25 0" in="noise" result="coloredNoise" />
                <feComposite in="coloredNoise" in2="SourceGraphic" operator="in" result="noisyShape" />
                <feBlend mode="overlay" in="noisyShape" in2="SourceGraphic" result="final" />
              </filter>
            </defs>
          </svg>

          {/* Card 1: AI & Data Innovation */}
          <motion.div className="os-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="os-card-icon">
              <svg className="icon-svg" viewBox="0 0 100 100">
                <path 
                  d="M50 5 C50 40, 60 50, 95 50 C60 50, 50 60, 50 95 C50 60, 40 50, 5 50 C40 50, 50 40, 50 5 Z" 
                  fill="url(#appGradient)" 
                  filter="url(#grainAndBlur)" 
                />
              </svg>
            </div>
            <h3 className="os-card-title">AI & Data<br />Innovation</h3>
          </motion.div>

          {/* Card 2: Engineering */}
          <motion.div className="os-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="os-card-icon">
              <svg className="icon-svg" viewBox="0 0 100 100">
                <path 
                  d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z M50 35 A 15 15 0 1 1 50 65 A 15 15 0 1 1 50 35 Z" 
                  fill="url(#appGradient)" 
                  filter="url(#grainAndBlur)" 
                />
              </svg>
            </div>
            <h3 className="os-card-title">Engineering</h3>
          </motion.div>

          {/* Card 3: Cloud & Security */}
          <motion.div className="os-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="os-card-icon">
              <svg className="icon-svg" viewBox="0 0 100 100">
                <circle cx="34" cy="34" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
                <circle cx="66" cy="34" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
                <circle cx="34" cy="66" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
                <circle cx="66" cy="66" r="16" fill="url(#appGradient)" filter="url(#grainAndBlur)" />
              </svg>
            </div>
            <h3 className="os-card-title">Cloud &<br />Security</h3>
          </motion.div>

          {/* Card 4: Digital Strategy Consulting */}
          <motion.div className="os-card" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="os-card-icon">
              <svg className="icon-svg" viewBox="0 0 100 100">
                <path 
                  d="M 25 80 V 20 H 40 L 60 55 V 20 H 75 V 80 H 60 L 40 45 V 80 Z" 
                  fill="url(#appGradient)" 
                  filter="url(#grainAndBlur)" 
                />
              </svg>
            </div>
            <h3 className="os-card-title">Digital Strategy<br />Consulting</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

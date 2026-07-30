"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
];

const IndustriesHero = React.memo(function IndustriesHero() {
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "across every market.";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 55);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText.length]);

  return (
    <section id="industries-hero">
      <style>{`
        #industries-hero {
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

        .ih-glow {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(59, 173, 176, 0.45) 0%, rgba(0, 32, 70, 0.15) 40%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .ih-glow-accent {
          position: absolute;
          top: 20%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.07) 0%, transparent 60%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .ih-content {
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

        .ih-eyebrow {
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #74777f;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .ih-h1 {
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

        .ih-sub {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #74777f;
          max-width: 600px;
          margin: 0 0 4rem 0;
        }

        .ih-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #2ECC40;
          vertical-align: middle;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .ih-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin-top: auto;
          padding-top: 2rem;
        }

        .ih-slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: ih-slide 35s linear infinite;
        }

        .ih-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes ih-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        .ih-slide-img {
          width: 400px;
          height: 280px;
          object-fit: cover;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .ih-slide-img { width: 280px; height: 200px; }
          .ih-glow { width: 100%; height: 300px; }
        }
      `}</style>

      <div className="ih-glow" />
      <div className="ih-glow-accent" />

      <div className="ih-content">
        <motion.div
          className="ih-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          INDUSTRIES
        </motion.div>
        <motion.h1
          className="ih-h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We deliver intelligent solutions<br />
          {fullText.substring(0, textIndex)}
          <span className="ih-cursor" />
        </motion.h1>
        <motion.p
          className="ih-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From North America to Asia, we partner with leading organisations across sectors to build systems that last.
        </motion.p>
      </div>

      <div className="ih-slider-container">
        <div className="ih-slider-track">
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <img key={i} src={src} alt="Global Presence" className="ih-slide-img" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
});

export default IndustriesHero;

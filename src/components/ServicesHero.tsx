"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=600&auto=format&fit=crop", // Modern office coding
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", // Professional team planning
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", // Advanced technology/hardware
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop", // Data analytics and charts
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", // Creative agency collaboration
  "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=600&auto=format&fit=crop", // Clean code on screen close-up
];

export default function ServicesHero() {
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "engineered for massive scale";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText.length]);

  return (
    <section id="services-hero">
      <style>{`
        #services-hero {
          position: relative;
          padding-top: 150px;
          padding-bottom: 4rem;
          background: #ffffff;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sh-glow {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(46, 204, 64, 0.4) 0%, rgba(59, 173, 176, 0.15) 40%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .sh-content {
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

        .sh-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #74777f;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .sh-h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #002046 0%, #1a4a80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 4rem 0;
        }

        .sh-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #2ECC40;
          vertical-align: middle;
          margin-left: 2px;
          animation: sh-blink 1s step-end infinite;
        }

        @keyframes sh-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* ── Image Slider ── */
        .sh-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin-top: auto;
          padding-top: 2rem;
        }

        .sh-slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: sh-slide 30s linear infinite;
        }

        .sh-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes sh-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        .sh-slide-img {
          width: 400px;
          height: 280px;
          object-fit: cover;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .sh-slide-img { width: 280px; height: 200px; }
          .sh-glow { width: 100%; height: 300px; }
        }
      `}</style>

      <div className="sh-glow" />

      <div className="sh-content">
        <div className="sh-eyebrow">Our Services</div>
        <h1 className="sh-h1">
          Custom software solutions<br />
          {fullText.substring(0, textIndex)}
          <span className="sh-cursor" />
        </h1>
      </div>

      <div className="sh-slider-container">
        <div className="sh-slider-track">
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <img key={i} src={src} alt="Service execution" className="sh-slide-img" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

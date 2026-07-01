"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
];

export default function CompanyHero() {
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "for lasting business value";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText.length]);

  return (
    <section id="company-hero">
      <style>{`
        #company-hero {
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
          background: radial-gradient(ellipse at center, rgba(59, 173, 176, 0.45) 0%, rgba(0, 32, 70, 0.15) 40%, transparent 70%);
          filter: blur(40px);
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
          background: linear-gradient(135deg, #002046 0%, #1a4a80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 4rem 0;
        }

        .ch-cursor {
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

        /* ── Image Slider ── */
        .ch-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin-top: auto;
          padding-top: 2rem;
        }

        .ch-slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: slide 30s linear infinite;
        }

        .ch-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        .ch-slide-img {
          width: 400px;
          height: 280px;
          object-fit: cover;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .ch-slide-img { width: 280px; height: 200px; }
          .ch-glow { width: 100%; height: 300px; }
        }
      `}</style>

      <div className="ch-glow" />

      <div className="ch-content">
        <div className="ch-eyebrow">ABOUT US</div>
        <h1 className="ch-h1">
          We engineer intelligent systems<br />
          {fullText.substring(0, textIndex)}
          <span className="ch-cursor" />
        </h1>
      </div>

      <div className="ch-slider-container">
        {/* Double the images to create a seamless infinite scroll loop */}
        <div className="ch-slider-track">
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <img key={i} src={src} alt="Company Life" className="ch-slide-img" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

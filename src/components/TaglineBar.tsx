"use client";

import React from "react";

const LOGOS = ["VERTEX", "QUANTUM", "NEXUS", "CORELINE", "LUMINA"];

export default function TaglineBar() {
  const items = [...LOGOS, ...LOGOS]; // doubled for seamless loop

  return (
    <section style={{ minHeight: "unset", display: "block", padding: 0 }}>
      <style>{`
        .trusted-bar {
          width: 100%;
          background: #f4f3f7;
          border-top: 1px solid #c4c6cf40;
          border-bottom: 1px solid #c4c6cf40;
          padding: 3rem 40px;
        }

        .trusted-label {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #74777f;
          margin-bottom: 2.5rem;
        }

        .trusted-logos-wrap {
          overflow: hidden;
          position: relative;
        }
        .trusted-logos-wrap::before,
        .trusted-logos-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .trusted-logos-wrap::before {
          left: 0;
          background: linear-gradient(to right, #f4f3f7, transparent);
        }
        .trusted-logos-wrap::after {
          right: 0;
          background: linear-gradient(to left, #f4f3f7, transparent);
        }

        .trusted-logos-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: logoSlide 24s linear infinite;
          gap: 5rem;
          padding: 0.5rem 0;
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        .trusted-logos-track:hover {
          animation-play-state: paused;
          opacity: 1;
        }

        @keyframes logoSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .trusted-logo-item {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #002046;
          letter-spacing: -0.01em;
          white-space: nowrap;
          user-select: none;
        }

        @media (max-width: 600px) {
          .trusted-bar { padding: 2.5rem 16px; }
          .trusted-logo-item { font-size: 1.2rem; }
        }
      `}</style>

      <div className="trusted-bar">
        <p className="trusted-label">Trusted by Global Innovators</p>
        <div className="trusted-logos-wrap">
          <div className="trusted-logos-track">
            {items.map((logo, i) => (
              <span key={i} className="trusted-logo-item">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
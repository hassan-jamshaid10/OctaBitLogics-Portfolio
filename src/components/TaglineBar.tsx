"use client";

import React from "react";

/*
 * Technology marquee — real logos served from the Simple Icons CDN
 * (https://cdn.simpleicons.org/{slug} returns the official brand-color SVG).
 * Logos sit grayscale at rest and bloom into brand color on hover.
 *
 * To add/remove a logo: find its slug at https://simpleicons.org and add
 * { name, slug } below. When you land real clients, the same structure
 * takes client logos — just point `src` at your own assets.
 */
const TECH = [
  { name: "React",        slug: "react" },
  { name: "Next.js",      slug: "nextdotjs" },
  { name: "TypeScript",   slug: "typescript" },
  { name: "Node.js",      slug: "nodedotjs" },
  { name: "Python",       slug: "python" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "PostgreSQL",   slug: "postgresql" },
  { name: "MongoDB",      slug: "mongodb" },
  { name: "Docker",       slug: "docker" },
  { name: "SpringBoot",       slug: "springboot" },
  { name: "Flutter",      slug: "flutter" },
  { name: "Firebase",     slug: "firebase" },
];

export default function TaglineBar() {
  const items = [...TECH, ...TECH]; // doubled for seamless loop

  return (
    <section style={{ minHeight: "unset", display: "block", padding: 0 }}>
      <style>{`
        .trusted-bar {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          padding: 3.5rem 40px;
        }

        .trusted-label {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #002046;
          opacity: 0.4;
          margin-bottom: 3rem;
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
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .trusted-logos-wrap::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        .trusted-logos-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: logoSlide 30s linear infinite;
          gap: 4.5rem;
          padding: 0.5rem 0;
        }
        .trusted-logos-track:hover {
          animation-play-state: paused;
        }

        @keyframes logoSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* logo + name: grayscale at rest, brand color on hover */
        .tech-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: default;
        }
        .tech-logo img {
          width: 34px; height: 34px;
          display: block;
          filter: grayscale(1) opacity(0.45);
          transition: filter 0.35s ease, transform 0.35s ease;
        }
        .tech-logo span {
          font-family: 'Manrope', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #002046;
          opacity: 0.45;
          letter-spacing: -0.01em;
          white-space: nowrap;
          user-select: none;
          transition: opacity 0.35s ease;
        }
        .tech-logo:hover img {
          filter: grayscale(0) opacity(1);
          transform: scale(1.12);
        }
        .tech-logo:hover span {
          opacity: 1;
        }

        @media (max-width: 600px) {
          .trusted-bar { padding: 2.5rem 16px; }
          .trusted-logos-track { gap: 2.75rem; }
          .tech-logo { gap: 10px; }
          .tech-logo img { width: 26px; height: 26px; }
          .tech-logo span { font-size: 0.95rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-logos-track { animation: none; }
        }
      `}</style>

      <div className="trusted-bar">
        <p className="trusted-label">Engineering With World-Class Technology</p>
        <div className="trusted-logos-wrap">
          <div className="trusted-logos-track">
            {items.map((tech, i) => (
              <span key={i} className="tech-logo">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  width={34}
                  height={34}
                  loading="lazy"
                  decoding="async"
                />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
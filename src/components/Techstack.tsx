"use client";

import React from "react";

const ROW_1 = [
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" },
];

const ROW_2 = [
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
];

type Tech = { name: string; logo: string };

function MarqueeRow({
  techs,
  reverse = false,
  speed = 36,
}: {
  techs: Tech[];
  reverse?: boolean;
  speed?: number;
}) {
  const items = [...techs, ...techs];

  return (
    <div className="ts-track">
      <div
        className={reverse ? "ts-inner ts-reverse" : "ts-inner"}
        style={{ ["--ts-speed" as any]: `${speed}s` }}
      >
        {items.map((tech, i) => (
          <div className="ts-chip" key={`${tech.name}-${i}`}>
            <div className="ts-logo-box">
              <img
                src={tech.logo}
                alt={tech.name}
                className="ts-logo"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <span className="ts-chip-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="ts-section" aria-label="Tech stack">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .ts-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;

          /* ✅ MUCH smaller top spacing */
          padding: 16px 0 0;

          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          isolation: isolate;
        }

        .ts-container {
          width: 100%;
          max-width: 1200px;
          margin-inline: auto;
          padding-inline: 24px;
          position: relative;
          z-index: 1;
        }

        /* subtle background blobs */
        .ts-section::before {
          content: '';
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.07) 0%, transparent 70%);
          top: -220px; left: -200px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Header ── */
        .ts-header {
          width: 100%;
          max-width: 680px;
          margin-inline: auto;
          text-align: center;

          /* ✅ reduced */
          margin-bottom: 14px;

          position: relative;
          z-index: 5;
        }

        .ts-badge {
          display: inline-block;
          padding: 5px 16px;
          background: linear-gradient(135deg, rgba(59,173,176,0.12) 0%, rgba(37,99,235,0.12) 100%);
          border: 1px solid rgba(59,173,176,0.35);
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3badb0;

          /* ✅ reduced */
          margin-bottom: 8px;
        }

        .ts-title {
          font-size: clamp(1.65rem, 3.1vw, 2.25rem);
          font-weight: 800;
          color: #1e293b;

          /* ✅ reduced */
          margin: 0 0 6px;

          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .ts-title-accent {
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .ts-subtitle {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Marquee ── */
        .ts-marquee-wrap {
          position: relative;
          z-index: 1;
        }

        .ts-marquee-wrap::before,
        .ts-marquee-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 160px;
          z-index: 2;
          pointer-events: none;
        }

        .ts-marquee-wrap::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, transparent 100%);
        }

        .ts-marquee-wrap::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, transparent 100%);
        }

        .ts-track {
          overflow: hidden;
          margin-bottom: 12px;
          padding: 4px 0;
        }

        .ts-inner {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: ts-scroll-left var(--ts-speed, 36s) linear infinite;
          will-change: transform;
        }

        .ts-inner.ts-reverse {
          animation: ts-scroll-right var(--ts-speed, 36s) linear infinite;
        }

        @keyframes ts-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes ts-scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .ts-marquee-wrap:hover .ts-inner {
          animation-play-state: paused;
        }

        /* ── Chip ── */
        .ts-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px;
          border-radius: 60px;
          border: 1.5px solid rgba(31, 64, 128, 0.1);
          background: #ffffff;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(31, 64, 128, 0.05);
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          user-select: none;
        }

        .ts-chip:hover {
          border-color: rgba(59, 173, 176, 0.5);
          box-shadow: 0 6px 20px rgba(59, 173, 176, 0.16);
          transform: translateY(-3px);
        }

        .ts-logo-box {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #f8fafc;
          flex-shrink: 0;
          padding: 3px;
        }

        .ts-logo {
          width: 26px;
          height: 26px;
          object-fit: contain;
          display: block;
        }

        .ts-chip-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
          letter-spacing: 0.01em;
        }

        /* ── Bottom bar ── */
        .ts-bar {
          margin-top: 20px; /* ✅ reduced */
          height: 5px;
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
        }

        @media (max-width: 600px) {
          .ts-section { padding-top: 12px; }
          .ts-marquee-wrap::before,
          .ts-marquee-wrap::after { width: 60px; }
        }
      `,
        }}
      />

      <div className="ts-container">
        <div className="ts-header">
          <div className="ts-badge">Our Stack</div>
          <h2 className="ts-title">
            Technologies <span className="ts-title-accent">We Use</span>
          </h2>
          <p className="ts-subtitle">
            Powered by a modern, battle-tested stack — from databases and cloud
            infrastructure to AI/ML frameworks and DevOps tooling
          </p>
        </div>

        <div className="ts-marquee-wrap">
          <MarqueeRow techs={ROW_1} reverse={false} speed={40} />
          <MarqueeRow techs={ROW_2} reverse={true} speed={34} />
        </div>
      </div>

      <div className="ts-bar" />
    </section>
  );
}
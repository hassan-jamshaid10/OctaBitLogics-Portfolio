"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const domains = [
  {
    id: "ecommerce",
    title: "E‑Commerce",
    description:
      "Our ecommerce expertise spans multiple projects, leveraging GA4, CRM platforms, and AI to enhance customer insights and boost revenue.",
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Our data solutions in logistics improve operational workflows, optimizing supply chains and driving performance with actionable insights.",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description:
      "Streamline property assessments, forecast market trends, and enhance investment strategies with precision data solutions.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Integrate AI and data insights to elevate campaign strategies, maximize reach, and deliver measurable ROI improvements.",
  },
  {
    id: "software",
    title: "Software & Technology",
    description:
      "Navigating complex challenges? Data engineering and AI transform your strategies and deliver game-changing, scalable insights.",
  },
  {
    id: "health",
    title: "Health & Medical",
    description:
      "80% of healthcare providers report improved efficiency with data solutions that optimize resource allocation and track health trends.",
  },
];

function AnimatedIcon({ id }: { id: string }) {
  if (id === "ecommerce") {
    return (
      <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
        <rect className="ind-bag-body" x="7" y="14" width="22" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path className="ind-bag-handle" d="M13 14V10a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path className="ind-bag-stripe" d="M7 20h22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path className="ind-bag-tag" d="M14 24l1.5-1.5M15.5 22.5l2 2M19 24h2.5M21.5 24v2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "logistics") {
    return (
      <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
        <path className="ind-cube-front" d="M18 4L5 11v14l13 7 13-7V11L18 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path className="ind-cube-mid" d="M5 11l13 7 13-7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path className="ind-cube-vert" d="M18 18v14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (id === "realestate") {
    return (
      <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
        <path className="ind-house-body" d="M5 16l13-10 13 10v14a2 2 0 01-2 2H7a2 2 0 01-2-2V16z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <rect className="ind-house-door" x="14" y="22" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <path className="ind-house-wifi1" d="M23 8a4 4 0 014 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0" />
        <path className="ind-house-wifi2" d="M23 5a7 7 0 017 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0" />
        <path className="ind-house-wifi3" d="M23 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0" />
      </svg>
    );
  }
  if (id === "marketing") {
    return (
      <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="5" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
        <path className="ind-chart-line" d="M8 28l5-7 4 4 5-12 6 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="ind-chart-arrow" d="M26 14l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "software") {
    return (
      <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
        <path className="ind-code-left" d="M12 8L4 18l8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="ind-code-right" d="M24 8l8 10-8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line className="ind-code-cursor" x1="18" y1="12" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="ind-live-ico" width="28" height="28" viewBox="0 0 36 36" fill="none">
      <path className="ind-shield-body" d="M18 4L6 10v8c0 8.5 5.5 16.5 12 18 6.5-1.5 12-9.5 12-18v-8L18 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path className="ind-shield-beat" d="M10 20h3l2-5 3 10 2-5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ExpertiseDomains() {
  return (
    <section className="ind-section">
      <style>{`
        /* ── Section shell ─────────────────────────────────────────────── */
        .ind-section {
          background: #ffffff;
          padding: 6rem 40px;
          position: relative;
          overflow: hidden;
          display: block;
        }

        /* subtle dot grid overlay */
        .ind-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,32,70,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* green glow – bottom-left */
        .ind-section::after {
          content: '';
          position: absolute; bottom: -200px; left: -150px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(46,204,64,0.08) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* navy glow – top-right */
        .ind-glow-tr {
          position: absolute; top: -180px; right: -180px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,32,70,0.04) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Layout ─────────────────────────────────────────────────────── */
        .ind-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ─────────────────────────────────────────────────────── */
        .ind-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }

        .ind-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 1.25rem;
        }
        /* left line = green, right line = teal */
        .ind-eyebrow::before {
          content: '';
          display: block;
          width: 28px; height: 1.5px;
          background: #2ECC40;
          border-radius: 2px;
        }
        .ind-eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1.5px;
          background: #3BADB0;
          border-radius: 2px;
        }

        .ind-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.1;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }
        /* headline highlight: green → teal */
        .ind-title .hl {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ind-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #44474e;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Cards grid ──────────────────────────────────────────────────── */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .ind-card {
          background: #ffffff;
          border: 1px solid rgba(59,173,176,0.15);
          border-radius: 20px;
          padding: 1.6rem 1.75rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }

        /* animated top border reveal on hover: green → teal */
        .ind-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(90deg, #2ECC40, #3BADB0);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          border-radius: 2px 2px 0 0;
        }

        .ind-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,32,70,0.1), 0 0 0 1px rgba(46,204,64,0.1);
          border-color: rgba(46,204,64,0.3);
        }
        .ind-card:hover::before { transform: scaleX(1); }
        /* icon on hover: all cards use the same dark-green gradient */
        .ind-ico-green:hover .ind-ico-wrap,
        .ind-ico-teal:hover .ind-ico-wrap {
          background: linear-gradient(135deg, #2ECC40, #3BADB0) !important;
          color: #ffffff;
          box-shadow: 0 12px 28px rgba(46,204,64,0.3);
        }

        /* subtle number badge top-right */
        .ind-num {
          position: absolute;
          top: 1.4rem; right: 1.5rem;
          font-family: 'Manrope', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: rgba(0,32,70,0.05);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          transition: color 0.3s ease;
        }
        .ind-card:hover .ind-num { color: rgba(46,204,64,0.15); }

        /* ── Icon ─────────────────────────────────────────────────────────── */
        .ind-ico-wrap {
          width: 46px; height: 46px;
          border-radius: 13px;
          background: rgba(0,32,70,0.05);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
          color: #002046;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        /* green-tinted icon wrap for alternating cards */
        .ind-ico-green .ind-ico-wrap {
          background: rgba(46,204,64,0.1);
          color: #2ECC40;
        }

        .ind-live-ico { display: block; }

        /* ── Text ─────────────────────────────────────────────────────────── */
        .ind-card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          color: #002046;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }
        .ind-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          color: #44474e;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Living icon animations (unchanged) ───────────────────────────── */
        .ind-bag-handle {
          transform-origin: 18px 10px;
          animation: bagSwing 3s ease-in-out infinite;
        }
        .ind-bag-tag {
          stroke-dasharray: 12;
          stroke-dashoffset: 12;
          animation: tagAppear 3s ease infinite;
        }
        @keyframes bagSwing {
          0%, 100% { transform: rotate(0deg); }
          25%       { transform: rotate(4deg); }
          75%       { transform: rotate(-4deg); }
        }
        @keyframes tagAppear {
          0%, 30% { stroke-dashoffset: 12; opacity: 0; }
          50%     { stroke-dashoffset: 0; opacity: 1; }
          80%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }

        .ind-cube-front {
          stroke-dasharray: 80; stroke-dashoffset: 80;
          animation: cubeDraw 3s ease forwards infinite;
        }
        .ind-cube-mid {
          stroke-dasharray: 30; stroke-dashoffset: 30;
          animation: cubeDrawMid 3s ease 0.4s forwards infinite;
        }
        .ind-cube-vert {
          stroke-dasharray: 14; stroke-dashoffset: 14;
          animation: cubeDrawVert 3s ease 0.6s forwards infinite;
        }
        @keyframes cubeDraw {
          0%   { stroke-dashoffset: 80; }
          40%  { stroke-dashoffset: 0; }
          90%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 80; }
        }
        @keyframes cubeDrawMid {
          0%   { stroke-dashoffset: 30; }
          40%  { stroke-dashoffset: 0; }
          90%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 30; }
        }
        @keyframes cubeDrawVert {
          0%   { stroke-dashoffset: 14; }
          40%  { stroke-dashoffset: 0; }
          90%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 14; }
        }

        .ind-house-body {
          stroke-dasharray: 90; stroke-dashoffset: 90;
          animation: houseDraw 2s ease forwards;
        }
        @keyframes houseDraw { to { stroke-dashoffset: 0; } }
        .ind-house-wifi1 { animation: wifiPulse 2.5s ease-out 0.2s infinite; }
        .ind-house-wifi2 { animation: wifiPulse 2.5s ease-out 0.6s infinite; }
        .ind-house-wifi3 { animation: wifiPulse 2.5s ease-out 1.0s infinite; }
        @keyframes wifiPulse {
          0%   { opacity: 0; stroke-dashoffset: 8; stroke-dasharray: 8; }
          20%  { opacity: 0.7; stroke-dashoffset: 0; }
          60%  { opacity: 0.4; }
          100% { opacity: 0; }
        }

        .ind-chart-line {
          stroke-dasharray: 42; stroke-dashoffset: 42;
          animation: chartDraw 2.8s ease infinite;
        }
        .ind-chart-arrow {
          opacity: 0;
          animation: arrowPop 2.8s ease infinite;
        }
        @keyframes chartDraw {
          0%   { stroke-dashoffset: 42; }
          50%  { stroke-dashoffset: 0; }
          85%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -42; }
        }
        @keyframes arrowPop {
          0%, 40% { opacity: 0; transform: translateY(4px); }
          55%     { opacity: 1; transform: translateY(0); }
          85%     { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; transform: translateY(-4px); }
        }

        .ind-code-left  { animation: bracketL 3s ease-in-out infinite; }
        .ind-code-right { animation: bracketR 3s ease-in-out infinite; }
        .ind-code-cursor { animation: cursorBlink 1s steps(2) infinite; }
        @keyframes bracketL {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(-3px); }
        }
        @keyframes bracketR {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(3px); }
        }
        @keyframes cursorBlink {
          0%, 49% { opacity: 0.8; }
          50%, 100% { opacity: 0; }
        }

        .ind-shield-body {
          stroke-dasharray: 80; stroke-dashoffset: 80;
          animation: shieldDraw 1.5s ease forwards;
        }
        @keyframes shieldDraw { to { stroke-dashoffset: 0; } }
        .ind-shield-beat {
          stroke-dasharray: 40; stroke-dashoffset: 40;
          animation: heartTrace 2s linear infinite;
        }
        @keyframes heartTrace {
          0%   { stroke-dashoffset: 40; }
          50%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }

        /* ── Responsive ───────────────────────────────────────────────────── */
        @media (max-width: 960px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ind-grid { grid-template-columns: 1fr; }
          .ind-section { padding: 4.5rem 20px; }
        }
      `}</style>

      {/* decorative glow top-right */}
      <div className="ind-glow-tr" />

      <div className="ind-inner">

        {/* ── Header ── */}
        <div className="ind-header">
          <ScrollReveal delay={0} y={15} duration={0.5}>
            <div className="ind-eyebrow">Industry Impact</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} y={20} duration={0.55}>
            <h2 className="ind-title">
              Our <span className="hl">Impact</span> Across Industries
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} y={15} duration={0.5}>
            <p className="ind-subtitle">
              Pairing Gen‑Z creativity with deep industry experience, we deliver precision
              engineering and AI solutions tailored to overcome sector‑specific challenges.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Cards ── */}
        {/* Cards alternate: even index = green accent, odd = teal accent */}
        <div className="ind-grid">
          {domains.map((domain, i) => {
            const accentClass = i % 2 === 0 ? "ind-ico-green" : "ind-ico-teal";
            return (
              <ScrollReveal key={domain.id} delay={0.08 * i} y={24} duration={0.45}>
                <div className={`ind-card ${accentClass}`}>
                  {/* ghost number */}
                  <span className="ind-num">0{i + 1}</span>

                  <div className="ind-ico-wrap">
                    <AnimatedIcon id={domain.id} />
                  </div>

                  <h3 className="ind-card-title">{domain.title}</h3>
                  <p className="ind-card-desc">{domain.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
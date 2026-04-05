"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const domains = [
  {
    id: "ecommerce",
    title: "E Commerce",
    description: "Our ecommerce expertise spans multiple projects, leveraging GA4, CRM platforms, and Excel to enhance customer insights and boost revenue",
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Our data solutions in logistics improve operational workflows, optimizing supply chains and driving performance with actionable insights",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Looking to streamline property assessments, forecast market trends, and enhance investment strategies? Our solutions have you covered!",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "The future of marketing is here: integrate data insights and AI to elevate your campaign strategies and enhance ROI",
  },
  {
    id: "software",
    title: "Software & Technology",
    description: "Navigating complex challenges? Discover how data engineering and AI can transform your strategies and deliver game changing insights",
  },
  {
    id: "health",
    title: "Health & Medical",
    description: "80% of healthcare providers report improved efficiency with data solutions that optimize resource allocation and track health trends",
  },
];

function AnimatedIcon({ id }: { id: string }) {
  if (id === "ecommerce") {
    // Shopping bag: handle swings, price tag drops in
    return (
      <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect className="ind-bag-body" x="7" y="14" width="22" height="17" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path className="ind-bag-handle" d="M13 14V10a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path className="ind-bag-stripe" d="M7 20h22" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path className="ind-bag-tag" d="M14 24l1.5-1.5M15.5 22.5l2 2M19 24h2.5M21.5 24v2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    );
  }

  if (id === "logistics") {
    // 3D cube: edges draw themselves, then reset
    return (
      <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path className="ind-cube-front" d="M18 4L5 11v14l13 7 13-7V11L18 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path className="ind-cube-mid" d="M5 11l13 7 13-7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path className="ind-cube-vert" d="M18 18v14" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    );
  }

  if (id === "realestate") {
    // House: roof draws, then a Wi-Fi signal pulses from chimney
    return (
      <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path className="ind-house-body" d="M5 16l13-10 13 10v14a2 2 0 01-2 2H7a2 2 0 01-2-2V16z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <rect className="ind-house-door" x="14" y="22" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <path className="ind-house-wifi1" d="M23 8a4 4 0 014 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0"/>
        <path className="ind-house-wifi2" d="M23 5a7 7 0 017 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0"/>
        <path className="ind-house-wifi3" d="M23 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0"/>
      </svg>
    );
  }

  if (id === "marketing") {
    // Chart: line draws itself continuously
    return (
      <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="5" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.25"/>
        <path className="ind-chart-line" d="M8 28l5-7 4 4 5-12 6 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="ind-chart-arrow" d="M26 14l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (id === "software") {
    // Code brackets with blinking cursor
    return (
      <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path className="ind-code-left" d="M12 8L4 18l8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="ind-code-right" d="M24 8l8 10-8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line className="ind-code-cursor" x1="18" y1="12" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  // Health: shield with heartbeat line
  return (
    <svg className="ind-live-ico" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path className="ind-shield-body" d="M18 4L6 10v8c0 8.5 5.5 16.5 12 18 6.5-1.5 12-9.5 12-18v-8L18 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path className="ind-shield-beat" d="M10 20h3l2-5 3 10 2-5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ExpertiseDomains() {
  return (
    <section className="ind-section">
      <style>{`
        .ind-section {
          background: #ffffff;
          padding: 3.5rem 2rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          display: block;
          min-height: auto;
          align-items: initial;
          justify-content: initial;
        }
        .ind-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none; z-index: 0;
        }

        .ind-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ind-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 2rem;
        }

        .ind-tag {
          font-family: 'Oxanium', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3BADB0;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .ind-tag::before,
        .ind-tag::after {
          content: '';
          display: block;
          width: 28px;
          height: 1.5px;
          background: #3BADB0;
          border-radius: 2px;
        }

        .ind-title {
          font-family: 'Oxanium', monospace;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #1B2E5E;
          line-height: 1.15;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }
        .ind-title span { color: #3BADB0; }

        .ind-subtitle {
          font-size: 0.9rem;
          color: #6B8A8B;
          line-height: 1.6;
          margin: 0;
        }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .ind-card {
          background: #ffffff;
          border: 1px solid rgba(59,173,176,0.15);
          border-radius: 20px;
          padding: 1.25rem 1.5rem 1.25rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ind-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(135deg, #3BADB0 0%, #1B2E5E 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ind-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(59,173,176,0.13);
          border-color: rgba(59,173,176,0.3);
        }
        .ind-card:hover::before { transform: scaleX(1); }
        .ind-card:hover .ind-ico-wrap {
          background: linear-gradient(135deg, #3BADB0 0%, #1B2E5E 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(59,173,176,0.3);
        }

        .ind-ico-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: rgba(59,173,176,0.06);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 0.75rem;
          color: #3BADB0;
          transition: background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
        }

        .ind-live-ico {
          display: block;
        }

        .ind-card-title {
          font-family: 'Oxanium', monospace;
          font-size: 1rem; font-weight: 700;
          color: #1B2E5E;
          margin: 0 0 0.3rem;
        }
        .ind-card-desc {
          font-size: 0.82rem;
          color: #6B8A8B;
          line-height: 1.55;
          margin: 0;
        }

        /* ═══════════════════════════════════════
           LIVING ICON ANIMATIONS
           ═══════════════════════════════════════ */

        /* ── E-Commerce: bag handle swings ── */
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
          25% { transform: rotate(4deg); }
          75% { transform: rotate(-4deg); }
        }
        @keyframes tagAppear {
          0%, 30% { stroke-dashoffset: 12; opacity: 0; }
          50%     { stroke-dashoffset: 0; opacity: 1; }
          80%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }

        /* ── Logistics: cube rotates subtly on Y axis ── */
        .ind-cube-front {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: cubeDraw 3s ease forwards infinite;
        }
        .ind-cube-mid {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: cubeDrawMid 3s ease 0.4s forwards infinite;
        }
        .ind-cube-vert {
          stroke-dasharray: 14;
          stroke-dashoffset: 14;
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

        /* ── Real Estate: Wi-Fi waves pulse out ── */
        .ind-house-body {
          stroke-dasharray: 90;
          stroke-dashoffset: 90;
          animation: houseDraw 2s ease forwards;
        }
        @keyframes houseDraw {
          to { stroke-dashoffset: 0; }
        }
        .ind-house-wifi1 {
          animation: wifiPulse 2.5s ease-out 0.2s infinite;
        }
        .ind-house-wifi2 {
          animation: wifiPulse 2.5s ease-out 0.6s infinite;
        }
        .ind-house-wifi3 {
          animation: wifiPulse 2.5s ease-out 1s infinite;
        }
        @keyframes wifiPulse {
          0%   { opacity: 0; stroke-dashoffset: 8; stroke-dasharray: 8; }
          20%  { opacity: 0.7; stroke-dashoffset: 0; }
          60%  { opacity: 0.4; }
          100% { opacity: 0; }
        }

        /* ── Marketing: chart draws then arrow pops ── */
        .ind-chart-line {
          stroke-dasharray: 42;
          stroke-dashoffset: 42;
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

        /* ── Software: brackets breathe, cursor blinks ── */
        .ind-code-left {
          animation: bracketL 3s ease-in-out infinite;
        }
        .ind-code-right {
          animation: bracketR 3s ease-in-out infinite;
        }
        .ind-code-cursor {
          animation: cursorBlink 1s steps(2) infinite;
        }
        @keyframes bracketL {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(-3px); }
        }
        @keyframes bracketR {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(3px); }
        }
        @keyframes cursorBlink {
          0%   { opacity: 0.8; }
          49%  { opacity: 0.8; }
          50%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* ── Health: heartbeat traces continuously ── */
        .ind-shield-body {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: shieldDraw 1.5s ease forwards;
        }
        @keyframes shieldDraw {
          to { stroke-dashoffset: 0; }
        }
        .ind-shield-beat {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: heartTrace 2s linear infinite;
        }
        @keyframes heartTrace {
          0%   { stroke-dashoffset: 40; }
          50%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }

        @media (max-width: 960px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ind-grid { grid-template-columns: 1fr; }
          .ind-section { padding: 4rem 1.25rem; }
        }
      `}</style>

      <div className="ind-inner">
        <div className="ind-header">
          <ScrollReveal delay={0} y={15} duration={0.5}>
            <div className="ind-tag">Industry Impact</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} y={20} duration={0.55}>
            <h2 className="ind-title">
              Discover Our <span>Impact</span> Across Industries
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} y={15} duration={0.5}>
            <p className="ind-subtitle">
              Pairing Gen Z creativity with deep industry experience, we deliver precision engineering and AI solutions tailored to overcome sector specific challenges
            </p>
          </ScrollReveal>
        </div>

        <div className="ind-grid">
          {domains.map((domain, i) => (
            <ScrollReveal key={domain.id} delay={0.08 * i} y={20} duration={0.45}>
              <div className="ind-card">
                <div className="ind-ico-wrap">
                  <AnimatedIcon id={domain.id} />
                </div>
                <h3 className="ind-card-title">{domain.title}</h3>
                <p className="ind-card-desc">{domain.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
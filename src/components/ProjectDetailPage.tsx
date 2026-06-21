"use client";

import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export type TechItem = {
  name: string;
  icon: string;
  color?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Feature = {
  title: string;
  detail: string;
};

export type ProjectDetailProps = {
  category: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  metrics: Metric[];
  tech: TechItem[];
  features: Feature[];
  challenge: string;
  solution: string;
  outcome: string;
};

export default function ProjectDetailPage(p: ProjectDetailProps) {
  return (
    <>
      <Navbar activeSection="projects" />

      <main className="pd-page">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
          @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css');

          .pd-page {
            font-family: 'Inter', sans-serif;
            background: #ffffff;
            overflow-x: hidden;
          }

          /* ══ HERO ══ */
          .pd-hero {
            position: relative;
            min-height: 92vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: hidden;
            background: #002046;
          }
          .pd-hero-bg {
            position: absolute; inset: 0; z-index: 0;
          }
          .pd-hero-bg img {
            width: 100%; height: 100%;
            object-fit: cover; object-position: center;
          }
          .pd-hero-bg::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(0, 32, 70, 0.5) 0%,
              rgba(0, 32, 70, 0.7) 40%,
              rgba(0, 32, 70, 0.97) 100%
            );
          }
          .pd-hero-blob {
            position: absolute; inset: 0; z-index: 1; pointer-events: none;
            background:
              radial-gradient(ellipse 60% 50% at 80% 10%, rgba(26, 138, 96, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 10% 80%, rgba(10, 92, 80, 0.15) 0%, transparent 55%);
          }
          .pd-hero-content {
            position: relative; z-index: 2;
            max-width: 1200px; margin: 0 auto; width: 100%;
            padding: 0 2.5rem 5rem;
          }
          .pd-back {
            display: inline-flex; align-items: center; gap: 0.5rem;
            color: rgba(255,255,255,0.6);
            font-family: 'Inter', sans-serif;
            font-size: 0.75rem; font-weight: 600;
            letter-spacing: 0.1em; text-transform: uppercase;
            text-decoration: none; margin-bottom: 2.5rem;
            transition: color 0.2s;
          }
          .pd-back:hover { color: #ffffff; }
          .pd-back svg { transition: transform 0.2s; }
          .pd-back:hover svg { transform: translateX(-4px); }

          .pd-cat {
            font-family: 'Inter', sans-serif;
            font-size: 0.7rem; font-weight: 700;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: #1a8a60; margin-bottom: 1.25rem;
            display: flex; align-items: center; gap: 0.75rem;
          }
          .pd-cat::before {
            content: ''; display: inline-block;
            width: 28px; height: 2px;
            background: #1a8a60;
          }

          .pd-hero-title {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(3rem, 7vw, 6rem);
            font-weight: 800; color: #ffffff;
            line-height: 0.95; letter-spacing: -0.03em;
            margin: 0 0 1.25rem;
          }
          .pd-hero-tagline {
            font-family: 'Inter', sans-serif;
            font-size: clamp(1rem, 1.8vw, 1.2rem);
            font-weight: 400; color: rgba(255,255,255,0.65);
            max-width: 580px; line-height: 1.7;
          }

          /* ══ METRICS ══ */
          .pd-metrics {
            position: relative; overflow: hidden;
            background: linear-gradient(125deg, #002046 0%, #013a6b 40%, #0a5c50 75%, #1a8a60 112%);
            padding: 3.5rem 2.5rem;
          }
          .pd-metrics-inner {
            max-width: 1200px; margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem; position: relative; z-index: 1;
          }
          .pd-metric { border-left: 2px solid rgba(255,255,255,0.3); padding-left: 1.5rem; }
          .pd-metric-val {
            font-family: 'Manrope', sans-serif;
            font-size: 2.5rem; font-weight: 800; line-height: 1; margin-bottom: 0.4rem;
            color: #ffffff;
          }
          .pd-metric-lbl {
            font-family: 'Inter', sans-serif;
            font-size: 0.78rem; color: rgba(255,255,255,0.7);
            font-weight: 500; text-transform: uppercase; letter-spacing: 0.09em;
          }

          /* ══ OVERVIEW ══ */
          .pd-body {
            max-width: 1200px; margin: 0 auto;
            padding: 6rem 2.5rem 5rem;
          }
          .pd-overview {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 3rem 5rem; padding-bottom: 5rem;
            border-bottom: 1px solid rgba(0,32,70,0.08);
          }

          .pd-section-label {
            font-family: 'Inter', sans-serif;
            font-size: 0.67rem; font-weight: 700;
            letter-spacing: 0.22em; text-transform: uppercase;
            color: #1a8a60; margin-bottom: 1.25rem;
            display: flex; align-items: center; gap: 0.75rem;
          }
          .pd-section-label::before {
            content: ''; width: 20px; height: 2px; background: #1a8a60;
          }

          .pd-section-title {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 800;
            line-height: 1.2; margin: 0 0 1.4rem;
            color: #002046;
          }

          .pd-text {
            font-family: 'Inter', sans-serif;
            font-size: 1.03rem; line-height: 1.9; color: #4e6070;
            margin-bottom: 1.25rem;
          }

          /* C → S → O */
          .pd-cso {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 0.85rem; margin-top: 0;
          }
          .pd-cso-card { padding: 1.4rem; border-top: 3px solid #002046; background: rgba(0,32,70,0.03); }
          .pd-cso-label {
            font-family: 'Inter', sans-serif;
            font-size: 0.63rem; font-weight: 700;
            letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.8rem;
            color: #002046;
          }
          .pd-cso-text { font-family: 'Inter', sans-serif; font-size: 0.86rem; line-height: 1.75; color: #4e6070; }

          /* ══ TECH STACK ══ */
          .pd-tech-outer {
            background: linear-gradient(125deg, #002046 0%, #013a6b 40%, #0a5c50 75%, #1a8a60 112%);
            padding: 5rem 2.5rem;
            position: relative; overflow: hidden;
          }
          .pd-tech-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

          .pd-tech-outer .pd-section-title { color: #ffffff; }
          .pd-tech-outer .pd-section-label { color: rgba(255,255,255,0.7); }
          .pd-tech-outer .pd-section-label::before { background: rgba(255,255,255,0.5); }

          .pd-tech-grid { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.5rem; }
          .pd-tech-card {
            display: flex; align-items: center; gap: 0.85rem;
            padding: 0.85rem 1.4rem;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(8px);
            transition: background 0.2s, transform 0.2s;
            cursor: default;
          }
          .pd-tech-card:hover {
            background: rgba(255,255,255,0.12);
            transform: translateY(-2px);
          }
          .pd-tech-icon { font-size: 1.9rem; line-height: 1; width: 34px; text-align: center; }
          .pd-tech-name {
            font-family: 'Inter', sans-serif; font-size: 0.88rem;
            font-weight: 600; color: #ffffff; white-space: nowrap;
          }

          /* ══ FEATURES ══ */
          .pd-features-outer {
            position: relative; padding: 5rem 2.5rem 6rem; background: #fafbff; overflow: hidden;
          }
          .pd-features-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

          .pd-features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.25rem; margin-top: 2.5rem;
          }
          .pd-feature-card {
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.08);
            padding: 2rem; position: relative; overflow: hidden;
            transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          }
          .pd-feature-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #002046, #1a8a60);
            transform: scaleX(0); transform-origin: left;
            transition: transform 0.3s ease;
          }
          .pd-feature-card:hover {
            border-color: rgba(0,32,70,0.15);
            box-shadow: 0 16px 40px rgba(0,32,70,0.07);
            transform: translateY(-4px);
          }
          .pd-feature-card:hover::before { transform: scaleX(1); }

          /* Feature indicator */
          .pd-feature-indicator {
            width: 32px; height: 32px; margin-bottom: 1.25rem;
            background: linear-gradient(135deg, #002046 0%, #1a8a60 100%);
            display: flex; align-items: center; justify-content: center;
          }
          .pd-feature-indicator svg { width: 14px; height: 14px; }

          .pd-feature-title {
            font-family: 'Manrope', sans-serif; font-size: 1.05rem;
            font-weight: 700; color: #002046; margin-bottom: 0.75rem;
          }
          .pd-feature-detail {
            font-family: 'Inter', sans-serif;
            font-size: 0.88rem; line-height: 1.78; color: #4e6070;
          }

          /* Responsive */
          @media (max-width: 900px) {
            .pd-overview { grid-template-columns: 1fr; gap: 2rem; }
            .pd-cso { grid-template-columns: 1fr; }
            .pd-hero-content { padding: 0 1.5rem 4rem; }
            .pd-body { padding: 4rem 1.5rem 4rem; }
            .pd-metrics { padding: 2.5rem 1.5rem; }
            .pd-tech-outer { padding: 4rem 1.5rem; }
            .pd-features-outer { padding: 4rem 1.5rem 5rem; }
          }
        `}</style>

        {/* ── HERO ── */}
        <header className="pd-hero">
          <div className="pd-hero-bg">
            <img src={p.heroImage} alt={p.name} />
          </div>
          <div className="pd-hero-blob" />
          <div className="pd-hero-content">
            <Link href="/projects" className="pd-back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3 5.5 8 10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Projects
            </Link>
            <p className="pd-cat">{p.category}</p>
            <h1 className="pd-hero-title">{p.name}</h1>
            <p className="pd-hero-tagline">{p.tagline}</p>
          </div>
        </header>

        {/* ── METRICS ── */}
        {p.metrics.length > 0 && (
          <div className="pd-metrics">
            <div className="pd-metrics-inner">
              {p.metrics.map((m, i) => (
                <div key={i} className="pd-metric">
                  <div className="pd-metric-val">{m.value}</div>
                  <div className="pd-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── OVERVIEW ── */}
        <div className="pd-body">
          <div className="pd-overview">
            <div>
              <p className="pd-section-label">About the Project</p>
              <h2 className="pd-section-title">What We Built</h2>
              <p className="pd-text">{p.description}</p>
            </div>
            <div>
              <p className="pd-section-label">The Problem We Solved</p>
              <h2 className="pd-section-title">Challenge → Outcome</h2>
              <div className="pd-cso" style={{ marginTop: 0 }}>
                <div className="pd-cso-card">
                  <div className="pd-cso-label">Challenge</div>
                  <p className="pd-cso-text">{p.challenge}</p>
                </div>
                <div className="pd-cso-card">
                  <div className="pd-cso-label">Solution</div>
                  <p className="pd-cso-text">{p.solution}</p>
                </div>
                <div className="pd-cso-card">
                  <div className="pd-cso-label">Outcome</div>
                  <p className="pd-cso-text">{p.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="pd-tech-outer">
          <div className="pd-tech-inner">
            <p className="pd-section-label">Technology</p>
            <h2 className="pd-section-title">Tech Stack Used</h2>
            <div className="pd-tech-grid">
              {p.tech.map((t, i) => (
                <div key={i} className="pd-tech-card">
                  <span className="pd-tech-icon">
                    <i className={t.icon} style={{ color: t.color ?? "inherit" }} />
                  </span>
                  <span className="pd-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div className="pd-features-outer">
          <div className="pd-features-inner">
            <p className="pd-section-label">Capabilities</p>
            <h2 className="pd-section-title">Key Features</h2>
            <div className="pd-features-grid">
              {p.features.map((f, i) => (
                <div key={i} className="pd-feature-card">
                  <div className="pd-feature-indicator">
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="pd-feature-title">{f.title}</div>
                  <p className="pd-feature-detail">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundNightfall from "../../components/BackgroundNightfall";

const PROJECTS = [
  {
    id: "tact-evac",
    name: "TACT EVAC",
    category: "DEFENCE TECHNOLOGY",
    tagline: "Tactical Airbase Evacuation System",
    image: "https://res.cloudinary.com/ddcblcups/image/upload/v1775429456/WhatsApp_Image_2026-04-06_at_3.50.07_AM_mliq6b.jpg",
    desc: "A fully integrated intelligent evacuation management system designed for high value military airbase environments. Automates the detection, prioritisation, and physical relocation of strategic aircraft assets during red alert conditions.",
    features: [
      {
        title: "Real Time Threat Detection",
        detail: "Dual stage computer vision pipeline using YOLOv8 and OpenCV processes 35 continuous CCTV feeds to instantly identify active threats without false positives.",
      },
      {
        title: "Intelligence & Decision Layer",
        detail: "An 8 tier strategic asset priority framework combined with A Star and Dijkstra dynamic pathfinding ensures optimal and safe evacuation routes are calculated in real time.",
      },
      {
        title: "Autonomous Execution",
        detail: "Full orchestration of autonomous tow robots operating seamlessly via a highly secure, LAN based Django and React command dashboard that prevents external network compromises.",
      },
    ],
    tech: ["YOLOv8", "OpenCV", "Django", "React", "PostGIS"],
  },
  {
    id: "sporttek",
    name: "SportTek",
    category: "MOBILE PLATFORM",
    tagline: "Dual Sided Sports Venue Booking Platform",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=900&q=80&fit=crop",
    desc: "A mobile first booking platform designed specifically for the Pakistani market, bridging the gap between sports enthusiasts and venue owners in real time.",
    features: [
      {
        title: "Player Experience",
        detail: "Browse nearby courts, filter by location or sport, apply promos, check real time slots, and pay instantly in under a minute.",
      },
      {
        title: "Owner Command Center",
        detail: "A full management dashboard with color coded timelines separating app bookings from manual walk ins, plus countdown timers.",
      },
      {
        title: "Real Time Sync",
        detail: "Removes WhatsApp friction. When a player books and pays, the owner is alerted instantly, and the slot locks globally to prevent double bookings.",
      },
    ],
    tech: ["Mobile First", "Real Time Sync", "Fintech Integration", "Dashboard"],
  },
  {
    id: "launchpulse",
    name: "LaunchPulse AI",
    category: "AI & BIG DATA",
    tagline: "AI Powered Startup Evaluation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    desc: "A comprehensive platform that combines modern web technologies with machine learning to help founders and investors make data driven decisions.",
    features: [
      {
        title: "Success Prediction",
        detail: "Leverages machine learning models to analyze startup metrics and predict success probability, giving investors deeper confidence.",
      },
      {
        title: "Risk & Market Fit",
        detail: "Provides automated risk factor analysis, growth potential assessments, and a proprietary market fit scoring algorithm.",
      },
      {
        title: "Document Management",
        detail: "Secure vault and intelligent parsing for pitch decks, financial models, and business plans.",
      },
    ],
    tech: ["Next.js", "tRPC", "PostgreSQL", "Machine Learning"],
  },
];

function ProductCard({
  product,
  index,
}: {
  product: typeof PROJECTS[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section className={`prd-section ${isEven ? "prd-bg-white" : "prd-bg-dark"}`}>
      {/* If it's dark, optionally embed BackgroundNightfall just for that block */}
      {!isEven && <BackgroundNightfall nightGradient="transparent" />}

      <div className={`prd-inner prd-card ${isEven ? "prd-even" : "prd-odd"}`}>
        <div className="prd-img-col">
          <div className="prd-img-wrap">
            <img src={product.image} alt={product.name} className="prd-img" loading="lazy" />
            <div className="prd-img-scrim" />
            <div className="prd-img-glow" />
          </div>
        </div>

        <div className="prd-content-col">
          <div className="prd-number">0{index + 1}</div>

          <div className="prd-category-tag">{product.category}</div>

          <h3 className="prd-name">{product.name}</h3>
          <p className="prd-tagline">{product.tagline}</p>

          <div className="prd-tech-pills">
            {product.tech.map((t) => (
              <span key={t} className="prd-tech-pill">{t}</span>
            ))}
          </div>

          <p className="prd-desc">{product.desc}</p>

          <div className="prd-features">
            {product.features.map((f, i) => (
              <div key={i} className="prd-feature">
                <div className="prd-feat-indicator" />
                <div>
                  <div className="prd-feat-title">{f.title}</div>
                  <div className="prd-feat-detail">{f.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", position: "relative", zIndex: 5 }}>
            <Link href={`/projects/${product.id}`} className="read-case-study-btn">
              Read Full Case Study
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <Navbar activeSection="projects" />

      <main className="projects-wrapper">
        <style>{`
          .projects-wrapper {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            overflow-x: hidden;
            background: #ffffff;
            min-height: 100vh;
          }

          /* ── 1. HERO SECTION ── */
          .prj-hero {
            position: relative;
            background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%);
            padding: 7rem 2rem 3rem;
            text-align: center;
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .prj-hero::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at 30% 20%, rgba(59,173,176,0.12) 0%, transparent 55%),
                        radial-gradient(ellipse at 70% 80%, rgba(167,255,249,0.08) 0%, transparent 50%);
            pointer-events: none; z-index: 0;
          }

          .prj-hero-inner {
            position: relative; z-index: 2;
            max-width: 900px;
            display: flex; flex-direction: column; align-items: center;
          }

          /* Animated Rocket Icon */
          .prj-icon-wrap {
            margin-bottom: 2.5rem;
            position: relative;
            animation: heroIconFloat 4s ease-in-out infinite;
          }
          .prj-icon-ring {
            width: 120px; height: 120px;
            border-radius: 50%;
            border: 2px solid rgba(59,173,176,0.25);
            display: flex; align-items: center; justify-content: center;
            position: relative;
            background: rgba(59,173,176,0.04);
            backdrop-filter: blur(8px);
          }
          .prj-icon-ring::before {
            content: '';
            position: absolute; inset: -8px;
            border-radius: 50%;
            border: 1px solid rgba(59,173,176,0.12);
            animation: heroPulseRing 3s ease-in-out infinite;
          }
          .prj-icon-ring::after {
            content: '';
            position: absolute; inset: -18px;
            border-radius: 50%;
            border: 1px solid rgba(59,173,176,0.06);
            animation: heroPulseRing 3s ease-in-out 0.5s infinite;
          }
          @keyframes heroIconFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes heroPulseRing {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.15); opacity: 0; }
          }

          .prj-icon-svg {
            width: 48px; height: 48px;
            color: #a7fff9;
            filter: drop-shadow(0 0 15px rgba(167,255,249,0.4));
          }

          /* Exhaust particles */
          .prj-exhaust {
            position: absolute;
            bottom: -30px; left: 50%;
            transform: translateX(-50%);
            display: flex; gap: 6px;
          }
          .prj-exhaust span {
            width: 3px;
            border-radius: 3px;
            background: linear-gradient(to bottom, rgba(59,173,176,0.8), transparent);
            animation: exhaustFlicker 0.8s ease-in-out infinite alternate;
          }
          .prj-exhaust span:nth-child(1) { height: 18px; animation-delay: 0s; }
          .prj-exhaust span:nth-child(2) { height: 26px; animation-delay: 0.15s; }
          .prj-exhaust span:nth-child(3) { height: 14px; animation-delay: 0.3s; }
          @keyframes exhaustFlicker {
            0% { opacity: 0.4; transform: scaleY(0.8); }
            100% { opacity: 1; transform: scaleY(1.2); }
          }

          /* Badge */
          .prd-badge {
            position: relative; z-index: 1;
            display: inline-flex;
            align-items: center;
            font-family: 'Oxanium', monospace;
            font-size: 0.68rem; font-weight: 700;
            letter-spacing: 0.12em; text-transform: uppercase;
            color: rgba(255,255,255,0.7);
            background: rgba(255,255,255,0.06);
            border: 1.5px solid rgba(255,255,255,0.25);
            padding: 6px 16px; border-radius: 100px;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
          }
          .prd-badge::before {
             content: ''; display: inline-block; width: 12px; height: 1px; background: rgba(255,255,255,0.5); margin-right: 8px;
          }

          /* Heading */
          .prd-heading {
            position: relative; z-index: 1;
            font-family: 'Oxanium', monospace;
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.02em;
            line-height: 1.08;
            margin-bottom: 1rem;
          }
          .prd-heading span {
            color: rgba(255,255,255,0.55);
            font-style: normal;
          }

          .prj-subtitle {
            position: relative; z-index: 1;
            font-size: 1rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.6);
            max-width: 600px;
            margin-bottom: 2.5rem;
          }

          /* Stats Row */
          .prj-stats {
            position: relative; z-index: 1;
            display: flex;
            gap: 0;
            margin-bottom: 2rem;
          }
          .prj-stat {
            padding: 0 2.5rem;
            border-right: 1px solid rgba(255,255,255,0.1);
            text-align: center;
          }
          .prj-stat:last-child { border-right: none; }
          .prj-stat-num {
            font-family: 'Oxanium', monospace;
            font-size: 2.2rem;
            font-weight: 900;
            background: linear-gradient(135deg, #a7fff9, #3BADB0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 0.4rem;
          }
          .prj-stat-label {
            font-family: 'Oxanium', monospace;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
          }

          /* Scroll Indicator */
          .prj-scroll-indicator {
            position: relative; z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
            color: rgba(255,255,255,0.35);
            animation: heroScrollBounce 2s ease-in-out infinite;
          }
          .prj-scroll-indicator span {
            font-family: 'Oxanium', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }
          .prj-scroll-line {
            width: 1px;
            height: 28px;
            background: linear-gradient(to bottom, rgba(59,173,176,0.6), transparent);
          }
          @keyframes heroScrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }

          @media (max-width: 768px) {
            .prj-hero { min-height: auto; padding: 10rem 1.5rem 5rem; }
            .prj-icon-ring { width: 90px; height: 90px; }
            .prj-icon-svg { width: 36px; height: 36px; }
            .prj-stats { flex-direction: column; gap: 1.5rem; }
            .prj-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0 0 1.5rem; }
            .prj-stat:last-child { border-bottom: none; padding-bottom: 0; }
            .prj-stat-num { font-size: 2rem; }
          }

          /* ── 2. Card Layout ── */
          .prd-section {
             padding: 8rem 0;
             position: relative;
             overflow: hidden;
          }

          /* White Section Modifiers */
          .prd-bg-white {
             background: #ffffff;
             color: #1B2E5E;
          }
          .prd-bg-white::before {
             content: '';
             position: absolute; inset: 0;
             background-image: radial-gradient(circle, rgba(59,173,176,0.1) 1px, transparent 1px);
             background-size: 32px 32px;
             pointer-events: none; z-index: 0;
          }

          /* Dark Section Modifiers */
          .prd-bg-dark {
             background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%);
             color: #ffffff;
          }
          .prd-bg-dark::before {
            content: ''; position: absolute; top: -100px; right: -100px;
            width: 500px; height: 500px; border-radius: 50%;
            background: radial-gradient(circle, rgba(59,173,176,0.15) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
          }

          .prd-inner {
            position: relative; z-index: 1;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2.5rem;
          }

          .prd-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          .prd-even .prd-content-col { order: 1; }
          .prd-even .prd-img-col { order: 2; }
          
          .prd-odd .prd-img-col { order: 1; }
          .prd-odd .prd-content-col { order: 2; }

          /* Imagery */
          .prd-img-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 4 / 3;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 40px 80px rgba(0,0,0,0.6);
            border: 1px solid rgba(59,173,176,0.2);
          }
          .prd-img {
            width: 100%; height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .prd-img-wrap:hover .prd-img {
            transform: scale(1.05);
          }

          .prd-bg-white .prd-img-scrim {
            position: absolute; inset: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 60%);
          }
          .prd-bg-dark .prd-img-scrim {
            position: absolute; inset: 0;
            background: linear-gradient(45deg, rgba(6,14,31,0.7) 0%, transparent 60%);
            mix-blend-mode: multiply;
          }
          .prd-img-glow {
            position: absolute; inset: 0;
            background: radial-gradient(circle at 80% 20%, rgba(59,173,176,0.15) 0%, transparent 50%);
            mix-blend-mode: screen;
          }

          /* Content Shared */
          .prd-content-col {
            display: flex;
            flex-direction: column;
            position: relative;
          }
          
          /* Number Watermark */
          .prd-number {
            font-family: 'Oxanium', monospace;
            font-size: 7rem;
            font-weight: 900;
            line-height: 0.8;
            position: absolute;
            top: -4rem; left: -1.5rem;
            z-index: 0;
            pointer-events: none;
          }
          .prd-bg-white .prd-number { color: rgba(27,46,94,0.03); }
          .prd-bg-dark .prd-number  { color: rgba(255,255,255,0.03); }
          
          /* Category */
          .prd-category-tag {
             position: relative; z-index: 1;
             font-family: 'Oxanium', monospace;
             font-size: 0.65rem; font-weight: 700;
             letter-spacing: 0.2em; text-transform: uppercase;
             display: flex; align-items: center; gap: 0.5rem;
             margin-bottom: 1rem;
          }
          .prd-bg-white .prd-category-tag { color: #3BADB0; }
          .prd-bg-white .prd-category-tag::before {
             content: ''; display: inline-block; width: 18px; height: 1px; background: #3BADB0;
          }
          .prd-bg-dark .prd-category-tag { color: rgba(255,255,255,0.5); }
          .prd-bg-dark .prd-category-tag::before {
             content: ''; display: inline-block; width: 18px; height: 1px; background: rgba(255,255,255,0.4);
          }

          /* Titles */
          .prd-name {
            font-family: 'Oxanium', monospace;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 0.5rem;
            position: relative; z-index: 1; margin-top: 0;
          }
          .prd-bg-white .prd-name { color: #1B2E5E; }
          .prd-bg-dark .prd-name  { color: #ffffff; }

          .prd-tagline {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            position: relative; z-index: 1; margin-top: 0;
          }
          .prd-bg-white .prd-tagline { color: #3BADB0; font-weight: 600; }
          .prd-bg-dark .prd-tagline  { color: rgba(255,255,255,0.55); font-weight: 400; }

          /* Pills */
          .prd-tech-pills {
            display: flex; flex-wrap: wrap; gap: 0.5rem;
            margin-bottom: 1.8rem;
            position: relative; z-index: 1;
          }
          .prd-tech-pill {
            display: inline-flex; align-items: center; gap: 0.45rem;
            font-family: 'Oxanium', monospace;
            font-size: 0.6rem; font-weight: 700;
            letter-spacing: 0.13em; text-transform: uppercase;
            padding: 6px 14px; border-radius: 100px;
          }
          .prd-bg-white .prd-tech-pill {
             color: #3BADB0; border: 1px solid rgba(59,173,176,0.28); background: rgba(59,173,176,0.06);
          }
          .prd-bg-white .prd-tech-pill::before {
             content: ''; width: 4px; height: 4px; border-radius: 50%; background: #3BADB0;
          }

          .prd-bg-dark .prd-tech-pill {
             color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.06);
          }
          .prd-bg-dark .prd-tech-pill::before {
             content: ''; width: 4px; height: 4px; border-radius: 50%; background: #3BADB0;
          }

          /* Desc */
          .prd-desc {
            font-size: 0.95rem;
            line-height: 1.88;
            margin-bottom: 2rem;
            position: relative; z-index: 1;
          }
          .prd-bg-white .prd-desc { color: #4e6070; }
          .prd-bg-dark .prd-desc  { color: rgba(255,255,255,0.7); }

          /* Features */
          .prd-features {
            display: flex; flex-direction: column; gap: 1.25rem;
            position: relative; z-index: 1;
          }
          .prd-feature { display: flex; align-items: flex-start; gap: 1rem; }
          .prd-feat-indicator {
            flex-shrink: 0; width: 14px; height: 14px; border-radius: 50%; background: transparent;
            border: 2px solid #3BADB0; box-shadow: 0 0 10px rgba(59,173,176,0.3);
            display: flex; align-items: center; justify-content: center;
            margin-top: 4px; position: relative;
          }
          
          .prd-feat-title {
            font-family: 'Oxanium', monospace; font-size: 0.95rem; font-weight: 700;
            margin-bottom: 0.3rem;
          }
          .prd-feat-detail {
            font-size: 0.88rem; line-height: 1.6;
          }
          .prd-bg-white .prd-feat-title { color: #1B2E5E; }
          .prd-bg-white .prd-feat-detail { color: #4e6070; }
          .prd-bg-dark .prd-feat-title { color: #ffffff; }
          .prd-bg-dark .prd-feat-detail { color: rgba(255,255,255,0.6); }

          /* Button */
          .read-case-study-btn {
            display: inline-flex; align-items: center; gap: 0.4rem;
            font-family: 'Oxanium', monospace; font-size: 0.78rem;
            font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
            padding: 12px 24px; border-radius: 100px; cursor: pointer;
            transition: background 0.2s, border-color 0.2s, transform 0.2s, color 0.2s;
            text-decoration: none;
          }
          
          .prd-bg-white .read-case-study-btn {
            background: transparent; border: 1.5px solid #3BADB0; color: #1B2E5E;
          }
          .prd-bg-white .read-case-study-btn:hover {
            border-color: #3BADB0; background: #3BADB0; color: #ffffff; transform: translateY(-2px);
          }

          .prd-bg-dark .read-case-study-btn {
            background: transparent; border: 1.5px solid rgba(255,255,255,0.55); color: #fff;
          }
          .prd-bg-dark .read-case-study-btn:hover {
            border-color: #a7fff9; background: #a7fff9; color: #080d1e; transform: translateY(-2px);
          }

          /* Responsive */
          @media (max-width: 960px) {
            .prd-card { grid-template-columns: 1fr; gap: 3.5rem; }
            .prd-even .prd-content-col, .prd-odd .prd-content-col { order: 2; }
            .prd-even .prd-img-col, .prd-odd .prd-img-col { order: 1; }
          }
          @media (max-width: 600px) {
            .prd-inner { padding: 0 1.25rem; }
            .prd-section { padding: 5rem 0; }
            .prj-hero { padding: 10rem 1rem 4rem; }
            .prd-number { font-size: 4.5rem; top: -2.5rem; left: 0; }
          }
        `}</style>

        {/* ── 1. Hero Block (Dark) ── */}
        <header className="prj-hero">
          <BackgroundNightfall />
          <div className="prj-hero-inner">

            <div className="prd-badge">Curated Work</div>
            <h2 className="prd-heading">
              Engineering <span>Excellence,</span><br />
              Delivered <span>At Scale.</span>
            </h2>
            <p className="prj-subtitle">
              From autonomous defense systems to AI powered startup platforms, we architect solutions that push boundaries and deliver measurable impact.
            </p>

            {/* Stats */}
            <div className="prj-stats">
              <div className="prj-stat">
                <div className="prj-stat-num">3+</div>
                <div className="prj-stat-label">Live Products</div>
              </div>
              <div className="prj-stat">
                <div className="prj-stat-num">12+</div>
                <div className="prj-stat-label">Technologies</div>
              </div>
              <div className="prj-stat">
                <div className="prj-stat-num">100%</div>
                <div className="prj-stat-label">Client Retention</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="prj-scroll-indicator">
              <span>Explore Projects</span>
              <div className="prj-scroll-line" />
            </div>

          </div>
        </header>

        {/* ── 2. Alternating Sections ── */}
        <div>
          {PROJECTS.map((prod, index) => (
            <ProductCard key={prod.id} product={prod} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

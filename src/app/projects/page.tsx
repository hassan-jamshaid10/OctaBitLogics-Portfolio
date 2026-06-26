"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundNightfall from "../../components/BackgroundNightfall";
import ProjectsHero from "@/src/components/ProjectsHero";
import ProjectsGrid from "@/src/components/ProjectsGrid";
import Contact from "@/src/components/contact";

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
    image: "/l1.png",
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
  {
    id: "dataflow",
    name: "DataFlow",
    category: "DATA ENGINEERING",
    tagline: "Real-Time Financial Transaction Pipeline",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    desc: "A high-throughput, fault-tolerant streaming data pipeline for a leading fintech company, ingesting over 4 million financial events per day with end-to-end latency under 800ms — replacing a legacy batch system that caused 4-hour fraud detection delays.",
    features: [
      {
        title: "Streaming Ingestion Layer",
        detail: "Apache Kafka cluster with 24 partitions handles 50,000+ events per second from payment gateways, ATMs, and mobile apps with guaranteed exactly-once delivery.",
      },
      {
        title: "Real-Time Transformation",
        detail: "Apache Spark Structured Streaming applies enrichment, deduplication, and schema validation within 400ms, feeding the fraud detection model before transactions settle.",
      },
      {
        title: "Lakehouse & Orchestration",
        detail: "Transformed data lands in Snowflake via dbt models with full lineage. Airflow DAGs manage backfill, SLA monitoring, and alerting for any pipeline degradation.",
      },
    ],
    tech: ["Apache Kafka", "Apache Spark", "dbt", "Snowflake", "Airflow"],
  },
  {
    id: "novasight",
    name: "NovaSight",
    category: "DATA ENGINEERING",
    tagline: "Unified Retail Data Lakehouse Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
    desc: "A cloud-native data lakehouse built on GCP for a national retail chain with 200+ stores, consolidating fragmented POS, inventory, e-commerce, and loyalty data into a single governed platform powering real-time inventory decisions and customer analytics.",
    features: [
      {
        title: "Multi-Source Ingestion",
        detail: "Apache Flink CDC pipelines capture changes from 200+ store POS systems, 3 e-commerce platforms, and 12 ERP modules in real time — eliminating overnight batch reconciliation.",
      },
      {
        title: "Delta Lake Lakehouse",
        detail: "Open-format Delta Lake on GCS provides ACID transactions, time-travel queries, and schema evolution across 15TB of retail data — with dbt transforming raw events into business-ready models.",
      },
      {
        title: "Self-Serve Analytics",
        detail: "BigQuery semantic layer with Looker dashboards gives merchandising, supply chain, and finance teams self-serve access to unified data without touching raw pipelines.",
      },
    ],
    tech: ["Apache Flink", "Delta Lake", "dbt", "BigQuery", "GCP", "Terraform"],
  },
  {
    id: "bridge-crack",
    name: "Bridge Crack AI",
    category: "COMPUTER VISION",
    tagline: "Automated Drone-Based Bridge Crack Assessment System",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80&fit=crop",
    desc: "An end-to-end automated bridge inspection system combining a Unity 3D drone simulation with a dual-stage deep learning pipeline. A lightweight TFLite classifier gates every frame before a PyTorch U-Net performs pixel-level crack segmentation, with real-time severity scoring and automated PDF report generation.",
    features: [
      {
        title: "Dual-Stage Detection Pipeline",
        detail: "A fast TFLite classification model screens every frame first. Only frames containing cracks proceed to the heavy U-Net segmentation model, cutting compute cost by over 80% on healthy concrete frames.",
      },
      {
        title: "Pixel-Level Severity Assessment",
        detail: "The U-Net model highlights exact crack pixels. The system calculates crack-to-total pixel ratio and classifies severity: Minor below 2%, Moderate between 2-5%, and Severe above 5% surface area.",
      },
      {
        title: "Real-Time Reporting",
        detail: "Analyzed frames return to the Unity dashboard as red-highlighted overlays with live metadata. At mission end, ReportLab compiles a full PDF with telemetry, crack counts, severity points, and visual overlays.",
      },
    ],
    tech: ["Unity", "PyTorch", "TFLite", "U-Net", "FastAPI", "OpenCV"],
  },
  {
    id: "resume-parser",
    name: "CareerMap AI",
    category: "AI & LLM",
    tagline: "AI Resume Parser & 6-Month Career Roadmapper",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&fit=crop",
    desc: "An intelligent career coaching web application that takes a user's PDF resume and target job title, performs a structured skill gap analysis using multi-LLM backends, recommends specific certifications and portfolio projects, and generates a chronological 6-month learning roadmap.",
    features: [
      {
        title: "Multi-LLM Skill Gap Analysis",
        detail: "Supports Google Gemini, OpenAI GPT-4o-mini, and Groq Llama-3.3 as interchangeable backends. Pydantic schema validation enforces structured JSON responses regardless of the model used.",
      },
      {
        title: "Curated Recommendations",
        detail: "Recommends targeted certifications mapped to real providers and custom portfolio projects with specific tech stacks — not generic advice, but actionable steps a hiring manager will recognise.",
      },
      {
        title: "6-Month Chronological Roadmap",
        detail: "Breaks the candidate's upskilling path into monthly milestones and weekly tasks. Users can view the roadmap interactively in the Streamlit dashboard or export it as a markdown file.",
      },
    ],
    tech: ["Streamlit", "FastAPI", "Google Gemini", "OpenAI", "Groq", "Pydantic"],
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

          /* ── Card Layout ── */
          .prd-section {
             padding: 8rem 0;
             position: relative;
             overflow: hidden;
          }

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
            aspect-ratio: 16 / 9;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 40px 80px rgba(0,0,0,0.6);
            border: 1px solid rgba(59,173,176,0.2);
            background: rgba(0, 0, 0, 0.15);
          }
          .prd-img {
            width: 100%; height: 100%;
            object-fit: cover;
            object-position: top center;
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

          .prd-desc {
            font-size: 0.95rem;
            line-height: 1.88;
            margin-bottom: 2rem;
            position: relative; z-index: 1;
          }
          .prd-bg-white .prd-desc { color: #4e6070; }
          .prd-bg-dark .prd-desc  { color: rgba(255,255,255,0.7); }

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
            .prd-number { font-size: 4.5rem; top: -2.5rem; left: 0; }
          }
        `}</style>

        {/* ── 1. Hero ── */}
        <ProjectsHero />

        {/* ── 2. 2-Column Grid (Matches Reference) ── */}
        <div id="work">
          <ProjectsGrid />
        </div>
      </main>
      <Contact />

      <Footer />
    </>
  );
}
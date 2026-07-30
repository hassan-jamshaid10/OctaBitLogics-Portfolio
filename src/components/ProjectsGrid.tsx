"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const TechIcon = ({ name, slug, customSrc }: { name: string; slug?: string; customSrc?: string }) => (
  <div className="dp-tech-item" title={name}>
    <img
      src={customSrc || `https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className="dp-tech-icon"
      loading="lazy"
    />
    <span>{name}</span>
  </div>
);

const PROJECTS = [
  {
    id: "tact-evac",
    bg: "bg-white",
    category: "Defence Technology",
    title: "TACT EVAC",
    intro: "A fully integrated intelligent evacuation management system designed for high-value military airbase environments. Automates the detection, prioritisation, and physical relocation of strategic aircraft assets during red alert conditions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "PyTorch",    slug: "pytorch" },
      { name: "OpenCV",     slug: "opencv" },
      { name: "Django",     slug: "django" },
      { name: "React",      slug: "react" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Python",     slug: "python" },
    ],
  },
  {
    id: "sporttek",
    bg: "bg-gray",
    category: "Mobile Platform",
    title: "SportTek",
    intro: "A mobile-first booking platform bridging the gap between sports enthusiasts and venue owners in real time. Players book and pay in under 60 seconds; owners manage live timelines, walk-ins, and revenue from one dashboard.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "React Native", slug: "react" },
      { name: "Node.js",      slug: "nodedotjs" },
      { name: "Firebase",     slug: "firebase" },
      { name: "PostgreSQL",   slug: "postgresql" },
      { name: "TypeScript",   slug: "typescript" },
    ],
  },
  {
    id: "launchpulse",
    bg: "bg-white",
    category: "AI & Big Data",
    title: "LaunchPulse AI",
    intro: "A comprehensive platform combining modern web technologies with machine learning to help founders and investors make data-driven decisions on startup potential, risk exposure, and market fit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "Next.js",    slug: "nextdotjs" },
      { name: "Python",     slug: "python" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    id: "dataflow",
    bg: "bg-gray",
    category: "Data Engineering",
    title: "DataFlow",
    intro: "A high-throughput, fault-tolerant streaming pipeline ingesting 4M+ financial events per day with sub-800ms latency — replacing a legacy batch system that caused 4-hour fraud-detection delays.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "Apache Kafka", slug: "apachekafka" },
      { name: "Apache Spark", slug: "apachespark" },
      { name: "Snowflake",    slug: "snowflake" },
      { name: "Airflow",      slug: "apacheairflow" },
      { name: "Python",       slug: "python" },
      // { name: "dbt",          customSrc: "https://cdn.simpleicons.org/dbt/FF694A" },
    ],
  },
  {
    id: "novasight",
    bg: "bg-white",
    category: "Data Engineering",
    title: "NovaSight",
    intro: "A cloud-native data lakehouse on GCP for a national retail chain with 200+ stores, consolidating fragmented POS, inventory, e-commerce, and loyalty data into a single governed platform for real-time decisions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "Apache Flink", slug: "apacheflink" },
      { name: "BigQuery",     customSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Terraform",    slug: "terraform" },
      { name: "dbt",          customSrc: "https://cdn.simpleicons.org/dbt/FF694A" },
      { name: "Python",       slug: "python" },
      { name: "GCP",          customSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    ],
  },
  {
    id: "bridge-crack",
    bg: "bg-gray",
    category: "Computer Vision",
    title: "Bridge Crack AI",
    intro: "An end-to-end automated bridge inspection system combining a Unity 3D drone simulation with a dual-stage deep learning pipeline for pixel-level crack segmentation and severity scoring.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "PyTorch",  slug: "pytorch" },
      { name: "TFLite",   slug: "tensorflow" },
      { name: "FastAPI",  slug: "fastapi" },
      { name: "OpenCV",   slug: "opencv" },
      { name: "Unity",    slug: "unity" },
      { name: "Python",   slug: "python" },
    ],
  },
  {
    id: "resume-parser",
    bg: "bg-white",
    category: "AI & LLM",
    title: "CareerMap AI",
    intro: "An intelligent career coaching application that takes a PDF resume and target job title, performs a structured skill-gap analysis using multiple LLM backends, and generates a chronological 6-month upskilling roadmap.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "Streamlit", slug: "streamlit" },
      { name: "FastAPI",   slug: "fastapi" },
      { name: "OpenAI",    customSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg" },
      { name: "Groq",      customSrc: "https://cdn.simpleicons.org/groq" },
      { name: "Python",    slug: "python" },
      { name: "Pydantic",  slug: "pydantic" },
    ],
  },
  {
    id: "pulseai",
    bg: "bg-gray",
    category: "Healthcare Tech",
    title: "Pulse AI",
    intro: "An integrated hospital management platform with AI-assisted diagnosis support, full EHR integration, and real-time patient monitoring — built for clinical-grade reliability and HIPAA-aligned data practices.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&auto=format&fit=crop",
    tech: [
      { name: "Python",     slug: "python" },
      { name: "React",      slug: "react" },
      { name: "FastAPI",    slug: "fastapi" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Docker",     slug: "docker" },
    ],
  },
];

const ProjectsGrid = React.memo(function ProjectsGrid() {
  return (
    <div id="detailed-projects">
      <style>{`
        #detailed-projects {
          font-family: inherit;
        }

        .dp-section {
          padding: 5rem 40px;
          border-bottom: 1px solid rgba(0, 32, 70, 0.05);
          position: relative;
          overflow: hidden;
        }
        .dp-section.bg-gray  { background: #faf9fd; }
        .dp-section.bg-white { background: #ffffff; }

        .dp-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }

        /* ── Left column ── */
        .dp-left {
          display: flex;
          flex-direction: column;
        }

        .dp-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3BADB0;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dp-title {
          font-family: inherit;
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.1;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }

        .dp-intro {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #44474e;
          max-width: 480px;
          margin: 0 0 2rem;
        }

        .dp-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #002046;
          text-decoration: none;
          border: 1.5px solid rgba(0,32,70,0.25);
          padding: 10px 20px;
          border-radius: 4px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          align-self: flex-end;
        }
        .dp-cta:hover {
          background: #002046;
          border-color: #002046;
          color: #ffffff;
        }
        .dp-cta svg { transition: transform 0.2s ease; }
        .dp-cta:hover svg { transform: translateX(3px); }

        /* ── Right column ── */
        .dp-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2rem;
        }

        /* project image */
        .dp-img-wrap {
          width: 82%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border: 1px solid rgba(0, 32, 70, 0.1);
          border-radius: 4px;
        }

        .dp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .dp-img-wrap:hover .dp-img {
          transform: scale(1.04);
        }

        /* tech section */
        .dp-subtitle {
          font-family: inherit;
          font-size: 1.5rem;
          font-weight: 800;
          color: #002046;
          margin: 0 0 1.2rem;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
        }
        .dp-subtitle span {
          background: linear-gradient(90deg, #2ECC40, #3BADB0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-right: 10px;
          font-weight: 900;
        }

        .dp-tech {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }

        .dp-tech-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          color: #002046;
          padding: 0.8rem;
          border: 1px solid rgba(0,32,70,0.08);
          background: #ffffff;
          transition: all 0.2s ease;
        }
        .bg-gray .dp-tech-item { background: #faf9fd; }
        .dp-tech-item:hover {
          border-color: rgba(46,204,64,0.4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,32,70,0.04);
        }

        .dp-tech-icon {
          width: 22px;
          height: 22px;
          object-fit: contain;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .dp-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .dp-section { padding: 4rem 20px; }
          .dp-right { align-items: stretch; }
          .dp-img-wrap { width: 100%; }
          .dp-cta { align-self: flex-start; }
        }
        @media (max-width: 600px) {
          .dp-tech { grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
          .dp-tech-item { padding: 0.6rem 0.5rem; font-size: 0.8rem; gap: 7px; }
          .dp-tech-icon { width: 18px; height: 18px; }
          .dp-intro { font-size: 0.95rem; }
          .dp-subtitle { font-size: 1.25rem; }
        }
        @media (max-width: 400px) {
          .dp-section { padding: 3rem 16px; }
          .dp-tech { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
          .dp-tech-item { padding: 0.5rem; font-size: 0.75rem; }
          .dp-tech-icon { width: 16px; height: 16px; }
          .dp-title { font-size: clamp(1.6rem, 8vw, 2rem); }
        }
      `}</style>

      {PROJECTS.map((p) => (
        <section key={p.id} className={`dp-section ${p.bg}`} id={p.id}>
          <div className="dp-inner">

            {/* ── Left ── */}
            <motion.div
              className="dp-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="dp-category">{p.category}</div>
              <h2 className="dp-title">{p.title}</h2>
              <p className="dp-intro">{p.intro}</p>
              <div>
                <h3 className="dp-subtitle"> Technologies Used</h3>
                <div className="dp-tech">
                  {p.tech.map((t) => (
                    <TechIcon key={t.name} name={t.name} slug={t.slug} customSrc={t.customSrc} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="dp-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="dp-img-wrap">
                <img src={p.image} alt={p.title} className="dp-img" loading="lazy" />
              </div>
              <Link href={`/projects/${p.id}`} className="dp-cta">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>

          </div>
        </section>
      ))}
    </div>
  );
});

export default ProjectsGrid;

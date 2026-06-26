"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Featured success stories — matches the reference layout:
 * each card has a TOP half (headline + category tags + client logo) and a
 * BOTTOM half that's either a written testimonial (person photo + quote) or
 * a video testimonial (thumbnail + play button). Some cards also show a
 * "View case study" image in the top-right corner.
 *
 * Swap the Unsplash URLs / client logos for your real assets in /public.
 */
type CaseStudy = {
  slug: string;
  headline: string;        // plain text; wrap the highlight word(s) with **double asterisks** to colour them green
  industry: string;        // outlined tag
  service: string;         // filled green tag
  clientName?: string;     // text wordmark fallback if no logo image
  clientLogo?: string;     // path to client logo (preferred)
  caseImage?: string;      // optional building/product image (top-right) with a "View case study" overlay
  tech: string[];
};

const CASES: CaseStudy[] = [
  {
    slug: "tact-evac",
    headline: "Deployed **autonomous evacuation AI** for a strategic military airbase",
    industry: "Defence Technology",
    service: "Computer Vision",
    clientName: "TACT EVAC",
    caseImage: "https://res.cloudinary.com/ddcblcups/image/upload/v1775429456/WhatsApp_Image_2026-04-06_at_3.50.07_AM_mliq6b.jpg",
    tech: ["YOLOv8", "OpenCV", "Django", "React", "PostGIS"],
  },
  {
    slug: "sporttek",
    headline: "Eliminated **WhatsApp booking chaos** across 50+ sports venues",
    industry: "Sports & Recreation",
    service: "Mobile Platform",
    clientName: "SportTek",
    caseImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80&auto=format&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"],
  },
  {
    slug: "launchpulse",
    headline: "**ML-powered scoring** replaced gut instinct with data-driven conviction",
    industry: "AI & Big Data",
    service: "Machine Learning",
    clientName: "LaunchPulse AI",
    caseImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80&auto=format&fit=crop",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
  },
  {
    slug: "pulseai",
    headline: "**AI diagnosis support** unified patient care across every department",
    industry: "Healthcare",
    service: "Healthcare Technology",
    clientName: "Pulse AI",
    caseImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80&auto=format&fit=crop",
    tech: ["React", "React Native", "Node.js", "MongoDB", "TensorFlow"],
  },
  {
    slug: "dataflow",
    headline: "Cut **fraud detection latency** from 4 hours to under 800ms",
    industry: "Fintech",
    service: "Data Engineering",
    clientName: "DataFlow",
    caseImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80&auto=format&fit=crop",
    tech: ["Apache Kafka", "Apache Spark", "dbt", "Snowflake", "Airflow"],
  },
  {
    slug: "novasight",
    headline: "Unified **200+ retail stores** into a single real-time data lakehouse",
    industry: "Retail & Commerce",
    service: "Data Engineering",
    clientName: "NovaSight",
    caseImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80&auto=format&fit=crop",
    tech: ["Apache Flink", "Delta Lake", "dbt", "BigQuery", "Terraform"],
  },
];

// Cards are a fixed 360px; the track is full-bleed so the trailing card is
// cut by the page edge. Step through one card at a time.
const MAX_PAGE = CASES.length - 2;

// Render a headline string, colouring **wrapped** segments green
function renderHeadline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <span key={i} className="hl">{part.slice(2, -2)}</span>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

const chevLeft = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3 5.5 8 10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const chevRight = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3l4.5 5L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const arrowUpRight = (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M5 11 11 5M11 5H5.5M11 5v5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CaseStudies() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  const calcTranslate = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const card = track.children[0] as HTMLElement;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    setTranslateX(cur * (card.offsetWidth + gap));
  }, [cur]);

  useEffect(() => {
    calcTranslate();
    window.addEventListener("resize", calcTranslate, { passive: true });
    return () => window.removeEventListener("resize", calcTranslate);
  }, [calcTranslate]);

  const prev = () => setCur((c: number) => Math.max(0, c - 1));
  const next = () => setCur((c: number) => Math.min(MAX_PAGE, c + 1));

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove  = (e: React.TouchEvent<HTMLDivElement>) => { touchDelta.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => {
    if (touchDelta.current < -60) next();
    else if (touchDelta.current > 60) prev();
    touchDelta.current = 0;
  };

  return (
    <section id="case-studies">
      <style>{`
        /* ── Section ── */
        #case-studies {
          position: relative;
          padding: 5rem 40px;
          background: #faf9fd;
          overflow: hidden;
        }
        #case-studies::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(0, 32, 70, 0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .cs-wrap {
          position: relative;
          max-width: 1280px; margin: 0 auto; z-index: 1;
        }

        /* ── Header ── */
        .cs-head {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 2rem; margin-bottom: 2.5rem;
        }
        .cs-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4.8vw, 3.4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1;
          color: #002046;
        }
        .cs-title .dot { color: #2ECC40; }
        .cs-head-right {
          display: flex; align-items: center; gap: 12px;
          flex-shrink: 0; padding-top: 0.5rem;
        }
        .cs-view-all {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem; font-weight: 700;
          color: #002046; text-decoration: none;
          padding: 11px 22px;
          border: 1.5px solid rgba(0, 32, 70, 0.18);
          border-radius: 4px;
          transition: all 0.3s ease; white-space: nowrap;
        }
        .cs-view-all:hover { border-color: #2ECC40; background: rgba(46, 204, 64, 0.05); }
        .cs-nav-btn {
          width: 46px; height: 46px;
          display: inline-flex; align-items: center; justify-content: center;
          background: #ffffff;
          border: 1.5px solid rgba(0, 32, 70, 0.14);
          border-radius: 4px; cursor: pointer; color: #002046;
          transition: all 0.25s ease;
        }
        .cs-nav-btn:hover:not(:disabled) { background: #002046; color: #fff; border-color: #002046; }
        .cs-nav-btn:disabled { opacity: 0.35; cursor: default; }

        /* ── Track ── */
        .cs-track-outer {
          overflow: hidden;
          /* Break out of the centered container to the right viewport edge,
             so the peeking card is cut by the page width — not the container. */
          margin-right: calc(-50vw + 50%);
        }
        .cs-track {
          display: flex; gap: 1.5rem;
          transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        /* ── Card ── */
        .cs-card {
          flex: 0 0 520px;
          width: 520px; height: 450px;   /* base size at rest */
          min-width: 0;
          background: #ffffff;
          border: 1px solid rgba(0, 32, 70, 0.1);
          border-radius: 4px; overflow: hidden;
          display: flex; flex-direction: column;
          transition:
            flex-basis 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            width 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .cs-card:hover {
          flex-basis: 680px;
          width: 680px;                  /* expands wider into a rectangle */
          box-shadow: 0 24px 60px rgba(0, 32, 70, 0.12);
          border-color: rgba(46, 204, 64, 0.3);
        }

        /* TOP half */
        .cs-top {
          padding: 1.75rem 1.75rem 1.5rem;
          position: relative;
          display: flex; flex-direction: column;
          flex: 1;
        }
        .cs-card-headline {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem; font-weight: 800; letter-spacing: -0.02em; line-height: 1.18;
          background: linear-gradient(135deg, #002046 0%, #1a4a80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1.25rem;
          max-width: 100%;
          transition: max-width 0.5s ease;
        }
        .cs-card:hover .cs-card-headline { max-width: 60%; }
        .cs-card-headline .hl {
          background: linear-gradient(135deg, #2ECC40 0%, #00c9a7 60%, #00b4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: auto; }
        .cs-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          padding: 6px 12px; border-radius: 4px; white-space: nowrap;
        }
        .cs-tag.industry { color: #002046; background: transparent; border: 1.5px solid rgba(0, 32, 70, 0.18); }
        .cs-tag.service { color: #2ECC40; background: rgba(46, 204, 64, 0.1); border: 1px solid rgba(46, 204, 64, 0.25); }

        .cs-client { margin-top: 1.25rem; height: 32px; display: flex; align-items: center; }
        .cs-client img { max-height: 38px; max-width: 150px; object-fit: contain; }
        .cs-client-text {
          font-family: 'Manrope', sans-serif; font-weight: 800;
          font-size: 1.25rem; color: #002046; letter-spacing: -0.01em;
        }

        /* corner case image + view button */
        .cs-top-img {
          position: absolute; top: 1.75rem; right: 1.75rem;
          width: 180px; height: 120px; border-radius: 4px; overflow: hidden;
          background: linear-gradient(135deg, #1a3556, #0a1f3d);
          opacity: 0; transform: translateX(12px) scale(0.95);
          pointer-events: none;
          transition: opacity 0.4s ease 0.1s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }
        .cs-card:hover .cs-top-img {
          opacity: 1; transform: translateX(0) scale(1);
          pointer-events: auto;
        }
        .cs-top-img img { width: 100%; height: 100%; object-fit: cover; }
        .cs-view-case {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem; font-weight: 700;
          color: #002046; text-decoration: none;
          background: #fff; padding: 9px 15px; border-radius: 4px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
          transition: all 0.3s ease; white-space: nowrap;
        }
        .cs-view-case:hover { background: #2ECC40; }
        .cs-view-case svg { transition: transform 0.3s ease; }
        .cs-view-case:hover svg { transform: translate(2px, -2px); }

        /* divider */
        .cs-divider { height: 1px; background: rgba(0, 32, 70, 0.08); margin: 0 1.75rem; }

        /* BOTTOM half — tech stack */
        .cs-bottom {
          padding: 1.25rem 1.75rem 1.5rem;
        }
        .cs-tech-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0, 32, 70, 0.35);
          margin-bottom: 0.65rem;
        }
        .cs-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .cs-tech-pill {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: #002046;
          background: rgba(0, 32, 70, 0.05);
          border: 1px solid rgba(0, 32, 70, 0.1);
          padding: 4px 10px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .cs-card:hover .cs-tech-pill {
          background: rgba(46, 204, 64, 0.07);
          border-color: rgba(46, 204, 64, 0.25);
          color: #002046;
        }

        /* dots */
        .cs-dots { display: flex; justify-content: center; gap: 8px; margin-top: 2.5rem; }
        .cs-dot {
          height: 6px; width: 6px; border-radius: 3px;
          background: rgba(0, 32, 70, 0.18); cursor: pointer; border: none;
          transition: all 0.35s ease;
        }
        .cs-dot.active { width: 24px; background: #2ECC40; }

        /* responsive */
        @media (max-width: 900px) {
          /* On small screens, drop the full-bleed and use fluid auto-height cards (no expand) */
          .cs-track-outer { margin-right: 0; }
          .cs-card { flex: 0 0 80%; width: 80%; height: auto; }
          .cs-card:hover { flex-basis: 80%; width: 80%; }
          .cs-top-img { display: none; }
          .cs-card-headline, .cs-card:hover .cs-card-headline { max-width: 100%; }
        }
        @media (max-width: 600px) {
          #case-studies { padding: 4rem 20px; }
          .cs-head { flex-direction: column; gap: 1.5rem; }
          .cs-card { flex: 0 0 86%; width: 86%; }
        }
        @media (max-width: 400px) {
          #case-studies { padding: 3.5rem 16px; }
          .cs-card { flex: 0 0 92%; width: 92%; }
          .cs-card-headline { font-size: 1.1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-track, .cs-card { transition: none; }
        }
      `}</style>

      <div className="cs-wrap">
        {/* Header */}
        <motion.div
          className="cs-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="cs-title">
            Featured success stories<span className="dot">.</span>
          </h2>
          <div className="cs-head-right">
            <Link href="/projects" className="cs-view-all">All case studies</Link>
            <button className="cs-nav-btn" onClick={prev} disabled={cur === 0} aria-label="Previous">
              {chevLeft}
            </button>
            <button className="cs-nav-btn" onClick={next} disabled={cur >= MAX_PAGE} aria-label="Next">
              {chevRight}
            </button>
          </div>
        </motion.div>

        {/* Track */}
        <motion.div
          className="cs-track-outer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className="cs-track" style={{ transform: `translateX(-${translateX}px)` }}>
            {CASES.map((c) => (
              <article key={c.slug} className="cs-card">
                {/* TOP */}
                <div className="cs-top">
                  <h3 className="cs-card-headline">{renderHeadline(c.headline)}</h3>

                  {c.caseImage && (
                    <div className="cs-top-img">
                      <img src={c.caseImage} alt="" loading="lazy" />
                      <Link href={`/projects/${c.slug}`} className="cs-view-case">
                        View case study {arrowUpRight}
                      </Link>
                    </div>
                  )}

                  <div className="cs-tags">
                    <span className="cs-tag industry">{c.industry}</span>
                    <span className="cs-tag service">{c.service}</span>
                  </div>

                  <div className="cs-client">
                    {c.clientLogo
                      ? <img src={c.clientLogo} alt={c.clientName ?? "Client"} loading="lazy" />
                      : <span className="cs-client-text">{c.clientName}</span>}
                  </div>
                </div>

                <div className="cs-divider" />

                {/* BOTTOM — tech stack */}
                <div className="cs-bottom">
                  <div className="cs-tech-label">Built with</div>
                  <div className="cs-tech-pills">
                    {c.tech.map((t) => (
                      <span key={t} className="cs-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Dots */}
        <div className="cs-dots" role="tablist" aria-label="Slide navigation">
          {Array.from({ length: MAX_PAGE + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={cur === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`cs-dot${cur === i ? " active" : ""}`}
              onClick={() => setCur(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
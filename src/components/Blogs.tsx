"use client";

import { useRef } from "react";
import Link from "next/link";

export const BLOGS = [
  {
    slug: "nextjs-15-react-server-components",
    title: "An Executive Guide to Cloud Cost Optimization for Businesses",
    excerpt: "Cloud spend is one of the fastest-growing line items for modern enterprises. This guide breaks down proven strategies—from right-sizing workloads to leveraging spot instances—that help CTOs and CFOs reclaim budget without sacrificing reliability.",
    date: "April 12, 2026",
    readTime: "6 min read",
    category: "White Paper",
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "scaling-rag-pipelines",
    title: "How Agentic AI is Changing Business Workflows",
    excerpt: "Agentic AI systems don't just answer questions—they reason, plan, and act autonomously across complex multi-step tasks. Discover how forward-thinking organisations are deploying AI agents to automate workflows, reduce operational overhead, and unlock entirely new business models.",
    date: "April 5, 2026",
    readTime: "8 min read",
    category: "Webinar",
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "go-microservices-high-performance",
    title: "The Ultimate Guide to Boost Application Performance",
    excerpt: "Slow applications bleed users and revenue. This deep-dive covers the full performance stack—from database query optimisation and caching layers to CDN configuration and server-side rendering strategies—giving engineering teams a practical playbook for sub-second load times.",
    date: "March 28, 2026",
    readTime: "5 min read",
    category: "Article",
    imgUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "ai-for-businesses-2026",
    title: "C-Suite Guide to AI for Businesses in 2026",
    excerpt: "AI adoption has moved from a competitive edge to a baseline expectation. This executive briefing distils the most impactful use-cases across industries, outlines the governance frameworks boards need to consider, and maps out a realistic 12-month AI roadmap for mid-market and enterprise organisations.",
    date: "March 15, 2026",
    readTime: "7 min read",
    category: "White Paper",
    imgUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Blogs() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.querySelector<HTMLElement>(".blg-card")?.offsetWidth ?? 340;
    track.scrollBy({ left: dir === "right" ? cardW + 24 : -(cardW + 24), behavior: "smooth" });
  };

  return (
    <section id="blogs">
      <style>{`
        /* ── Section ── */
        #blogs {
          padding: 5rem 40px;
          background: #faf9fd;
          font-family: 'Inter', sans-serif;
        }

        .blg-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header row ── */
        .blg-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          gap: 1.5rem;
        }

        .blg-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #002046;
          margin: 0;
        }

        .blg-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding-top: 6px;
        }

        .blg-all-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #002046;
          background: transparent;
          border: 1px solid rgba(0, 32, 70, 0.2);
          padding: 10px 20px;
          border-radius: 0;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .blg-all-btn:hover {
          border-color: #002046;
          background: rgba(0, 32, 70, 0.04);
        }

        .blg-arrow-btn {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 32, 70, 0.2);
          background: transparent;
          border-radius: 0;
          cursor: pointer;
          color: #002046;
          transition: all 0.25s ease;
        }
        .blg-arrow-btn:hover {
          border-color: #002046;
          background: rgba(0, 32, 70, 0.04);
        }

        /* ── Scrollable track ── */
        .blg-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .blg-track::-webkit-scrollbar { display: none; }

        /* ── Card ── */
        .blg-card {
          flex: 0 0 calc(25% - 18px);
          min-width: 260px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: transform 0.35s ease;
        }
        .blg-card:hover { transform: translateY(-4px); }

        /* Image */
        .blg-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 0;
          background: #e3e6eb;
        }
        .blg-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blg-card:hover .blg-img-wrap img {
          transform: scale(1.05);
        }

        /* Badge below image */
        .blg-badge {
          display: inline-block;
          width: fit-content;
          margin-top: 1rem;
          margin-bottom: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 0;
        }

        /* Badge colors by type */
        .blg-badge--whitepaper {
          background: #002046;
          color: #ffffff;
        }
        .blg-badge--webinar {
          background: #e74c6f;
          color: #ffffff;
        }
        .blg-badge--article {
          background: #7c3aed;
          color: #ffffff;
        }

        /* Title */
        .blg-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #002046;
          line-height: 1.4;
          letter-spacing: -0.01em;
          margin: 0;
          transition: color 0.25s ease;
        }
        .blg-card:hover .blg-title {
          color: #0a5c50;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .blg-card { flex: 0 0 calc(33.333% - 16px); }
        }
        @media (max-width: 768px) {
          #blogs { padding: 3.5rem 20px; }
          .blg-card { flex: 0 0 calc(50% - 12px); min-width: 220px; }
          .blg-header { flex-direction: column; gap: 1rem; }
        }
        @media (max-width: 480px) {
          .blg-card { flex: 0 0 85%; }
        }
      `}</style>

      <div className="blg-inner">

        {/* Header */}
        <div className="blg-header">
          <h2 className="blg-h2">Latest insights &amp; resources</h2>

          <div className="blg-header-actions">
            <Link href="/blogs" className="blg-all-btn">All insights</Link>
            <button
              className="blg-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              className="blg-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="blg-track" ref={trackRef}>
          {BLOGS.map((blog) => {
            const badgeClass =
              blog.category === "Webinar"
                ? "blg-badge--webinar"
                : blog.category === "Article"
                ? "blg-badge--article"
                : "blg-badge--whitepaper";

            return (
              <Link href={`/blogs/${blog.slug}`} className="blg-card" key={blog.slug}>
                <div className="blg-img-wrap">
                  <img src={blog.imgUrl} alt={blog.title} loading="lazy" />
                </div>
                <span className={`blg-badge ${badgeClass}`}>{blog.category}</span>
                <h3 className="blg-title">{blog.title}</h3>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

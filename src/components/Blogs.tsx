"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { BLOGS } from "../data/blogs";
export { BLOGS };

const Blogs = React.memo(function Blogs() {
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
          font-family: inherit;
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
          font-family: inherit;
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
          font-family: inherit;
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
          font-family: inherit;
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
          font-family: inherit;
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
});

export default Blogs;
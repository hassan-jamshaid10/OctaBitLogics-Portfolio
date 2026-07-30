"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import { BLOGS } from "../../data/blogs";

const CATEGORIES = ["All", "Article", "White Paper", "Webinar"];

const TRENDING = [
  "Claude Fable 5",
  "Agentic AI",
  "RAG at Scale",
  "LLM Security",
  "Edge AI",
  "Vector Databases",
  "Cloud FinOps",
  "AI Governance",
  "Enterprise LLM",
  "Prompt Engineering",
];

const SLIDER_IMAGES = [
  "/blogs/claude_fable_ai.png",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
];

function badgeClass(category: string) {
  if (category === "Webinar") return "bp-badge--webinar";
  if (category === "Article") return "bp-badge--article";
  return "bp-badge--whitepaper";
}

export default function BlogsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "the industry forward.";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => setTextIndex((p) => p + 1), 55);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText.length]);

  const handleNavClick = useCallback(
    (href: string) => {
      if (href.startsWith("/")) {
        router.push(href);
      } else {
        sessionStorage.setItem("scrollToSection", href.replace("#", ""));
        router.push("/");
      }
    },
    [router]
  );

  const featured = BLOGS[0];
  const filtered = BLOGS.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      search === "" ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });
  const rest = filtered.filter(
    (b) => b.slug !== featured.slug || activeCategory !== "All" || search !== ""
  );
  const showFeatured = activeCategory === "All" && search === "";

  return (
    <>
      <Navbar activeSection="" onNavClick={handleNavClick} />
      <main style={{ overflowX: "hidden", width: "100%" }}>
        <style>{`
          /* ── Hero (matches CompanyHero exactly) ── */
          #blp-hero {
            position: relative;
            padding-top: 150px;
            padding-bottom: 4rem;
            background: #ffffff;
            overflow: hidden;
            font-family: inherit;
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .blp-glow {
            position: absolute;
            top: -150px;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 400px;
            background: radial-gradient(ellipse at center, rgba(59,173,176,0.45) 0%, rgba(0,32,70,0.15) 40%, transparent 70%);
            filter: blur(40px);
            pointer-events: none;
            z-index: 0;
          }

          .blp-hero-content {
            position: relative;
            z-index: 1;
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .blp-eyebrow {
            font-family: inherit;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            color: #74777f;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
          }

          .blp-h1 {
            font-family: inherit;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, #002046 0%, #1a4a80 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin: 0 0 4rem 0;
          }

          .blp-cursor {
            display: inline-block;
            width: 3px;
            height: 1em;
            background-color: #2ECC40;
            vertical-align: middle;
            margin-left: 2px;
            animation: blp-blink 1s step-end infinite;
            -webkit-text-fill-color: #2ECC40;
          }

          @keyframes blp-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          /* ── Image Slider ── */
          .blp-slider-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            z-index: 1;
            margin-top: auto;
            padding-top: 2rem;
          }

          .blp-slider-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: blp-slide 32s linear infinite;
          }

          .blp-slider-track:hover { animation-play-state: paused; }

          @keyframes blp-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 10px)); }
          }

          .blp-slide-img {
            width: 400px;
            height: 280px;
            object-fit: cover;
            border-radius: 4px;
          }

          /* ── Main content ── */
          #blp-body {
            background: #faf9fd;
            padding: 5rem 40px;
            box-sizing: border-box;
            overflow: hidden;
            width: 100%;
          }
          .blp-body-inner {
            max-width: 1280px;
            margin: 0 auto;
            width: 100%;
            box-sizing: border-box;
          }

          /* ── Search bar (in body) ── */
          .blp-search-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          .blp-search-wrap {
            display: flex;
            align-items: center;
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.12);
            max-width: 380px;
            width: 100%;
            transition: border-color 0.3s;
          }
          .blp-search-wrap:focus-within { border-color: #3BADB0; }
          .blp-search-icon {
            padding: 0 14px;
            color: #74777f;
            flex-shrink: 0;
          }
          .blp-search {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            padding: 12px 14px 12px 0;
            font-family: inherit;
            font-size: 0.88rem;
            color: #002046;
          }
          .blp-search::placeholder { color: #b0b5bf; }

          /* ── Category filter ── */
          .blp-filter {
            display: flex;
            gap: 0;
            border-bottom: 1px solid rgba(0,32,70,0.1);
            margin-bottom: 3.5rem;
          }
          .blp-filter-btn {
            padding: 0.75rem 1.5rem;
            font-family: inherit;
            font-size: 0.85rem;
            font-weight: 600;
            color: #74777f;
            background: transparent;
            border: none;
            border-bottom: 2px solid transparent;
            margin-bottom: -1px;
            cursor: pointer;
            transition: all 0.25s;
            white-space: nowrap;
          }
          .blp-filter-btn:hover { color: #002046; }
          .blp-filter-btn.active { color: #002046; border-bottom-color: #2ECC40; }

          /* ── Featured article ── */
          .blp-featured {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.08);
            margin-bottom: 3.5rem;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0,32,70,0.07);
            transition: box-shadow 0.3s ease;
            text-decoration: none;
            color: inherit;
            box-sizing: border-box;
            width: 100%;
          }
          .blp-featured:hover { box-shadow: 0 12px 48px rgba(0,32,70,0.13); }
          .blp-featured-img {
            position: relative;
            overflow: hidden;
            min-height: 380px;
          }
          .blp-featured-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
            display: block;
          }
          .blp-featured:hover .blp-featured-img img { transform: scale(1.04); }
          .blp-featured-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(0,18,42,0.5) 0%, transparent 60%);
          }
          .blp-featured-label {
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #002046;
            background: #2ECC40;
            padding: 5px 14px;
          }
          .blp-featured-body {
            padding: 3rem 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #ffffff;
          }
          .blp-featured-title {
            font-family: inherit;
            font-size: clamp(1.4rem, 2.5vw, 2rem);
            font-weight: 800;
            color: #002046;
            line-height: 1.2;
            letter-spacing: -0.02em;
            margin: 0 0 1rem 0;
          }
          .blp-featured-excerpt {
            font-size: 0.9rem;
            line-height: 1.7;
            color: #74777f;
            margin: 0 0 1.75rem 0;
          }
          .blp-featured-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            font-size: 0.8rem;
            color: #74777f;
          }
          .blp-featured-meta-dot {
            width: 3px; height: 3px;
            border-radius: 50%;
            background: rgba(0,32,70,0.25);
          }
          .blp-featured-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.82rem;
            font-weight: 700;
            color: #002046;
            margin-top: 1.5rem;
            text-decoration: none;
            transition: gap 0.25s, color 0.25s;
          }
          .blp-featured-link:hover { gap: 10px; color: #2ECC40; }

          /* ── Section label ── */
          .blp-section-label {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 1.75rem;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .blp-section-label::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(0,32,70,0.1);
          }

          /* ── Blog grid ── */
          .blp-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
          .blp-card {
            display: flex;
            flex-direction: column;
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.07);
            text-decoration: none;
            color: inherit;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            overflow: hidden;
          }
          .blp-card:hover {
            box-shadow: 0 10px 40px rgba(0,32,70,0.1);
            transform: translateY(-3px);
          }
          .blp-card-img {
            overflow: hidden;
            aspect-ratio: 16/9;
          }
          .blp-card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
            display: block;
          }
          .blp-card:hover .blp-card-img img { transform: scale(1.05); }
          .blp-card-body {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .blp-card-badge {
            display: inline-block;
            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 4px 12px;
            margin-bottom: 0.75rem;
            width: fit-content;
          }
          .blp-badge--whitepaper { background: #002046; color: #ffffff; }
          .blp-badge--webinar { background: #e74c6f; color: #ffffff; }
          .blp-badge--article { background: #7c3aed; color: #ffffff; }

          .blp-card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 0.75rem;
          }
          .blp-tag {
            font-size: 0.65rem;
            font-weight: 600;
            color: #3BADB0;
            background: rgba(59,173,176,0.08);
            padding: 3px 9px;
            letter-spacing: 0.04em;
          }
          .blp-card-title {
            font-family: inherit;
            font-size: 1rem;
            font-weight: 800;
            color: #002046;
            line-height: 1.4;
            letter-spacing: -0.01em;
            margin: 0 0 0.6rem 0;
            flex: 1;
            transition: color 0.25s;
          }
          .blp-card:hover .blp-card-title { color: #3BADB0; }
          .blp-card-excerpt {
            font-size: 0.83rem;
            line-height: 1.65;
            color: #74777f;
            margin: 0 0 1rem 0;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .blp-card-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.75rem;
            color: #74777f;
            margin-top: auto;
            padding-top: 1rem;
            border-top: 1px solid rgba(0,32,70,0.07);
          }
          .blp-card-meta-dot {
            width: 3px; height: 3px;
            border-radius: 50%;
            background: rgba(0,32,70,0.2);
          }

          /* ── Trending ── */
          #blp-trending {
            background: #ffffff;
            padding: 3.5rem 40px;
            border-top: 1px solid rgba(0,32,70,0.07);
            box-sizing: border-box;
            overflow: hidden;
            width: 100%;
          }
          .blp-trending-inner { max-width: 1280px; margin: 0 auto; }
          .blp-trending-label {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 1.25rem;
          }
          .blp-trending-chips { display: flex; flex-wrap: wrap; gap: 10px; }
          .blp-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border: 1px solid rgba(0,32,70,0.12);
            background: #ffffff;
            font-size: 0.82rem;
            font-weight: 600;
            color: #002046;
            cursor: pointer;
            transition: all 0.25s;
          }
          .blp-chip:hover {
            border-color: #2ECC40;
            background: rgba(46,204,64,0.06);
          }
          .blp-chip svg { color: #74777f; }

          /* ── Empty state ── */
          .blp-empty {
            grid-column: 1 / -1;
            text-align: center;
            padding: 4rem 2rem;
            color: #74777f;
          }
          .blp-empty h3 {
            font-family: inherit;
            font-size: 1.25rem;
            font-weight: 700;
            color: #002046;
            margin: 0 0 0.5rem;
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            .blp-grid { grid-template-columns: repeat(2, 1fr); }
            #blp-body { padding: 4rem 24px; }
            #blp-trending { padding: 3rem 24px; }
          }
          @media (max-width: 768px) {
            .blp-slide-img { width: 280px; height: 200px; }
            .blp-glow { width: 100%; height: 300px; }
            #blp-body { padding: 3.5rem 20px; }
            #blp-trending { padding: 3rem 20px; }
            .blp-featured { grid-template-columns: 1fr; }
            .blp-featured-img { min-height: 240px; }
            .blp-featured-body { padding: 1.75rem 1.5rem; }
            .blp-featured-title { font-size: 1.25rem; }
            .blp-search-row { flex-direction: column; align-items: stretch; gap: 1rem; }
            .blp-search-wrap { max-width: 100%; }
            .blp-filter { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
            .blp-filter::-webkit-scrollbar { display: none; }
          }
          @media (max-width: 600px) {
            #blp-body { padding: 3rem 16px; }
            #blp-trending { padding: 2.5rem 16px; }
            .blp-grid { grid-template-columns: 1fr; gap: 20px; }
            .blp-featured-img { min-height: 200px; }
            .blp-featured-body { padding: 1.5rem 1.25rem; }
            .blp-featured-title { font-size: 1.15rem; }
            .blp-featured-excerpt { font-size: 0.85rem; }
            .blp-filter-btn { padding: 0.65rem 1rem; font-size: 0.8rem; }
            .blp-chip { padding: 6px 12px; font-size: 0.78rem; }
            .blp-card-body { padding: 1.25rem; }
          }
          @media (max-width: 420px) {
            #blp-body { padding: 2.5rem 14px; }
            #blp-trending { padding: 2rem 14px; }
            .blp-featured-img { min-height: 175px; }
            .blp-featured-body { padding: 1.25rem 1rem; }
            .blp-featured-title { font-size: 1.05rem; }
            .blp-filter-btn { padding: 0.6rem 0.85rem; font-size: 0.76rem; }
            .blp-card-body { padding: 1rem; }
            .blp-card-title { font-size: 0.92rem; }
            .blp-chip { padding: 5px 10px; font-size: 0.74rem; gap: 5px; }
          }
          @media (max-width: 360px) {
            #blp-body { padding: 2rem 12px; }
            #blp-trending { padding: 1.75rem 12px; }
            .blp-featured-img { min-height: 155px; }
          }
        `}</style>

        {/* ── Hero ── */}
        <section id="blp-hero">
          <div className="blp-glow" />

          <div className="blp-hero-content">
            <div className="blp-eyebrow">INSIGHTS &amp; RESOURCES</div>
            <h1 className="blp-h1">
              Ideas that move<br />
              {fullText.substring(0, textIndex)}
              <span className="blp-cursor" />
            </h1>
          </div>

          <div className="blp-slider-container">
            <div className="blp-slider-track">
              {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((src, i) => (
                <img key={i} src={src} alt="Insight" className="blp-slide-img" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section id="blp-body">
          <div className="blp-body-inner">

            {/* Search + filter row */}
            <div className="blp-search-row">
              <div className="blp-filter" style={{ marginBottom: 0, borderBottom: "none", flex: 1 }}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`blp-filter-btn${activeCategory === cat ? " active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="blp-search-wrap">
                <span className="blp-search-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
                <input
                  className="blp-search"
                  type="text"
                  placeholder="Search articles…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div style={{ borderBottom: "1px solid rgba(0,32,70,0.1)", marginBottom: "3.5rem" }} />

            {/* Featured article */}
            {showFeatured && (
              <>
                <div className="blp-section-label">Featured</div>
                <Link href={`/blogs/${featured.slug}`} className="blp-featured">
                  <div className="blp-featured-img">
                    <img src={featured.imgUrl} alt={featured.title} />
                    <div className="blp-featured-overlay" />
                    <span className="blp-featured-label">New</span>
                  </div>
                  <div className="blp-featured-body">
                    <span className={`blp-card-badge ${badgeClass(featured.category)}`}>
                      {featured.category}
                    </span>
                    <h2 className="blp-featured-title">{featured.title}</h2>
                    <p className="blp-featured-excerpt">{featured.excerpt}</p>
                    <div className="blp-featured-meta">
                      <span>{featured.date}</span>
                      <span className="blp-featured-meta-dot" />
                      <span>{featured.readTime}</span>
                      <span className="blp-featured-meta-dot" />
                      <span>{featured.author}</span>
                    </div>
                    <span className="blp-featured-link">
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </>
            )}

            {/* Grid */}
            <div
              className="blp-section-label"
              style={{ marginTop: showFeatured ? "3.5rem" : "0" }}
            >
              {showFeatured
                ? "All Articles"
                : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
            </div>

            <div className="blp-grid">
              {(showFeatured ? rest : filtered).length === 0 ? (
                <div className="blp-empty">
                  <h3>No articles found</h3>
                  <p>Try a different search term or category.</p>
                </div>
              ) : (
                (showFeatured ? rest : filtered).map((blog) => (
                  <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="blp-card">
                    <div className="blp-card-img">
                      <img src={blog.imgUrl} alt={blog.title} loading="lazy" />
                    </div>
                    <div className="blp-card-body">
                      <span className={`blp-card-badge ${badgeClass(blog.category)}`}>
                        {blog.category}
                      </span>
                      <div className="blp-card-tags">
                        {blog.tags.slice(0, 3).map((t) => (
                          <span key={t} className="blp-tag">{t}</span>
                        ))}
                      </div>
                      <h3 className="blp-card-title">{blog.title}</h3>
                      <p className="blp-card-excerpt">{blog.excerpt}</p>
                      <div className="blp-card-meta">
                        <span>{blog.date}</span>
                        <span className="blp-card-meta-dot" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

          </div>
        </section>

        {/* ── Trending searches ── */}
        <section id="blp-trending">
          <div className="blp-trending-inner">
            <div className="blp-trending-label">Trending Topics</div>
            <div className="blp-trending-chips">
              {TRENDING.map((topic) => (
                <button
                  key={topic}
                  className="blp-chip"
                  onClick={() => { setSearch(topic); setActiveCategory("All"); }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

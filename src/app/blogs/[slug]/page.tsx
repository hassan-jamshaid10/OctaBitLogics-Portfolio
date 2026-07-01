"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import { BLOGS } from "../../../data/blogs";
import { useCallback } from "react";

function badgeClass(category: string) {
  if (category === "Webinar") return "bd-badge--webinar";
  if (category === "Article") return "bd-badge--article";
  return "bd-badge--whitepaper";
}

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

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

  const blog = BLOGS.find((b) => b.slug === slug);
  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <>
        <Navbar activeSection="" onNavClick={handleNavClick} />
        <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#faf9fd" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.85rem", color: "#74777f", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>404</p>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#002046", marginBottom: "1rem" }}>Article not found</h1>
            <Link href="/blogs" style={{ color: "#3BADB0", fontWeight: 600, fontSize: "0.9rem" }}>← Back to all articles</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar activeSection="" onNavClick={handleNavClick} />
      <main style={{ overflowX: "hidden", width: "100%" }}>
        <style>{`
          /* ── Hero ── */
          .bd-hero {
            position: relative;
            padding: 9rem 40px 5rem;
            font-family: inherit;
            overflow: hidden;
            background: #ffffff;
          }
          .bd-hero-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            z-index: 0;
          }
          .bd-hero-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(0, 18, 42, 0.78) 0%,
              rgba(0, 18, 42, 0.88) 60%,
              rgba(0, 18, 42, 0.96) 100%
            );
          }
          .bd-hero-inner {
            position: relative;
            z-index: 1;
            max-width: 860px;
            margin: 0 auto;
          }
          .bd-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            color: rgba(255,255,255,0.65);
            text-decoration: none;
            margin-bottom: 2rem;
            transition: color 0.25s;
            letter-spacing: 0.02em;
          }
          .bd-back:hover { color: #2ECC40; }
          .bd-badge {
            display: inline-block;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            padding: 5px 14px;
            margin-bottom: 1.25rem;
          }
          .bd-badge--whitepaper { background: #2ECC40; color: #002046; }
          .bd-badge--webinar { background: #e74c6f; color: #ffffff; }
          .bd-badge--article { background: #7c3aed; color: #ffffff; }

          .bd-hero-title {
            font-family: inherit;
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.15;
            letter-spacing: -0.03em;
            margin: 0 0 1.5rem 0;
          }
          .bd-hero-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            font-size: 0.85rem;
            color: rgba(255,255,255,0.55);
          }
          .bd-hero-meta-dot {
            width: 3px; height: 3px;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
          }
          .bd-hero-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 1.5rem;
          }
          .bd-hero-tag {
            font-size: 0.68rem;
            font-weight: 600;
            color: rgba(255,255,255,0.55);
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 4px 12px;
            letter-spacing: 0.04em;
          }

          /* ── Article body ── */
          .bd-body {
            background: #ffffff;
            padding: 5rem 40px;
          }
          .bd-body-inner {
            max-width: 760px;
            margin: 0 auto;
            font-family: inherit;
            font-size: 1.05rem;
            line-height: 1.85;
            color: #44474e;
          }

          /* Cover image */
          .bd-cover {
            width: 100%;
            aspect-ratio: 16/7;
            object-fit: cover;
            display: block;
            margin-bottom: 3rem;
          }

          /* Rich typography */
          .bd-body-inner h2 {
            font-family: inherit;
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 800;
            color: #002046;
            letter-spacing: -0.02em;
            line-height: 1.25;
            margin: 3rem 0 1.25rem 0;
          }
          .bd-body-inner h3 {
            font-family: inherit;
            font-size: 1.25rem;
            font-weight: 700;
            color: #002046;
            margin: 2.5rem 0 1rem 0;
          }
          .bd-body-inner p { margin-bottom: 1.6rem; }
          .bd-body-inner strong { color: #002046; font-weight: 700; }
          .bd-body-inner blockquote {
            border-left: 3px solid #2ECC40;
            padding: 1rem 0 1rem 1.75rem;
            margin: 2.5rem 0;
            font-size: 1.15rem;
            font-style: italic;
            color: #002046;
            font-weight: 600;
            line-height: 1.6;
            background: rgba(46,204,64,0.04);
          }
          .bd-body-inner code {
            font-family: 'Courier New', monospace;
            font-size: 0.88em;
            background: rgba(0,32,70,0.06);
            color: #002046;
            padding: 2px 6px;
            border-radius: 3px;
          }
          .bd-body-inner pre {
            background: #002046;
            color: #a7fff9;
            padding: 1.75rem;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.88rem;
            line-height: 1.7;
            margin: 2rem 0;
            border-left: 3px solid #2ECC40;
          }
          .bd-body-inner pre code {
            background: none;
            color: inherit;
            padding: 0;
          }

          /* ── Divider ── */
          .bd-divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #2ECC40 0%, #3BADB0 100%);
            margin: 3rem 0;
          }

          /* ── Author strip ── */
          .bd-author {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 0;
            border-top: 1px solid rgba(0,32,70,0.08);
            border-bottom: 1px solid rgba(0,32,70,0.08);
            margin-bottom: 4rem;
          }
          .bd-author-avatar {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 800;
            color: #ffffff;
            flex-shrink: 0;
          }
          .bd-author-name {
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 700;
            color: #002046;
          }
          .bd-author-role {
            font-size: 0.78rem;
            color: #74777f;
            margin-top: 2px;
          }

          /* ── Related ── */
          .bd-related {
            background: #faf9fd;
            padding: 5rem 40px;
          }
          .bd-related-inner {
            max-width: 1280px;
            margin: 0 auto;
          }
          .bd-related-label {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .bd-related-label::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(0,32,70,0.1);
          }
          .bd-related-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .bd-rel-card {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: inherit;
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.07);
            overflow: hidden;
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .bd-rel-card:hover {
            box-shadow: 0 10px 36px rgba(0,32,70,0.1);
            transform: translateY(-3px);
          }
          .bd-rel-img {
            aspect-ratio: 16/9;
            overflow: hidden;
          }
          .bd-rel-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
            display: block;
          }
          .bd-rel-card:hover .bd-rel-img img { transform: scale(1.05); }
          .bd-rel-body { padding: 1.25rem; }
          .bd-rel-badge {
            display: inline-block;
            font-size: 0.6rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 4px 10px;
            margin-bottom: 0.6rem;
          }
          .bd-badge--whitepaper { background: #002046; color: #ffffff; }
          .bd-badge--webinar { background: #e74c6f; color: #ffffff; }
          .bd-badge--article { background: #7c3aed; color: #ffffff; }
          .bd-rel-title {
            font-family: inherit;
            font-size: 0.95rem;
            font-weight: 700;
            color: #002046;
            line-height: 1.4;
            margin: 0 0 0.5rem;
            transition: color 0.25s;
          }
          .bd-rel-card:hover .bd-rel-title { color: #3BADB0; }
          .bd-rel-meta {
            font-size: 0.75rem;
            color: #74777f;
          }

          /* ── CTA ── */
          .bd-cta {
            position: relative;
            padding: 6rem 40px;
            overflow: hidden;
            background:
              radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46,204,64,0.14) 0%, transparent 55%),
              linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
          }
          .bd-cta-inner {
            max-width: 680px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
          }
          .bd-cta-eyebrow {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #2ECC40;
            margin-bottom: 1.25rem;
          }
          .bd-cta-h2 {
            font-family: inherit;
            font-size: clamp(1.8rem, 3.5vw, 2.6rem);
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin: 0 0 1rem 0;
          }
          .bd-cta-p {
            font-size: 0.95rem;
            color: rgba(255,255,255,0.65);
            line-height: 1.7;
            margin: 0 0 2.5rem 0;
          }
          .bd-cta-btns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
          }
          .bd-cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            background: #2ECC40;
            color: #002046;
            font-family: inherit;
            font-size: 0.88rem;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.3s;
          }
          .bd-cta-btn-primary:hover {
            background: #27b837;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.35);
          }
          .bd-cta-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 13px 24px;
            border: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.85);
            font-family: inherit;
            font-size: 0.88rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
          }
          .bd-cta-btn-secondary:hover {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.06);
            color: #ffffff;
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            .bd-hero { padding: 8rem 20px 4rem; }
            .bd-body { padding: 4rem 20px; }
            .bd-related { padding: 4rem 20px; }
            .bd-cta { padding: 5rem 20px; }
          }
          @media (max-width: 768px) {
            .bd-related-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 560px) {
            .bd-hero { padding: 7rem 16px 3.5rem; }
            .bd-body { padding: 3rem 16px; }
            .bd-related { padding: 3.5rem 16px; }
            .bd-cta { padding: 4rem 16px; }
            .bd-related-grid { grid-template-columns: 1fr; }
            .bd-hero-title { font-size: 1.8rem; }
            .bd-body-inner { font-size: 1rem; }
            .bd-cta-btns { flex-direction: column; align-items: stretch; }
            .bd-cta-btn-primary, .bd-cta-btn-secondary { justify-content: center; }
          }
        `}</style>

        {/* ── Hero ── */}
        <header className="bd-hero">
          <div
            className="bd-hero-bg"
            style={{ backgroundImage: `url(${blog.imgUrl})` }}
          />
          <div className="bd-hero-inner">
            <Link href="/blogs" className="bd-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to all articles
            </Link>
            <div className={`bd-badge ${badgeClass(blog.category)}`}>{blog.category}</div>
            <h1 className="bd-hero-title">{blog.title}</h1>
            <div className="bd-hero-meta">
              <span>{blog.date}</span>
              <span className="bd-hero-meta-dot" />
              <span>{blog.readTime}</span>
              <span className="bd-hero-meta-dot" />
              <span>{blog.author}</span>
            </div>
            <div className="bd-hero-tags">
              {blog.tags.map((t) => (
                <span key={t} className="bd-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <section className="bd-body">
          <div className="bd-body-inner">
            <img
              src={blog.imgUrl}
              alt={blog.title}
              className="bd-cover"
              loading="lazy"
            />

            {/* Author strip */}
            <div className="bd-author">
              <div className="bd-author-avatar">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="bd-author-name">{blog.author}</div>
                <div className="bd-author-role">OctaBitLogics · {blog.date}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="bd-divider" />
          </div>
        </section>

        {/* ── Related articles ── */}
        <section className="bd-related">
          <div className="bd-related-inner">
            <div className="bd-related-label">More Articles</div>
            <div className="bd-related-grid">
              {related.map((r) => (
                <Link href={`/blogs/${r.slug}`} key={r.slug} className="bd-rel-card">
                  <div className="bd-rel-img">
                    <img src={r.imgUrl} alt={r.title} loading="lazy" />
                  </div>
                  <div className="bd-rel-body">
                    <span className={`bd-rel-badge ${badgeClass(r.category)}`}>{r.category}</span>
                    <h3 className="bd-rel-title">{r.title}</h3>
                    <div className="bd-rel-meta">{r.date} · {r.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bd-cta">
          <div className="bd-cta-inner">
            <div className="bd-cta-eyebrow">Work With Us</div>
            <h2 className="bd-cta-h2">Ready to build something remarkable?</h2>
            <p className="bd-cta-p">
              Our engineering and AI teams help ambitious organisations design, build, and
              scale intelligent systems. Let's talk about your next challenge.
            </p>
            <div className="bd-cta-btns">
              <Link href="/contact" className="bd-cta-btn-primary">
                Start a Conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/blogs" className="bd-cta-btn-secondary">
                Browse all articles
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

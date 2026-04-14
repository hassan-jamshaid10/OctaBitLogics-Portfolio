"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundNightfall from "./BackgroundNightfall";

export const BLOGS = [
  {
    slug: "nextjs-15-react-server-components",
    title: "The Future of Web Development: Next.js 15 & React Server Components",
    excerpt: "Explore how React Server Components are fundamentally changing how we build, ship, and scale web applications in 2026, delivering zero-bundle-size React to the edge.",
    date: "April 12, 2026",
    readTime: "6 min read",
    category: "Frontend Engineering",
    imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "scaling-rag-pipelines",
    title: "Scaling RAG Pipelines: Going Beyond Basic Vector Search",
    excerpt: "Basic semantic search isn't enough for production AI. Discover advanced patterns like hybrid search, query rewriting, and LLM-evals to build production-grade RAG systems.",
    date: "April 5, 2026",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "go-microservices-high-performance",
    title: "Why Go is the Default for High-Performance Microservices",
    excerpt: "A deep dive into Go's concurrency model, garbage collector improvements, and why it outperforms Rust for 90% of enterprise web microservices.",
    date: "March 28, 2026",
    readTime: "5 min read",
    category: "Backend Architecture",
    imgUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
  }
];

const BlogCard = ({ blog, index }: { blog: typeof BLOGS[0], index: number }) => {
  return (
    <motion.div
      className="blg-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={`/blogs/${blog.slug}`} className="blg-card-inner">
        <div className="blg-img-wrap">
          <img src={blog.imgUrl} alt={blog.title} loading="lazy" />
          <div className="blg-cat">{blog.category}</div>
        </div>
        <div className="blg-content">
          <div className="blg-meta">
            <span>{blog.date}</span>
            <span className="blg-dot" />
            <span>{blog.readTime}</span>
          </div>
          <h3 className="blg-title">{blog.title}</h3>
          <p className="blg-excerpt">{blog.excerpt}</p>
          <div className="blg-read-more">
            Read Article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Blogs() {
  return (
    <section id="blogs">
      <style>{`
        #blogs {
          position: relative;
          background: #ffffff;
          padding: 8rem 3rem;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          overflow: hidden;
        }

        #blogs::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(59,173,176,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .blg-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .blg-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .blg-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3BADB0;
          margin-bottom: 1rem;
        }
        .blg-tag::before {
          content: '';
          width: 16px; height: 1px;
          background: #3BADB0;
        }

        .blg-header h2 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #1B2E5E;
          line-height: 1.1;
        }

        .blg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .blg-card {
          display: flex;
        }

        .blg-card-inner {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(59,173,176,0.15);
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          width: 100%;
        }

        .blg-card-inner:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(27,46,94,0.08);
          border-color: rgba(59,173,176,0.5);
        }

        .blg-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #080d1e;
        }

        .blg-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform;
          transform: translateZ(0);
        }

        .blg-card-inner:hover .blg-img-wrap img {
          transform: scale(1.05) translateZ(0);
        }

        .blg-cat {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(8, 13, 30, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          color: #a7fff9;
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 100px;
        }

        .blg-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blg-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .blg-dot {
          width: 4px; height: 4px;
          background: #cbd5e1;
          border-radius: 50%;
        }

        .blg-title {
          font-family: 'Oxanium', monospace;
          font-size: 1.3rem;
          font-weight: 800;
          color: #1B2E5E;
          line-height: 1.35;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .blg-card-inner:hover .blg-title {
          color: #3BADB0;
        }

        .blg-excerpt {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4e6070;
          margin-bottom: 2rem;
          flex: 1;
        }

        .blg-read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #1B2E5E;
          transition: color 0.3s ease;
          margin-top: auto;
        }

        .blg-read-more svg {
          transition: transform 0.3s ease;
        }

        .blg-card-inner:hover .blg-read-more {
          color: #3BADB0;
        }

        .blg-card-inner:hover .blg-read-more svg {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .blg-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          #blogs { padding: 5rem 1.5rem; }
          .blg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="blg-inner">
        <motion.div
          className="blg-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="blg-tag">Tech & Engineering</div>
          <h2>Latest Insights</h2>
        </motion.div>

        <div className="blg-grid">
          {BLOGS.map((blog, idx) => (
            <BlogCard key={blog.slug} blog={blog} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

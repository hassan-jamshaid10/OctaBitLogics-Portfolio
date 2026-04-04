"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Testimonial data ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
    {
        id: 1,
        name: "Augusto Nucci",
        role: "Product Director @ DataLayer Inc.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face",
        quote:
            "The OctaBitLogics team demonstrates exceptional attention to detail and communicates with clarity and precision. Their professionalism and thorough approach have made a significant impact, and we are excited to continue working with them.",
        highlight: ["exceptional attention to detail", "clarity and precision"],
        rating: 5,
    },
    {
        id: 2,
        name: "Tyree Palmer",
        role: "CTO @ BaseLayer Solutions",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop&crop=face",
        quote:
            "OctaBitLogics consistently delivers timely turnarounds, and their team's fast learning abilities and expertise in Python and cloud infrastructure are truly remarkable. This is the third time we've hired them.",
        highlight: [" timely turnarounds", "fast learning abilities"],
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Mitchell",
        role: "VP Engineering @ Nexora Health",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&crop=face",
        quote:
            "Working with OctaBitLogics was a game-changer for our healthcare platform. They built our entire patient data pipeline from scratch, and it has been running flawlessly in production. Their ability to understand complex requirements sets them apart.",
        highlight: ["game-changer", "running flawlessly"],
        rating: 5,
    },
    {
        id: 4,
        name: "Marcus Chen",
        role: "Founder & CEO @ CartFlow",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&fit=crop&crop=face",
        quote:
            "I was blown away by the quality they delivered on our e-commerce platform. The AI recommendation engine they built increased our average order value by 30% in the first month. They treat your business like their own.",
        highlight: ["blown away", "30% in the first month"],
        rating: 5,
    },
    {
        id: 5,
        name: "Layla Hassan",
        role: "Operations Lead @ LogiTrack EU",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&fit=crop&crop=face",
        quote:
            "The fleet optimization system OctaBitLogics built for us cut our fuel costs by 22% and dramatically improved our on-time delivery rates. The entire project was delivered ahead of schedule and within budget.",
        highlight: ["cut our fuel costs by 22%", "ahead of schedule"],
        rating: 5,
    },
];

// Highlight words in teal with a soft background blob
function HighlightedText({ text, highlights }: { text: string; highlights: string[] }) {
    let segments: { text: string; hl: boolean }[] = [{ text, hl: false }];
    const sorted = [...highlights].sort((a, b) => b.length - a.length);

    for (const hl of sorted) {
        const out: { text: string; hl: boolean }[] = [];
        for (const seg of segments) {
            if (seg.hl) { out.push(seg); continue; }
            const idx = seg.text.toLowerCase().indexOf(hl.toLowerCase().trim()); // flexible match
            if (idx === -1) { out.push(seg); continue; }
            if (idx > 0) out.push({ text: seg.text.slice(0, idx), hl: false });
            out.push({ text: seg.text.slice(idx, idx + hl.length), hl: true });
            const rest = seg.text.slice(idx + hl.length);
            if (rest) out.push({ text: rest, hl: false });
        }
        segments = out;
    }

    return (
        <>
            {segments.map((s, i) =>
                s.hl ? (
                    <span key={i} className="tm-hl">
                        {s.text}
                    </span>
                ) : (
                    <span key={i}>{s.text}</span>
                )
            )}
        </>
    );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const StarIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#3BADB0" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

const QuoteWatermark = () => (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="rgba(59,173,176,0.06)" xmlns="http://www.w3.org/2000/svg" className="tm-quote-watermark">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
    </svg>
);

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const total = TESTIMONIALS.length;

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + total) % total);
    };
    const next = () => {
        setDirection(1);
        setCurrent((c) => (c + 1) % total);
    };

    // Auto-slide every 7 seconds
    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, []);

    // Framer Motion variants
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            z: -100,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            z: 0,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4, ease: "easeOut" as const }
            }
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            z: -100,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        }),
    };

    return (
        <section id="testimonials">
            <style>{`
        #testimonials {
          background: #ffffff;
          padding: 3.5rem 0 4rem;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* Deep ambient background glow */
        .tm-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 500px;
          background: radial-gradient(ellipse at center, rgba(59,173,176,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .tm-inner {
          position: relative; z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Header ── */
        .tm-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3BADB0;
          background: rgba(59,173,176,0.1);
          border: 1px solid rgba(59,173,176,0.25);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 1.5rem;
        }
        .tm-heading {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #1B2E5E;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-align: center;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .tm-heading span {
          background: linear-gradient(135deg, #3BADB0 0%, #1f4080 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Track + Cards ── */
        .tm-track {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: 380px; /* fixed height to constrain absolute cards */
          perspective: 1200px;
          display: flex;
          justify-content: center;
        }

        .tm-card {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #ffffff;
          border-radius: 24px;
          padding: 3rem 3.5rem;
          border: 1px solid rgba(59,173,176,0.15);
          box-shadow: 
            0 20px 50px rgba(27,46,94,0.08),
            0 4px 15px rgba(59,173,176,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        
        /* Subtle colored top lip */
        .tm-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 5px;
          background: linear-gradient(90deg, #3BADB0, #1f4080);
        }

        .tm-quote-watermark {
          position: absolute;
          top: 2rem; right: 2.5rem;
          z-index: 0;
        }

        /* Quote text */
        .tm-quote {
          position: relative; z-index: 1;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #1e293b;
          font-weight: 400;
          flex: 1;
        }
        
        .tm-hl {
          background: rgba(59,173,176,0.12);
          color: #3BADB0;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          box-decoration-break: clone;
        }

        /* Bottom profile row */
        .tm-profile {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 2rem;
          position: relative; z-index: 1;
          border-top: 1px solid rgba(27,46,94,0.08);
          padding-top: 1.5rem;
        }
        .tm-avatar {
          width: 65px; height: 65px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          box-shadow: 0 4px 15px rgba(27,46,94,0.15);
        }
        .tm-meta {
          display: flex;
          flex-direction: column;
        }
        .tm-name {
          font-family: 'Oxanium', monospace;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1B2E5E;
          line-height: 1.2;
        }
        .tm-role {
          font-size: 0.8rem;
          color: rgba(27,46,94,0.6);
          margin-top: 4px;
          margin-bottom: 6px;
        }
        .tm-stars {
          display: flex;
          gap: 2px;
        }

        /* ── Controls ── */
        .tm-controls {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .tm-nav-btn {
          width: 50px; height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(59,173,176,0.25);
          color: #1B2E5E;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(27,46,94,0.05);
        }
        .tm-nav-btn:hover {
          background: #3BADB0;
          border-color: #3BADB0;
          color: #fff;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(59,173,176,0.25);
        }

        .tm-dots {
          display: flex;
          gap: 0.5rem;
        }
        .tm-dot {
          width: 24px; height: 4px;
          border-radius: 2px;
          background: rgba(27,46,94,0.15);
          border: none; padding: 0; cursor: pointer;
          transition: all 0.3s ease;
        }
        .tm-dot.active {
          background: #3BADB0;
          width: 36px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .tm-track { height: 440px; }
          .tm-card { padding: 2.5rem 2rem; }
          .tm-quote { font-size: 1rem; }
        }
        @media (max-width: 500px) {
          .tm-inner { padding: 0 1.25rem; }
          #testimonials { padding: 4rem 0 5rem; }
          .tm-track { height: 480px; }
          .tm-card { padding: 2rem 1.5rem; }
          .tm-heading { font-size: 2rem; }
        }
      `}</style>

            <div className="tm-glow" />

            <div className="tm-inner">
                {/* Header */}
                <div className="tm-badge">Client Success</div>
                <h2 className="tm-heading">
                    Don't just take our word for it. <span>Read theirs.</span>
                </h2>

                {/* Track */}
                <div className="tm-track">
                    <AnimatePresence custom={direction} mode="popLayout">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="tm-card"
                        >
                            <QuoteWatermark />

                            <p className="tm-quote">
                                <HighlightedText
                                    text={TESTIMONIALS[current].quote}
                                    highlights={TESTIMONIALS[current].highlight}
                                />
                            </p>

                            <div className="tm-profile">
                                <img
                                    src={TESTIMONIALS[current].image}
                                    alt={TESTIMONIALS[current].name}
                                    className="tm-avatar"
                                />
                                <div className="tm-meta">
                                    <div className="tm-name">{TESTIMONIALS[current].name}</div>
                                    <div className="tm-role">{TESTIMONIALS[current].role}</div>
                                    <div className="tm-stars">
                                        {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="tm-controls">
                    <button className="tm-nav-btn" onClick={prev} aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="tm-dots">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                className={`tm-dot${i === current ? " active" : ""}`}
                                onClick={() => {
                                    setDirection(i > current ? 1 : -1);
                                    setCurrent(i);
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button className="tm-nav-btn" onClick={next} aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}

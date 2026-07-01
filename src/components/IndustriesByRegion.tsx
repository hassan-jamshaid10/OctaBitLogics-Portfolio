"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTRIES = [
  {
    name: "Pakistan",
    region: "Asia",
    tag: "Dev Hub",
    tagColor: "#2ECC40",
    desc: "Core engineering, AI research, and product development",
    image: "https://t4.ftcdn.net/jpg/04/15/05/17/360_F_415051795_wKolxKkPr2tS7fnMKOQouqUecOHMuAjh.jpg",
    flag: "https://flagcdn.com/w80/pk.png",
  },
  {
    name: "United States",
    region: "North America",
    tag: "HQ",
    tagColor: "#2ECC40",
    desc: "Client partnerships, strategy, and leadership presence",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/us.png",
  },
  {
    name: "Saudi Arabia",
    region: "Middle East",
    tag: null,
    tagColor: null,
    desc: "Regional presence supporting Middle East clients",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/sa.png",
  },
  {
    name: "UAE",
    region: "Middle East",
    tag: null,
    tagColor: null,
    desc: "Digital transformation and fintech innovation hub",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/ae.png",
  },
  {
    name: "United Kingdom",
    region: "Europe",
    tag: null,
    tagColor: null,
    desc: "Technology consulting and delivery hub for UK clients",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    name: "Canada",
    region: "North America",
    tag: null,
    tagColor: null,
    desc: "Regional tech partnerships and enterprise delivery",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/ca.png",
  },
  {
    name: "Germany",
    region: "Europe",
    tag: null,
    tagColor: null,
    desc: "Engineering and AI solutions for European enterprises",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/de.png",
  },
  {
    name: "Portugal",
    region: "Europe",
    tag: "EU Hub",
    tagColor: "#3BADB0",
    desc: "European delivery and engineering hub",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/pt.png",
  },
  {
    name: "India",
    region: "Asia",
    tag: null,
    tagColor: null,
    desc: "Enterprise SaaS and technology solutions",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/in.png",
  },
  {
    name: "Singapore",
    region: "Asia",
    tag: null,
    tagColor: null,
    desc: "Asia-Pacific delivery and fintech partnerships",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=600&auto=format&fit=crop",
    flag: "https://flagcdn.com/w80/sg.png",
  },
];

const PER_PAGE = 3;
const MAX_INDEX = COUNTRIES.length - PER_PAGE;

export default function IndustriesByRegion() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const prev = () => {
    if (index > 0) { setDir(-1); setIndex((i) => i - 1); }
  };
  const next = () => {
    if (index < MAX_INDEX) { setDir(1); setIndex((i) => i + 1); }
  };

  const visible = COUNTRIES.slice(index, index + PER_PAGE);

  return (
    <section id="industries-regions">
      <style>{`
        #industries-regions {
          background: #faf9fd;
          padding: 8rem 40px;
          font-family: inherit;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }

        .ir-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .ir-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }

        .ir-h2 {
          font-family: inherit;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .ir-h2 span {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Nav controls ── */
        .ir-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          padding-top: 8px;
        }

        .ir-arrows {
          display: flex;
          gap: 8px;
        }

        .ir-arrow-btn {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(0, 32, 70, 0.15);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          color: #002046;
          border-radius: 0;
        }

        .ir-arrow-btn:hover:not(:disabled) {
          background: #002046;
          color: #ffffff;
          border-color: #002046;
        }

        .ir-arrow-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* ── Cards ── */
        .ir-cards-wrapper {
          overflow: hidden;
        }

        .ir-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ir-card {
          display: flex;
          flex-direction: column;
          cursor: default;
          min-width: 0;
          box-sizing: border-box;
        }

        .ir-card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 240px;
          margin-bottom: 1.25rem;
        }

        .ir-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .ir-card:hover .ir-card-img {
          transform: scale(1.04);
        }

        .ir-card-flag-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 32px;
          height: 22px;
          object-fit: cover;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .ir-card-region {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3BADB0;
          margin: 0 0 0.3rem 0;
        }

        .ir-card-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.4rem;
        }

        .ir-card-name {
          font-family: inherit;
          font-size: 1.1rem;
          font-weight: 700;
          color: #002046;
          margin: 0;
        }

        .ir-card-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .ir-card-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #74777f;
          margin: 0;
        }

        /* ── Dots ── */
        .ir-dots {
          display: flex;
          gap: 6px;
          margin-top: 2.5rem;
        }

        .ir-dot {
          width: 6px;
          height: 6px;
          background: rgba(0, 32, 70, 0.15);
          border-radius: 50%;
          transition: all 0.25s ease;
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .ir-dot.active {
          background: #002046;
          width: 24px;
          border-radius: 3px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ir-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          #industries-regions { padding: 5rem 20px; }
          .ir-cards { grid-template-columns: 1fr; }
          .ir-header { flex-direction: column; gap: 1.5rem; }
          .ir-h2 br { display: none; }
          .ir-card-img-wrap { height: 220px; }
        }
        @media (max-width: 480px) {
          #industries-regions { padding: 4rem 16px; }
          .ir-h2 { font-size: 1.4rem; }
          .ir-card-img-wrap { height: 195px; }
          .ir-controls { gap: 10px; }
          .ir-arrow-btn { width: 40px; height: 40px; }
          .ir-card-name { font-size: 1rem; }
          .ir-card-desc { font-size: 0.84rem; }
        }
        @media (max-width: 360px) {
          #industries-regions { padding: 3rem 12px; }
          .ir-h2 { font-size: 1.2rem; }
          .ir-card-img-wrap { height: 170px; }
          .ir-dots { gap: 5px; }
        }
      `}</style>

      <div className="ir-inner">
        {/* Header */}
        <div className="ir-header">
          <h2 className="ir-h2">
            Where We Operate<br />
            <span>Regions We Serve</span>
          </h2>

          <div className="ir-controls">
            <div className="ir-arrows">
              <button
                className="ir-arrow-btn"
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                className="ir-arrow-btn"
                onClick={next}
                disabled={index >= MAX_INDEX}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            className="ir-cards-wrapper"
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="ir-cards">
              {visible.map((country, i) => (
                <motion.div
                  key={country.name}
                  className="ir-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <div className="ir-card-img-wrap">
                    <img src={country.image} alt={country.name} className="ir-card-img" loading="lazy" />
                    <img src={country.flag} alt={country.name} className="ir-card-flag-badge" />
                  </div>
                  <p className="ir-card-region">{country.region}</p>
                  <div className="ir-card-meta">
                    <h3 className="ir-card-name">{country.name}</h3>
                    {country.tag && (
                      <span
                        className="ir-card-tag"
                        style={{
                          background: `${country.tagColor}18`,
                          color: country.tagColor as string,
                          border: `1px solid ${country.tagColor}40`,
                        }}
                      >
                        {country.tag}
                      </span>
                    )}
                  </div>
                  <p className="ir-card-desc">{country.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="ir-dots">
          {COUNTRIES.map((_, i) => (
            <button
              key={i}
              className={`ir-dot${i === index ? " active" : ""}`}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to ${COUNTRIES[i].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

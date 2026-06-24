"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REGIONS = [
  {
    id: "north-america",
    label: "North America",
    flag: "https://flagcdn.com/w80/us.png",
    flagAlt: "USA",
    countries: [
      {
        name: "United States",
        tag: "HQ",
        tagColor: "#2ECC40",
        desc: "Client partnerships, strategy, and leadership presence",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/us.png",
      },
      {
        name: "Canada",
        tag: null,
        desc: "Regional tech partnerships and enterprise delivery",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/ca.png",
      },
    ],
  },
  {
    id: "europe",
    label: "Europe",
    flag: "https://flagcdn.com/w80/eu.png",
    flagAlt: "EU",
    countries: [
      {
        name: "United Kingdom",
        tag: null,
        desc: "Technology consulting and delivery hub for UK clients",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/gb.png",
      },
      {
        name: "Germany",
        tag: null,
        desc: "Engineering and AI solutions for European enterprises",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/de.png",
      },
      {
        name: "Portugal",
        tag: "EU Hub",
        tagColor: "#3BADB0",
        desc: "European delivery and engineering hub",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/pt.png",
      },
    ],
  },
  {
    id: "middle-east",
    label: "Middle East",
    flag: "https://flagcdn.com/w80/ae.png",
    flagAlt: "UAE",
    countries: [
      {
        name: "Saudi Arabia",
        tag: null,
        desc: "Regional presence supporting Middle East clients",
        image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/sa.png",
      },
      {
        name: "UAE",
        tag: null,
        desc: "Digital transformation and fintech innovation hub",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/ae.png",
      },
    ],
  },
  {
    id: "asia",
    label: "Asia",
    flag: "https://flagcdn.com/w80/pk.png",
    flagAlt: "Asia",
    countries: [
      {
        name: "Pakistan",
        tag: "Dev Hub",
        tagColor: "#2ECC40",
        desc: "Core engineering, AI research, and product development",
        image: "https://images.unsplash.com/photo-1567507938618-7be70e4e02eb?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/pk.png",
      },
      {
        name: "India",
        tag: null,
        desc: "Enterprise SaaS and technology solutions",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/in.png",
      },
      {
        name: "Singapore",
        tag: null,
        desc: "Asia-Pacific delivery and fintech partnerships",
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=600&auto=format&fit=crop",
        flag: "https://flagcdn.com/w80/sg.png",
      },
    ],
  },
];

export default function IndustriesByRegion() {
  const [activeRegion, setActiveRegion] = useState("north-america");
  const [cardIndex, setCardIndex] = useState(0);

  const region = REGIONS.find((r) => r.id === activeRegion)!;
  const visibleCount = 3;
  const cards = region.countries;
  const maxIndex = Math.max(0, cards.length - visibleCount);

  const handleRegionChange = (id: string) => {
    setActiveRegion(id);
    setCardIndex(0);
  };

  return (
    <section id="industries-regions">
      <style>{`
        #industries-regions {
          background: #faf9fd;
          padding: 8rem 40px;
          font-family: 'Inter', sans-serif;
          width: 100%;
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
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .ir-h2 span {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ir-nav-arrows {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          padding-top: 8px;
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
          transition: all 0.3s ease;
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

        /* ── Region Tabs ── */
        .ir-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(0, 32, 70, 0.1);
        }

        .ir-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 1rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #74777f;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: -1px;
          white-space: nowrap;
        }

        .ir-tab:hover {
          color: #002046;
        }

        .ir-tab.active {
          color: #002046;
          border-bottom-color: #002046;
        }

        .ir-tab-flag {
          width: 22px;
          height: 16px;
          object-fit: cover;
          border-radius: 2px;
        }

        /* ── Cards Grid ── */
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
        }

        .ir-card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 240px;
          margin-bottom: 1.25rem;
          border-radius: 2px;
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

        .ir-card-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.4rem;
        }

        .ir-card-name {
          font-family: 'Manrope', sans-serif;
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

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ir-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          #industries-regions { padding: 5rem 20px; }
          .ir-cards { grid-template-columns: 1fr; }
          .ir-header { flex-direction: column; }
          .ir-tabs { overflow-x: auto; }
          .ir-tab { padding: 0.75rem 1rem; font-size: 0.82rem; }
        }
      `}</style>

      <div className="ir-inner">
        {/* Header */}
        <div className="ir-header">
          <h2 className="ir-h2">
            Where We Operate —<br />
            <span>Regions We Serve</span>
          </h2>
          <div className="ir-nav-arrows">
            <button
              className="ir-arrow-btn"
              onClick={() => setCardIndex((i) => Math.max(0, i - 1))}
              disabled={cardIndex === 0}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              className="ir-arrow-btn"
              onClick={() => setCardIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={cardIndex >= maxIndex}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Region Tabs */}
        <div className="ir-tabs">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              className={`ir-tab${activeRegion === r.id ? " active" : ""}`}
              onClick={() => handleRegionChange(r.id)}
            >
              <img src={r.flag} alt={r.flagAlt} className="ir-tab-flag" />
              {r.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            className="ir-cards-wrapper"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="ir-cards">
              {cards.slice(cardIndex, cardIndex + visibleCount).map((country, i) => (
                <motion.div
                  key={country.name}
                  className="ir-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="ir-card-img-wrap">
                    <img src={country.image} alt={country.name} className="ir-card-img" loading="lazy" />
                    <img src={country.flag} alt={country.name} className="ir-card-flag-badge" />
                  </div>
                  <div className="ir-card-meta">
                    <h3 className="ir-card-name">{country.name}</h3>
                    {country.tag && (
                      <span
                        className="ir-card-tag"
                        style={{
                          background: `${country.tagColor}18`,
                          color: country.tagColor,
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
      </div>
    </section>
  );
}

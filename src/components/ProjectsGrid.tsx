"use client";

import React from "react";

type ProjectType = {
  id: string;
  clientName?: string;
  clientLogo?: string;
  category: string;
  headline: string;
  image: string;
};

const PROJECTS: ProjectType[] = [
  {
    id: "tact-evac",
    clientName: "TACT EVAC",
    category: "DEFENCE TECHNOLOGY",
    headline: "Deployed an autonomous evacuation command center for military airbases",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "launchpulse",
    clientName: "LaunchPulse",
    category: "AI & BIG DATA",
    headline: "AI-powered startup evaluation platform to predict success probability",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "sporttek",
    clientName: "SportTek",
    category: "MOBILE PLATFORM",
    headline: "Dual-sided sports venue booking platform bridging players and owners",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "pulseai",
    clientName: "Pulse AI",
    category: "HEALTHCARE TECH",
    headline: "Hospital management platform with AI diagnosis support and EHR integration",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&auto=format&fit=crop",
  }
];

export default function ProjectsGrid() {
  return (
    <section className="pg-section">
      <style>{`
        .pg-section {
          padding: 6rem 20px;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
        }
        
        .pg-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pg-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3.5rem 2rem;
        }

        .pg-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        .pg-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #f0f0f0;
          border: 1px solid rgba(0,0,0,0.06);
        }

        .pg-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pg-card:hover .pg-img {
          transform: scale(1.03);
        }

        .pg-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .pg-logo-wrap {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          max-width: 160px;
        }

        .pg-logo-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }

        .pg-client-text {
          font-size: 1.2rem;
          font-weight: 800;
          color: #002046;
          letter-spacing: -0.01em;
        }

        .pg-category {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #333;
          background: #ffffff;
        }

        .pg-headline {
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.4;
          color: #111;
          margin: 0;
          transition: color 0.2s ease;
        }

        .pg-card:hover .pg-headline {
          color: #002046;
        }

        @media (max-width: 850px) {
          .pg-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .pg-headline {
            font-size: 1.15rem;
          }
        }
      `}</style>

      <div className="pg-container">
        <div className="pg-grid">
          {PROJECTS.map((project) => (
            <a href={`/projects/${project.id}`} key={project.id} className="pg-card">
              <div className="pg-img-wrap">
                <img src={project.image} alt={project.headline} className="pg-img" loading="lazy" />
              </div>

              <div className="pg-meta">
                <div className="pg-logo-wrap">
                  {project.clientLogo ? (
                    <img src={project.clientLogo} alt={project.clientName || "Client"} className="pg-logo-img" loading="lazy" />
                  ) : (
                    <span className="pg-client-text">{project.clientName}</span>
                  )}
                </div>

                <div className="pg-category">
                  {project.category}
                </div>
              </div>

              <h3 className="pg-headline">
                {project.headline}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const domains = [
  {
    id: "ecommerce",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "E Commerce",
    description: "Our ecommerce expertise spans multiple projects, leveraging GA4, CRM platforms, and Excel to enhance customer insights and boost revenue",
  },
  {
    id: "logistics",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    title: "Logistics",
    description: "Our data solutions in logistics improve operational workflows, optimizing supply chains and driving performance with actionable insights",
  },
  {
    id: "realestate",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: "Real Estate",
    description: "Looking to streamline property assessments, forecast market trends, and enhance investment strategies? Our solutions have you covered!",
  },
  {
    id: "marketing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Marketing",
    description: "The future of marketing is here: integrate data insights and AI to elevate your campaign strategies and enhance ROI",
  },
  {
    id: "software",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Software and Technology",
    description: "Navigating complex challenges? Discover how data engineering and AI can transform your strategies and deliver game-changing insights",
  },
  {
    id: "health",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    title: "Health & Medical",
    description: "80% of healthcare providers report improved efficiency with data solutions that optimize resource allocation and track health trends",
  },
];

export default function ExpertiseDomains() {
  return (
    <section className="expertise-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .expertise-section {
          background: #f0f4fa;
          padding: 96px 64px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .expertise-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 64px;
        }

        .expertise-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #1b2e5e;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .expertise-title span {
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .expertise-subtitle {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.72;
          margin: 0;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto 56px;
        }

        .expertise-card {
          background: #ffffff;
          border: 1.5px solid rgba(31, 64, 128, 0.1);
          border-radius: 18px;
          padding: 32px 28px 28px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.32s ease, border-color 0.3s ease;
        }

        .expertise-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .expertise-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(31, 64, 128, 0.14);
          border-color: rgba(59, 173, 176, 0.25);
        }

        .expertise-card:hover::before {
          transform: scaleX(1);
        }

        .expertise-card:hover .card-icon-wrap {
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          color: #ffffff;
        }

        .card-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(59,173,176,0.1) 0%, rgba(31,64,128,0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #1f4080;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .card-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1b2e5e;
          margin: 0 0 10px;
        }

        .card-desc {
          font-size: 0.875rem;
          color: #4a5568;
          line-height: 1.68;
          margin: 0 0 26px;
        }

        .card-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 22px;
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          color: #fff;
          border: none;
          border-radius: 9px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: opacity 0.2s, transform 0.2s;
        }

        .card-btn:hover {
          opacity: 0.88;
          transform: scale(1.03);
        }

        .expertise-cta {
          text-align: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 15px 48px;
          background: linear-gradient(135deg, #3badb0 0%, #1f4080 48%, #1b2e5e 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.03em;
          box-shadow: 0 10px 32px rgba(31, 64, 128, 0.28);
          transition: opacity 0.2s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-btn:hover {
          opacity: 0.9;
          transform: translateY(-3px) scale(1.02);
        }

        @media (max-width: 960px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr); }
          .expertise-section { padding: 72px 32px 64px; }
        }

        @media (max-width: 600px) {
          .expertise-grid { grid-template-columns: 1fr; }
          .expertise-section { padding: 56px 20px 48px; }
          .expertise-title { font-size: 1.75rem; }
        }
      `}</style>

      <div className="expertise-header">
        <h2 className="expertise-title">
          <span>Expertise</span> Across Domains
        </h2>
        <p className="expertise-subtitle">
          Pairing Gen-Z creativity with deep industry experience, we deliver precision engineering and AI solutions tailored to overcome sector-specific challenges
        </p>
      </div>

      <div className="expertise-grid">
        {domains.map((domain) => (
          <div className="expertise-card" key={domain.id}>
            <div className="card-icon-wrap">{domain.icon}</div>
            <h3 className="card-title">{domain.title}</h3>
            <p className="card-desc">{domain.description}</p>
            <button className="card-btn">Read More</button>
          </div>
        ))}
      </div>

      <div className="expertise-cta">
        <button className="cta-btn">Get in Touch</button>
      </div>
    </section>
  );
}
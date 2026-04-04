"use client";

export default function PartnersBar() {
  return (
    <div className="partners-bar">
      <style>{`
        .partners-bar {
          width: 100%;
          /* ✅ changed to white bg (design kept otherwise) */
          background: #ffffff;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(59,173,176,0.15);
          border-bottom: 1px solid rgba(59,173,176,0.15);
        }

        .partners-bar::before,
        .partners-bar::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        /* ✅ fade masks now fade from white */
        .partners-bar::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .partners-bar::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        .partners-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 60px;
          flex-wrap: wrap;
          gap: 0;
        }

        .partners-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          /* ✅ adapted for white bg */
          color: rgba(27,46,94,0.55);
          white-space: nowrap;
          margin-right: 2.5rem;
          flex-shrink: 0;
        }

        .partner-item {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0.9;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .partner-item:hover { opacity: 1; }

        .partner-name {
          font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          /* ✅ adapted for white bg */
          color: #1e293b;
          white-space: nowrap;
          line-height: 1.1;
        }

        .partner-sub {
          font-size: 0.6rem;
          /* ✅ adapted for white bg */
          color: rgba(30,41,59,0.65);
          letter-spacing: 0.04em;
          margin-top: 2px;
        }

        .partner-divider {
          width: 1px;
          height: 30px;
          /* ✅ adapted for white bg */
          background: rgba(31, 64, 128, 0.18);
          flex-shrink: 0;
          margin: 0 2.5rem;
        }

        /* logo images (kept same size vibe as your svg icons) */
        .partner-logo {
          width: 28px;
          height: 28px;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }

        /* AWS is wider */
        .partner-logo.aws {
          width: 44px;
          height: 28px;
        }

        @media (max-width: 640px) {
          .partners-inner { padding: 16px 24px; gap: 1.5rem; justify-content: center; }
          .partners-label { display: none; }
          .partner-divider { display: none; }
        }
      `}</style>

      <div className="partners-inner">
        <span className="partners-label">Partners</span>

        {/* Microsoft */}
        <div className="partner-item">
          <img
            className="partner-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <div className="partner-name">Microsoft</div>
            <div className="partner-sub">Partner</div>
          </div>
        </div>

        <div className="partner-divider" />

        {/* AWS */}
        <div className="partner-item">
          <img
            className="partner-logo aws"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <div className="partner-name">AWS</div>
            <div className="partner-sub">Partner Network</div>
          </div>
        </div>

        <div className="partner-divider" />

        {/* Google Cloud */}
        <div className="partner-item">
          <img
            className="partner-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
            alt="Google Cloud"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <div className="partner-name">Google Cloud</div>
            <div className="partner-sub">Partner</div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

export default function PartnersBar() {
  return (
    <div className="partners-bar">
      <style>{`
        .partners-bar {
          width: 100%;
          background: linear-gradient(135deg, #3BADB0 0%, #1B2E5E 100%);
          overflow: hidden;
          position: relative;
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
        .partners-bar::before {
          left: 0;
          background: linear-gradient(to right, #3BADB0, transparent);
        }
        .partners-bar::after {
          right: 0;
          background: linear-gradient(to left, #1B2E5E, transparent);
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
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          margin-right: 2.5rem;
          flex-shrink: 0;
        }
        .partner-item {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0.85;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .partner-item:hover { opacity: 1; }
        .partner-name {
          font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
          line-height: 1.1;
        }
        .partner-sub {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.04em;
          margin-top: 2px;
        }
        .partner-divider {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,0.18);
          flex-shrink: 0;
          margin: 0 2.5rem;
        }
        .gcp-ring {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .gcp-g {
          font-family: 'Google Sans', 'Segoe UI', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          padding-right: 1px;
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
          <svg width="22" height="22" viewBox="0 0 21 21" fill="none">
            <rect x="0"  y="0"  width="10" height="10" fill="white" />
            <rect x="11" y="0"  width="10" height="10" fill="white" fillOpacity="0.75" />
            <rect x="0"  y="11" width="10" height="10" fill="white" fillOpacity="0.75" />
            <rect x="11" y="11" width="10" height="10" fill="white" fillOpacity="0.55" />
          </svg>
          <div>
            <div className="partner-name">Microsoft</div>
            <div className="partner-sub">Partner</div>
          </div>
        </div>

        <div className="partner-divider" />

        {/* AWS */}
        <div className="partner-item">
           <svg width="38" height="24" viewBox="0 0 58 35" fill="none">
        <path d="M16.5 13.2c0 .7.1 1.3.2 1.7.2.4.4.9.7 1.4.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.3.9c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-1-.2-.4-.4-.8-.6-1.4-1.5 1.8-3.4 2.7-5.7 2.7-1.6 0-2.9-.5-3.8-1.4-.9-.9-1.4-2.2-1.4-3.7 0-1.6.6-2.9 1.7-3.9 1.1-1 2.6-1.5 4.5-1.5.6 0 1.3.1 2 .2.7.1 1.4.3 2.2.5V8.3c0-1.4-.3-2.4-.9-3-.6-.6-1.6-.9-3-.9-.6 0-1.3.1-2 .3-.7.2-1.4.4-2 .7-.3.1-.5.2-.6.2-.2 0-.3-.1-.3-.4V4c0-.2 0-.4.1-.5.1-.1.3-.2.5-.3.6-.3 1.4-.6 2.2-.8.9-.2 1.8-.3 2.8-.3 2.1 0 3.7.5 4.7 1.4 1 1 1.5 2.4 1.5 4.4v5.3zm-7.9 3c.6 0 1.2-.1 1.9-.4.7-.3 1.3-.7 1.8-1.3.3-.4.5-.8.6-1.3.1-.5.2-1 .2-1.7v-.8c-.5-.1-1.1-.2-1.7-.3-.6-.1-1.1-.1-1.7-.1-1.2 0-2.1.2-2.7.7-.6.5-.9 1.2-.9 2.1 0 .8.2 1.4.7 1.8.4.4 1 .6 1.8.3zm14.6 2c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.6L19 5.8c-.1-.3-.1-.5-.1-.6 0-.2.1-.4.4-.4h1.7c.2 0 .4 0 .5.1.1.1.2.3.3.5l3.1 12.3 2.9-12.3c.1-.3.2-.5.3-.5.1-.1.3-.1.5-.1h1.4c.2 0 .4 0 .5.1.1.1.2.3.3.5l2.9 12.4 3.2-12.4c.1-.3.2-.5.3-.5.1-.1.3-.1.5-.1h1.6c.2 0 .4.1.4.4 0 .1 0 .2-.1.3 0 .1-.1.2-.1.4l-4.5 12.7c-.1.3-.2.5-.3.5-.1.1-.3.1-.5.1h-1.5c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.5l-2.9-12-2.9 12c-.1.3-.2.5-.3.5-.1.1-.3.1-.5.1h-1.6zm24 .5c-.9 0-1.8-.1-2.7-.3-.9-.2-1.6-.4-2-.7-.3-.2-.4-.4-.5-.6v-1.1c0-.3.1-.4.3-.4.1 0 .2 0 .3.1l.4.2c.6.3 1.3.5 2 .7.7.2 1.5.3 2.2.3 1.1 0 2-.2 2.6-.6.6-.4.9-1 .9-1.7 0-.5-.2-.9-.5-1.2-.3-.3-1-.7-1.9-1l-2.7-.8c-1.4-.4-2.4-1-3-1.8-.6-.8-.9-1.7-.9-2.6 0-.8.2-1.5.5-2.1.4-.6.8-1.1 1.4-1.5.6-.4 1.2-.7 2-.9.7-.2 1.5-.3 2.3-.3.4 0 .8 0 1.2.1.4.1.8.2 1.2.3.4.1.7.2 1 .3.3.1.5.2.7.3.2.1.4.3.5.4.1.1.1.3.1.5v1c0 .3-.1.4-.3.4-.1 0-.3-.1-.6-.2-.9-.4-1.9-.6-3-.6-1 0-1.8.2-2.4.5-.6.3-.8.8-.8 1.5 0 .5.2.9.5 1.2.4.3 1.1.7 2.1 1l2.7.8c1.3.4 2.3 1 2.9 1.7.6.7.9 1.6.9 2.6 0 .8-.2 1.5-.5 2.2-.4.6-.8 1.2-1.5 1.6-.6.4-1.3.8-2.1 1-.9.4-1.8.5-2.8.5z" fill="white"/>
        <path d="M53.4 27.7c-5.8 4.3-14.2 6.6-21.5 6.6-10.2 0-19.3-3.8-26.2-10-.5-.5-.1-1.1.6-.7 7.5 4.3 16.7 6.9 26.3 6.9 6.4 0 13.5-1.3 20-4.1.9-.6 1.7.4.8 1.3z" fill="white"/>
        <path d="M55.9 24.9c-.7-.9-4.6-.4-6.3-.2-.5.1-.6-.4-.1-.7 3.1-2.2 8.2-1.5 8.7-.8.6.7-.2 5.8-3 8.2-.4.4-.9.2-.7-.3.6-1.6 2.1-5.3 1.4-6.2z" fill="white"/>
      </svg>
          <div>
            <div className="partner-name">AWS</div>
            <div className="partner-sub">Partner Network</div>
          </div>
        </div>

        <div className="partner-divider" />

        {/* Google Cloud */}
        <div className="partner-item">
          <div className="gcp-ring">
            <span className="gcp-g">G</span>
          </div>
          <div>
            <div className="partner-name">Google Cloud</div>
            <div className="partner-sub">Partner</div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

const PHRASES = [
  { words: ["Fresh", "Ideas.", "Real", "Ambition.", "Day", "One", "Energy."] },
  { words: ["We", "Build", "Digital", "Products", "That", "Matter."] },
  { words: ["Modern", "Tech.", "Genuine", "Passion.", "Zero", "Bureaucracy."] },
  { words: ["Clean", "Code.", "Honest", "Work.", "Hungry", "Spirit."] },
];

/* Teal → navy stops — each word cycles through a different stop */
const COLORS = ["#3BADB0", "#2E8FA6", "#26729C", "#1E5692", "#1B2E5E"];

export default function TaglineBar() {
  /* Double the array so the seamless loop works */
  const items = [...PHRASES, ...PHRASES];

  return (
    <div className="tagline-bar">
      <style>{`
        .tagline-bar {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid #e2e8ec;
          border-bottom: 1px solid #e2e8ec;
          overflow: hidden;
          position: relative;
        }

        /* Fade edges */
        .tagline-bar::before,
        .tagline-bar::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .tagline-bar::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .tagline-bar::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        .tagline-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: taglineSlide 32s linear infinite;
          padding: 13px 0;
        }

        .tagline-track:hover {
          animation-play-state: paused;
        }

        @keyframes taglineSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .tagline-phrase {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0 2.2rem;
          white-space: nowrap;
          font-family: 'Oxanium', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .tagline-sep {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #cbd5db;
          flex-shrink: 0;
          margin: 0 0.6rem;
        }
      `}</style>

      <div className="tagline-track">
        {items.map((phrase, pi) => (
          <>
            <span key={`phrase-${pi}`} className="tagline-phrase">
              {phrase.words.map((word, wi) => (
                <span
                  key={wi}
                  style={{ color: COLORS[wi % COLORS.length] }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span key={`sep-${pi}`} className="tagline-sep" />
          </>
        ))}
      </div>
    </div>
  );
}
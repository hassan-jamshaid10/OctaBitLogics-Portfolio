"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

/*
  Animated Code Editor
  ────────────────────
  Typing animation restarts every time the section scrolls into view.
  HUD badges are positioned tightly around the editor so they don't
  bleed into the left column.
*/

export default function LivingCharacter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [animKey, setAnimKey] = useState(0);

  /* Restart typing animation every time section enters viewport */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey((k) => k + 1);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="editor-scene" ref={wrapperRef}>
      <style>{`
        .editor-scene {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
        }

        /* ── Window Chrome ── */
        .code-window {
          position: relative;
          width: 380px;
          background: #0d1117;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(167, 255, 249, 0.1);
          z-index: 5;
        }

        .window-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          background: #161b22;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .dot { width: 11px; height: 11px; border-radius: 50%; }
        .dot-r { background: #ff5f57; }
        .dot-y { background: #febc2e; }
        .dot-g { background: #28c840; }

        .window-title {
          flex: 1;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
          margin-right: 40px;
        }

        /* ── Code Area ── */
        .code-body {
          padding: 20px 18px;
          font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 0.78rem;
          line-height: 1.85;
          min-height: 220px;
        }

        .code-line {
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          border-right: 2px solid transparent;
          animation: type-line var(--dur) steps(var(--chars), end) var(--delay) forwards;
        }

        .code-line.cursor-line {
          animation:
            type-line var(--dur) steps(var(--chars), end) var(--delay) forwards,
            blink-cursor 0.7s step-end var(--delay) 12;
        }

        @keyframes type-line {
          0%   { width: 0; }
          100% { width: var(--target-w); }
        }

        @keyframes blink-cursor {
          0%, 100% { border-right-color: transparent; }
          50%      { border-right-color: #a7fff9; }
        }

        /* Syntax colours */
        .kw  { color: #ff7b72; }
        .fn  { color: #d2a8ff; }
        .str { color: #a5d6ff; }
        .cm  { color: #8b949e; }
        .op  { color: #79c0ff; }
        .var { color: #ffa657; }
        .txt { color: #c9d1d9; }
        .num { color: #79c0ff; }

        .ln {
          display: inline-block;
          width: 28px;
          color: rgba(255,255,255,0.15);
          text-align: right;
          margin-right: 16px;
          user-select: none;
        }

        /* ── HUD Badges (tight to the editor) ── */
        .hud-wrap {
          position: relative;
          z-index: 10;
        }

        .hud-badge {
          position: absolute;
          background: linear-gradient(135deg, rgba(27, 46, 94, 0.7), rgba(3, 6, 14, 0.5));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(167, 255, 249, 0.2);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px rgba(59, 173, 176, 0.1);
          z-index: 20;
          pointer-events: none;
          animation: badge-float 5s ease-in-out infinite;
        }

        .hud-badge::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0; width: 3px;
          background: #a7fff9;
          border-radius: 4px 0 0 4px;
        }

        .hud-title {
          font-family: 'Oxanium', monospace;
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .hud-desc {
          font-family: 'DM Sans', sans-serif;
          color: rgba(167, 255, 249, 0.75);
          font-size: 0.65rem;
        }

        /* Positioned relative to .hud-wrap which wraps the code-window */
        .b-1 { top: -50px; right: -50px; animation-delay: 0.5s; }
        .b-2 { bottom: 60px; left: -140px; animation-delay: 1.5s; }
        .b-3 { bottom: -50px; right: -30px; animation-delay: 0s; }

        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 860px) {
          .code-window { width: 310px; }
          .b-1 { top: -45px; right: -15px; }
          .b-2 { bottom: 50px; left: -20px; }
          .b-3 { bottom: -45px; right: -10px; }
        }

        @media (max-width: 480px) {
          .code-window { width: 265px; }
          .code-body { font-size: 0.65rem; padding: 14px 10px; }
          .b-2 { display: none; }
        }
      `}</style>

      <div className="hud-wrap">
        {/* ── HUD Badges ── */}
        <div className="hud-badge b-1">
          <span className="hud-title">Fearless Creativity</span>
          <span className="hud-desc">Gen-Z perspective &amp; design</span>
        </div>
        <div className="hud-badge b-2">
          <span className="hud-title">Fiercely Modern</span>
          <span className="hud-desc">Passion for bleeding-edge tech</span>
        </div>
        <div className="hud-badge b-3">
          <span className="hud-title">Enterprise Execution</span>
          <span className="hud-desc">Hard-earned industry standards</span>
        </div>

        {/* ── Code Window ── */}
        <div className="code-window">
          <div className="window-bar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="window-title">solution.ts</span>
          </div>

          {/* key={animKey} forces React to re-mount, restarting all CSS animations */}
          <div className="code-body" key={animKey}>
            <div className="code-line" style={{ "--chars": 30, "--dur": "0.9s", "--delay": "0.2s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">1</span>
              <span className="cm">{"// Building something amazing"}</span>
            </div>

            <div className="code-line" style={{ "--chars": 1, "--dur": "0.1s", "--delay": "1.1s", "--target-w": "44px" } as React.CSSProperties}>
              <span className="ln">2</span>
              <span className="txt">&nbsp;</span>
            </div>

            <div className="code-line" style={{ "--chars": 38, "--dur": "1.0s", "--delay": "1.3s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">3</span>
              <span className="kw">const </span>
              <span className="var">solution</span>
              <span className="op"> = </span>
              <span className="kw">await </span>
              <span className="fn">createProject</span>
              <span className="op">({"{"}</span>
            </div>

            <div className="code-line" style={{ "--chars": 28, "--dur": "0.7s", "--delay": "2.4s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">4</span>
              <span className="txt">{"  "}</span>
              <span className="var">creativity</span>
              <span className="op">: </span>
              <span className="str">&quot;fearless&quot;</span>
              <span className="op">,</span>
            </div>

            <div className="code-line" style={{ "--chars": 25, "--dur": "0.6s", "--delay": "3.2s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">5</span>
              <span className="txt">{"  "}</span>
              <span className="var">tech</span>
              <span className="op">: </span>
              <span className="str">&quot;cutting-edge&quot;</span>
              <span className="op">,</span>
            </div>

            <div className="code-line" style={{ "--chars": 26, "--dur": "0.7s", "--delay": "3.9s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">6</span>
              <span className="txt">{"  "}</span>
              <span className="var">quality</span>
              <span className="op">: </span>
              <span className="str">&quot;enterprise&quot;</span>
              <span className="op">,</span>
            </div>

            <div className="code-line" style={{ "--chars": 22, "--dur": "0.6s", "--delay": "4.7s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">7</span>
              <span className="txt">{"  "}</span>
              <span className="var">passion</span>
              <span className="op">: </span>
              <span className="num">Infinity</span>
              <span className="op">,</span>
            </div>

            <div className="code-line" style={{ "--chars": 4, "--dur": "0.2s", "--delay": "5.4s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">8</span>
              <span className="op">{"})"}</span>
              <span className="op">;</span>
            </div>

            <div className="code-line" style={{ "--chars": 1, "--dur": "0.1s", "--delay": "5.8s", "--target-w": "44px" } as React.CSSProperties}>
              <span className="ln">9</span>
              <span className="txt">&nbsp;</span>
            </div>

            <div className="code-line cursor-line" style={{ "--chars": 30, "--dur": "0.9s", "--delay": "6.1s", "--target-w": "100%" } as React.CSSProperties}>
              <span className="ln">10</span>
              <span className="kw">await </span>
              <span className="var">solution</span>
              <span className="op">.</span>
              <span className="fn">deploy</span>
              <span className="op">(</span>
              <span className="str">&quot;production&quot;</span>
              <span className="op">)</span>
              <span className="op">;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

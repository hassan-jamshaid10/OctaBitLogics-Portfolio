"use client";

import { useEffect, useRef, useState } from "react";

interface HeroProps {
  onNavClick: (href: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Subtle mouse parallax on 3-D scene */
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const onMove = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window;
      const rx = ((e.clientY / H) - 0.5) * 14;
      const ry = ((e.clientX / W) - 0.5) * -14;
      scene.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home">
      <style>{`
        /* ── HERO SECTION ── */
        #home {
          background: var(--off-white);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 80px;
        }

        /* ── PERSPECTIVE GRID FLOOR ── */
        .grid-floor {
          position: absolute;
          bottom: 0; left: -20%; right: -20%;
          height: 55%;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(55deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
          pointer-events: none;
        }

        /* Top radial glow */
        .hero-glow {
          position: absolute;
          top: -10%; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse at center,
            rgba(59,173,176,0.12) 0%,
            rgba(59,173,176,0.04) 50%,
            transparent 70%);
          pointer-events: none;
        }

        /* ── HERO LAYOUT ── */
        .hero-layout {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
          padding: 0 2rem;
        }

        /* ── LEFT: TEXT CONTENT ── */
        .hero-content { position: relative; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(59,173,176,0.09);
          border: 1px solid rgba(59,173,176,0.28);
          border-radius: 100px;
          padding: 5px 14px 5px 8px;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }

        .hero-badge.in {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-dot {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--teal), var(--navy));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .badge-dot-inner {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: white;
          animation: badgePulse 2s ease infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(0.7); opacity: 0.6; }
        }

        .badge-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
        }

        /* Headline */
        .hero-h1 {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          color: var(--navy);
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .hero-h1.in { opacity: 1; transform: translateY(0); }

        .hero-h1 .accent {
          background: linear-gradient(135deg, var(--teal) 0%, var(--navy) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 440px;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.32s, transform 0.7s ease 0.32s;
        }

        .hero-p.in { opacity: 1; transform: translateY(0); }

        /* CTA row */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.44s, transform 0.7s ease 0.44s;
        }

        .hero-ctas.in { opacity: 1; transform: translateY(0); }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--teal) 0%, var(--navy) 100%);
          color: var(--white);
          border: none;
          padding: 13px 28px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(59,173,176,0.3);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(59,173,176,0.4);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Oxanium', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: transparent;
          border: 1.5px solid var(--border-strong);
          color: var(--navy);
          padding: 12px 24px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cta-secondary:hover {
          border-color: var(--teal);
          color: var(--teal);
          box-shadow: 0 0 20px var(--teal-glow);
        }

        /* Stats row */
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s;
        }

        .hero-stats.in { opacity: 1; transform: translateY(0); }

        .stat-num {
          font-family: 'Oxanium', monospace;
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--teal), var(--navy));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 3px;
          letter-spacing: 0.04em;
        }

        /* ── RIGHT: 3-D SCENE ── */
        .hero-scene-wrap {
          perspective: 900px;
          perspective-origin: 50% 40%;
          opacity: 0;
          transition: opacity 0.9s ease 0.3s;
        }

        .hero-scene-wrap.in { opacity: 1; }

        .hero-scene {
          width: 100%;
          aspect-ratio: 1 / 1;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.12s ease-out;
          max-width: 460px;
          margin: 0 auto;
        }

        /* ── MAIN ROTATING CUBE ── */
        .cube-wrap {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 130px; height: 130px;
          transform-style: preserve-3d;
          animation: cubeRotate 14s linear infinite;
        }

        @keyframes cubeRotate {
          from { transform: translate(-50%,-50%) rotateX(22deg) rotateY(0deg); }
          to   { transform: translate(-50%,-50%) rotateX(22deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 130px; height: 130px;
          border: 1.5px solid rgba(59,173,176,0.45);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(6px);
        }

        .cube-face.front  { background: rgba(59,173,176,0.08); transform: translateZ(65px); }
        .cube-face.back   { background: rgba(27,46,94,0.08);   transform: rotateY(180deg) translateZ(65px); }
        .cube-face.right  { background: rgba(59,173,176,0.05); transform: rotateY(90deg)  translateZ(65px); }
        .cube-face.left   { background: rgba(27,46,94,0.05);   transform: rotateY(-90deg) translateZ(65px); }
        .cube-face.top    { background: rgba(59,173,176,0.06); transform: rotateX(90deg)  translateZ(65px); }
        .cube-face.bottom { background: rgba(27,46,94,0.04);   transform: rotateX(-90deg) translateZ(65px); }

        .cube-face-inner {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(59,173,176,0.5), rgba(27,46,94,0.5));
          border: 1px solid rgba(255,255,255,0.3);
        }

        /* ── FLOATING INFO CARDS ── */
        .float-card {
          position: absolute;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 12px 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(59,173,176,0.12), 0 2px 8px rgba(0,0,0,0.06);
          white-space: nowrap;
          transform-style: preserve-3d;
        }

        .float-card-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .float-card-value {
          font-family: 'Oxanium', monospace;
          font-size: 1.1rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--teal), var(--navy));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .float-card-dot {
          width: 6px; height: 6px;
          background: var(--teal);
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          vertical-align: middle;
          animation: blip 1.6s ease infinite;
        }

        @keyframes blip {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.4; transform: scale(0.6); }
        }

        /* Card 1 — top-left */
        .fc1 {
          top: 8%; left: 2%;
          transform: translateZ(40px) rotate(-4deg);
          animation: float1 5.5s ease-in-out infinite;
        }

        /* Card 2 — top-right */
        .fc2 {
          top: 4%; right: 0%;
          transform: translateZ(55px) rotate(3deg);
          animation: float2 6.2s ease-in-out infinite;
        }

        /* Card 3 — bottom-left */
        .fc3 {
          bottom: 10%; left: 0%;
          transform: translateZ(35px) rotate(2deg);
          animation: float3 5s ease-in-out infinite;
        }

        /* Card 4 — bottom-right */
        .fc4 {
          bottom: 6%; right: 1%;
          transform: translateZ(50px) rotate(-3deg);
          animation: float4 6.8s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translateZ(40px)  rotate(-4deg) translateY(0px);   }
          50%      { transform: translateZ(40px)  rotate(-4deg) translateY(-10px); }
        }

        @keyframes float2 {
          0%,100% { transform: translateZ(55px)  rotate(3deg)  translateY(0px);   }
          50%      { transform: translateZ(55px)  rotate(3deg)  translateY(-14px); }
        }

        @keyframes float3 {
          0%,100% { transform: translateZ(35px)  rotate(2deg)  translateY(0px);   }
          50%      { transform: translateZ(35px)  rotate(2deg)  translateY(-8px);  }
        }

        @keyframes float4 {
          0%,100% { transform: translateZ(50px)  rotate(-3deg) translateY(0px);   }
          50%      { transform: translateZ(50px)  rotate(-3deg) translateY(-12px); }
        }

        /* ── ORBITING RING ── */
        .orbit-ring {
          position: absolute;
          top: 50%; left: 50%;
          width: 240px; height: 240px;
          margin-top: -120px; margin-left: -120px;
          border-radius: 50%;
          border: 1px dashed rgba(59,173,176,0.3);
          transform-style: preserve-3d;
          animation: orbitSpin 18s linear infinite;
        }

        @keyframes orbitSpin {
          from { transform: rotateX(65deg) rotateZ(0deg); }
          to   { transform: rotateX(65deg) rotateZ(360deg); }
        }

        .orbit-dot {
          position: absolute;
          top: -5px; left: 50%;
          width: 10px; height: 10px;
          margin-left: -5px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--teal), var(--navy));
          box-shadow: 0 0 12px var(--teal-glow-strong);
        }

        /* Second orbit ring */
        .orbit-ring-2 {
          position: absolute;
          top: 50%; left: 50%;
          width: 320px; height: 320px;
          margin-top: -160px; margin-left: -160px;
          border-radius: 50%;
          border: 1px solid rgba(27,46,94,0.12);
          transform-style: preserve-3d;
          animation: orbitSpin2 26s linear infinite;
        }

        @keyframes orbitSpin2 {
          from { transform: rotateX(65deg) rotateZ(120deg); }
          to   { transform: rotateX(65deg) rotateZ(480deg); }
        }

        .orbit-dot-2 {
          position: absolute;
          top: -4px; left: 50%;
          width: 8px; height: 8px;
          margin-left: -4px;
          border-radius: 50%;
          background: var(--navy);
          opacity: 0.5;
        }

        /* ── CORNER ACCENT DOTS ── */
        .corner-accent {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
        }

        .ca1 {
          top: 10%; right: 5%;
          width: 180px; height: 180px;
          background: rgba(59,173,176,0.12);
          animation: pulseBg 4s ease-in-out infinite;
        }

        .ca2 {
          bottom: 15%; left: 5%;
          width: 120px; height: 120px;
          background: rgba(27,46,94,0.08);
          animation: pulseBg 5s ease-in-out infinite 1s;
        }

        @keyframes pulseBg {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-layout { grid-template-columns: 1fr; text-align: center; }
          .hero-p { margin: 0 auto 2rem; }
          .hero-ctas { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-scene-wrap { max-width: 320px; margin: 0 auto; }
          .hero-h1 { font-size: clamp(2rem, 6vw, 2.8rem); }
        }

        @media (max-width: 480px) {
          .hero-layout { padding: 0 1.25rem; }
          .fc1, .fc3 { left: -10px; }
          .fc2, .fc4 { right: -10px; }
          .float-card { padding: 9px 12px; }
          .float-card-value { font-size: 0.95rem; }
        }
      `}</style>

      {/* Background effects */}
      <div className="grid-floor" />
      <div className="hero-glow" />
      <div className="ca1 corner-accent" />
      <div className="ca2 corner-accent" />

      <div className="hero-layout">
        {/* ── LEFT: COPY ── */}
        <div className="hero-content">
          <div className={`hero-badge${mounted ? " in" : ""}`}>
            <div className="badge-dot">
              <div className="badge-dot-inner" />
            </div>
            <span className="badge-label">Next-Gen Platform</span>
          </div>

          <h1 className={`hero-h1${mounted ? " in" : ""}`}>
            We Build<br />
            <span className="accent">Digital Products</span><br />
            That Matter
          </h1>

          <p className={`hero-p${mounted ? " in" : ""}`}>
            A forward-thinking software agency crafting intelligent platforms, sleek interfaces, and scalable systems — built for teams that refuse to settle.
          </p>

          <div className={`hero-ctas${mounted ? " in" : ""}`}>
            <button className="cta-primary" onClick={() => onNavClick("#services")}>
              Our Services →
            </button>
            <button className="cta-secondary" onClick={() => onNavClick("#about")}>
              Learn More
            </button>
          </div>

          <div className={`hero-stats${mounted ? " in" : ""}`}>
            {[
              { num: "50+",  label: "Projects Shipped" },
              { num: "98%",  label: "Client Satisfaction" },
              { num: "5yrs", label: "Industry Experience" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 3-D SCENE ── */}
        <div className={`hero-scene-wrap${mounted ? " in" : ""}`}>
          <div className="hero-scene" ref={sceneRef}>

            {/* Orbit rings */}
            <div className="orbit-ring">
              <div className="orbit-dot" />
            </div>
            <div className="orbit-ring-2">
              <div className="orbit-dot-2" />
            </div>

            {/* Rotating cube */}
            <div className="cube-wrap">
              <div className="cube-face front">
                <div className="cube-face-inner" />
              </div>
              <div className="cube-face back">
                <div className="cube-face-inner" />
              </div>
              <div className="cube-face right" />
              <div className="cube-face left" />
              <div className="cube-face top" />
              <div className="cube-face bottom" />
            </div>

            {/* Floating info cards */}
            <div className="float-card fc1">
              <div className="float-card-label">
                <span className="float-card-dot" />Projects
              </div>
              <div className="float-card-value">50+</div>
            </div>

            <div className="float-card fc2">
              <div className="float-card-label">
                <span className="float-card-dot" />Uptime
              </div>
              <div className="float-card-value">99.9%</div>
            </div>

            <div className="float-card fc3">
              <div className="float-card-label">
                <span className="float-card-dot" />Response
              </div>
              <div className="float-card-value">&lt; 200ms</div>
            </div>

            <div className="float-card fc4">
              <div className="float-card-label">
                <span className="float-card-dot" />Clients
              </div>
              <div className="float-card-value">30+</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
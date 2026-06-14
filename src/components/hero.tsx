"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavClick: (href: string) => void;
}

/*
 * Intro timeline (seconds):
 *  0.0 – 1.5   circuit traces route in from the edges
 *  0.3 – 2.0   hexagon "O" + node mark wire up
 *  0.5 – 3.0   CTABIT → LO → GICS draw stroke-by-stroke
 *  2.2 – 3.2   letters fill SOLID brand colors (the real logo)
 *  2.9 – 3.8   growth arrow completes the logo (pierces the green O)
 *  4.5 – 5.5   logo dissolves upward
 *  4.7 +       taglines rise in
 */
const CONTENT_DELAY = 4.7;

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

/* onNavClick is kept in the props interface so existing <Hero onNavClick={...} />
   call sites don't break, but the hero no longer renders CTAs of its own. */
export default function Hero(_props: HeroProps) {
  // Refs to the green "O" glyph and the three arrow paths so we can anchor
  // the growth arrow to the O's *measured* position — keeping it locked through
  // the letter at every viewport width (no more drifting on resize).
  const oRef = useRef<SVGTSpanElement>(null);
  const casingRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGPathElement>(null);
  const [, force] = useState(0);

  const placeArrow = useCallback(() => {
    const o = oRef.current;
    if (!o) return;
    let cx: number, top: number, bot: number;
    try {
      const start = o.getStartPositionOfChar(0);
      const end = o.getEndPositionOfChar(0);
      const ext = o.getExtentOfChar(0);
      cx = (start.x + end.x) / 2;
      top = ext.y;
      bot = ext.y + ext.height;
    } catch {
      const b = o.getBBox();
      cx = b.x + b.width / 2;
      top = b.y;
      bot = b.y + b.height;
    }

    // Diagonal growth arrow: starts lower-left just below the O,
    // rises up-right to just above it — piercing the glyph.
    const x1 = cx - 26, y1 = bot + 4;
    const x2 = cx + 30, y2 = top - 26;
    const d = `M${x1} ${y1} L ${x2} ${y2}`;

    casingRef.current?.setAttribute("d", d);
    lineRef.current?.setAttribute("d", d);

    // Arrowhead: two short strokes back from the tip, along the arrow's angle.
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const len = 26;
    const a1 = ang + Math.PI * 0.78;
    const a2 = ang - Math.PI * 0.78;
    const hx1 = x2 + len * Math.cos(a1), hy1 = y2 + len * Math.sin(a1);
    const hx2 = x2 + len * Math.cos(a2), hy2 = y2 + len * Math.sin(a2);
    headRef.current?.setAttribute("d", `M${x2} ${y2} L ${hx1} ${hy1} M${x2} ${y2} L ${hx2} ${hy2}`);
  }, []);

  useEffect(() => {
    // Place once fonts are ready (glyph metrics need the loaded font), then on resize.
    const run = () => { placeArrow(); force((n: number) => n + 1); };
    run();
    // Re-measure after webfont loads (Manrope) — metrics shift once it swaps in.
    if (typeof document !== "undefined" && (document as Document & { fonts?: FontFaceSet }).fonts) {
      (document as Document & { fonts: FontFaceSet }).fonts.ready.then(run).catch(() => {});
    }
    const t1 = setTimeout(run, 300);
    const t2 = setTimeout(run, 1200);
    window.addEventListener("resize", placeArrow, { passive: true });
    return () => {
      window.removeEventListener("resize", placeArrow);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, [placeArrow]);

  return (
    <section id="home">
      <style>{`
        /* ── Hero Section ── */
        #home {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 72px;
          overflow: hidden;
          background: #faf9fd;
        }

        /* ── Ambient blobs ── */
        .hero-blob-top {
          position: absolute; top: -15%; right: -10%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(46, 204, 64, 0.13) 0%, transparent 70%);
          border-radius: 50%; filter: blur(120px);
          pointer-events: none; z-index: 0;
        }
        .hero-blob-bottom {
          position: absolute; bottom: -10%; left: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0, 32, 70, 0.08) 0%, transparent 70%);
          border-radius: 50%; filter: blur(100px);
          pointer-events: none; z-index: 0;
        }

        /* ══ 3D Circuit Stage ══ */
        .circuit-stage {
          position: absolute; inset: 0; z-index: 0;
          pointer-events: none;
          perspective: 1200px;
          perspective-origin: 50% 28%;
        }
        .circuit-grid {
          position: absolute; inset: -20% -10%;
          background-image: radial-gradient(rgba(0, 32, 70, 0.10) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          transform: rotateX(38deg) translateY(6%);
          transform-origin: 50% 60%;
          -webkit-mask-image: radial-gradient(ellipse 75% 62% at 50% 52%, black 30%, transparent 72%);
          mask-image: radial-gradient(ellipse 75% 62% at 50% 52%, black 30%, transparent 72%);
        }
        .circuit-plane {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transform: rotateX(14deg);
          transform-origin: 50% 40%;
          animation: planefloat 9s ease-in-out 5.5s infinite;
        }
        @keyframes planefloat {
          0%, 100% { transform: rotateX(14deg) translateY(0); }
          50%      { transform: rotateX(15.5deg) translateY(-12px); }
        }
        .circuit-svg { width: min(100%, 178vh); height: auto; overflow: visible; }

        /* ── Circuit traces draw in ── */
        .trace {
          fill: none; stroke: #002046; stroke-opacity: 0.15; stroke-width: 1.6;
          stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: draw 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .trace.green { stroke: #2ECC40; stroke-opacity: 0.38; }
        @keyframes draw { to { stroke-dashoffset: 0; } }

        .node {
          fill: #2ECC40; opacity: 0;
          transform-box: fill-box; transform-origin: center;
          animation: nodein 0.5s ease forwards, nodepulse 3.2s ease-in-out 2.4s infinite;
        }
        .node.navy { fill: #002046; }
        @keyframes nodein { from { opacity: 0; transform: scale(0); } to { opacity: 0.8; transform: scale(1); } }
        @keyframes nodepulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.25; } }

        /* ── Wordmark: stroke-drawn, then fills SOLID brand colors ── */
        .word { font-family: 'Manrope', sans-serif; font-weight: 800; letter-spacing: 2px; }
        .word tspan {
          fill: #002046; fill-opacity: 0;
          stroke: #002046; stroke-opacity: 0.55; stroke-width: 1.5;
          stroke-dasharray: 700; stroke-dashoffset: 700;
          animation: drawword 2s cubic-bezier(0.6, 0, 0.3, 1) forwards, fillfull 0.9s ease forwards;
        }
        .word tspan.green { fill: #2ECC40; stroke: #2ECC40; }
        @keyframes drawword { to { stroke-dashoffset: 0; } }
        @keyframes fillfull { to { fill-opacity: 1; stroke-opacity: 0; } }
        .word .t1 { animation-delay: 0.5s, 2.2s; }
        .word .t2 { animation-delay: 0.9s, 2.5s; }   /* L */
        .word .t3 { animation-delay: 1.0s, 2.6s; }   /* O (green, arrow pierces this) */
        .word .t4 { animation-delay: 1.3s, 2.8s; }   /* GICS */

        /* ── Hexagon "O" + circuit-node mark ── */
        .hex {
          fill: none; stroke: #002046; stroke-width: 9;
          stroke-linejoin: round; stroke-opacity: 0.55;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: draw 1.2s 0.3s cubic-bezier(0.65, 0, 0.35, 1) forwards, hexfull 0.9s 2.2s ease forwards;
        }
        @keyframes hexfull { to { stroke-opacity: 1; } }
        .hexnet line {
          stroke: #2ECC40; stroke-opacity: 0.9; stroke-width: 3.4; stroke-linecap: round;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: draw 0.6s ease forwards;
        }

        /* ── Growth arrow — pierces the green O. White casing lets it weave over. ── */
        .arrow, .arrowhead-line {
          fill: none; stroke: #2ECC40; stroke-opacity: 0.8; stroke-width: 7;
          stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 1; stroke-dashoffset: 1;
        }
        .arrow-casing {
          fill: none; stroke: #faf9fd; stroke-width: 15; stroke-linecap: round;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: draw 0.7s 2.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .arrow { animation: draw 0.7s 2.9s cubic-bezier(0.65, 0, 0.35, 1) forwards, arrowfull 0.4s 3s ease forwards; }
        .arrowhead-line { animation: draw 0.3s 3.5s ease forwards, arrowfull 0.4s 3.5s ease forwards; }
        @keyframes arrowfull { to { stroke-opacity: 1; } }

        /* ── Logo holds, then dissolves upward ── */
        .logo-out { animation: logoout 1s cubic-bezier(0.6, 0, 0.3, 1) 4.5s forwards; }
        @keyframes logoout {
          to { opacity: 0; filter: blur(10px); transform: translateY(-26px); }
        }

        /* ══ Foreground — enters as the logo dissolves ══ */
        .hero-inner {
          position: relative; z-index: 1;
          width: 100%; max-width: 960px;
          margin: 0 auto; padding: 1.5rem 40px;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
        }

        .hero-eyebrow {
          display: flex; align-items: center; gap: 18px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.22em; color: #74777f;
          margin-bottom: 1.75rem; white-space: nowrap;
        }
        .eyebrow-rule {
          display: inline-block; width: 44px; height: 1px;
          background: linear-gradient(90deg, transparent, #2ECC40);
        }
        .eyebrow-rule:last-child { background: linear-gradient(90deg, #2ECC40, transparent); }

        .hero-h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.9rem, 6.6vw, 5.4rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; color: #002046; margin: 0;
        }
        .hero-h1 .accent {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Rotating tagline */
        .rotator { display: block; height: 1.12em; overflow: hidden; }
        .rotator-list {
          display: block;
          animation: rotate-words 10s cubic-bezier(0.7, 0, 0.2, 1) ${CONTENT_DELAY + 1.5}s infinite;
        }
        .rotator-list span { display: block; height: 1.12em; }
        @keyframes rotate-words {
          0%, 17%   { transform: translateY(0); }
          25%, 42%  { transform: translateY(-1.12em); }
          50%, 67%  { transform: translateY(-2.24em); }
          75%, 92%  { transform: translateY(-3.36em); }
          100%      { transform: translateY(-4.48em); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .circuit-plane { transform: rotateX(10deg); animation-name: planefloat-tablet; }
          @keyframes planefloat-tablet {
            0%, 100% { transform: rotateX(10deg) translateY(0); }
            50%      { transform: rotateX(11deg) translateY(-10px); }
          }
          .hero-inner { max-width: 760px; }
        }
        @media (max-width: 768px) {
          .hero-inner { padding: 1.25rem 28px; }
          .circuit-svg { width: 140%; }
        }
        @media (max-width: 600px) {
          #home { padding-top: 64px; }
          .hero-inner { padding: 1rem 22px; }
          .hero-h1 { font-size: clamp(2.2rem, 9vw, 3rem); }
          .hero-eyebrow {
            font-size: 0.6rem; gap: 10px; letter-spacing: 0.16em;
            margin-bottom: 1.25rem; white-space: normal; justify-content: center;
          }
          .eyebrow-rule { width: 22px; }
          .circuit-svg { width: 150%; }
          .circuit-grid { background-size: 26px 26px; }
        }
        @media (max-width: 400px) {
          .hero-h1 { font-size: 2rem; }
          .hero-eyebrow { font-size: 0.54rem; letter-spacing: 0.12em; }
        }

        /* ── Accessibility: skip the intro for reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .trace, .node, .word tspan, .hex, .hexnet line,
          .arrow, .arrow-casing, .arrowhead-line,
          .circuit-plane, .logo-out, .rotator-list {
            animation: none !important;
          }
          .trace { stroke-dashoffset: 0; }
          .node { opacity: 0.8; }
          .logo-out { opacity: 0; }
        }
      `}</style>

      {/* Ambient blobs */}
      <div className="hero-blob-top" />
      <div className="hero-blob-bottom" />

      {/* ══ 3D circuit board — draws the logo, fills it solid, then dissolves ══ */}
      <div className="circuit-stage" aria-hidden="true">
        <div className="circuit-grid" />
        <div className="circuit-plane">
          <svg className="circuit-svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid meet">
            {/* Circuit traces routing in from every edge */}
            <g>
              <path className="trace" pathLength={1} style={{ animationDelay: "0.05s" }} d="M-60 140 H 360 L 420 200 H 700" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.25s" }} d="M1500 110 H 1100 L 1040 170 H 820 L 780 210" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.4s" }} d="M-60 660 H 300 L 360 600 H 560 L 600 560" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.55s" }} d="M1500 680 H 1180 L 1120 620 H 900" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.2s" }} d="M180 -40 V 180 L 240 240 V 320" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.5s" }} d="M1290 -40 V 160 L 1230 220 V 310" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.65s" }} d="M460 840 V 680 L 520 620 V 540" />
              <path className="trace" pathLength={1} style={{ animationDelay: "0.75s" }} d="M1010 840 V 700 L 950 640 V 550" />
              <path className="trace green" pathLength={1} style={{ animationDelay: "0.35s" }} d="M-60 320 H 90 L 130 360" />
              <path className="trace green" pathLength={1} style={{ animationDelay: "0.7s" }} d="M1500 430 H 1330 L 1290 470" />
              <path className="trace green" pathLength={1} style={{ animationDelay: "0.9s" }} d="M720 -40 V 140 L 760 180 V 250" />
              <path className="trace green" pathLength={1} style={{ animationDelay: "1.05s" }} d="M620 840 V 660 L 580 620 V 520" />
            </g>

            {/* Solder nodes at trace terminals */}
            <g>
              <circle className="node navy" cx={700} cy={200} r={4} style={{ animationDelay: "1.5s, 2.4s" }} />
              <circle className="node navy" cx={780} cy={210} r={4} style={{ animationDelay: "1.7s, 2.6s" }} />
              <circle className="node navy" cx={600} cy={560} r={4} style={{ animationDelay: "1.9s, 2.8s" }} />
              <circle className="node navy" cx={900} cy={620} r={4} style={{ animationDelay: "2.0s, 3.0s" }} />
              <circle className="node" cx={240} cy={320} r={4.5} style={{ animationDelay: "1.6s, 2.5s" }} />
              <circle className="node" cx={1230} cy={310} r={4.5} style={{ animationDelay: "1.8s, 2.7s" }} />
              <circle className="node" cx={520} cy={540} r={4.5} style={{ animationDelay: "2.0s, 2.9s" }} />
              <circle className="node" cx={950} cy={550} r={4.5} style={{ animationDelay: "2.1s, 3.1s" }} />
              <circle className="node" cx={130} cy={360} r={5} style={{ animationDelay: "1.5s, 2.4s" }} />
              <circle className="node" cx={1290} cy={470} r={5} style={{ animationDelay: "1.9s, 2.8s" }} />
              <circle className="node" cx={760} cy={250} r={5} style={{ animationDelay: "2.2s, 3.0s" }} />
              <circle className="node" cx={580} cy={520} r={5} style={{ animationDelay: "2.3s, 3.2s" }} />
            </g>

            {/* ── Logo: draws, fills solid, holds, then dissolves ── */}
            <g className="logo-out">
              <g transform="translate(75, 20)">
                {/* Hexagon "O" with circuit-node mark */}
                <g transform="translate(70, 330)">
                  <path className="hex" pathLength={1} d="M62 4 L114 32 V 92 L62 120 L10 92 V 32 Z" />
                  <g className="hexnet">
                    <line pathLength={1} x1={62} y1={62} x2={62} y2={34} style={{ animationDelay: "1.3s" }} />
                    <line pathLength={1} x1={62} y1={62} x2={86} y2={48} style={{ animationDelay: "1.45s" }} />
                    <line pathLength={1} x1={62} y1={62} x2={86} y2={78} style={{ animationDelay: "1.6s" }} />
                    <line pathLength={1} x1={62} y1={62} x2={62} y2={92} style={{ animationDelay: "1.75s" }} />
                    <line pathLength={1} x1={62} y1={62} x2={38} y2={78} style={{ animationDelay: "1.9s" }} />
                    <line pathLength={1} x1={62} y1={62} x2={38} y2={48} style={{ animationDelay: "2.05s" }} />
                  </g>
                  <circle className="node" cx={62} cy={62} r={6} style={{ animationDelay: "2.1s, 3.0s" }} />
                  <circle className="node" cx={62} cy={34} r={4.5} style={{ animationDelay: "1.45s, 2.6s" }} />
                  <circle className="node" cx={86} cy={48} r={4.5} style={{ animationDelay: "1.6s, 2.7s" }} />
                  <circle className="node" cx={86} cy={78} r={4.5} style={{ animationDelay: "1.75s, 2.8s" }} />
                  <circle className="node" cx={62} cy={92} r={4.5} style={{ animationDelay: "1.9s, 2.9s" }} />
                  <circle className="node" cx={38} cy={78} r={4.5} style={{ animationDelay: "2.05s, 3.0s" }} />
                  <circle className="node" cx={38} cy={48} r={4.5} style={{ animationDelay: "2.2s, 3.1s" }} />
                </g>

                {/* Wordmark — the green "O" (t3) is measured so the arrow locks to it */}
                <text className="word" x={206} y={438} fontSize={132}>
                  <tspan className="t1">CTABIT</tspan>
                  <tspan className="t2 green">L</tspan>
                  <tspan className="t3 green" ref={oRef}>O</tspan>
                  <tspan className="t4">GICS</tspan>
                </text>

                {/* Growth arrow — d attributes set at runtime, anchored to the O */}
                <path className="arrow-casing" ref={casingRef} pathLength={1} d="" />
                <path className="arrow" ref={lineRef} pathLength={1} d="" />
                <path className="arrowhead-line" ref={headRef} pathLength={1} d="" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* ══ Taglines — enter as the logo dissolves ══ */}
      <div className="hero-inner">
        <motion.div
          className="hero-eyebrow"
          custom={CONTENT_DELAY}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="eyebrow-rule" />
          OCTABIT LOGICS&nbsp;&nbsp;·&nbsp;&nbsp;SOFTWARE STUDIO
          <span className="eyebrow-rule" />
        </motion.div>

        <motion.h1
          className="hero-h1"
          custom={CONTENT_DELAY + 0.15}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          We design, build &amp; ship
          <span className="rotator">
            <span className="rotator-list">
              <span className="accent">real products.</span>
              <span className="accent">smart services.</span>
              <span className="accent">AI that works.</span>
              <span className="accent">what&rsquo;s next.</span>
              <span className="accent" aria-hidden="true">real products.</span>
            </span>
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
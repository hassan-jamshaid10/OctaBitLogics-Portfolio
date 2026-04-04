"use client";

import { motion, useInView, useAnimationControls } from "framer-motion";
import React, { useRef, useEffect } from "react";

let globalFastCycleInitiated = false;

export default function BackgroundNightfall({
  nightGradient = "linear-gradient(145deg, #0f1c3f 0%, #080d1e 48%, #03060e 100%)"
}: {
  nightGradient?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const overlayControls = useAnimationControls();
  const starsControls = useAnimationControls();

  useEffect(() => {
    const handleSync = (e: Event) => {
      const { phase } = (e as CustomEvent).detail;
      if (phase === "fast-night") {
        overlayControls.start({ opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } });
        starsControls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } });
      } else if (phase === "fast-day") {
        overlayControls.start({ opacity: 0, transition: { duration: 6, ease: "easeInOut" } });
        starsControls.start({ opacity: 0, scale: 1.05, y: -20, transition: { duration: 6, ease: "easeInOut" } });
      } else if (phase === "loop") {
        overlayControls.start({
          opacity: [0, 1, 0],
          transition: { duration: 24, ease: "easeInOut", repeat: Infinity, times: [0, 0.5, 1], repeatType: "loop" }
        });
        starsControls.start({
          opacity: [0, 1, 0],
          scale: [1.05, 1, 1.05],
          y: [20, 0, -20],
          transition: { duration: 24, ease: "easeInOut", repeat: Infinity, times: [0, 0.5, 1], repeatType: "loop" }
        });
      }
    };

    window.addEventListener("nightfall-sync", handleSync);
    return () => window.removeEventListener("nightfall-sync", handleSync);
  }, [overlayControls, starsControls]);

  useEffect(() => {
    if (isInView && !globalFastCycleInitiated) {
      globalFastCycleInitiated = true; // The first component to come into view orchestrates for all
      
      const runGlobalSequence = async () => {
        window.dispatchEvent(new CustomEvent("nightfall-sync", { detail: { phase: "fast-night" } }));
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        window.dispatchEvent(new CustomEvent("nightfall-sync", { detail: { phase: "fast-day" } }));
        await new Promise(resolve => setTimeout(resolve, 6000));
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        window.dispatchEvent(new CustomEvent("nightfall-sync", { detail: { phase: "loop" } }));
      };
      runGlobalSequence();
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <style>{`
        .nightfall-global-stars-wrap {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
        }
        .nightfall-global-svg {
          width: 100%; height: 100%;
          position: absolute; top:0; left: 0;
        }
        .nightfall-global-net {
          transform-origin: center;
          animation: rotNet 60s linear infinite;
        }
        .nightfall-global-net-2 {
          animation: rotNetRev 80s linear infinite;
          opacity: 0.5;
        }
        @keyframes rotNet {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes rotNetRev {
          0% { transform: rotate(360deg) scale(1.2); }
          50% { transform: rotate(180deg) scale(1); }
          100% { transform: rotate(0deg) scale(1.2); }
        }
        .nightfall-global-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167, 255, 249, 0.08) 0%, transparent 60%);
        }
        .nf-orb-1 { width: 400px; height: 400px; top: 10%; left: 20%; animation: floatOrbN 12s infinite alternate; }
        .nf-orb-2 { width: 500px; height: 500px; bottom: 10%; right: 10%; animation: floatOrbN 15s infinite alternate-reverse; }
        .nf-orb-3 { width: 350px; height: 350px; top: 50%; left: 50%; animation: floatOrbN 10s infinite alternate; }
        @keyframes floatOrbN {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, -40px); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={overlayControls}
        style={{ position: "absolute", inset: 0, background: nightGradient, pointerEvents: "none" }}
      />
      
      <motion.div
        className="nightfall-global-stars-wrap"
        initial={{ opacity: 0, scale: 1.05, y: 20 }}
        animate={starsControls}
      >
        <svg className="nightfall-global-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <g className="nightfall-global-net">
            <line x1="200" y1="200" x2="600" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="600" y1="400" x2="800" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="600" y1="400" x2="400" y2="800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="400" y1="800" x2="200" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="800" y1="200" x2="900" y2="600" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="400" y1="800" x2="900" y2="600" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            <circle cx="200" cy="200" r="3" fill="#a7fff9" />
            <circle cx="600" cy="400" r="4" fill="#a7fff9" />
            <circle cx="800" cy="200" r="2" fill="#a7fff9" />
            <circle cx="400" cy="800" r="5" fill="#3BADB0" />
            <circle cx="900" cy="600" r="3" fill="#3BADB0" />
          </g>

          <g className="nightfall-global-net-2">
            <line x1="100" y1="900" x2="300" y2="700" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="300" y1="700" x2="700" y2="900" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="700" y1="900" x2="900" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            
            <circle cx="100" cy="900" r="2" fill="#3BADB0" />
            <circle cx="300" cy="700" r="3" fill="#a7fff9" />
            <circle cx="700" cy="900" r="2" fill="#3BADB0" />
            <circle cx="900" cy="100" r="4" fill="#a7fff9" />
          </g>
        </svg>

        <div className="nightfall-global-orb nf-orb-1" />
        <div className="nightfall-global-orb nf-orb-2" />
        <div className="nightfall-global-orb nf-orb-3" />
      </motion.div>
    </div>
  );
}

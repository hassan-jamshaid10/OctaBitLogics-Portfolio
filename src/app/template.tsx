"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        .pg-transition-overlay {
          position: fixed;
          inset: 0;
          background: #02040a;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          /* Once it animates out, we don't want it stealing clicks if something bugs out */
          pointer-events: none; 
          border-bottom: 2px solid #3BADB0;
        }

        .pg-brand-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .pg-logo-container {
          position: relative;
          width: 80px; height: 80px;
          display: flex; align-items: center; justify-content: center;
        }

        .pg-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        /* Pulsing rings behind logo */
        .pg-ring {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 1px solid rgba(59,173,176,0.5);
          z-index: 1;
        }

        .pg-brand-text {
          font-family: 'Oxanium', monospace;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: white;
          text-transform: uppercase;
        }

        .pg-brand-text span {
          color: #3BADB0;
        }

        .pg-progress-bar {
          width: 160px;
          height: 3px;
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 0.5rem;
          position: relative;
        }

        .pg-progress-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 100%;
          background: linear-gradient(90deg, #1f4080 0%, #3BADB0 100%);
          transform-origin: left;
          box-shadow: 0 0 10px rgba(59,173,176,0.6);
        }
      `}</style>
      
      {/* ── OVERLAY SWEEP ── */}
      <motion.div
        className="pg-transition-overlay"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.75, ease: [0.77, 0, 0.17, 1], delay: 0.55 }}
      >
        <motion.div 
           className="pg-brand-wrap"
           initial={{ opacity: 1, scale: 1 }}
           animate={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="pg-logo-container">
            {/* Inner Ring Spin */ }
            <motion.div 
              className="pg-ring"
              initial={{ rotate: 0, scale: 0.8 }}
              animate={{ rotate: 90, scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Outer Ring Spin */ }
            <motion.div 
              className="pg-ring" style={{ border: '1px dotted rgba(59,173,176,0.8)' }}
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: -90, scale: 1.3, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
            <img src="/octa.png" alt="OctaBitLogics Logo" className="pg-logo" />
          </div>

          <div className="pg-brand-text"><span>Octa</span>BitLogics</div>
          
          <div className="pg-progress-bar">
            <motion.div 
               className="pg-progress-fill"
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── CONTENT FADE UP ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
}

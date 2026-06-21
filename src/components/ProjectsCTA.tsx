"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProjectsCTA() {
  const router = useRouter();

  return (
    <section id="projects-cta">
      <style>{`
        #projects-cta {
          padding: 8rem 40px;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .cta-box {
          position: relative;
          width: 100%;
          max-width: 1100px;
          border-radius: 4px;
          overflow: hidden;
          padding: 5rem 3rem;
          text-align: center;
          /* Premium gradient background */
          background: linear-gradient(135deg, #002046 0%, #013a6b 40%, #0a5c50 100%);
          box-shadow: 0 20px 50px rgba(0, 32, 70, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ffffff;
        }

        /* Abstract radial glows to make it dynamic */
        .cta-box::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(46, 204, 64, 0.25) 0%, transparent 60%);
          filter: blur(40px);
          pointer-events: none;
        }

        .cta-box::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 173, 176, 0.2) 0%, transparent 60%);
          filter: blur(40px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-eyebrow {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 1rem;
        }

        .cta-h2 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 1.5rem;
        }

        .cta-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        /* CTA Button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 1rem 2.5rem;
          background: #2ECC40;
          color: #002046;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #2ECC40;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 8px 24px rgba(46, 204, 64, 0.25);
        }

        .cta-btn:hover {
          background: transparent;
          color: #2ECC40;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(46, 204, 64, 0.35);
        }

        .cta-btn svg {
          transition: transform 0.3s ease;
        }

        .cta-btn:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          #projects-cta { padding: 4rem 20px; }
          .cta-box { padding: 4rem 2rem; }
        }
      `}</style>

      <motion.div 
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cta-content">
          <div className="cta-eyebrow">Proven Results</div>
          <h2 className="cta-h2">Ready to see our work?</h2>
          <p className="cta-desc">
            Explore our portfolio of AI-driven platforms, enterprise web applications, 
            and scalable mobile experiences delivered for global clients.
          </p>
          <button onClick={() => router.push('/projects')} className="cta-btn">
            View Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

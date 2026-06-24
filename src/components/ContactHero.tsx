"use client";

import { motion } from "framer-motion";
import { Clock, Award, MessageSquare } from "lucide-react";

const STATS = [
  { icon: Clock, label: "Response Time", value: "< 24 Hours" },
  { icon: Award, label: "Client Satisfaction", value: "100%" },
  { icon: MessageSquare, label: "Projects Delivered", value: "50+" },
];

export default function ContactHero() {
  return (
    <section id="contact-hero">
      <style>{`
        #contact-hero {
          position: relative;
          padding: 150px 40px 5rem;
          background:
            radial-gradient(ellipse 60% 50% at 15% 25%, rgba(46, 204, 64, 0.13) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 85% 80%, rgba(59, 173, 176, 0.10) 0%, transparent 55%),
            linear-gradient(160deg, #001530 0%, #002046 45%, #00213a 100%);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          min-height: 58vh;
          display: flex;
          align-items: center;
        }
        #contact-hero::before {
          content: '';
          position: absolute; top: -20%; right: 0;
          width: 50%; height: 150%;
          background: linear-gradient(115deg, transparent 40%, rgba(46, 204, 64, 0.06) 50%, transparent 60%);
          transform: rotate(5deg);
          pointer-events: none;
        }
        #contact-hero::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(46,204,64,0.3), transparent);
        }

        .ch-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .ch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 1.5rem;
        }
        .ch-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 2px;
          background: #2ECC40;
          border-radius: 2px;
        }

        .ch-h1 {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
          max-width: 720px;
        }
        .ch-h1 .green { color: #2ECC40; }

        .ch-sub {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
          max-width: 500px;
          margin: 0 0 3.5rem 0;
        }

        .ch-stats {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .ch-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }

        .ch-stat-icon { color: #2ECC40; flex-shrink: 0; }

        .ch-stat-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .ch-stat-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          margin-top: 3px;
          letter-spacing: 0.04em;
        }

        @media (max-width: 768px) {
          #contact-hero { padding: 120px 20px 3.5rem; min-height: auto; }
          .ch-stats { gap: 1rem; }
          .ch-stat { padding: 12px 16px; }
        }
        @media (max-width: 480px) {
          .ch-stats { flex-direction: column; }
        }
      `}</style>

      <div className="ch-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="ch-eyebrow">Contact Us</div>
          <h1 className="ch-h1">
            Let&rsquo;s Build Something<br />
            <span className="green">Remarkable</span> Together
          </h1>
          <p className="ch-sub">
            Have a project in mind or a challenge to solve? Our team is ready to help you
            turn ideas into scalable, high-performance solutions.
          </p>

          <div className="ch-stats">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div className="ch-stat" key={label}>
                <Icon size={20} className="ch-stat-icon" />
                <div>
                  <div className="ch-stat-value">{value}</div>
                  <div className="ch-stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

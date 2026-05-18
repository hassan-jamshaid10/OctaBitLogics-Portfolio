"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { sendEmail } from "../app/actions/sendEmail";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string || "General Inquiry",
      message: formData.get("message") as string,
    };

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error as string || "MailerSend rejected the request.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong connecting to the server.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 6000);
    }
  }, []);

  return (
    <section id="contact" className="dr-container">
      <style>{`
        .dr-container {
          background: #0A1628;
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        /* dot grid overlay */
        .dr-bg-mesh {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,32,70,0.7) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* green glow at top-center */
        .dr-bg-glow {
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 700px;
          background: radial-gradient(ellipse at center,
            rgba(46,204,64,0.07) 0%,
            rgba(0,32,70,0.1) 45%,
            transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .dr-inner {
          position: relative; z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 6rem;
          align-items: center;
        }

        /* ── Left Side: Heading + Contact Box ── */
        .dr-left {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .dr-heading {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
        }

        .dr-heading .green-accent {
          background: linear-gradient(135deg, #4ade80 0%, #3BADB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dr-contact-box {
          background: rgba(0,32,70,0.5);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(46,204,64,0.2);
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 440px;
          box-shadow: 0 0 40px rgba(46,204,64,0.05);
        }

        .dr-box-title {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 0.8rem;
        }

        .dr-contact-row {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(46,204,64,0.25);
          background: rgba(46,204,64,0.06);
          padding: 10px 20px;
          border-radius: 100px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
          width: fit-content;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .dr-contact-row:hover {
          background: rgba(46,204,64,0.15);
          border-color: rgba(46,204,64,0.5);
          color: #4ade80;
          box-shadow: 0 0 16px rgba(46,204,64,0.15);
        }
        .dr-contact-row svg { opacity: 0.8; color: #4ade80; }

        /* ── Right Side: Minimalist Form ── */
        .dr-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem 2rem;
        }

        .dr-span { grid-column: 1 / -1; }

        .dr-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .dr-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .dr-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding: 10px 0;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .dr-input::placeholder { color: rgba(255,255,255,0.2); }
        .dr-input:focus {
          border-color: #4ade80;
        }

        .dr-btn-wrap {
          margin-top: 1rem;
        }

        .dr-submit-btn {
          background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
          border: none;
          color: #002046;
          padding: 14px 44px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          min-width: 160px;
          box-shadow: 0 4px 20px rgba(46,204,64,0.25);
        }
        .dr-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(46,204,64,0.4);
          filter: brightness(1.1);
        }
        .dr-submit-btn:active:not(:disabled) {
          transform: scale(0.97);
        }
        .dr-submit-btn:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        .dr-status-msg {
          margin-top: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 1024px) {
          .dr-inner { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .dr-left { align-items: center; }
          .dr-contact-box { width: 100%; max-width: 500px; padding: 2rem; }
          .dr-group { align-items: center; }
          .dr-input { width: 100%; text-align: center; }
          .dr-btn-wrap { display: flex; justify-content: center; }
        }

        @media (max-width: 600px) {
          .dr-form { grid-template-columns: 1fr; gap: 2rem; }
          .dr-container { padding: 4rem 0 6rem; }
          .dr-inner { padding: 0 1.5rem; }
        }
      `}</style>

      <div className="dr-bg-mesh" />
      <div className="dr-bg-glow" />

      <div className="dr-inner">
        {/* Left Section */}
        <div className="dr-left">
          <ScrollReveal>
            <h2 className="dr-heading">Ready to get<br /><span className="green-accent">Started?</span></h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="dr-contact-box">
            <div>
              <p className="dr-box-title">Sale and general inquiries</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="tel:+14154063053" className="dr-contact-row">
                  <Phone size={18} /> +92 321 5353105
                </a>
                <a href="mailto:info@octabitlogics.com" className="dr-contact-row">
                  <Mail size={18} /> info@octabitlogics.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Section: Form */}
        <ScrollReveal delay={0.3} className="dr-right">
          <form className="dr-form" onSubmit={handleSubmit}>
            <div className="dr-group">
              <label className="dr-label">Full Name *</label>
              <input name="name" className="dr-input" type="text" placeholder="" required disabled={isSubmitting} />
            </div>

            <div className="dr-group">
              <label className="dr-label">Work Email *</label>
              <input name="email" className="dr-input" type="email" placeholder="" required disabled={isSubmitting} />
            </div>

            <div className="dr-group">
              <label className="dr-label">Phone Number</label>
              <input name="subject" className="dr-input" type="text" placeholder="" disabled={isSubmitting} />
            </div>

            <div className="dr-group">
              <label className="dr-label">Organization</label>
              <input className="dr-input" type="text" placeholder="" disabled={isSubmitting} />
            </div>

            <div className="dr-group dr-span">
              <label className="dr-label">Project Description</label>
              <input name="message" className="dr-input" type="text" placeholder="" required disabled={isSubmitting} />
            </div>

            <div className="dr-span dr-btn-wrap">
              <button
                type="submit"
                className="dr-submit-btn"
                disabled={isSubmitting || status === "success"}
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Send"}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="dr-status-msg" style={{ color: '#4ade80' }}>
                    <CheckCircle2 size={18} /> Message Sent Successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="dr-status-msg" style={{ color: '#ef4444' }}>
                    <AlertCircle size={18} /> {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
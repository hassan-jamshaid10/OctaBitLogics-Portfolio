"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { sendEmail } from "../app/actions/sendEmail";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <section id="contact" className="dr-container">
      <style>{`
        .dr-container {
          background: linear-gradient(145deg, #0f1c3f 0%, #080d1e 48%, #03060e 100%);
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
          color: #ffffff;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }

        /* Subtle animated mesh for Day-to-Night feel */
        .dr-bg-mesh {
          position: absolute; inset: 0;
          background: radial-gradient(at 0% 0%, rgba(59,173,176,0.15) 0%, transparent 50%),
                      radial-gradient(at 100% 100%, rgba(31,64,128,0.1) 0%, transparent 50%);
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
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .dr-contact-box {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 32px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 440px;
        }

        .dr-box-title {
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .dr-contact-row {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255, 255, 255, 1);
          padding: 10px 20px;
          border-radius: 100px;
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          width: fit-content;
        }
        .dr-contact-row svg { opacity: 0.9; }

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
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .dr-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.8);
          padding: 10px 0;
          color: white;
          font-size: 1.1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .dr-input:focus {
          border-color: #3BADB0;
        }

        .dr-btn-wrap {
          margin-top: 1rem;
        }

        .dr-submit-btn {
          background: transparent;
          border: 1.5px solid white;
          color: white;
          padding: 12px 40px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          min-width: 140px;
        }
        .dr-submit-btn:hover:not(:disabled) {
          background: #ffffff;
          color: #1B2E5E;
        }
        .dr-submit-btn:disabled {
          opacity: 0.6;
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

      <div className="dr-inner">
        {/* Left Section */}
        <div className="dr-left">
          <ScrollReveal>
            <h2 className="dr-heading">Ready to get<br />Started?</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="dr-contact-box">
            <div>
              <p className="dr-box-title">Sale and general inquiries</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="tel:+14154063053" className="dr-contact-row">
                  <Phone size={18} /> 415-406-3053
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
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="dr-status-msg" style={{ color: '#3BADB0' }}>
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
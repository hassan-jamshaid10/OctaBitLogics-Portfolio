"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="contact">
      <style>{`
        /* ── Section — full-bleed gradient ── */
        #contact {
          padding: 5rem 40px;
          background:
            radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.14) 0%, transparent 55%),
            linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }
        /* Diagonal light streak */
        #contact::before {
          content: '';
          position: absolute; top: -30%; right: 5%;
          width: 55%; height: 160%;
          background: linear-gradient(115deg, transparent 40%, rgba(46, 204, 64, 0.08) 50%, transparent 60%);
          transform: rotate(8deg);
          pointer-events: none;
        }

        .ct-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          position: relative;
          z-index: 2;
        }

        /* ── Left Panel ── */
        .ct-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ct-heading {
          font-family: inherit;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1rem 0;
        }
        .ct-heading .green-accent {
          color: #2ECC40;
        }

        .ct-sub {
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 2.5rem 0;
          max-width: 360px;
        }

        /* Contact info rows */
        .ct-info-label {
          font-family: inherit;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 1rem;
        }

        .ct-info-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ct-info-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          padding: 10px 18px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0;
          width: fit-content;
          transition: all 0.3s ease;
        }
        .ct-info-row:hover {
          border-color: #2ECC40;
          color: #2ECC40;
          background: rgba(46, 204, 64, 0.06);
        }
        .ct-info-row svg {
          color: #2ECC40;
          opacity: 0.8;
        }

        /* ── Right Panel: Form ── */
        .ct-right {
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          padding-left: 4rem;
        }

        .ct-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 1.5rem;
        }

        .ct-span { grid-column: 1 / -1; }

        .ct-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .ct-label {
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
        }

        .ct-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0;
          padding: 13px 16px;
          color: #ffffff;
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease;
          box-sizing: border-box;
          width: 100%;
        }
        .ct-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
        .ct-input:focus {
          border-color: rgba(46, 204, 64, 0.6);
          background: rgba(255, 255, 255, 0.08);
        }

        .ct-textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Submit button */
        .ct-btn-wrap {
          margin-top: 0.5rem;
        }

        .ct-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #2ECC40;
          color: #002046;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 14px 32px;
          border: none;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 140px;
        }
        .ct-submit:hover:not(:disabled) {
          background: #27b837;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(46, 204, 64, 0.35);
        }
        .ct-submit:active:not(:disabled) {
          transform: scale(0.97);
        }
        .ct-submit:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        .ct-status {
          margin-top: 1.25rem;
          font-weight: 600;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          #contact { padding: 3.5rem 20px; }
          .ct-inner { grid-template-columns: 1fr; gap: 3rem; }
          .ct-right { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); padding-left: 0; padding-top: 3rem; }
        }
        @media (max-width: 600px) {
          .ct-form { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ct-inner">

          {/* ── Left: Info ── */}
          <div className="ct-left">
            <h2 className="ct-heading">
              Ready to get<br /><span className="green-accent">Started?</span>
            </h2>
            <p className="ct-sub">
              Let&rsquo;s discuss how we can help bring your next project to life
              with precision engineering.
            </p>

            <p className="ct-info-label">Sales &amp; general inquiries</p>
            <div className="ct-info-list">
              <a href="tel:+923215353105" className="ct-info-row">
                <Phone size={16} /> +92 321 5353105
              </a>
              <a href="mailto:info@octabitlogics.com" className="ct-info-row">
                <Mail size={16} /> info@octabitlogics.com
              </a>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="ct-right">
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-group">
                <label className="ct-label">Full Name *</label>
                <input name="name" className="ct-input" type="text" required disabled={isSubmitting} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Work Email *</label>
                <input name="email" className="ct-input" type="email" required disabled={isSubmitting} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Phone Number</label>
                <input name="subject" className="ct-input" type="text" disabled={isSubmitting} />
              </div>

              <div className="ct-group">
                <label className="ct-label">Organization</label>
                <input className="ct-input" type="text" disabled={isSubmitting} />
              </div>

              <div className="ct-group ct-span">
                <label className="ct-label">Project Description</label>
                <textarea name="message" className="ct-input ct-textarea" required disabled={isSubmitting} />
              </div>

              <div className="ct-span ct-btn-wrap">
                <button
                  type="submit"
                  className="ct-submit"
                  disabled={isSubmitting || status === "success"}
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="ct-status" style={{ color: '#2ECC40' }}>
                      <CheckCircle2 size={18} /> Message Sent Successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="ct-status" style={{ color: '#ef4444' }}>
                      <AlertCircle size={18} /> {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

      </div>
    </section>
  );
}
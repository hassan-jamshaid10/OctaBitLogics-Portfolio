"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact">
      <style>{`
        #contact { background: var(--off-white); }

        .contact-inner {
          max-width: 640px;
          width: 100%;
          padding: 0 1rem;
          text-align: center;
        }

        .contact-inner {
          max-width: 640px;
          width: 100%;
          padding: 0 1rem;
          text-align: center;
        }

        .contact-form {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .form-row { display: flex; gap: 0.85rem; }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
          text-align: left;
        }

        .form-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .form-input,
        .form-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: var(--navy);
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 11px 16px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          resize: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder { color: rgba(107,138,139,0.5); }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(59,173,176,0.1);
        }

        .form-textarea { min-height: 110px; }

        .form-submit {
          font-family: 'Oxanium', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--teal), var(--navy));
          color: var(--white);
          border: none;
          padding: 14px 36px;
          border-radius: 100px;
          cursor: pointer;
          align-self: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59,173,176,0.28);
          position: relative;
          overflow: hidden;
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(59,173,176,0.38);
        }

        .form-submit.sent {
          background: linear-gradient(135deg, #2dab6e, #1B6E45);
          box-shadow: 0 4px 20px rgba(45,171,110,0.3);
        }

        /* Bottom info row */
        .contact-info {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .info-label {
          font-family: 'Oxanium', monospace;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .info-value {
          font-size: 0.88rem;
          color: var(--navy);
          font-weight: 500;
        }

        @media (max-width: 500px) {
          .form-row { flex-direction: column; }
        }
      `}</style>

      <div className="contact-inner">
        <ScrollReveal className="contact-header">
          <div className="section-tag">Contact</div>
          <h2>Let's Build Together</h2>
          <p className="lead">
            Have a project in mind? Drop us a message, and we'll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" placeholder="Hassan Jamshaid" />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="hello@company.com" />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Subject</label>
            <input className="form-input" type="text" placeholder="Project Inquiry" />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us about your project, timeline, and goals..."
            />
          </div>

          <button
            className={`form-submit${sent ? " sent" : ""}`}
            onClick={handleSubmit}
          >
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="contact-info">
          {[
            { label: "Email",    value: "hello@octabit.io" },
            { label: "Location", value: "Lahore, Pakistan" },
            { label: "Response", value: "Within 24 Hours" },
          ].map((i) => (
            <div className="info-item" key={i.label}>
              <span className="info-label">{i.label}</span>
              <span className="info-value">{i.value}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
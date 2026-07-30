"use client";
import React from "react";
import { useState, useCallback } from "react";
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  Mail, Phone, MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "../app/actions/sendEmail";

const CONTACT_INFO = [
  { icon: Mail,   label: "Email",        value: "info@octabitlogics.com", href: "mailto:info@octabitlogics.com" },
  { icon: Phone,  label: "Phone",        value: "+92 321 5353105",        href: "tel:+923215353105" },
  { icon: MapPin, label: "Location",     value: "Lahore, Pakistan",       href: null },
  // { icon: Clock,  label: "Office Hours", value: "Mon–Fri, 9AM–6PM PKT",  href: null },
];

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI / Machine Learning",
  "DevOps & Infrastructure",
  "UI/UX Design",
  "Other",
];


const ContactPageSection = React.memo(function ContactPageSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus]             = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const fd      = new FormData(e.currentTarget);
    const service = fd.get("service") as string;
    const budget  = fd.get("budget")  as string;
    const message = fd.get("message") as string;

    const phone   = fd.get("phone")   as string;
    const company = fd.get("company") as string;

    const data = {
      name:    fd.get("name")  as string,
      email:   fd.get("email") as string,
      phone:   phone   || undefined,
      company: company || undefined,
      subject: `[${service || "General"}] New Project Inquiry`,
      message: `Service: ${service || "N/A"}\nBudget: ${budget || "N/A"}\n\n${message}`,
    };

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error as string || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong connecting to the server.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 6000);
    }
  }, []);

  return (
    <>
      {/* ── Main Contact Section ── */}
      <section id="cps-main">
        <style>{`
          /* === MAIN CONTACT === */
          #cps-main {
            padding: 5rem 40px;
            background: #ffffff;
            font-family: inherit;
            position: relative;
            overflow: hidden;
          }

          .cps-inner {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 5rem;
            position: relative;
            z-index: 2;
          }

          /* LEFT */
          .cps-left { display: flex; flex-direction: column; gap: 2.5rem; }

          .cps-section-label {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 0.75rem;
          }

          .cps-info-cards { display: flex; flex-direction: column; gap: 0.65rem; }

          .cps-info-card {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 18px;
            border: 1px solid rgba(0,32,70,0.1);
            background: #faf9fd;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .cps-info-card:hover {
            border-color: rgba(46,204,64,0.45);
            background: rgba(46,204,64,0.04);
          }

          .cps-info-card-icon {
            width: 36px; height: 36px;
            display: flex; align-items: center; justify-content: center;
            background: rgba(46,204,64,0.1);
            flex-shrink: 0;
            color: #2ECC40;
          }

          .cps-info-card-label {
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 2px;
          }
          .cps-info-card-value {
            font-size: 0.9rem;
            font-weight: 500;
            color: #002046;
          }

          /* Socials */
          .cps-socials { display: flex; gap: 10px; }
          .cps-social-btn {
            width: 40px; height: 40px;
            display: flex; align-items: center; justify-content: center;
            border: 1px solid rgba(0,32,70,0.12);
            background: #faf9fd;
            color: #44474e;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .cps-social-btn:hover {
            border-color: #2ECC40;
            color: #2ECC40;
            background: rgba(46,204,64,0.06);
          }

          /* RIGHT: FORM */
          .cps-right {
            border-left: 1px solid rgba(0,32,70,0.08);
            padding-left: 5rem;
          }

          .cps-form-heading {
            font-family: inherit;
            font-size: 1.55rem;
            font-weight: 800;
            color: #002046;
            margin: 0 0 0.4rem 0;
            letter-spacing: -0.02em;
          }
          .cps-form-sub {
            font-size: 0.88rem;
            color: #74777f;
            margin: 0 0 2.5rem 0;
          }

          .cps-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .cps-span { grid-column: 1 / -1; }

          .cps-group { display: flex; flex-direction: column; gap: 0.5rem; }

          .cps-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #74777f;
          }

          .cps-input, .cps-select, .cps-textarea {
            background: #faf9fd;
            border: 1px solid rgba(0,32,70,0.12);
            border-radius: 0;
            padding: 12px 14px;
            color: #002046;
            font-family: inherit;
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.3s ease, background 0.3s ease;
            width: 100%;
            box-sizing: border-box;
          }
          .cps-input::placeholder, .cps-textarea::placeholder {
            color: rgba(0,32,70,0.3);
          }
          .cps-input:focus, .cps-select:focus, .cps-textarea:focus {
            border-color: rgba(46,204,64,0.55);
            background: #ffffff;
          }
          .cps-select {
            appearance: none;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(0,32,70,0.4)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 14px center;
            padding-right: 36px;
          }
          .cps-select option { background: #ffffff; color: #002046; }
          .cps-textarea { resize: vertical; min-height: 110px; }

          .cps-submit {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #2ECC40;
            color: #002046;
            font-family: inherit;
            font-size: 0.88rem;
            font-weight: 700;
            padding: 14px 32px;
            border: none;
            border-radius: 0;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 160px;
            letter-spacing: 0.02em;
          }
          .cps-submit:hover:not(:disabled) {
            background: #27b837;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.35);
          }
          .cps-submit:active:not(:disabled) { transform: scale(0.97); }
          .cps-submit:disabled { opacity: 0.55; cursor: wait; }

          .cps-status {
            margin-top: 1rem;
            font-size: 0.88rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          /* Responsive */
          @media (max-width: 1024px) {
            .cps-inner { gap: 3rem; }
            .cps-right { padding-left: 3rem; }
          }
          @media (max-width: 768px) {
            #cps-main { padding: 3.5rem 20px; }
            .cps-inner { grid-template-columns: 1fr; gap: 3rem; }
            .cps-right { border-left: none; border-top: 1px solid rgba(0,32,70,0.08); padding-left: 0; padding-top: 3rem; }
          }
          @media (max-width: 560px) {
            .cps-form { grid-template-columns: 1fr; }
          }


        `}</style>

        <div className="cps-inner">

          {/* LEFT: Info */}
          <div className="cps-left">
            <div>
              <p className="cps-section-label">Get in touch</p>
              <div className="cps-info-cards">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="cps-info-card-icon"><Icon size={16} /></div>
                      <div>
                        <div className="cps-info-card-label">{label}</div>
                        <div className="cps-info-card-value">{value}</div>
                      </div>
                    </>
                  );
                  return href ? (
                    <a key={label} href={href} className="cps-info-card">{inner}</a>
                  ) : (
                    <div key={label} className="cps-info-card">{inner}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="cps-section-label">Follow us</p>
              <div className="cps-socials">
                <a href="https://linkedin.com/company/octabitlogics" target="_blank" rel="noopener noreferrer" className="cps-social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/octabitlogics" target="_blank" rel="noopener noreferrer" className="cps-social-btn" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="cps-right">
            <h2 className="cps-form-heading">Send us a message</h2>
            <p className="cps-form-sub">Fill out the form and we&rsquo;ll get back to you within 24 hours.</p>

            <form className="cps-form" onSubmit={handleSubmit}>
              <div className="cps-group">
                <label className="cps-label">Full Name *</label>
                <input name="name" className="cps-input" type="text" placeholder="John Smith" required disabled={isSubmitting} />
              </div>

              <div className="cps-group">
                <label className="cps-label">Work Email *</label>
                <input name="email" className="cps-input" type="email" placeholder="you@company.com" required disabled={isSubmitting} />
              </div>

              <div className="cps-group">
                <label className="cps-label">Phone Number</label>
                <input name="phone" className="cps-input" type="tel" placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
              </div>

              <div className="cps-group">
                <label className="cps-label">Company</label>
                <input name="company" className="cps-input" type="text" placeholder="Acme Inc." disabled={isSubmitting} />
              </div>

              <div className="cps-group">
                <label className="cps-label">Service of Interest</label>
                <select name="service" className="cps-select" disabled={isSubmitting}>
                  <option value="">Select a service...</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="cps-group">
                <label className="cps-label">Budget Range</label>
                <select name="budget" className="cps-select" disabled={isSubmitting}>
                  <option value="">Select a range...</option>
                  <option value="Under $5K">Under $5,000</option>
                  <option value="$5K–$15K">$5,000 – $15,000</option>
                  <option value="$15K–$50K">$15,000 – $50,000</option>
                  <option value="$50K–$100K">$50,000 – $100,000</option>
                  <option value="$100K+">$100,000+</option>
                </select>
              </div>

              <div className="cps-group cps-span">
                <label className="cps-label">Project Description *</label>
                <textarea
                  name="message"
                  className="cps-input cps-textarea"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="cps-span">
                <button
                  type="submit"
                  className="cps-submit"
                  disabled={isSubmitting || status === "success"}
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>Send Message <Send size={15} /></>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="cps-status"
                      style={{ color: "#2ECC40" }}
                    >
                      <CheckCircle2 size={18} />
                      Message sent! We&rsquo;ll be in touch within 24 hours.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="cps-status"
                      style={{ color: "#ef4444" }}
                    >
                      <AlertCircle size={18} /> {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

        </div>
      </section>

    </>
  );
});

export default ContactPageSection;

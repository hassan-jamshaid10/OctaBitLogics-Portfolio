"use client";

import { useState, useCallback } from "react";
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  Mail, Phone, MapPin, Clock, ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "../app/actions/sendEmail";

const CONTACT_INFO = [
  { icon: Mail,   label: "Email",        value: "info@octabitlogics.com", href: "mailto:info@octabitlogics.com" },
  { icon: Phone,  label: "Phone",        value: "+92 321 5353105",        href: "tel:+923215353105" },
  { icon: MapPin, label: "Location",     value: "Lahore, Pakistan",       href: null },
  { icon: Clock,  label: "Office Hours", value: "Mon–Fri, 9AM–6PM PKT",  href: null },
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

const NEXT_STEPS = [
  { num: "01", title: "We Review",      desc: "Our team reviews your inquiry within 24 hours." },
  { num: "02", title: "Discovery Call", desc: "We schedule a call to understand your requirements in depth." },
  { num: "03", title: "Proposal",       desc: "We craft a tailored proposal with timeline and cost breakdown." },
  { num: "04", title: "Kick-off",       desc: "Project begins with dedicated engineers assigned to your team." },
];

export default function ContactPageSection() {
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
            background:
              radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46, 204, 64, 0.12) 0%, transparent 55%),
              linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }
          #cps-main::before {
            content: '';
            position: absolute; top: -30%; right: 5%;
            width: 55%; height: 160%;
            background: linear-gradient(115deg, transparent 40%, rgba(46,204,64,0.07) 50%, transparent 60%);
            transform: rotate(8deg);
            pointer-events: none;
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
            color: rgba(255,255,255,0.38);
            margin-bottom: 0.75rem;
          }

          .cps-info-cards { display: flex; flex-direction: column; gap: 0.65rem; }

          .cps-info-card {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 18px;
            border: 1px solid rgba(255,255,255,0.09);
            background: rgba(255,255,255,0.03);
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .cps-info-card:hover {
            border-color: rgba(46,204,64,0.45);
            background: rgba(46,204,64,0.05);
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
            color: rgba(255,255,255,0.38);
            margin-bottom: 2px;
          }
          .cps-info-card-value {
            font-size: 0.9rem;
            font-weight: 500;
            color: rgba(255,255,255,0.82);
          }

          /* Socials */
          .cps-socials { display: flex; gap: 10px; }
          .cps-social-btn {
            width: 40px; height: 40px;
            display: flex; align-items: center; justify-content: center;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.04);
            color: rgba(255,255,255,0.55);
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
            border-left: 1px solid rgba(255,255,255,0.08);
            padding-left: 5rem;
          }

          .cps-form-heading {
            font-family: 'Manrope', sans-serif;
            font-size: 1.55rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 0.4rem 0;
            letter-spacing: -0.02em;
          }
          .cps-form-sub {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.42);
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
            color: rgba(255,255,255,0.35);
          }

          .cps-input, .cps-select, .cps-textarea {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 0;
            padding: 12px 14px;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.3s ease, background 0.3s ease;
            width: 100%;
            box-sizing: border-box;
          }
          .cps-input::placeholder, .cps-textarea::placeholder {
            color: rgba(255,255,255,0.18);
          }
          .cps-input:focus, .cps-select:focus, .cps-textarea:focus {
            border-color: rgba(46,204,64,0.55);
            background: rgba(255,255,255,0.08);
          }
          .cps-select {
            appearance: none;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 14px center;
            padding-right: 36px;
          }
          .cps-select option { background: #002046; color: #ffffff; }
          .cps-textarea { resize: vertical; min-height: 110px; }

          .cps-submit {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #2ECC40;
            color: #002046;
            font-family: 'Inter', sans-serif;
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
            .cps-right { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); padding-left: 0; padding-top: 3rem; }
          }
          @media (max-width: 560px) {
            .cps-form { grid-template-columns: 1fr; }
          }


          /* === NEXT STEPS === */
          #cps-next {
            padding: 5rem 40px;
            background: #faf9fd;
            font-family: 'Inter', sans-serif;
          }

          .cn-inner { max-width: 1280px; margin: 0 auto; }

          .cn-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #2ECC40;
            margin-bottom: 0.75rem;
          }
          .cn-heading {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(1.8rem, 3vw, 2.4rem);
            font-weight: 800;
            color: #002046;
            letter-spacing: -0.03em;
            margin: 0 0 3rem 0;
          }

          .cn-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }

          .cn-card {
            padding: 2rem 1.75rem;
            border: 1px solid rgba(0,32,70,0.1);
            background: #ffffff;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .cn-card:hover {
            border-color: rgba(46,204,64,0.5);
            box-shadow: 0 8px 30px rgba(0,32,70,0.08);
            transform: translateY(-3px);
          }

          .cn-card-num {
            font-family: 'Manrope', sans-serif;
            font-size: 2.8rem;
            font-weight: 800;
            color: rgba(0,32,70,0.07);
            line-height: 1;
            margin-bottom: 1.25rem;
          }
          .cn-card-title {
            font-family: 'Manrope', sans-serif;
            font-size: 1.05rem;
            font-weight: 800;
            color: #002046;
            margin-bottom: 0.5rem;
          }
          .cn-card-desc {
            font-size: 0.87rem;
            color: rgba(0,32,70,0.52);
            line-height: 1.65;
          }

          .cn-card-bar {
            position: absolute;
            bottom: 0; left: 0;
            width: 0; height: 3px;
            background: #2ECC40;
            transition: width 0.4s ease;
          }
          .cn-card:hover .cn-card-bar { width: 100%; }

          @media (max-width: 960px) {
            .cn-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 560px) {
            #cps-next { padding: 3.5rem 20px; }
            .cn-grid { grid-template-columns: 1fr; }
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
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em" }}>in</span>
                </a>
                <a href="https://twitter.com/octabitlogics" target="_blank" rel="noopener noreferrer" className="cps-social-btn" aria-label="Twitter / X">
                  <span style={{ fontSize: "0.72rem", fontWeight: 700 }}>𝕏</span>
                </a>
                <a href="https://github.com/octabitlogics" target="_blank" rel="noopener noreferrer" className="cps-social-btn" aria-label="GitHub">
                  <ExternalLink size={14} />
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

      {/* ── What Happens Next ── */}
      <section id="cps-next">
        <div className="cn-inner">
          <p className="cn-label">Our Process</p>
          <h2 className="cn-heading">What happens next?</h2>
          <div className="cn-grid">
            {NEXT_STEPS.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                className="cn-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="cn-card-num">{num}</div>
                <div className="cn-card-title">{title}</div>
                <div className="cn-card-desc">{desc}</div>
                <div className="cn-card-bar" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

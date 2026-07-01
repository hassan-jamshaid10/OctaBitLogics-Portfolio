"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

const PRINCIPLES = [
  {
    num: "01",
    title: "Intelligence is applied, not added",
    body: "AI-first does not mean adding AI to everything. It means designing systems with intelligence as a core architectural element,not a layer applied after the fact. We assess every product decision by asking whether applied intelligence improves outcomes for the end user.",
  },
  {
    num: "02",
    title: "Models serve the product, not the reverse",
    body: "We select and integrate AI capabilities based on what a specific product needs,not based on what is newest or most impressive in a benchmark. The right model is the one that solves the real problem within the real constraints of latency, cost, and reliability.",
  },
  {
    num: "03",
    title: "Production readiness is non-negotiable",
    body: "A model that performs well in a demo but degrades in production has zero business value. Every AI system we ship has evaluation pipelines, monitoring, fallback logic, and clearly defined performance floors,before it touches a single real user.",
  },
  {
    num: "04",
    title: "Governance is built in, not bolted on",
    body: "Responsible AI is not a compliance checkbox. It is an architectural requirement. Human oversight, explainability, and auditability are designed into systems from day one,not retrofitted when regulators or customers ask for them.",
  },
  {
    num: "05",
    title: "Business readiness shapes technical decisions",
    body: "The most sophisticated AI system is worthless if the organisation cannot operate it. We design for the maturity level of the client,building the processes, training, and governance infrastructure that make AI adoption sustainable, not just technically possible.",
  },
  {
    num: "06",
    title: "Continuous learning improves every system",
    body: "AI systems that stop learning stop improving. Every product we build has feedback loops, retraining pipelines, and performance monitoring that allow the model's understanding of the real world to evolve alongside the business it serves.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Assess",
    label: "Opportunity & Readiness",
    body: "We map every candidate use case against two axes: value potential and implementation feasibility. This produces a prioritised AI roadmap grounded in business impact, not technical novelty. Data readiness, team maturity, and regulatory context are evaluated before any model is selected.",
  },
  {
    step: "02",
    title: "Architect",
    label: "System & Data Design",
    body: "AI architecture decisions,model selection, inference infrastructure, data pipelines, context management, and fallback logic,are made together, not sequentially. We design the data layer and the model layer as a unified system with defined performance contracts at every boundary.",
  },
  {
    step: "03",
    title: "Implement",
    label: "Build & Evaluate",
    body: "We build AI features against a structured evaluation suite from day one,not after launch. Every model integration has defined quality gates, adversarial test cases, and regression benchmarks that must pass before the feature reaches production users.",
  },
  {
    step: "04",
    title: "Govern",
    label: "Oversight & Compliance",
    body: "Production AI systems operate under a governance framework that includes human review thresholds, decision audit trails, bias monitoring, and incident response procedures. For regulated industries, compliance artefacts are generated automatically as part of normal operations.",
  },
  {
    step: "05",
    title: "Evolve",
    label: "Monitor & Improve",
    body: "AI systems decay over time as the real world changes. We instrument every deployed system with drift detection, performance monitoring, and feedback capture pipelines,and design the retraining and deployment process so the team can improve the system without heroics.",
  },
];

const DOMAINS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Document Intelligence",
    body: "Extraction, classification, and reasoning over unstructured documents,contracts, financial reports, clinical records, and regulatory filings.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <rect x="2" y="3" width="20" height="14" rx="0" /><path d="M8 21h8M12 17v4" /><path d="M7 8h.01M12 8h.01M17 8h.01M7 12h10" />
      </svg>
    ),
    title: "Agentic Workflows",
    body: "Multi-step autonomous agents that execute complex, tool-using workflows,research pipelines, procurement automation, and onboarding orchestration.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Conversational AI",
    body: "AI assistants with domain grounding, citation, and escalation logic,built for real business use, not demo environments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Predictive Analytics",
    body: "ML models for demand forecasting, churn prediction, fraud detection, and risk scoring,trained and evaluated on real business data.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Computer Vision",
    body: "Object detection, classification, and measurement systems for security, medical imaging, manufacturing QA, and retail intelligence.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI-Augmented Products",
    body: "Embedding intelligence into existing products and internal tools,surfacing the right insight to the right user at the right moment.",
  },
];

const GOVERNANCE = [
  {
    title: "Transparency",
    body: "Every AI decision in a production system should be explainable to the humans responsible for it. We design interpretability into systems that affect consequential outcomes,not as a feature, but as a requirement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Human Oversight",
    body: "Autonomous AI systems must have clearly defined boundaries. We design escalation paths, confidence thresholds, and human-in-the-loop checkpoints that ensure consequential decisions are never fully delegated to a model.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Security & Privacy",
    body: "AI systems create new attack surfaces. Prompt injection, data exfiltration through model outputs, and training data leakage are real threats we design against,with the same rigour we apply to application security.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function AIFirstPage() {
  const router = useRouter();
  const handleNavClick = useCallback(
    (href: string) => {
      if (href.startsWith("/")) router.push(href);
      else { sessionStorage.setItem("scrollToSection", href.replace("#", "")); router.push("/"); }
    },
    [router]
  );

  return (
    <>
      <Navbar activeSection="" onNavClick={handleNavClick} />
      <main style={{ overflowX: "hidden", width: "100%" }}>
        <style>{`
          /* ── Hero ── */
          #aif-hero {
            position: relative;
            background: #ffffff;
            padding-top: 150px;
            padding-bottom: 6rem;
            overflow: hidden;
            font-family: inherit;
          }
          .aif-hero-glow {
            position: absolute;
            top: -150px; left: 50%;
            transform: translateX(-50%);
            width: 900px; height: 500px;
            background: radial-gradient(ellipse at center, rgba(59,173,176,0.38) 0%, rgba(0,32,70,0.12) 40%, transparent 70%);
            filter: blur(50px);
            pointer-events: none; z-index: 0;
          }
          .aif-hero-inner {
            position: relative; z-index: 1;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          .aif-hero-eyebrow {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 1.5rem;
          }
          .aif-hero-h1 {
            font-family: inherit;
            font-size: clamp(2.4rem, 4.5vw, 3.6rem);
            font-weight: 800;
            color: #002046;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin: 0 0 1.5rem 0;
          }
          .aif-hero-h1 span {
            background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .aif-hero-sub {
            font-size: 1.05rem;
            line-height: 1.75;
            color: #74777f;
            margin: 0 0 2.5rem 0;
          }
          .aif-hero-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            background: #002046;
            color: #ffffff;
            font-family: inherit;
            font-size: 0.88rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s;
          }
          .aif-hero-btn:hover {
            background: #2ECC40;
            color: #002046;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.25);
          }

          /* Right side stat block */
          .aif-hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            background: rgba(0,32,70,0.08);
            border: 1px solid rgba(0,32,70,0.08);
          }
          .aif-hero-stat {
            background: #ffffff;
            padding: 2rem 1.75rem;
          }
          .aif-hero-stat-val {
            font-family: inherit;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 800;
            color: #002046;
            letter-spacing: -0.03em;
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .aif-hero-stat-val span { color: #2ECC40; }
          .aif-hero-stat-label {
            font-size: 0.78rem;
            color: #74777f;
            line-height: 1.5;
            font-weight: 500;
          }

          /* ── Section shared ── */
          .aif-section {
            padding: 6rem 40px;
            font-family: inherit;
          }
          .aif-inner { max-width: 1280px; margin: 0 auto; }
          .aif-eyebrow {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #2ECC40;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .aif-eyebrow::before {
            content: '';
            display: inline-block;
            width: 24px; height: 2px;
            background: #2ECC40;
          }
          .aif-h2 {
            font-family: inherit;
            font-size: clamp(1.9rem, 3.5vw, 2.8rem);
            font-weight: 800;
            color: #002046;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 1rem 0;
          }
          .aif-h2-sub {
            font-size: 1rem;
            line-height: 1.7;
            color: #74777f;
            max-width: 560px;
            margin: 0 0 4rem 0;
          }

          /* ── Principles grid ── */
          #aif-principles { background: #faf9fd; }
          .aif-principles-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(0,32,70,0.08);
            border-left: 1px solid rgba(0,32,70,0.08);
          }
          .aif-principle-card {
            background: #ffffff;
            padding: 2.5rem 2rem;
            border-right: 1px solid rgba(0,32,70,0.08);
            border-bottom: 1px solid rgba(0,32,70,0.08);
            transition: background 0.3s;
          }
          .aif-principle-card:hover { background: rgba(46,204,64,0.03); }
          .aif-principle-num {
            font-family: inherit;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            color: #2ECC40;
            margin-bottom: 1.25rem;
          }
          .aif-principle-title {
            font-family: inherit;
            font-size: 1.05rem;
            font-weight: 800;
            color: #002046;
            line-height: 1.3;
            letter-spacing: -0.01em;
            margin: 0 0 0.85rem 0;
          }
          .aif-principle-body {
            font-size: 0.88rem;
            line-height: 1.7;
            color: #74777f;
            margin: 0;
          }

          /* ── Framework ── */
          #aif-framework {
            background: #002046;
            position: relative;
            overflow: hidden;
          }
          #aif-framework::before {
            content: '';
            position: absolute; inset: 0;
            background-image: repeating-linear-gradient(
              -55deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 1px,
              transparent 1px,
              transparent 48px
            );
            pointer-events: none;
          }
          #aif-framework .aif-h2 { color: #ffffff; }
          #aif-framework .aif-h2-sub { color: rgba(255,255,255,0.55); }

          .aif-framework-steps {
            display: flex;
            flex-direction: column;
            gap: 0;
            border-top: 1px solid rgba(255,255,255,0.08);
          }
          .aif-framework-step {
            display: grid;
            grid-template-columns: 80px 1fr 1.4fr;
            gap: 0;
            align-items: stretch;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            transition: background 0.3s;
          }
          .aif-framework-step:hover { background: rgba(255,255,255,0.03); }
          .aif-step-num {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2.25rem 0;
            font-family: inherit;
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            color: rgba(255,255,255,0.2);
            border-right: 1px solid rgba(255,255,255,0.08);
          }
          .aif-step-heading {
            padding: 2.25rem 2.5rem;
            border-right: 1px solid rgba(255,255,255,0.08);
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4px;
          }
          .aif-step-title {
            font-family: inherit;
            font-size: 1.2rem;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.01em;
          }
          .aif-step-label {
            font-size: 0.72rem;
            font-weight: 600;
            color: #2ECC40;
            letter-spacing: 0.05em;
          }
          .aif-step-body {
            padding: 2.25rem 2.5rem;
            font-size: 0.9rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.6);
            display: flex;
            align-items: center;
          }

          /* ── Domains ── */
          #aif-domains { background: #ffffff; }
          .aif-domains-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .aif-domain-card {
            padding: 2rem;
            border: 1px solid rgba(0,32,70,0.08);
            background: #faf9fd;
            transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          }
          .aif-domain-card:hover {
            border-color: rgba(46,204,64,0.3);
            box-shadow: 0 8px 32px rgba(0,32,70,0.07);
            transform: translateY(-3px);
          }
          .aif-domain-icon {
            width: 44px; height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(59,173,176,0.08);
            border: 1px solid rgba(59,173,176,0.18);
            color: #3BADB0;
            margin-bottom: 1.25rem;
          }
          .aif-domain-title {
            font-family: inherit;
            font-size: 1rem;
            font-weight: 800;
            color: #002046;
            margin: 0 0 0.6rem 0;
          }
          .aif-domain-body {
            font-size: 0.85rem;
            line-height: 1.65;
            color: #74777f;
            margin: 0;
          }

          /* ── Governance ── */
          #aif-governance { background: #faf9fd; }
          .aif-gov-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .aif-gov-card {
            background: #ffffff;
            border: 1px solid rgba(0,32,70,0.08);
            padding: 2.5rem 2rem;
          }
          .aif-gov-icon {
            width: 48px; height: 48px;
            background: linear-gradient(135deg, rgba(46,204,64,0.1) 0%, rgba(59,173,176,0.1) 100%);
            border: 1px solid rgba(46,204,64,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3BADB0;
            margin-bottom: 1.5rem;
          }
          .aif-gov-title {
            font-family: inherit;
            font-size: 1.1rem;
            font-weight: 800;
            color: #002046;
            margin: 0 0 0.85rem 0;
          }
          .aif-gov-body {
            font-size: 0.88rem;
            line-height: 1.7;
            color: #74777f;
            margin: 0;
          }

          /* ── CTA ── */
          #aif-cta {
            background:
              radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46,204,64,0.14) 0%, transparent 55%),
              linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
            padding: 7rem 40px;
            text-align: center;
            font-family: inherit;
            position: relative;
            overflow: hidden;
          }
          .aif-cta-inner { max-width: 660px; margin: 0 auto; position: relative; z-index: 1; }
          .aif-cta-eyebrow {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #2ECC40;
            margin-bottom: 1.25rem;
          }
          .aif-cta-h2 {
            font-family: inherit;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin: 0 0 1rem 0;
          }
          .aif-cta-sub {
            font-size: 1rem;
            color: rgba(255,255,255,0.6);
            line-height: 1.7;
            margin: 0 0 2.5rem 0;
          }
          .aif-cta-btns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
          }
          .aif-cta-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            background: #2ECC40;
            color: #002046;
            font-size: 0.88rem;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.3s;
          }
          .aif-cta-primary:hover {
            background: #27b837;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.35);
          }
          .aif-cta-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 13px 24px;
            border: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.85);
            font-size: 0.88rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
          }
          .aif-cta-secondary:hover {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.06);
            color: #ffffff;
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            #aif-hero { padding-top: 130px; }
            .aif-hero-inner { grid-template-columns: 1fr; gap: 3rem; padding: 0 20px; }
            .aif-section { padding: 5rem 20px; }
            .aif-principles-grid { grid-template-columns: repeat(2, 1fr); }
            .aif-domains-grid { grid-template-columns: repeat(2, 1fr); }
            .aif-gov-grid { grid-template-columns: repeat(2, 1fr); }
            #aif-cta { padding: 5rem 20px; }
          }
          @media (max-width: 768px) {
            .aif-framework-step { grid-template-columns: 50px 1fr; }
            .aif-step-heading { border-right: none; padding: 1.5rem; }
            .aif-step-body { display: none; }
            .aif-framework-step:hover .aif-step-body { display: flex; grid-column: 1/-1; padding: 0 1.5rem 1.5rem; }
          }
          @media (max-width: 600px) {
            #aif-hero { padding-top: 110px; padding-bottom: 4rem; }
            .aif-principles-grid { grid-template-columns: 1fr; }
            .aif-domains-grid { grid-template-columns: 1fr; }
            .aif-gov-grid { grid-template-columns: 1fr; }
            .aif-hero-stats { grid-template-columns: 1fr 1fr; }
            .aif-section { padding: 4rem 16px; }
            #aif-cta { padding: 4rem 16px; }
            .aif-cta-btns { flex-direction: column; align-items: stretch; }
            .aif-cta-primary, .aif-cta-secondary { justify-content: center; }
          }
        `}</style>

        {/* ── Hero ── */}
        <section id="aif-hero">
          <div className="aif-hero-glow" />
          <div className="aif-hero-inner">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aif-hero-eyebrow">AI-FIRST PHILOSOPHY</div>
              <h1 className="aif-hero-h1">
                Intelligence applied<br />
                <span>where it matters most.</span>
              </h1>
              <p className="aif-hero-sub">
                Being AI-first means designing systems with intelligence as a core architectural element,not a feature added after the fact. It means applying AI where it genuinely improves outcomes, with the governance and discipline to do it responsibly at production scale.
              </p>
              <Link href="/contact" className="aif-hero-btn">
                Work with our AI team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="aif-hero-stats"
            >
              {[
                { val: "6", unit: "", label: "AI-integrated projects shipped" },
                { val: "6", unit: "", label: "Core AI capability areas" },
                { val: "20+", unit: "", label: "AI & ML tools in our stack" },
                { val: "100", unit: "%", label: "In-house delivery, no outsourcing" },
              ].map((s) => (
                <div key={s.label} className="aif-hero-stat">
                  <div className="aif-hero-stat-val">{s.val}<span>{s.unit}</span></div>
                  <div className="aif-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section id="aif-principles" className="aif-section">
          <div className="aif-inner">
            <div className="aif-eyebrow">Our Principles</div>
            <h2 className="aif-h2">What AI-first actually means</h2>
            <p className="aif-h2-sub">
              Six beliefs that shape every architectural decision we make when intelligence is involved.
            </p>
            <motion.div
              className="aif-principles-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              {PRINCIPLES.map((p) => (
                <motion.div
                  key={p.num}
                  className="aif-principle-card"
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="aif-principle-num">{p.num}</div>
                  <h3 className="aif-principle-title">{p.title}</h3>
                  <p className="aif-principle-body">{p.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Framework ── */}
        <section id="aif-framework" className="aif-section">
          <div className="aif-inner">
            <div className="aif-eyebrow">Our Framework</div>
            <h2 className="aif-h2">How we implement AI-first</h2>
            <p className="aif-h2-sub">
              A structured five-stage process from opportunity assessment to continuous production improvement.
            </p>
            <div className="aif-framework-steps">
              {FRAMEWORK.map((f, i) => (
                <motion.div
                  key={f.step}
                  className="aif-framework-step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="aif-step-num">{f.step}</div>
                  <div className="aif-step-heading">
                    <div className="aif-step-title">{f.title}</div>
                    <div className="aif-step-label">{f.label}</div>
                  </div>
                  <div className="aif-step-body">{f.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Domains ── */}
        <section id="aif-domains" className="aif-section">
          <div className="aif-inner">
            <div className="aif-eyebrow">Where We Apply AI</div>
            <h2 className="aif-h2">Six domains. Focused in-house capability.</h2>
            <p className="aif-h2-sub">
              We build across six AI capability areas, each backed by hands-on engineering experience and a commitment to production-quality delivery.
            </p>
            <motion.div
              className="aif-domains-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            >
              {DOMAINS.map((d) => (
                <motion.div
                  key={d.title}
                  className="aif-domain-card"
                  variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="aif-domain-icon">{d.icon}</div>
                  <h3 className="aif-domain-title">{d.title}</h3>
                  <p className="aif-domain-body">{d.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Governance ── */}
        <section id="aif-governance" className="aif-section">
          <div className="aif-inner">
            <div className="aif-eyebrow">Responsible AI</div>
            <h2 className="aif-h2">Governance is an architectural requirement</h2>
            <p className="aif-h2-sub">
              Every AI system we ship is built with three non-negotiable properties,designed in from day one.
            </p>
            <motion.div
              className="aif-gov-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {GOVERNANCE.map((g) => (
                <motion.div
                  key={g.title}
                  className="aif-gov-card"
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="aif-gov-icon">{g.icon}</div>
                  <h3 className="aif-gov-title">{g.title}</h3>
                  <p className="aif-gov-body">{g.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="aif-cta">
          <div className="aif-cta-inner">
            <div className="aif-cta-eyebrow">Get Started</div>
            <h2 className="aif-cta-h2">Ready to build AI-first?</h2>
            <p className="aif-cta-sub">
              Whether you are evaluating AI opportunities, rebuilding an existing system, or scaling a production deployment, our team has done it before.
            </p>
            <div className="aif-cta-btns">
              <Link href="/contact" className="aif-cta-primary">
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/company" className="aif-cta-secondary">
                About OctaBitLogics
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

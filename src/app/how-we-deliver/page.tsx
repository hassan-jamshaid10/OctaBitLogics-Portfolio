"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

const MODELS = [
  {
    num: "01",
    title: "Dedicated Teams",
    tagline: "Your team, extended,ongoing ownership of defined workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    desc: "A cross-functional team of engineers, designers, and specialists who function as a true extension of your organisation,embedded in your processes, aligned to your goals, and accountable for defined outcomes over the long term.",
    suits: ["Long-running product development", "Continuous feature delivery", "Platform operations and scaling", "Teams needing deep domain expertise without full-time hires"],
    includes: ["Named team lead and weekly sync cadence", "Direct access to all team members via your preferred tools", "Sprint planning, retrospectives, and velocity reporting", "Quarterly roadmap reviews with executive stakeholders"],
  },
  {
    num: "02",
    title: "Project-Based Delivery",
    tagline: "Defined scope. Fixed timeline. Clear outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    desc: "Scoped engagements where we take full responsibility for a well-defined deliverable,an MVP, a data platform migration, a system integration, or a specific product feature,with agreed milestones and a firm completion date.",
    suits: ["MVP and prototype builds", "One-time migrations or integrations", "Proof-of-concept engagements", "Time-boxed augmentation of internal capacity"],
    includes: ["Detailed project charter before kick-off", "Milestone-based payment and delivery schedule", "Weekly written progress reports", "Fixed-price or time-and-materials contracts available"],
  },
  {
    num: "03",
    title: "Hybrid Delivery Model",
    tagline: "Shared responsibility, divided by what each side does best.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M16 3h5v5M21 3l-7 7M21 16v5h-5M21 21l-7-7M3 21l7-7M3 16v5h5M8 3H3v5M3 3l7 7" />
      </svg>
    ),
    desc: "A collaborative operating model where your internal team retains strategic control and high-judgment decision-making while our specialists handle execution, process management, and technical delivery. Responsibilities are formally documented at the engagement outset.",
    suits: ["Teams with strong product vision but limited build capacity", "Organisations transitioning to in-house capability over time", "Regulated industries requiring internal approval at key decision points", "Complex products requiring both deep domain and technical expertise"],
    includes: ["Documented RACI matrix agreed before start", "Clear escalation paths and decision boundaries", "Knowledge transfer baked into every sprint", "Ramp-down plan for eventual full internal ownership"],
  },
  {
    num: "04",
    title: "Offshore Development Center",
    tagline: "Elastic capacity that scales with your workload,no long-term lock-in.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <rect x="4" y="2" width="16" height="20" />
        <path d="M12 18h.01M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
    desc: "Flexible, cost-efficient operational support that activates when your workloads increase and scales back when they don't. Our ODC teams step in for time-sensitive projects, backlog clearance, or short-term capacity gaps,with no permanent headcount commitment required.",
    suits: ["Handling demand spikes without headcount risk", "Backlog clearance and technical debt reduction", "Short-term projects with hard deadlines", "Cost-efficient expansion into new technical capabilities"],
    includes: ["Start in as little as 2 weeks from contract signing", "Hourly or monthly billing with no minimum term", "Full onboarding to your codebase and standards", "Transition support when work is complete"],
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Discovery & Scoping",
    duration: "Week 1–2",
    color: "#2ECC40",
    body: "We spend the first two weeks understanding your business context, technical environment, and success criteria before writing a single line of code. This produces a project charter, architecture overview, and a delivery plan with clear milestones,reviewed and signed off by your team before we proceed.",
    outputs: ["Project charter and scope document", "Proposed team structure and roles", "Risk register with mitigation plans", "Milestone schedule with acceptance criteria"],
  },
  {
    phase: "02",
    title: "Onboarding & Setup",
    duration: "Week 2–3",
    color: "#3BADB0",
    body: "We integrate into your development environment, tooling, and communication channels. Codebase walkthroughs, stakeholder introductions, and access provisioning happen in parallel,so that by the end of week three, the team is fully operational with zero friction.",
    outputs: ["Environment access and CI/CD integration", "Communication cadence and tooling agreed", "First sprint planned and committed", "Stakeholder map and escalation paths documented"],
  },
  {
    phase: "03",
    title: "Phased Execution",
    duration: "Ongoing",
    color: "#002046",
    body: "Work is delivered in two-week sprints with explicit acceptance criteria for every item. Demos happen at the end of each sprint,no black boxes. Progress is visible, blockers are surfaced immediately, and scope changes are handled through a formal change control process that keeps timelines honest.",
    outputs: ["Bi-weekly sprint demos with recorded sessions", "Weekly written status report", "Live progress dashboard in your tool of choice", "Immediate Slack or Teams notification on any blocker"],
  },
  {
    phase: "04",
    title: "Governance & Review",
    duration: "Monthly",
    color: "#002046",
    body: "Beyond sprint-level visibility, we hold monthly governance reviews with senior stakeholders,covering velocity, budget burn, risk status, and forward planning. For regulated industries, compliance documentation is generated as a standard output of the delivery process, not a separate effort.",
    outputs: ["Monthly executive progress report", "Budget vs. actuals breakdown", "Updated risk register and mitigation status", "Next-quarter roadmap alignment"],
  },
  {
    phase: "05",
    title: "Handover & Growth",
    duration: "Final phase",
    color: "#2ECC40",
    body: "Every engagement ends with a formal handover,comprehensive documentation, knowledge transfer sessions, and a transition period where your team takes over with our support on standby. We measure success by how little you need us after we leave. For ongoing relationships, we move into a continuous improvement model.",
    outputs: ["Full technical documentation and runbooks", "Knowledge transfer sessions (recorded)", "30-day post-launch hyper-care support", "Optional long-term support retainer"],
  },
];

const PRINCIPLES = [
  {
    title: "No black boxes",
    body: "Every decision we make is visible to you. Architecture choices, tradeoffs, risks,documented and communicated before they become problems, not after.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Shared ownership",
    body: "We take responsibility for delivery outcomes, not just outputs. If something we built causes a problem six months later, we are accountable for helping fix it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Momentum over perfection",
    body: "We bias toward shipping working software on a reliable cadence. Perfect architecture that ships in 18 months is less valuable than a solid architecture that ships in 6 and improves from there.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Honest scoping",
    body: "We will tell you if something will take longer than you want to hear. Underestimating to win a deal and then blowing the timeline damages both parties,we'd rather lose a deal than earn a bad reputation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Knowledge transfer by default",
    body: "Every engagement includes documentation, code comments, and walkthrough sessions as standard. We build for the team that comes after us,even if that team is you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Long-term thinking",
    body: "We design systems that your team can operate, understand, and extend,not systems that keep you dependent on us. Our best clients come back because they want to, not because they have to.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function HowWeDeliverPage() {
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
          #hwd-hero {
            position: relative;
            background: #ffffff;
            padding-top: 150px;
            padding-bottom: 6rem;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
          }
          .hwd-glow {
            position: absolute;
            top: -150px; left: 50%;
            transform: translateX(-50%);
            width: 900px; height: 500px;
            background: radial-gradient(ellipse at center, rgba(59,173,176,0.38) 0%, rgba(0,32,70,0.12) 40%, transparent 70%);
            filter: blur(50px);
            pointer-events: none; z-index: 0;
          }
          .hwd-hero-inner {
            position: relative; z-index: 1;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          .hwd-eyebrow {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #74777f;
            margin-bottom: 1.5rem;
          }
          .hwd-h1 {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(2.4rem, 4.5vw, 3.6rem);
            font-weight: 800;
            color: #002046;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin: 0 0 1.5rem 0;
          }
          .hwd-h1 span {
            background: linear-gradient(135deg, #2ECC40 0%, #3BADB0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hwd-hero-sub {
            font-size: 1.05rem;
            line-height: 1.75;
            color: #74777f;
            margin: 0 0 2.5rem 0;
          }
          .hwd-hero-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            background: #002046;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            font-size: 0.88rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s;
          }
          .hwd-hero-btn:hover {
            background: #2ECC40;
            color: #002046;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.25);
          }
          .hwd-hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            background: rgba(0,32,70,0.08);
            border: 1px solid rgba(0,32,70,0.08);
          }
          .hwd-hero-stat {
            background: #ffffff;
            padding: 2rem 1.75rem;
          }
          .hwd-stat-val {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 800;
            color: #002046;
            letter-spacing: -0.03em;
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .hwd-stat-val span { color: #2ECC40; }
          .hwd-stat-label {
            font-size: 0.78rem;
            color: #74777f;
            line-height: 1.5;
            font-weight: 500;
          }

          /* ── Shared section styles ── */
          .hwd-section {
            padding: 6rem 40px;
            font-family: 'Inter', sans-serif;
          }
          .hwd-inner { max-width: 1280px; margin: 0 auto; }
          .hwd-section-eyebrow {
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
          .hwd-section-eyebrow::before {
            content: '';
            display: inline-block;
            width: 24px; height: 2px;
            background: #2ECC40;
          }
          .hwd-h2 {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(1.9rem, 3.5vw, 2.8rem);
            font-weight: 800;
            color: #002046;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 1rem 0;
          }
          .hwd-h2-sub {
            font-size: 1rem;
            line-height: 1.7;
            color: #74777f;
            max-width: 560px;
            margin: 0 0 4rem 0;
          }

          /* ── Delivery Models ── */
          #hwd-models { background: #faf9fd; }
          .hwd-models-list {
            display: flex;
            flex-direction: column;
            gap: 0;
            border-top: 1px solid rgba(0,32,70,0.08);
          }
          .hwd-model-row {
            display: grid;
            grid-template-columns: 60px 1fr 1.6fr;
            align-items: stretch;
            border-bottom: 1px solid rgba(0,32,70,0.08);
            background: #ffffff;
            transition: background 0.3s;
          }
          .hwd-model-row:hover { background: rgba(46,204,64,0.02); }
          .hwd-model-num {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 2.5rem 0;
            font-family: 'Manrope', sans-serif;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            color: rgba(0,32,70,0.2);
            border-right: 1px solid rgba(0,32,70,0.08);
          }
          .hwd-model-left {
            padding: 2.5rem 2.5rem;
            border-right: 1px solid rgba(0,32,70,0.08);
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .hwd-model-icon {
            color: #3BADB0;
            margin-bottom: 0.5rem;
          }
          .hwd-model-title {
            font-family: 'Manrope', sans-serif;
            font-size: 1.2rem;
            font-weight: 800;
            color: #002046;
            letter-spacing: -0.01em;
            margin: 0;
          }
          .hwd-model-tagline {
            font-size: 0.82rem;
            font-weight: 600;
            color: #3BADB0;
            margin: 0;
          }
          .hwd-model-right {
            padding: 2.5rem 2.5rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 2rem;
          }
          .hwd-model-desc {
            font-size: 0.9rem;
            line-height: 1.7;
            color: #74777f;
            margin: 0;
            grid-column: 1 / -1;
            margin-bottom: 1.5rem;
          }
          .hwd-model-col-label {
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(0,32,70,0.35);
            margin-bottom: 0.75rem;
          }
          .hwd-model-list {
            list-style: none;
            margin: 0; padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.45rem;
          }
          .hwd-model-list li {
            font-size: 0.83rem;
            color: #74777f;
            line-height: 1.5;
            padding-left: 14px;
            position: relative;
          }
          .hwd-model-list li::before {
            content: '';
            position: absolute;
            left: 0; top: 8px;
            width: 5px; height: 5px;
            background: #2ECC40;
          }

          /* ── Process ── */
          #hwd-process {
            background: #002046;
            position: relative;
            overflow: hidden;
          }
          #hwd-process::before {
            content: '';
            position: absolute; inset: 0;
            background-image: repeating-linear-gradient(
              -55deg,
              rgba(255,255,255,0.015) 0px,
              rgba(255,255,255,0.015) 1px,
              transparent 1px,
              transparent 48px
            );
            pointer-events: none;
          }
          #hwd-process .hwd-h2 { color: #ffffff; }
          #hwd-process .hwd-h2-sub { color: rgba(255,255,255,0.5); }

          .hwd-phases {
            display: flex;
            flex-direction: column;
            gap: 0;
            border-top: 1px solid rgba(255,255,255,0.08);
          }
          .hwd-phase {
            display: grid;
            grid-template-columns: 80px 280px 1fr;
            align-items: stretch;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            transition: background 0.3s;
          }
          .hwd-phase:hover { background: rgba(255,255,255,0.03); }
          .hwd-phase-num {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 2.5rem 0;
            gap: 8px;
          }
          .hwd-phase-circle {
            width: 36px; height: 36px;
            border: 2px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Manrope', sans-serif;
            font-size: 0.65rem;
            font-weight: 800;
            color: #ffffff;
          }
          .hwd-phase-meta {
            padding: 2.5rem 2rem;
            border-right: 1px solid rgba(255,255,255,0.08);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 4px;
          }
          .hwd-phase-title {
            font-family: 'Manrope', sans-serif;
            font-size: 1.1rem;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.01em;
          }
          .hwd-phase-duration {
            font-size: 0.72rem;
            font-weight: 600;
            color: rgba(255,255,255,0.4);
            letter-spacing: 0.05em;
          }
          .hwd-phase-body {
            padding: 2.5rem;
          }
          .hwd-phase-desc {
            font-size: 0.9rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.6);
            margin: 0 0 1.5rem 0;
          }
          .hwd-phase-outputs {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .hwd-output-tag {
            font-size: 0.72rem;
            font-weight: 600;
            color: rgba(255,255,255,0.7);
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 4px 12px;
            letter-spacing: 0.02em;
          }

          /* ── Principles ── */
          #hwd-principles { background: #ffffff; }
          .hwd-principles-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid rgba(0,32,70,0.08);
            border-left: 1px solid rgba(0,32,70,0.08);
          }
          .hwd-principle {
            background: #ffffff;
            padding: 2.5rem 2rem;
            border-right: 1px solid rgba(0,32,70,0.08);
            border-bottom: 1px solid rgba(0,32,70,0.08);
            transition: background 0.3s;
          }
          .hwd-principle:hover { background: #faf9fd; }
          .hwd-principle-icon {
            width: 44px; height: 44px;
            border: 1px solid rgba(46,204,64,0.2);
            background: rgba(46,204,64,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3BADB0;
            margin-bottom: 1.25rem;
          }
          .hwd-principle-title {
            font-family: 'Manrope', sans-serif;
            font-size: 1rem;
            font-weight: 800;
            color: #002046;
            margin: 0 0 0.65rem 0;
          }
          .hwd-principle-body {
            font-size: 0.86rem;
            line-height: 1.7;
            color: #74777f;
            margin: 0;
          }

          /* ── CTA ── */
          #hwd-cta {
            background:
              radial-gradient(ellipse 80% 60% at 70% 0%, rgba(46,204,64,0.14) 0%, transparent 55%),
              linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%);
            padding: 7rem 40px;
            text-align: center;
            font-family: 'Inter', sans-serif;
          }
          .hwd-cta-inner { max-width: 660px; margin: 0 auto; }
          .hwd-cta-eyebrow {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #2ECC40;
            margin-bottom: 1.25rem;
          }
          .hwd-cta-h2 {
            font-family: 'Manrope', sans-serif;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin: 0 0 1rem 0;
          }
          .hwd-cta-sub {
            font-size: 1rem;
            color: rgba(255,255,255,0.6);
            line-height: 1.7;
            margin: 0 0 2.5rem 0;
          }
          .hwd-cta-btns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
          }
          .hwd-cta-primary {
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
          .hwd-cta-primary:hover {
            background: #27b837;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(46,204,64,0.35);
          }
          .hwd-cta-secondary {
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
          .hwd-cta-secondary:hover {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.06);
            color: #ffffff;
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            #hwd-hero { padding-top: 130px; }
            .hwd-hero-inner { grid-template-columns: 1fr; gap: 3rem; padding: 0 20px; }
            .hwd-section { padding: 5rem 20px; }
            .hwd-model-row { grid-template-columns: 1fr; }
            .hwd-model-num { display: none; }
            .hwd-model-left { border-right: none; border-bottom: 1px solid rgba(0,32,70,0.08); }
            .hwd-model-right { grid-template-columns: 1fr; }
            .hwd-phase { grid-template-columns: 60px 1fr; }
            .hwd-phase-body { grid-column: 1 / -1; padding: 0 2rem 2rem; }
            .hwd-principles-grid { grid-template-columns: repeat(2, 1fr); }
            #hwd-cta { padding: 5rem 20px; }
          }
          @media (max-width: 600px) {
            #hwd-hero { padding-top: 110px; padding-bottom: 4rem; }
            .hwd-section { padding: 4rem 16px; }
            .hwd-model-right { padding: 1.5rem; gap: 1.5rem 0; }
            .hwd-model-left { padding: 1.5rem; }
            .hwd-phase { grid-template-columns: 1fr; }
            .hwd-phase-num { flex-direction: row; padding: 1.5rem 1.5rem 0; }
            .hwd-phase-meta { border-right: none; padding: 0.5rem 1.5rem 1rem; }
            .hwd-phase-body { padding: 0 1.5rem 1.5rem; }
            .hwd-principles-grid { grid-template-columns: 1fr; }
            .hwd-hero-stats { grid-template-columns: 1fr 1fr; }
            #hwd-cta { padding: 4rem 16px; }
            .hwd-cta-btns { flex-direction: column; align-items: stretch; }
            .hwd-cta-primary, .hwd-cta-secondary { justify-content: center; }
          }
        `}</style>

        {/* ── Hero ── */}
        <section id="hwd-hero">
          <div className="hwd-glow" />
          <div className="hwd-hero-inner">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hwd-eyebrow">HOW WE DELIVER</div>
              <h1 className="hwd-h1">
                Transparent delivery.<br />
                <span>Shared momentum.</span>
              </h1>
              <p className="hwd-hero-sub">
                From the first discovery call to post-launch governance, we operate with full visibility, clear accountability, and a bias toward keeping projects moving. No black boxes. No surprise scope changes. No late discoveries.
              </p>
              <Link href="/contact" className="hwd-hero-btn">
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              className="hwd-hero-stats"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { val: "4",    unit: "",   label: "Flexible delivery models to match your context" },
                { val: "2wk",  unit: "",   label: "Sprint cadence with end-of-sprint demos" },
                { val: "100",  unit: "%",  label: "Projects with a formal project charter before start" },
                { val: "30d",  unit: "",   label: "Post-launch hyper-care included on every engagement" },
              ].map((s) => (
                <div key={s.label} className="hwd-hero-stat">
                  <div className="hwd-stat-val">{s.val}<span>{s.unit}</span></div>
                  <div className="hwd-stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Delivery Models ── */}
        <section id="hwd-models" className="hwd-section">
          <div className="hwd-inner">
            <div className="hwd-section-eyebrow">Delivery Models</div>
            <h2 className="hwd-h2">Four ways we can work together</h2>
            <p className="hwd-h2-sub">
              Every engagement starts by choosing the model that fits your team's maturity, budget structure, and timeline,or blending them as your needs evolve.
            </p>
            <motion.div
              className="hwd-models-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {MODELS.map((m) => (
                <motion.div
                  key={m.num}
                  className="hwd-model-row"
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="hwd-model-num">{m.num}</div>
                  <div className="hwd-model-left">
                    <div className="hwd-model-icon">{m.icon}</div>
                    <h3 className="hwd-model-title">{m.title}</h3>
                    <p className="hwd-model-tagline">{m.tagline}</p>
                  </div>
                  <div className="hwd-model-right">
                    <p className="hwd-model-desc">{m.desc}</p>
                    <div>
                      <div className="hwd-model-col-label">Best suited for</div>
                      <ul className="hwd-model-list">
                        {m.suits.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="hwd-model-col-label">What's included</div>
                      <ul className="hwd-model-list">
                        {m.includes.map((inc) => <li key={inc}>{inc}</li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
        <section id="hwd-process" className="hwd-section">
          <div className="hwd-inner">
            <div className="hwd-section-eyebrow" style={{ color: "#2ECC40" }}>Our Process</div>
            <h2 className="hwd-h2">How every engagement runs</h2>
            <p className="hwd-h2-sub">
              A five-phase delivery process with documented outputs at every stage,so you always know where things stand.
            </p>
            <motion.div
              className="hwd-phases"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            >
              {PHASES.map((p) => (
                <motion.div
                  key={p.phase}
                  className="hwd-phase"
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="hwd-phase-num">
                    <div className="hwd-phase-circle" style={{ borderColor: p.color }}>
                      {p.phase}
                    </div>
                  </div>
                  <div className="hwd-phase-meta">
                    <div className="hwd-phase-title">{p.title}</div>
                    <div className="hwd-phase-duration">{p.duration}</div>
                  </div>
                  <div className="hwd-phase-body">
                    <p className="hwd-phase-desc">{p.body}</p>
                    <div className="hwd-phase-outputs">
                      {p.outputs.map((o) => (
                        <span key={o} className="hwd-output-tag">{o}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section id="hwd-principles" className="hwd-section">
          <div className="hwd-inner">
            <div className="hwd-section-eyebrow">Our Commitments</div>
            <h2 className="hwd-h2">What we believe about delivery</h2>
            <p className="hwd-h2-sub">
              Six operating principles that govern how we work,and what you can hold us to.
            </p>
            <motion.div
              className="hwd-principles-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            >
              {PRINCIPLES.map((p) => (
                <motion.div
                  key={p.title}
                  className="hwd-principle"
                  variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="hwd-principle-icon">{p.icon}</div>
                  <h3 className="hwd-principle-title">{p.title}</h3>
                  <p className="hwd-principle-body">{p.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="hwd-cta">
          <div className="hwd-cta-inner">
            <div className="hwd-cta-eyebrow">Get Started</div>
            <h2 className="hwd-cta-h2">Ready to start your engagement?</h2>
            <p className="hwd-cta-sub">
              Tell us what you are building and which delivery model interests you. We will respond within one business day with a proposed next step.
            </p>
            <div className="hwd-cta-btns">
              <Link href="/contact" className="hwd-cta-primary">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/company" className="hwd-cta-secondary">
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

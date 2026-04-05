"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";

export default function LaunchPulseCaseStudy() {
  return (
    <>
      <Navbar activeSection="projects" />
      
      <main className="cs-page">
        <style>{`
          .cs-page {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            overflow-x: hidden;
            background: #ffffff;
          }

          /* ── TOP TONE: DARK HERO ── */
          .cs-hero {
            position: relative;
            background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%);
            padding: 12rem 2rem 6rem;
            color: #ffffff;
          }
          .cs-hero::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at top, rgba(59,173,176,0.15) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
          }

          .cs-hero-inner {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            text-align: center;
          }

          .cs-back-link {
            position: absolute;
            top: -4rem;
            left: 0;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #a7fff9;
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.1em;
            transition: color 0.2s, transform 0.2s;
            background: rgba(255,255,255,0.05);
            padding: 8px 16px;
            border-radius: 100px;
            border: 1px solid rgba(167,255,249,0.3);
            backdrop-filter: blur(10px);
          }
          .cs-back-link:hover {
            color: #ffffff;
            border-color: #ffffff;
            transform: translateX(-4px);
            background: rgba(255,255,255,0.1);
          }

          .cs-category {
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            color: #a7fff9;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            display: inline-block;
          }

          .cs-title {
            font-family: 'Oxanium', monospace;
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            margin-bottom: 1rem;
          }

          .cs-subtitle {
            font-size: 1.4rem;
            color: rgba(255,255,255,0.7);
            font-weight: 300;
          }

          /* ── BOTTOM TONE: LIGHT CONTENT ── */
          .cs-body {
            position: relative;
            background: #ffffff;
            padding: 6rem 2rem 15rem;
            color: #4e6070;
            text-align: center;
          }
          .cs-body::before {
            content: '';
            position: absolute; inset: 0;
            background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none; z-index: 0;
          }

          .cs-upcoming {
             position: relative; z-index: 1;
             font-family: 'Oxanium', monospace;
             font-size: 1.5rem;
             color: #1B2E5E;
             font-weight: 700;
             margin-top: 2rem;
          }
        `}</style>
        
        {/* ── TOP TONE: DARK ── */}
        <header className="cs-hero">
          <BackgroundNightfall />
          <div className="cs-hero-inner">
            <Link href="/projects" className="cs-back-link">
              <ArrowLeft size={16} /> Returns to Projects
            </Link>

            <span className="cs-category">AI & Big Data</span>
            <h1 className="cs-title">LaunchPulse AI</h1>
            <p className="cs-subtitle">AI Powered Startup Evaluation</p>
          </div>
        </header>

        {/* ── BOTTOM TONE: LIGHT ── */}
        <section className="cs-body">
            <p className="cs-upcoming">Full case study coming soon...</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

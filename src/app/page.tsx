"use client";

import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import Navbar from "../components/Header";

// ─── Lazy‑load all below‑the‑fold sections ─────────────────────────────────
const Hero = lazy(() => import("../components/hero"));
const TaglineBar = lazy(() => import("../components/TaglineBar"));
const CaseStudies = lazy(() => import("../components/CaseStudies"));
const About = lazy(() => import("../components/about"));
const StatementBanner = lazy(() => import("../components/statementBanner"));
const ExpertiseDomains = lazy(() => import("../components/ExpertiseDomains"));
const Services = lazy(() => import("../components/services"));
const TechStack = lazy(() => import("../components/Techstack"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/contact"));
const Footer = lazy(() => import("../components/Footer"));

const SECTIONS = ["home", "about-split", "services", "contactd"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  /* Track active section on scroll */
  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 120;
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECTIONS[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(SECTIONS[i]);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* Stable smooth‑scroll helper */
  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={scrollTo} />

      <main>
        <Suspense fallback={<div style={{ minHeight: '100vh', width: '100%' }}></div>}>
          <Hero onNavClick={scrollTo} />
          <TaglineBar />
          <CaseStudies />
          <About />
          <StatementBanner />
          <ExpertiseDomains />
          <Services />
          <TechStack />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
"use client";   //hello 

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
const Blogs = lazy(() => import("../components/Blogs"));
const Newsletter = lazy(() => import("../components/Newsletter"));
const TechStack = lazy(() => import("../components/Techstack"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/contact"));
const Footer = lazy(() => import("../components/Footer"));

const SECTIONS = ["home", "about-split", "services", "blogs", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  /* Track active section on scroll with Layout Caching to avoid DOM thrashing */
  useEffect(() => {
    let rafId = 0;
    const offsets: { id: string, top: number }[] = [];

    const calculateOffsets = () => {
      offsets.length = 0;
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el) offsets.push({ id, top: el.offsetTop });
      });
    };

    calculateOffsets();

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 120;
        let current = "home";
        for (let i = offsets.length - 1; i >= 0; i--) {
          if (offsets[i].top <= scrollPos) {
            current = offsets[i].id;
            break;
          }
        }
        setActiveSection((prev) => (prev !== current ? current : prev));
      });
    };

    window.addEventListener("resize", calculateOffsets, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* Stable smooth‑scroll helper */
  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* Handle incoming navigation from sub-pages (via sessionStorage) */
  useEffect(() => {
    const target = sessionStorage.getItem('scrollToSection');
    if (target) {
      sessionStorage.removeItem('scrollToSection');
      // Wait for lazy components to mount
      const timer = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={scrollTo} />

      <main style={{ overflowX: "hidden", width: "100%" }}>
        <Suspense fallback={<div style={{ minHeight: '100vh', width: '100%' }}></div>}>
          <Hero onNavClick={scrollTo} />
          <TaglineBar />
          <CaseStudies />
          <StatementBanner />
          {/* <About /> */}

          <ExpertiseDomains />
          <Newsletter />
          {/* <Services /> */}
          {/* <TechStack /> */}
        

          {/* <Testimonials /> */}
          <Contact />
          <Blogs />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
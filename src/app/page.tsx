"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Header";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Products from "../components/products";
import Contact from "../components/contact";
const SECTIONS = [
  "home", "about", "services", "products", "contactd"
];
//fix tgus 
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  /* Track active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Smooth scroll helper passed down to all components */
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        activeSection={activeSection}
        onNavClick={scrollTo}
      />

      <main>
        <Hero     onNavClick={scrollTo} />
        <About    />
        <Services />
        <Products />
        <Contact  />
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid rgba(59,173,176,0.15)",
        fontFamily: "'Oxanium', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        background: "var(--off-white)",
      }}>
        © {new Date().getFullYear()} Octabit Logics · Crafted with precision
      </footer>
    </>
  );
}
"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import ContactHero from "../../components/ContactHero";
import ContactPageSection from "../../components/ContactPageSection";
import WhatHappensNext from "../../components/WhatHappensNext";

export default function ContactPage() {
  const router = useRouter();

  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      sessionStorage.setItem("scrollToSection", href.replace("#", ""));
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Navbar activeSection="contact" onNavClick={handleNavClick} />
      <main style={{ overflowX: "hidden", width: "100%" }}>
        <ContactHero />
        <WhatHappensNext />
        <ContactPageSection />
      </main>
      <Footer />
    </>
  );
}

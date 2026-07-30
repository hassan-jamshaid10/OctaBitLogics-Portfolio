"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/ServicesHero";
import ServiceSections from "../../components/ServiceSections";
import DetailedServices from "../../components/DetailedServices";
import ProjectsCTA from "../../components/ProjectsCTA";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
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
      <Navbar activeSection="services" onNavClick={handleNavClick} />

      <main style={{ overflowX: "hidden", width: "100%" }}>
        <ServicesHero />
        <ServiceSections />
        <DetailedServices />
        <ProjectsCTA />
      </main> 

      <Footer />
    </>
  );
}

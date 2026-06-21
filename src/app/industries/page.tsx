"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import IndustriesHero from "../../components/IndustriesHero";
import IndustriesByRegion from "../../components/IndustriesByRegion";
import IndustriesWeServe from "../../components/IndustriesWeServe";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function IndustriesPage() {
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
      <Navbar activeSection="industries" onNavClick={handleNavClick} />

      <main style={{ overflowX: "hidden", width: "100%" }}>
        <IndustriesHero />
        <IndustriesWeServe />
        <IndustriesByRegion />
      </main>

      <Footer />
    </>
  );
}

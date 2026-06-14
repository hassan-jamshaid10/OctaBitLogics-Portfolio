"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import CompanyHero from "../../components/CompanyHero";
import WhoWeAre from "../../components/WhoWeAre";
import CompanyAIFirst from "../../components/CompanyAIFirst";
import CompanyDelivery from "../../components/CompanyDelivery";
import CompanyCTA from "../../components/CompanyCTA";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function CompanyPage() {
  const router = useRouter();

  const handleNavClick = useCallback((href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      // It's a hash link for the home page sections
      sessionStorage.setItem("scrollToSection", href.replace("#", ""));
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Navbar activeSection="" onNavClick={handleNavClick} />

      <main style={{ overflowX: "hidden", width: "100%" }}>
        <CompanyHero />
        <WhoWeAre />
        <CompanyAIFirst />
        <CompanyDelivery />
        <CompanyCTA />
      </main>

      <Footer />
    </>
  );
}

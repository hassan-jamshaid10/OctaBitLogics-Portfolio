"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function TechPartnersBar() {
  return (
    <ScrollReveal style={{
      background: "#fff",
      border: "1px solid rgba(59,173,176,0.15)",
      borderRadius: "4px",
      padding: "1.4rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 24px rgba(27,46,94,0.07)",
    }}>
      <span style={{
        fontFamily: "inherit",
        fontSize: "clamp(1.4rem, 3vw, 2rem)",
        fontWeight: 800,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: "0.6rem",
      }}>
        <span style={{
          background: "linear-gradient(135deg, #3BADB0 0%, #2a9da0 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Technology</span>
        <span style={{ width: 5, height: 5, borderRadius: "50%",
          background: "linear-gradient(135deg, #3BADB0, #1B2E5E)", opacity: 0.5 }} />
        <span style={{
          background: "linear-gradient(135deg, #1f4080 0%, #1B2E5E 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Partners</span>
      </span>
    </ScrollReveal>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const TECH_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend Development",
    images: [
      "/Frontend_development/Typescript_logo.png",
      "/Frontend_development/Vue_logo.png",
      "/Frontend_development/angular_logo.png",
      "/Frontend_development/bootstrap_logo.png",
      "/Frontend_development/next.js-logo.png",
      "/Frontend_development/nuxt_logo.png",
      "/Frontend_development/react_logo.png",
      "/Frontend_development/svelte_logo.png",
      "/Frontend_development/tailwindcss_logo.png",
    ]
  },
  {
    id: "backend",
    label: "Backend & Databases",
    images: [
      "/backend_databases/Django-Logo.png",
      "/backend_databases/Node.js_logo.png",
      "/backend_databases/Redis-Logo.png",
      "/backend_databases/Spring-Boot-Logo.png",
      "/backend_databases/expressjs_logo.png",
      "/backend_databases/java_logo.png",
      "/backend_databases/mongodb_logo.png",
      "/backend_databases/mysql_logo.png",
      "/backend_databases/postgres_logo.png",
    ]
  },
  {
    id: "mobile",
    label: "Mobile Applications",
    images: [
      "/mobile_application_development/Dart_logo.png",
      "/mobile_application_development/Firebase_Logo.png",
      "/mobile_application_development/Kotlin_Icon_logo.png",
      "/mobile_application_development/Swift-Logo.png",
      "/mobile_application_development/Xamarin-Logo.png",
      "/mobile_application_development/flutter_logo.png",
      "/mobile_application_development/ionic_logo.png",
      "/mobile_application_development/objecc_logo.png",
      "/mobile_application_development/react-native_logo.png",
    ]
  },
  {
    id: "aiml",
    label: "AI & ML",
    images: [
      "/ai_machine_learning/NumPy_logo.png",
      "/ai_machine_learning/OpenCV_Logo.png",
      "/ai_machine_learning/Pandas_logo.png",
      "/ai_machine_learning/Pytorch_logo.png",
      "/ai_machine_learning/Scikit_learn_logo.png",
      "/ai_machine_learning/TensorFlow_logo.png",
      "/ai_machine_learning/keras_logo.png",
      "/ai_machine_learning/python_logo.png",
      "/ai_machine_learning/yolov8_logo.png",
    ]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    images: [
      "/cloud_devops/GitHub-Logo.png",
      "/cloud_devops/Google-Cloud-Logo.png",
      "/cloud_devops/Jenkins-logo.png",
      "/cloud_devops/Microsoft_Azure_Logo.png",
      "/cloud_devops/aws_logo.png",
      "/cloud_devops/docker_logo.png",
      "/cloud_devops/git_logo.png",
      "/cloud_devops/ibm_cloud_logo.png",
      "/cloud_devops/kubernetes_logo.png",
    ]
  },
  {
    id: "sqa",
    label: "SQA & Testing",
    images: [
      "/sqa_testing/Apache_JMeter_logo.png",
      "/sqa_testing/JUnit_5_logo.png",
      "/sqa_testing/Postman_logo.png",
      "/sqa_testing/Selenium_Logo.png",
      "/sqa_testing/appium-logo.png",
      "/sqa_testing/browserstack_logo.png",
      "/sqa_testing/cypress_logo.png",
      "/sqa_testing/jest_logo.png",
      "/sqa_testing/mocha_logo.png",
    ]
  }
];

export default function TechStack() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTab = () => {
    setActiveIdx((prev) => (prev === 0 ? TECH_CATEGORIES.length - 1 : prev - 1));
  };

  const nextTab = () => {
    setActiveIdx((prev) => (prev === TECH_CATEGORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="tech-stacks-section" aria-label="Tech stack">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tech-stacks-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }

        .tech-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* Subtle background blob to maintain creative flair */
        .tech-stacks-section::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,173,176,0.06) 0%, transparent 60%);
          top: -200px; left: -200px;
          pointer-events: none;
          z-index: 0;
        }

        .tech-title {
          font-family: 'Oxanium', monospace;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #3badb0; 
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .tech-title span {
          color: #1e293b; 
        }

        .tech-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3.5rem;
          position: relative;
          padding: 0 1rem;
        }

        .tech-tab {
          font-family: 'Oxanium', monospace;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          color: #94a3b8;
          cursor: pointer;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .tech-tab.active {
          color: #3badb0;
        }

        .tech-tab:hover:not(.active) {
          color: #64748b;
        }

        .tech-tab.active::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%;
          height: 3px;
          background: #3badb0;
          border-radius: 2px;
        }

        .tech-content-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          min-height: 280px; /* enough space for items */
        }

        .nav-btn {
          background: none;
          border: none;
          color: #3badb0;
          font-size: 2rem;
          cursor: pointer;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
          z-index: 2;
        }

        .nav-btn:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }

        .tech-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          width: 100%;
          flex: 1;
          margin: 0 auto;
        }

        .tech-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4.5rem;
          width: 100%;
        }

        .tech-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 60px;
          transition: transform 0.3s ease;
        }

        .tech-logo-wrapper:hover {
          transform: translateY(-5px) scale(1.05);
        }

        .tech-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));
        }

        @media (max-width: 768px) {
          .tech-tabs { gap: 1rem; }
          .tech-tab { font-size: 0.95rem; }
          .tech-content-area { flex-direction: column; gap: 2rem; }
          .nav-btn { display: none; }
          .tech-grid { gap: 2.2rem; }
          .tech-row { gap: 1.5rem; }
          .tech-logo-wrapper { width: 70px; height: 40px; }
        }
      `
        }}
      />

      <ScrollReveal className="tech-container">
        <h2 className="tech-title">
          Tech Stacks <span>We Excel In</span>
        </h2>

        {/* Categories Tab Selector */}
        <div className="tech-tabs">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              className={`tech-tab ${idx === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="tech-content-area">
          <button className="nav-btn" onClick={prevTab} aria-label="Previous tech stack">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              className="tech-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {(() => {
                const images = TECH_CATEGORIES[activeIdx].images;
                const rows = [
                  images.slice(0, 4), // Row 1 (4 items)
                  images.slice(4, 7), // Row 2 (3 items)
                  images.slice(7, 9)  // Row 3 (2 items)
                ];

                return rows.map((row, rIdx) => (
                  <div key={rIdx} className="tech-row">
                    {row.map((imgSrc, i) => {
                      const filename = imgSrc.split("/").pop()?.split(".")[0]?.replace(/_/g, " ") || "Tech Logo";
                      const absoluteIndex = rIdx * 4 + i;
                      
                      return (
                        <motion.div 
                          key={imgSrc} 
                          className="tech-logo-wrapper"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: absoluteIndex * 0.05 }}
                        >
                          <img src={imgSrc} alt={filename} className="tech-logo" loading="lazy" />
                        </motion.div>
                      );
                    })}
                  </div>
                ));
              })()}
            </motion.div>
          </AnimatePresence>

          <button className="nav-btn" onClick={nextTab} aria-label="Next tech stack">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function HealthcarePipelineCaseStudy() {
    return (
        <>
            <Navbar activeSection="projects" />
            <main className="cs-page">
                <style>{`
          .cs-page { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; background: #ffffff; }
          .cs-hero { position: relative; background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%); padding: 12rem 2rem 6rem; color: #ffffff; }
          .cs-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top, rgba(59,173,176,0.15) 0%, transparent 70%); pointer-events: none; z-index: 0; }
          .cs-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }
          .cs-back-link { position: absolute; top: -4rem; left: 0; display: inline-flex; align-items: center; gap: 0.5rem; color: #a7fff9; font-family: inherit; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: 0.1em; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(167,255,249,0.3); backdrop-filter: blur(10px); }
          .cs-back-link:hover { color: #ffffff; border-color: #ffffff; transform: translateX(-4px); background: rgba(255,255,255,0.1); }
          .cs-category { font-family: inherit; font-size: 0.8rem; color: #a7fff9; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.5rem; display: inline-block; }
          .cs-title { font-family: inherit; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; color: #ffffff; line-height: 1.1; margin-bottom: 1rem; }
          .cs-subtitle { font-size: 1.4rem; color: rgba(255,255,255,0.7); font-weight: 300; }
          .cs-meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 4rem; background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left; backdrop-filter: blur(10px); }
          .meta-item h4 { font-family: inherit; font-size: 0.8rem; color: #a7fff9; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
          .meta-item p { font-size: 1rem; color: #ffffff; font-weight: 600; }
          .cs-body { position: relative; background: #ffffff; padding: 6rem 2rem 8rem; color: #4e6070; }
          .cs-body::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }
          .cs-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
          .cs-section { display: block; margin-bottom: 5rem; padding-left: 2rem; border-left: 3px solid rgba(59,173,176,0.25); }
          .cs-content h2 { font-family: inherit; font-size: 2.2rem; color: #1B2E5E; margin-bottom: 1.5rem; font-weight: 800; line-height: 1.2; }
          .cs-content h3 { font-family: inherit; font-size: 1.4rem; color: #3BADB0; margin-bottom: 1.2rem; font-weight: 700; margin-top: 3rem; }
          .cs-content p { font-size: 1.15rem; line-height: 1.9; margin-bottom: 1.5rem; color: #4e6070; }
          .cs-content strong { color: #1B2E5E; font-weight: 700; }
          .cs-content ul { list-style-type: none; padding-left: 0; margin-bottom: 2.5rem; }
          .cs-content li { position: relative; padding-left: 1.8rem; margin-bottom: 1.2rem; font-size: 1.15rem; line-height: 1.8; color: #4e6070; }
          .cs-content li::before { content: '>'; position: absolute; left: 0; color: #3BADB0; font-weight: 900; font-family: inherit; font-size: 1.2rem; top: 2px; }
          .cs-table { width: 100%; border-collapse: collapse; margin: 3rem 0; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 40px rgba(27,46,94,0.08); border: 1px solid rgba(59,173,176,0.2); }
          .cs-table th, .cs-table td { padding: 1.2rem; border-bottom: 1px solid rgba(59,173,176,0.15); text-align: left; }
          .cs-table tr:last-child td { border-bottom: none; }
          .cs-table th { background: rgba(59,173,176,0.06); font-family: inherit; color: #1B2E5E; font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; }
          .cs-table td { font-size: 0.95rem; line-height: 1.6; color: #4e6070; }
          .cs-table td:first-child { font-family: inherit; font-weight: 700; color: #3BADB0; }
          @media (max-width: 768px) { .cs-hero { padding: 10rem 1.5rem 4rem; } .cs-meta-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; } .cs-body { padding: 4rem 1.5rem 6rem; } .cs-section { padding-left: 1rem; border-left-width: 2px; } .cs-back-link { top: -3rem; } }
        `}</style>

                <header className="cs-hero">
                    <BackgroundNightfall />
                    <div className="cs-hero-inner">
                        <SectionLink section="case-studies" className="cs-back-link"><ArrowLeft size={16} /> Back to Case Studies</SectionLink>
                        <span className="cs-category">Healthcare (UK)</span>
                        <h1 className="cs-title">Patient Data Pipeline</h1>
                        <p className="cs-subtitle">Cloud-Native Resource &amp; Billing Optimization</p>
                        <div className="cs-meta-grid">
                            <div className="meta-item"><h4>Domain</h4><p>Healthcare Operations &amp; Revenue Cycle</p></div>
                            <div className="meta-item"><h4>Tech Stack</h4><p>AWS Lambda, Python, React, PostgreSQL, HL7 FHIR, Terraform</p></div>
                        </div>
                    </div>
                </header>

                <section className="cs-body">
                    <article className="cs-content">
                        <div className="cs-section">
                            <h2>1. Executive Summary</h2>
                            <p>The Patient Data Pipeline is a cloud native healthcare platform built for a UK private hospital group operating across seven facilities. It replaces fragmented EHR systems, manual billing reconciliation, and spreadsheet based scheduling with a unified data pipeline that ingests, normalises, and processes patient data in real time. The result is a 20% improvement in billing accuracy, 15 hours saved per week, and a 45% boost in staff efficiency.</p>
                        </div>

                        <div className="cs-section">
                            <h2>2. Problem Statement</h2>
                            <p>The hospital group grew through acquisitions, inheriting disparate IT systems at each facility:</p>
                            <ul>
                                <li><strong>Data siloes:</strong> Each facility ran its own EHR with different schemas and coding conventions. Cross facility patient records required manual lookup, causing delays and errors in treatment history visibility.</li>
                                <li><strong>Billing leakage:</strong> Manual coding and reconciliation resulted in 8-12% revenue leakage annually from missed charges, duplicate submissions, and incorrect procedure codes.</li>
                                <li><strong>Resource blindness:</strong> Ward capacity, theatre scheduling, and staffing were managed independently per facility with no cross facility visibility, causing bottlenecks and overtime costs.</li>
                            </ul>
                            <p>The platform addresses these through HL7 FHIR standardisation, ML powered billing validation, and real time operational dashboards with cross facility visibility.</p>
                        </div>

                        <div className="cs-section">
                            <h2>3. System Architecture</h2>
                            <h3>Data Integration Layer</h3>
                            <p>HL7 FHIR adapters connect each facility EHR, normalising data into standard resources (Patient, Encounter, Procedure, Claim). The layer handles schema mapping, terminology translation (SNOMED CT, ICD-10, OPCS-4), and quality validation.</p>
                            <h3>Serverless Processing</h3>
                            <p>AWS Lambda functions process FHIR events through transformation, enrichment, and validation stages. The serverless architecture scales automatically with admission and discharge peaks without provisioning changes.</p>
                            <h3>Billing Intelligence Engine</h3>
                            <p>ML based code suggestion flags potential missed charges with recommended codes and confidence scores, detects duplicates and coding inconsistencies, and validates payer specific format requirements before submission.</p>
                            <h3>Operational Dashboard</h3>
                            <p>React dashboards provide cross facility visibility for ward occupancy, theatre utilisation, and staff workload. Predictive models forecast 48-72 hour demand based on admission patterns and historical seasonality.</p>
                        </div>

                        <div className="cs-section">
                            <h2>4. Key Capabilities</h2>
                            <ul>
                                <li><strong>Unified Patient Record:</strong> Cross facility identity resolution providing complete treatment history regardless of care location.</li>
                                <li><strong>Automated Billing Validation:</strong> ML powered procedure code validation recovering 8-12% in previously leaked revenue.</li>
                                <li><strong>Real Time Bed Management:</strong> Live ward occupancy with 48-72 hour demand forecasting for proactive planning.</li>
                                <li><strong>Staff Scheduling Optimisation:</strong> Evidence based scheduling that reduced overtime costs by 30%.</li>
                                <li><strong>FHIR Interoperability:</strong> Standards based integration compatible with NHS Digital requirements.</li>
                                <li><strong>Compliance &amp; Audit Trail:</strong> Complete logging supporting CQC regulatory requirements and GDPR compliance.</li>
                            </ul>
                        </div>

                        <div className="cs-section">
                            <h2>5. Conclusion</h2>
                            <p>The Patient Data Pipeline demonstrates that cloud native architecture can deliver transformative value in healthcare without compromising security or compliance. By unifying fragmented data and applying intelligent automation to billing and resource management, the platform recovers hidden revenue, optimises utilisation, and frees staff to focus on patient care.</p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

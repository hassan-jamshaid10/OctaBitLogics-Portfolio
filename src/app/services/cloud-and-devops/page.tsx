"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function CloudAndDevOps() {
    return (
        <>
            <Navbar activeSection="" />
            <main className="sp-page">
                <style>{`
          .sp-page { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; background: #ffffff; }
          .sp-hero { position: relative; background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%); padding: 12rem 2rem 7rem; color: #ffffff; }
          .sp-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 20%, rgba(59,173,176,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(167,255,249,0.08) 0%, transparent 50%); pointer-events: none; z-index: 0; }
          .sp-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }
          .sp-back { position: absolute; top: -4rem; left: 0; display: inline-flex; align-items: center; gap: 0.5rem; color: #a7fff9; font-family: 'Oxanium', monospace; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: 0.1em; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(167,255,249,0.3); backdrop-filter: blur(10px); }
          .sp-back:hover { color: #ffffff; border-color: #ffffff; transform: translateX(-4px); background: rgba(255,255,255,0.1); }
          .sp-badge { display: inline-flex; align-items: center; font-family: 'Oxanium', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.25); padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem; backdrop-filter: blur(10px); }
          .sp-badge::before { content: ''; display: inline-block; width: 12px; height: 1px; background: rgba(255,255,255,0.5); margin-right: 8px; }
          .sp-title { font-family: 'Oxanium', monospace; font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; color: #ffffff; line-height: 1.1; margin-bottom: 1.5rem; }
          .sp-subtitle { font-size: 1.15rem; color: rgba(255,255,255,0.6); max-width: 650px; margin: 0 auto; line-height: 1.8; }
          .sp-body { position: relative; background: #ffffff; padding: 6rem 2rem 8rem; color: #4e6070; }
          .sp-body::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }
          .sp-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
          .sp-label { font-family: 'Oxanium', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #3BADB0; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
          .sp-label::before { content: ''; width: 18px; height: 1px; background: #3BADB0; }
          .sp-section-title { font-family: 'Oxanium', monospace; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: #1B2E5E; margin-bottom: 2rem; line-height: 1.2; }
          .sp-block { margin-bottom: 4rem; padding-left: 2rem; border-left: 3px solid rgba(59,173,176,0.25); }
          .sp-block h3 { font-family: 'Oxanium', monospace; font-size: 1.3rem; font-weight: 800; color: #1B2E5E; margin-bottom: 1rem; }
          .sp-block p { font-size: 1.1rem; line-height: 1.9; color: #4e6070; margin-bottom: 1rem; }
          .sp-block strong { color: #1B2E5E; }
          .sp-block ul { list-style: none; padding: 0; margin: 1.5rem 0; }
          .sp-block li { position: relative; padding-left: 1.8rem; margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.8; color: #4e6070; }
          .sp-block li::before { content: '>'; position: absolute; left: 0; color: #3BADB0; font-weight: 900; font-family: 'Oxanium', monospace; font-size: 1.1rem; top: 2px; }
          .sp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin: 3rem 0; }
          .sp-offer { background: #ffffff; border: 1px solid rgba(59,173,176,0.15); border-radius: 14px; padding: 2rem; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
          .sp-offer:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(27,46,94,0.08); border-color: rgba(59,173,176,0.4); }
          .sp-offer h4 { font-family: 'Oxanium', monospace; font-size: 1.05rem; font-weight: 800; color: #1B2E5E; margin-bottom: 0.6rem; }
          .sp-offer p { font-size: 0.92rem; line-height: 1.7; color: #4e6070; }
          .sp-cta { position: relative; background: linear-gradient(135deg, #3BADB0 0%, #1f4080 45%, #1B2E5E 100%); padding: 5rem 2rem; text-align: center; overflow: hidden; }
          .sp-cta::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; }
          .sp-cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
          .sp-cta h2 { font-family: 'Oxanium', monospace; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: #ffffff; margin-bottom: 1rem; }
          .sp-cta p { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; line-height: 1.7; }
          .sp-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Oxanium', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #1B2E5E; background: #ffffff; border: none; padding: 14px 28px; border-radius: 100px; text-decoration: none; cursor: pointer; transition: background 0.25s, transform 0.2s, box-shadow 0.2s; }
          .sp-cta-btn:hover { background: #e8f8f8; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
          @media (max-width: 768px) { .sp-hero { padding: 10rem 1.5rem 5rem; } .sp-body { padding: 4rem 1.5rem 6rem; } .sp-grid { grid-template-columns: 1fr; } .sp-back { top: -3rem; } .sp-block { padding-left: 1rem; border-left-width: 2px; } }
        `}</style>

                <header className="sp-hero">
                    <BackgroundNightfall />
                    <div className="sp-hero-inner">
                        <SectionLink section="services" className="sp-back"><ArrowLeft size={16} /> Back to Services</SectionLink>
                        <div className="sp-badge">Service</div>
                        <h1 className="sp-title">Cloud &amp; DevOps</h1>
                        <p className="sp-subtitle">Modern cloud infrastructure and CI/CD pipelines engineered for reliability, security, and developer velocity at every stage of your product lifecycle.</p>
                    </div>
                </header>

                <section className="sp-body">
                    <div className="sp-inner">
                        <div className="sp-label">What We Deliver</div>
                        <h2 className="sp-section-title">Infrastructure That Scales With You</h2>

                        <div className="sp-block">
                            <h3>Cloud Architecture & Migration</h3>
                            <p>We design and implement cloud infrastructure on AWS, GCP, or Azure that is optimised for your specific workload patterns. Whether migrating from bare metal, restructuring an existing cloud deployment, or building greenfield infrastructure, every environment is designed for high availability, cost efficiency, and security from day one.</p>
                        </div>

                        <div className="sp-block">
                            <h3>CI/CD Pipeline Engineering</h3>
                            <p>Automated build, test, and deployment pipelines that give your team the confidence to ship multiple times per day. We implement trunk based development workflows with automated testing gates, staged rollouts, feature flags, and automated rollback capabilities that catch problems before they reach production.</p>
                        </div>

                        <div className="sp-block">
                            <h3>Container Orchestration</h3>
                            <p>Docker containerisation and Kubernetes orchestration for applications that need to scale dynamically with demand. We configure auto scaling policies, resource limits, health checks, and rolling deployment strategies that maintain zero downtime during updates and handle traffic spikes without intervention.</p>
                        </div>

                        <div className="sp-block">
                            <h3>Monitoring & Incident Response</h3>
                            <p>Comprehensive observability stacks covering application metrics, infrastructure health, log aggregation, and distributed tracing. Automated alerting with clear runbooks ensures that your team can diagnose and resolve production issues in minutes rather than hours.</p>
                        </div>

                        <div className="sp-label" style={{ marginTop: '4rem' }}>What You Get</div>
                        <h2 className="sp-section-title">Our Deliverables</h2>

                        <div className="sp-grid">
                            <div className="sp-offer">
                                <h4>Infrastructure as Code</h4>
                                <p>Complete Terraform or Pulumi codebases that define your entire infrastructure reproducibly, with version control and change tracking.</p>
                            </div>
                            <div className="sp-offer">
                                <h4>Automated Pipelines</h4>
                                <p>GitHub Actions, GitLab CI, or Jenkins pipelines with automated testing, security scanning, and multi environment deployment.</p>
                            </div>
                            <div className="sp-offer">
                                <h4>Security Hardening</h4>
                                <p>Network policies, secrets management, vulnerability scanning, and compliance auditing configured and documented.</p>
                            </div>
                            <div className="sp-offer">
                                <h4>Runbooks & Documentation</h4>
                                <p>Operational runbooks for common incidents, architecture decision records, and onboarding documentation for your team.</p>
                            </div>
                        </div>

                        <div className="sp-block" style={{ marginTop: '3rem' }}>
                            <h3>Technologies We Use</h3>
                            <ul>
                                <li><strong>Cloud:</strong> AWS (EC2, ECS, Lambda, RDS, S3), GCP, Azure</li>
                                <li><strong>Containers:</strong> Docker, Kubernetes, Helm, Docker Compose</li>
                                <li><strong>IaC:</strong> Terraform, Pulumi, CloudFormation</li>
                                <li><strong>CI/CD:</strong> GitHub Actions, GitLab CI, Jenkins, ArgoCD</li>
                                <li><strong>Monitoring:</strong> Prometheus, Grafana, Datadog, Sentry, ELK Stack</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="sp-cta">
                    <div className="sp-cta-inner">
                        <h2>Ready to Modernise Your Infrastructure?</h2>
                        <p>From cloud migration to fully automated deployment pipelines, we build infrastructure that your team can rely on.</p>
                        <SectionLink section="contact" className="sp-cta-btn">Start a Conversation →</SectionLink>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

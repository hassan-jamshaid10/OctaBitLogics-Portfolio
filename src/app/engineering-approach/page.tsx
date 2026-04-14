"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../components/BackgroundNightfall";
import SectionLink from "../../components/SectionLink";

export default function EngineeringApproach() {
    return (
        <>
            <Navbar activeSection="" />
            <main className="ea-page">
                <style>{`
          .ea-page { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; background: #ffffff; }

          /* ── HERO ── */
          .ea-hero { position: relative; background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%); padding: 12rem 2rem 7rem; color: #ffffff; }
          .ea-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 20%, rgba(59,173,176,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(167,255,249,0.08) 0%, transparent 50%); pointer-events: none; z-index: 0; }
          .ea-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }

          .ea-back-link { position: absolute; top: -4rem; left: 0; display: inline-flex; align-items: center; gap: 0.5rem; color: #a7fff9; font-family: 'Oxanium', monospace; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: 0.1em; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(167,255,249,0.3); backdrop-filter: blur(10px); }
          .ea-back-link:hover { color: #ffffff; border-color: #ffffff; transform: translateX(-4px); background: rgba(255,255,255,0.1); }

          .ea-badge { display: inline-flex; align-items: center; font-family: 'Oxanium', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.25); padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem; backdrop-filter: blur(10px); }
          .ea-badge::before { content: ''; display: inline-block; width: 12px; height: 1px; background: rgba(255,255,255,0.5); margin-right: 8px; }

          .ea-title { font-family: 'Oxanium', monospace; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; color: #ffffff; line-height: 1.1; margin-bottom: 1.5rem; }
          .ea-title span { color: rgba(255,255,255,0.5); }
          .ea-subtitle { font-size: 1.2rem; color: rgba(255,255,255,0.6); max-width: 650px; margin: 0 auto; line-height: 1.8; }

          /* ── PRINCIPLES GRID ── */
          .ea-principles { position: relative; background: #ffffff; padding: 6rem 2rem; }
          .ea-principles::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }
          .ea-principles-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
          .ea-section-label { font-family: 'Oxanium', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #3BADB0; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
          .ea-section-label::before { content: ''; width: 18px; height: 1px; background: #3BADB0; }
          .ea-section-title { font-family: 'Oxanium', monospace; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; color: #1B2E5E; margin-bottom: 3.5rem; line-height: 1.2; }

          .ea-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
          .ea-card { background: #ffffff; border: 1px solid rgba(59,173,176,0.15); border-radius: 16px; padding: 2.5rem 2rem; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; }
          .ea-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(27,46,94,0.1); border-color: rgba(59,173,176,0.4); }
          .ea-card-num { font-family: 'Oxanium', monospace; font-size: 3rem; font-weight: 900; color: rgba(59,173,176,0.12); line-height: 1; margin-bottom: 1rem; }
          .ea-card h3 { font-family: 'Oxanium', monospace; font-size: 1.15rem; font-weight: 800; color: #1B2E5E; margin-bottom: 1rem; }
          .ea-card p { font-size: 0.95rem; line-height: 1.8; color: #4e6070; }

          /* ── PROCESS SECTION ── */
          .ea-process { position: relative; background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%); padding: 6rem 2rem; color: #ffffff; }
          .ea-process::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; }
          .ea-process-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
          .ea-process .ea-section-label { color: rgba(255,255,255,0.5); }
          .ea-process .ea-section-label::before { background: rgba(255,255,255,0.4); }
          .ea-process .ea-section-title { color: #ffffff; }

          .ea-steps { display: flex; flex-direction: column; gap: 0; }
          .ea-step { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; padding: 2.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .ea-step:last-child { border-bottom: none; }
          .ea-step-num { font-family: 'Oxanium', monospace; font-size: 2.2rem; font-weight: 900; background: linear-gradient(135deg, #a7fff9, #3BADB0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; padding-top: 0.3rem; }
          .ea-step h3 { font-family: 'Oxanium', monospace; font-size: 1.2rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem; }
          .ea-step p { font-size: 1rem; line-height: 1.85; color: rgba(255,255,255,0.65); }

          /* ── TECH PHILOSOPHY ── */
          .ea-philosophy { position: relative; background: #ffffff; padding: 6rem 2rem 8rem; }
          .ea-philosophy::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(59,173,176,0.08) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }
          .ea-philosophy-inner { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }

          .ea-phil-block { margin-bottom: 4rem; padding-left: 2rem; border-left: 3px solid rgba(59,173,176,0.25); }
          .ea-phil-block h3 { font-family: 'Oxanium', monospace; font-size: 1.5rem; font-weight: 800; color: #1B2E5E; margin-bottom: 1rem; }
          .ea-phil-block p { font-size: 1.1rem; line-height: 1.9; color: #4e6070; margin-bottom: 1rem; }
          .ea-phil-block strong { color: #1B2E5E; }

          .ea-tech-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.5rem; }
          .ea-tech-tag { display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'Oxanium', monospace; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #3BADB0; border: 1px solid rgba(59,173,176,0.25); background: rgba(59,173,176,0.04); padding: 6px 14px; border-radius: 100px; }
          .ea-tech-tag::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: #3BADB0; }

          /* ── CTA ── */
          .ea-cta { position: relative; background: linear-gradient(135deg, #3BADB0 0%, #1f4080 45%, #1B2E5E 100%); padding: 5rem 2rem; text-align: center; overflow: hidden; }
          .ea-cta::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; }
          .ea-cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
          .ea-cta h2 { font-family: 'Oxanium', monospace; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: #ffffff; margin-bottom: 1rem; }
          .ea-cta p { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; line-height: 1.7; }
          .ea-cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Oxanium', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #1B2E5E; background: #ffffff; border: none; padding: 14px 28px; border-radius: 100px; text-decoration: none; cursor: pointer; transition: background 0.25s, transform 0.2s, box-shadow 0.2s; }
          .ea-cta-btn:hover { background: #e8f8f8; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }

          /* ── RESPONSIVE ── */
          @media (max-width: 960px) { .ea-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 768px) {
            .ea-hero { padding: 10rem 1.5rem 5rem; }
            .ea-grid { grid-template-columns: 1fr; }
            .ea-step { grid-template-columns: 50px 1fr; gap: 1.2rem; }
            .ea-step-num { font-size: 1.6rem; }
            .ea-principles, .ea-process, .ea-philosophy { padding: 4rem 1.5rem; }
            .ea-back-link { top: -3rem; }
          }
        `}</style>

                {/* ── HERO ── */}
                <header className="ea-hero">
                    <BackgroundNightfall />
                    <div className="ea-hero-inner">
                        <Link href="/" className="ea-back-link">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>

                        <div className="ea-badge">Our Philosophy</div>
                        <h1 className="ea-title">
                            Engineering <span>Excellence,</span><br />
                            Delivered <span>With Precision.</span>
                        </h1>
                        <p className="ea-subtitle">
                            We don&apos;t just write code. We architect systems that scale, perform under pressure, and stand the test of production. Every project follows a disciplined engineering methodology built on decades of collective experience.
                        </p>
                    </div>
                </header>

                {/* ── CORE PRINCIPLES ── */}
                <section className="ea-principles">
                    <div className="ea-principles-inner">
                        <div className="ea-section-label">Core Principles</div>
                        <h2 className="ea-section-title">The Six Pillars of Our Engineering DNA</h2>

                        <div className="ea-grid">
                            <div className="ea-card">
                                <div className="ea-card-num">01</div>
                                <h3>Architecture First</h3>
                                <p>Every project starts with system design, not code. We invest time upfront in defining data flows, component boundaries, API contracts, and failure modes before a single line is written. This eliminates expensive mid project rewrites and ensures the foundation supports future scale.</p>
                            </div>
                            <div className="ea-card">
                                <div className="ea-card-num">02</div>
                                <h3>Type Safe Everything</h3>
                                <p>We enforce end to end type safety across the entire stack. From database schemas through API layers to frontend components, every interface is typed and validated at compile time. Runtime errors from type mismatches are architecturally impossible in our systems.</p>
                            </div>
                            <div className="ea-card">
                                <div className="ea-card-num">03</div>
                                <h3>Performance by Design</h3>
                                <p>Performance is not an afterthought or an optimisation phase. We design for speed from the start: edge caching, lazy loading, code splitting, database indexing, and query optimisation are built into the initial architecture, not retrofitted after launch.</p>
                            </div>
                            <div className="ea-card">
                                <div className="ea-card-num">04</div>
                                <h3>Observable Systems</h3>
                                <p>If you can&apos;t measure it, you can&apos;t improve it. Every system we build includes structured logging, performance metrics, error tracking, and health monitoring from day one. When production issues arise, we diagnose in minutes, not hours.</p>
                            </div>
                            <div className="ea-card">
                                <div className="ea-card-num">05</div>
                                <h3>Security as Foundation</h3>
                                <p>Security is a design principle, not a compliance checkbox. Authentication, authorisation, input validation, encryption, and access controls are embedded in the architecture from the first commit. We build systems that are secure by default, not secure by patch.</p>
                            </div>
                            <div className="ea-card">
                                <div className="ea-card-num">06</div>
                                <h3>Continuous Delivery</h3>
                                <p>We ship frequently and confidently. Automated testing, linting, build pipelines, and staged deployments ensure that every release is validated before reaching production. Our CI/CD pipelines catch issues at commit time, not in customer reports.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section className="ea-process">
                    <BackgroundNightfall />
                    <div className="ea-process-inner">
                        <div className="ea-section-label">Our Process</div>
                        <h2 className="ea-section-title">From Concept to Production in Five Phases</h2>

                        <div className="ea-steps">
                            <div className="ea-step">
                                <div className="ea-step-num">01</div>
                                <div>
                                    <h3>Discovery & Requirements</h3>
                                    <p>We start by understanding your business objectives, not just feature requests. Through structured workshops and technical discovery sessions, we map the problem space, identify constraints, define success metrics, and establish the architectural requirements that will drive every subsequent decision.</p>
                                </div>
                            </div>
                            <div className="ea-step">
                                <div className="ea-step-num">02</div>
                                <div>
                                    <h3>System Design & Architecture</h3>
                                    <p>Before writing code, we produce comprehensive architecture documents covering data models, API contracts, component hierarchies, infrastructure topology, and deployment strategies. Every interface is defined, every failure mode is mapped, and every scaling concern is addressed on paper before implementation begins.</p>
                                </div>
                            </div>
                            <div className="ea-step">
                                <div className="ea-step-num">03</div>
                                <div>
                                    <h3>Iterative Implementation</h3>
                                    <p>Development follows two week sprint cycles with clear deliverables, code reviews, and stakeholder demos at each checkpoint. We build vertically, delivering complete end to end features rather than horizontal layers, ensuring that working software is available for validation at every stage.</p>
                                </div>
                            </div>
                            <div className="ea-step">
                                <div className="ea-step-num">04</div>
                                <div>
                                    <h3>Quality Assurance & Hardening</h3>
                                    <p>Automated test suites covering unit, integration, and end to end scenarios validate every code path. Performance load testing identifies bottlenecks under realistic traffic patterns. Security audits verify that authentication, authorisation, and data handling meet production standards before any code reaches a live environment.</p>
                                </div>
                            </div>
                            <div className="ea-step">
                                <div className="ea-step-num">05</div>
                                <div>
                                    <h3>Launch & Continuous Improvement</h3>
                                    <p>Production deployment follows a staged rollout strategy with automated rollback capabilities. Post launch monitoring tracks performance, error rates, and user behaviour in real time. We iterate based on production data, not assumptions, continuously improving the system after launch through structured improvement cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TECHNICAL PHILOSOPHY ── */}
                <section className="ea-philosophy">
                    <div className="ea-philosophy-inner">
                        <div className="ea-section-label">Technical Philosophy</div>
                        <h2 className="ea-section-title">How We Think About Technology</h2>

                        <div className="ea-phil-block">
                            <h3>Choose Boring Technology (Strategically)</h3>
                            <p>We default to battle tested technologies with strong ecosystems, mature tooling, and proven production track records. Innovation is reserved for the layers where it creates genuine competitive advantage for your product, not for the infrastructure that needs to quietly work at 3 AM on a Saturday.</p>
                            <p>This means <strong>PostgreSQL over the latest NoSQL trend</strong>, <strong>React over experimental UI frameworks</strong>, and <strong>proven cloud services over self hosted alternatives</strong>, unless the specific requirements genuinely demand otherwise.</p>
                        </div>

                        <div className="ea-phil-block">
                            <h3>Separation of Concerns at Every Level</h3>
                            <p>From microservice boundaries to component architecture to CSS organisation, we enforce strict separation of concerns. Each module has a single responsibility, a defined interface, and no hidden dependencies. This discipline ensures that systems remain maintainable as they grow, that teams can work in parallel without conflicts, and that individual components can be tested, deployed, and replaced independently.</p>
                        </div>

                        <div className="ea-phil-block">
                            <h3>Data-Driven Decisions</h3>
                            <p>We instrument everything. Feature flags, A/B testing infrastructure, analytics pipelines, and performance monitoring are not optional extras, they are core architectural components. Every product decision, from UI layout to API pagination strategy, is informed by production data rather than assumption.</p>
                        </div>

                        <div className="ea-phil-block">
                            <h3>Our Technology Arsenal</h3>
                            <p>We select the right tool for each job, drawing from a deep bench of proven technologies across the full stack:</p>
                            <div className="ea-tech-tags">
                                <span className="ea-tech-tag">Next.js</span>
                                <span className="ea-tech-tag">React</span>
                                <span className="ea-tech-tag">TypeScript</span>
                                <span className="ea-tech-tag">Node.js</span>
                                <span className="ea-tech-tag">Python</span>
                                <span className="ea-tech-tag">Django</span>
                                <span className="ea-tech-tag">FastAPI</span>
                                <span className="ea-tech-tag">PostgreSQL</span>
                                <span className="ea-tech-tag">Redis</span>
                                <span className="ea-tech-tag">Kafka</span>
                                <span className="ea-tech-tag">TensorFlow</span>
                                <span className="ea-tech-tag">PyTorch</span>
                                <span className="ea-tech-tag">Docker</span>
                                <span className="ea-tech-tag">AWS</span>
                                <span className="ea-tech-tag">Firebase</span>
                                <span className="ea-tech-tag">tRPC</span>
                                <span className="ea-tech-tag">OpenCV</span>
                                <span className="ea-tech-tag">YOLOv8</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="ea-cta">
                    <div className="ea-cta-inner">
                        <h2>Ready to Build Something Exceptional?</h2>
                        <p>Whether you need a production grade platform, an AI pipeline, or a complete digital product, our engineering team is ready to deliver at the highest standard.</p>
                        <SectionLink section="contact" className="ea-cta-btn">
                            Start a Conversation
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </SectionLink>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

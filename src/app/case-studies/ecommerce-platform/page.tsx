"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function EcommercePlatformCaseStudy() {
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
                        <span className="cs-category">E-Commerce (US)</span>
                        <h1 className="cs-title">AI-Powered E-Commerce</h1>
                        <p className="cs-subtitle">Full-Stack Platform with Intelligent Recommendations</p>
                        <div className="cs-meta-grid">
                            <div className="meta-item"><h4>Domain</h4><p>E-Commerce &amp; Personalisation</p></div>
                            <div className="meta-item"><h4>Tech Stack</h4><p>Next.js, Python, TensorFlow, Elasticsearch, Redis, Stripe</p></div>
                        </div>
                    </div>
                </header>

                <section className="cs-body">
                    <article className="cs-content">
                        <div className="cs-section">
                            <h2>1. Executive Summary</h2>
                            <p>A full stack e-commerce platform built for a US based direct to consumer brand processing over 40,000 orders monthly. The platform replaces a legacy Shopify setup with a custom high performance storefront featuring an AI powered recommendation engine that analyses browsing behaviour, purchase history, and product affinity to deliver hyper personalised shopping experiences.</p>
                            <p>The recommendation engine drives a 55% uplift in conversion rate, a 30% increase in average order value, and 2x faster page load times compared to the previous platform. The system processes real time behavioural signals to adapt product rankings, homepage layouts, and email marketing content to each individual customer profile.</p>
                        </div>

                        <div className="cs-section">
                            <h2>2. Problem Statement</h2>
                            <p>The client had outgrown their Shopify Plus setup and faced three compounding challenges:</p>
                            <ul>
                                <li><strong>Generic shopping experience:</strong> Every customer saw the same product listings, homepage layout, and category ordering regardless of their browsing history or purchase patterns. High intent returning customers were treated identically to first time visitors, resulting in a 3.2% conversion rate that lagged industry benchmarks by 40%.</li>
                                <li><strong>Performance degradation:</strong> As the product catalogue grew to 8,000+ SKUs with complex variant configurations, page load times exceeded 4 seconds on mobile devices. Cart abandonment rates correlated directly with load times, with each additional second of latency increasing abandonment by 12%.</li>
                                <li><strong>Limited cross sell intelligence:</strong> Product recommendations relied on simple "customers also bought" associations that had not been updated in months. The static recommendation logic missed emerging product affinities, seasonal shifts, and individual preference signals, leaving significant revenue on the table.</li>
                            </ul>
                            <p>The platform addresses all three through a custom Next.js storefront with edge caching, a TensorFlow powered recommendation engine processing real time behavioural signals, and personalised product ranking across every customer touchpoint.</p>
                        </div>

                        <div className="cs-section">
                            <h2>3. System Architecture</h2>
                            <h3>Storefront &amp; Performance Layer</h3>
                            <p>The Next.js storefront uses Incremental Static Regeneration to serve pre rendered product pages at edge locations globally, achieving sub 500ms time to first byte for 95% of requests. Dynamic content such as personalised recommendations, pricing, and inventory status is hydrated client side from edge cached API responses, ensuring that the performance benefits of static generation are not sacrificed for personalisation.</p>

                            <h3>Recommendation Engine</h3>
                            <p>A hybrid collaborative and content based filtering model processes three signal categories: explicit signals (purchases, wishlist additions, reviews), implicit signals (browse duration, scroll depth, search queries), and contextual signals (time of day, device type, referral source). The TensorFlow model generates real time product affinity scores that power homepage personalisation, category ranking, cross sell widgets, and post purchase email content.</p>

                            <h3>Search &amp; Discovery</h3>
                            <p>Elasticsearch powers a typo tolerant, synonym aware search experience with faceted filtering across product attributes. Search ranking incorporates the personalisation layer, boosting results based on individual customer affinity scores, ensuring that search results are not just relevant to the query but relevant to the specific customer performing the search.</p>

                            <h3>Commerce &amp; Payments</h3>
                            <p>Stripe handles payment processing with support for Apple Pay, Google Pay, and buy now pay later options. The checkout flow is optimised to three steps with address auto completion, saved payment methods, and real time shipping rate calculation from multiple carriers. Inventory management integrates with the client warehouse management system for real time stock visibility across channels.</p>
                        </div>

                        <div className="cs-section">
                            <h2>4. Key Capabilities</h2>
                            <ul>
                                <li><strong>Real Time Personalisation:</strong> Every product listing, homepage section, and recommendation widget adapts to individual customer behaviour in real time, driving 55% conversion uplift.</li>
                                <li><strong>Sub 500ms Page Loads:</strong> Edge cached static generation with client side personalisation hydration delivers 2x faster page loads compared to the previous platform.</li>
                                <li><strong>Intelligent Cross Sell:</strong> TensorFlow recommendation engine processes purchase, browse, and contextual signals to surface high affinity product suggestions, increasing average order value by 30%.</li>
                                <li><strong>Personalised Search:</strong> Elasticsearch with customer affinity boosting delivers search results that are relevant to both the query and the individual customer performing the search.</li>
                                <li><strong>A/B Testing Framework:</strong> Built in experimentation infrastructure enables the marketing team to test personalisation strategies, layout variations, and pricing models without engineering involvement.</li>
                                <li><strong>Automated Email Personalisation:</strong> Post purchase and browse abandonment emails include personalised product recommendations generated by the same ML model powering the storefront.</li>
                            </ul>
                        </div>

                        <div className="cs-section">
                            <h2>5. Impact Metrics</h2>
                            <table className="cs-table">
                                <thead>
                                    <tr><th>Metric</th><th>Before</th><th>After</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Conversion Rate</td><td>3.2%</td><td>4.96% (55% uplift)</td></tr>
                                    <tr><td>Average Order Value</td><td>$67</td><td>$87.10 (30% increase)</td></tr>
                                    <tr><td>Page Load (Mobile)</td><td>4.2 seconds</td><td>1.8 seconds (2x faster)</td></tr>
                                    <tr><td>Cart Abandonment</td><td>74%</td><td>58% (16 point reduction)</td></tr>
                                    <tr><td>Email Click Through</td><td>2.1%</td><td>5.8% (personalised content)</td></tr>
                                    <tr><td>Search Conversion</td><td>8%</td><td>14.5% (personalised ranking)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cs-section">
                            <h2>6. Conclusion</h2>
                            <p>The AI powered e-commerce platform demonstrates that personalisation and performance are not competing priorities. By combining edge optimised static generation with real time ML driven personalisation, the platform delivers both the speed that modern consumers demand and the relevance that drives measurable commercial outcomes. The architecture is designed for scale, with the recommendation model continuously improving as customer interaction data grows.</p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

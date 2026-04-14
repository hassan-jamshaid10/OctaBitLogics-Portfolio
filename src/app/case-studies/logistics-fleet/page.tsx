"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function LogisticsFleetCaseStudy() {
    return (
        <>
            <Navbar activeSection="projects" />
            <main className="cs-page">
                <style>{`
          .cs-page { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; background: #ffffff; }
          .cs-hero { position: relative; background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%); padding: 12rem 2rem 6rem; color: #ffffff; }
          .cs-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top, rgba(59,173,176,0.15) 0%, transparent 70%); pointer-events: none; z-index: 0; }
          .cs-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; text-align: center; }
          .cs-back-link { position: absolute; top: -4rem; left: 0; display: inline-flex; align-items: center; gap: 0.5rem; color: #a7fff9; font-family: 'Oxanium', monospace; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; letter-spacing: 0.1em; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 100px; border: 1px solid rgba(167,255,249,0.3); backdrop-filter: blur(10px); }
          .cs-back-link:hover { color: #ffffff; border-color: #ffffff; transform: translateX(-4px); background: rgba(255,255,255,0.1); }
          .cs-category { font-family: 'Oxanium', monospace; font-size: 0.8rem; color: #a7fff9; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.5rem; display: inline-block; }
          .cs-title { font-family: 'Oxanium', monospace; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; color: #ffffff; line-height: 1.1; margin-bottom: 1rem; }
          .cs-subtitle { font-size: 1.4rem; color: rgba(255,255,255,0.7); font-weight: 300; }
          .cs-meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 4rem; background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left; backdrop-filter: blur(10px); }
          .meta-item h4 { font-family: 'Oxanium', monospace; font-size: 0.8rem; color: #a7fff9; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
          .meta-item p { font-size: 1rem; color: #ffffff; font-weight: 600; }
          .cs-body { position: relative; background: #ffffff; padding: 6rem 2rem 8rem; color: #4e6070; }
          .cs-body::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; z-index: 0; }
          .cs-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
          .cs-section { display: block; margin-bottom: 5rem; padding-left: 2rem; border-left: 3px solid rgba(59,173,176,0.25); }
          .cs-content h2 { font-family: 'Oxanium', monospace; font-size: 2.2rem; color: #1B2E5E; margin-bottom: 1.5rem; font-weight: 800; line-height: 1.2; }
          .cs-content h3 { font-family: 'Oxanium', monospace; font-size: 1.4rem; color: #3BADB0; margin-bottom: 1.2rem; font-weight: 700; margin-top: 3rem; }
          .cs-content p { font-size: 1.15rem; line-height: 1.9; margin-bottom: 1.5rem; color: #4e6070; }
          .cs-content strong { color: #1B2E5E; font-weight: 700; }
          .cs-content ul { list-style-type: none; padding-left: 0; margin-bottom: 2.5rem; }
          .cs-content li { position: relative; padding-left: 1.8rem; margin-bottom: 1.2rem; font-size: 1.15rem; line-height: 1.8; color: #4e6070; }
          .cs-content li::before { content: '>'; position: absolute; left: 0; color: #3BADB0; font-weight: 900; font-family: 'Oxanium', monospace; font-size: 1.2rem; top: 2px; }
          .cs-table { width: 100%; border-collapse: collapse; margin: 3rem 0; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 40px rgba(27,46,94,0.08); border: 1px solid rgba(59,173,176,0.2); }
          .cs-table th, .cs-table td { padding: 1.2rem; border-bottom: 1px solid rgba(59,173,176,0.15); text-align: left; }
          .cs-table tr:last-child td { border-bottom: none; }
          .cs-table th { background: rgba(59,173,176,0.06); font-family: 'Oxanium', monospace; color: #1B2E5E; font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; }
          .cs-table td { font-size: 0.95rem; line-height: 1.6; color: #4e6070; }
          .cs-table td:first-child { font-family: 'Oxanium', monospace; font-weight: 700; color: #3BADB0; }
          @media (max-width: 768px) { .cs-hero { padding: 10rem 1.5rem 4rem; } .cs-meta-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; } .cs-body { padding: 4rem 1.5rem 6rem; } .cs-section { padding-left: 1rem; border-left-width: 2px; } .cs-back-link { top: -3rem; } }
        `}</style>

                <header className="cs-hero">
                    <BackgroundNightfall />
                    <div className="cs-hero-inner">
                        <SectionLink section="case-studies" className="cs-back-link"><ArrowLeft size={16} /> Back to Case Studies</SectionLink>
                        <span className="cs-category">Logistics (EU)</span>
                        <h1 className="cs-title">Fleet Intelligence Platform</h1>
                        <p className="cs-subtitle">Real-Time Tracking &amp; ML-Powered Route Optimization</p>
                        <div className="cs-meta-grid">
                            <div className="meta-item"><h4>Domain</h4><p>Supply Chain &amp; Fleet Management</p></div>
                            <div className="meta-item"><h4>Tech Stack</h4><p>React, Node.js, Python, PostgreSQL/PostGIS, MQTT, TensorFlow</p></div>
                        </div>
                    </div>
                </header>

                <section className="cs-body">
                    <article className="cs-content">
                        <div className="cs-section">
                            <h2>1. Executive Summary</h2>
                            <p>The Fleet Intelligence Platform is a real time fleet tracking and route optimisation system built for a European logistics company operating a fleet of 380 vehicles across 12 countries. The platform replaces a manual dispatch process and static route planning system with an ML powered optimisation engine that continuously recalculates optimal routes based on live traffic data, delivery windows, vehicle capacity, and driver hours regulations.</p>
                            <p>The system delivers a 22% reduction in fuel costs, 38% faster delivery times, and a 90% on time delivery rate, up from 67% under the previous manual planning approach. Real time GPS tracking, predictive ETA calculations, and automated driver communication eliminate the information gaps that previously caused delivery failures and customer dissatisfaction.</p>
                        </div>

                        <div className="cs-section">
                            <h2>2. Problem Statement</h2>
                            <p>The logistics company rapid expansion from a single country operation to 12 European markets had outpaced its operational infrastructure:</p>
                            <ul>
                                <li><strong>Manual route planning:</strong> Dispatchers planned routes manually each morning using local knowledge and static maps. Routes did not account for real time traffic, road closures, or delivery window changes that occurred after departure. Drivers frequently encountered conditions that made their planned routes suboptimal or impossible, resulting in missed deliveries and wasted fuel.</li>
                                <li><strong>Visibility gaps:</strong> Once vehicles departed the depot, dispatchers had no real time visibility into fleet location, delivery progress, or estimated arrival times. Customer service teams could not provide accurate ETAs, and dispatch could not dynamically reassign deliveries when vehicles broke down or drivers exceeded their hours limits.</li>
                                <li><strong>Compliance risk:</strong> EU driving hours regulations (EC 561/2006) require strict adherence to maximum driving periods and minimum rest breaks. Manual tracking of driver hours through paper tachographs created compliance exposure, with violations carrying fines of up to EUR 30,000 per incident in some jurisdictions.</li>
                            </ul>
                            <p>The platform addresses all three through continuous GPS tracking, ML powered dynamic route optimisation, and automated driver hours monitoring with predictive compliance alerts.</p>
                        </div>

                        <div className="cs-section">
                            <h2>3. System Architecture</h2>
                            <h3>IoT &amp; Telemetry Layer</h3>
                            <p>GPS trackers installed in each vehicle publish location, speed, heading, and engine diagnostics data every 10 seconds via MQTT to a central message broker. The telemetry pipeline processes over 3 million location events daily, computing derived metrics including idle time, harsh braking events, fuel consumption estimates, and geofence entry and exit events in real time.</p>

                            <h3>Route Optimisation Engine</h3>
                            <p>The ML powered optimisation engine uses a combination of constraint satisfaction programming and reinforcement learning to generate optimal route plans. The model considers over 40 variables per route including delivery time windows, vehicle payload capacity, driver hours remaining, live traffic conditions, historical delivery duration at each stop, and fuel cost per kilometre. Routes are recalculated dynamically throughout the day as conditions change, with updated instructions pushed to driver mobile devices automatically.</p>

                            <h3>Dispatch &amp; Operations Dashboard</h3>
                            <p>The React dashboard provides dispatchers with a real time map view of all fleet vehicles, colour coded by status (en route, delivering, idle, returning). Delivery progress is tracked automatically through geofence triggers at customer locations. Predictive ETAs are computed using a rolling average of actual delivery times at each location, providing accuracy within a 5 minute window for 92% of deliveries.</p>

                            <h3>Compliance &amp; Analytics</h3>
                            <p>Automated driver hours tracking integrates with digital tachograph data to monitor EC 561/2006 compliance in real time. The system generates predictive alerts when a driver is approaching their maximum driving period, enabling dispatch to reassign remaining deliveries before a violation occurs. Monthly compliance reports, fuel consumption analytics, and fleet utilisation dashboards provide management with the data needed for continuous operational improvement.</p>
                        </div>

                        <div className="cs-section">
                            <h2>4. Key Capabilities</h2>
                            <ul>
                                <li><strong>Real Time Fleet Tracking:</strong> GPS telemetry from 380 vehicles processed at 10 second intervals, providing live map visualisation, geofence triggers, and automated delivery progress tracking.</li>
                                <li><strong>ML Route Optimisation:</strong> Dynamic route calculation considering 40+ constraint variables including traffic, time windows, capacity, driver hours, and fuel costs. Routes recalculate continuously as conditions change.</li>
                                <li><strong>Predictive ETAs:</strong> Rolling average models calibrated per delivery location achieve 5 minute prediction accuracy for 92% of deliveries, enabling reliable customer communication.</li>
                                <li><strong>Automated Compliance:</strong> Real time EC 561/2006 driver hours monitoring with predictive violation alerts, reducing compliance risk from weekly manual audits to continuous automated enforcement.</li>
                                <li><strong>Fuel Optimisation:</strong> Engine telemetry analysis identifies fuel waste from idling, harsh acceleration, and suboptimal routing, driving 22% aggregate fuel cost reduction across the fleet.</li>
                                <li><strong>Dynamic Dispatch:</strong> Real time vehicle and driver status visibility enables dispatchers to reassign deliveries instantly when breakdowns, delays, or hours limit situations arise.</li>
                                <li><strong>Customer Communication:</strong> Automated SMS and email notifications with live tracking links provide customers with accurate delivery windows, reducing "where is my delivery" support calls by 65%.</li>
                                <li><strong>Fleet Analytics:</strong> Comprehensive dashboards covering utilisation rates, delivery performance, fuel efficiency, maintenance predictions, and driver behaviour scoring for continuous improvement.</li>
                            </ul>
                        </div>

                        <div className="cs-section">
                            <h2>5. Impact Metrics</h2>
                            <table className="cs-table">
                                <thead>
                                    <tr><th>Metric</th><th>Before</th><th>After</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>On-Time Delivery</td><td>67%</td><td>90% (23 point improvement)</td></tr>
                                    <tr><td>Fuel Costs</td><td>EUR 2.8M annually</td><td>EUR 2.18M (22% reduction)</td></tr>
                                    <tr><td>Delivery Speed</td><td>Average 4.2 hours per route</td><td>Average 2.6 hours (38% faster)</td></tr>
                                    <tr><td>Compliance Violations</td><td>12-18 per quarter</td><td>Zero in last 6 months</td></tr>
                                    <tr><td>Support Call Volume</td><td>340 daily "where is my delivery" calls</td><td>119 daily (65% reduction)</td></tr>
                                    <tr><td>Route Planning Time</td><td>45 min per dispatcher per morning</td><td>Fully automated, under 2 min</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cs-section">
                            <h2>6. Conclusion</h2>
                            <p>The Fleet Intelligence Platform demonstrates that ML powered optimisation can deliver transformative operational improvements in logistics without requiring fleet hardware replacement or driver workflow disruption. By layering intelligent software over existing vehicles and integrating with standard GPS and tachograph hardware, the platform achieved measurable ROI within the first quarter of deployment.</p>
                            <p>The architecture is designed for multi country scale, with the optimisation engine handling country specific road regulations, toll calculations, and driving hours variations across 12 EU jurisdictions from a single platform instance. As the fleet grows, the ML models continue to improve through exposure to a larger and more diverse set of route outcomes and delivery patterns.</p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

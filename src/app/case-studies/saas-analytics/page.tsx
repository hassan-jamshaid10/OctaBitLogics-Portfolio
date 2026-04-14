"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function SaasAnalyticsCaseStudy() {
  return (
    <>
      <Navbar activeSection="projects" />

      <main className="cs-page">
        <style>{`
          .cs-page {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            overflow-x: hidden;
            background: #ffffff;
          }

          /* ── TOP TONE: DARK HERO ── */
          .cs-hero {
            position: relative;
            background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%);
            padding: 12rem 2rem 6rem;
            color: #ffffff;
          }
          .cs-hero::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at top, rgba(59,173,176,0.15) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
          }

          .cs-hero-inner {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            text-align: center;
          }

          .cs-back-link {
            position: absolute;
            top: -4rem;
            left: 0;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #a7fff9;
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.1em;
            transition: color 0.2s, transform 0.2s;
            background: rgba(255,255,255,0.05);
            padding: 8px 16px;
            border-radius: 100px;
            border: 1px solid rgba(167,255,249,0.3);
            backdrop-filter: blur(10px);
          }
          .cs-back-link:hover {
            color: #ffffff;
            border-color: #ffffff;
            transform: translateX(-4px);
            background: rgba(255,255,255,0.1);
          }

          .cs-category {
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            color: #a7fff9;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            display: inline-block;
          }

          .cs-title {
            font-family: 'Oxanium', monospace;
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            margin-bottom: 1rem;
          }

          .cs-subtitle {
            font-size: 1.4rem;
            color: rgba(255,255,255,0.7);
            font-weight: 300;
          }

          .cs-meta-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            background: rgba(255,255,255,0.03);
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            text-align: left;
            backdrop-filter: blur(10px);
          }

          .meta-item h4 {
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            color: #a7fff9;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
          }

          .meta-item p {
            font-size: 1rem;
            color: #ffffff;
            font-weight: 600;
          }

          /* ── BOTTOM TONE: LIGHT CONTENT ── */
          .cs-body {
            position: relative;
            background: #ffffff;
            padding: 6rem 2rem 8rem;
            color: #4e6070;
          }
          .cs-body::before {
            content: '';
            position: absolute; inset: 0;
            background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none; z-index: 0;
          }

          .cs-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .cs-section {
            display: block;
            margin-bottom: 5rem;
            padding-left: 2rem;
            border-left: 3px solid rgba(59,173,176,0.25);
          }

          .cs-content h2 {
            font-family: 'Oxanium', monospace;
            font-size: 2.2rem;
            color: #1B2E5E;
            margin-bottom: 1.5rem;
            font-weight: 800;
            line-height: 1.2;
          }

          .cs-content h3 {
            font-family: 'Oxanium', monospace;
            font-size: 1.4rem;
            color: #3BADB0;
            margin-bottom: 1.2rem;
            font-weight: 700;
            margin-top: 3rem;
          }

          .cs-content p {
            font-size: 1.15rem;
            line-height: 1.9;
            margin-bottom: 1.5rem;
            color: #4e6070;
          }

          .cs-content strong {
            color: #1B2E5E;
            font-weight: 700;
          }

          .cs-content ul {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: 2.5rem;
          }

          .cs-content li {
            position: relative;
            padding-left: 1.8rem;
            margin-bottom: 1.2rem;
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4e6070;
          }

          .cs-content li::before {
            content: '>';
            position: absolute;
            left: 0;
            color: #3BADB0;
            font-weight: 900;
            font-family: 'Oxanium', monospace;
            font-size: 1.2rem;
            top: 2px;
          }

          .cs-table {
            width: 100%;
            border-collapse: collapse;
            margin: 3rem 0;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(27,46,94,0.08); border: 1px solid rgba(59,173,176,0.2);
          }

          .cs-table th, .cs-table td {
            padding: 1.2rem;
            border-bottom: 1px solid rgba(59,173,176,0.15);
            text-align: left;
          }
          .cs-table tr:last-child td {
             border-bottom: none;
          }

          .cs-table th {
            background: rgba(59,173,176,0.06);
            font-family: 'Oxanium', monospace;
            color: #1B2E5E;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.05em;
          }
          .cs-table td {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #4e6070;
          }
          .cs-table td:first-child {
             font-family: 'Oxanium', monospace;
             font-weight: 700;
             color: #3BADB0;
          }

          @media (max-width: 768px) {
            .cs-hero { padding: 10rem 1.5rem 4rem; }
            .cs-meta-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
            .cs-body { padding: 4rem 1.5rem 6rem; }
            .cs-section { padding-left: 1rem; border-left-width: 2px; }
            .cs-back-link { top: -3rem; }
          }
        `}</style>

        {/* ── TOP TONE: DARK ── */}
        <header className="cs-hero">
          <BackgroundNightfall />
          <div className="cs-hero-inner">
            <SectionLink section="case-studies" className="cs-back-link">
              <ArrowLeft size={16} /> Back to Case Studies
            </SectionLink>

            <span className="cs-category">SaaS (US)</span>
            <h1 className="cs-title">SaaS Analytics Platform</h1>
            <p className="cs-subtitle">Automated Real-Time Business Intelligence</p>

            <div className="cs-meta-grid">
              <div className="meta-item">
                <h4>Domain</h4>
                <p>Business Intelligence & Data Analytics</p>
              </div>
              <div className="meta-item">
                <h4>Tech Stack</h4>
                <p>React, Node.js, Apache Kafka, PostgreSQL, Redis, D3.js</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── BOTTOM TONE: LIGHT ── */}
        <section className="cs-body">
          <article className="cs-content">
            <div className="cs-section">
              <h2>1. Executive Summary</h2>
              <p>
                The SaaS Analytics Platform is a comprehensive business intelligence solution built for a US based enterprise client operating across multiple product verticals. The platform replaces a legacy reporting stack that relied on manual data extraction, spreadsheet based analysis, and static PDF reports with a fully automated, real time analytics pipeline capable of processing millions of events per day and surfacing actionable insights within seconds.
              </p>
              <p>
                The system ingests data from 14 distinct sources including product telemetry, CRM events, billing records, and customer support interactions, unifying them into a single analytical layer. Interactive dashboards, automated alerting, and scheduled report generation eliminate the manual overhead that previously consumed over 60% of the analytics team operational capacity, enabling them to focus on strategic analysis rather than data wrangling.
              </p>
            </div>

            <div className="cs-section">
              <h2>2. Problem Statement</h2>
              <p>
                The client analytics infrastructure had organically grown over six years into a fragmented ecosystem of disconnected tools, manual processes, and tribal knowledge. Three critical constraints were crippling the organisation ability to make data driven decisions:
              </p>
              <ul>
                <li><strong>Data fragmentation:</strong> Product metrics lived in Mixpanel, revenue data in Stripe, customer health scores in a custom CRM, and support ticket data in Zendesk. No single system could correlate user behaviour with revenue impact or support burden, making holistic customer analysis impossible without manual data merging.</li>
                <li><strong>Reporting latency:</strong> Weekly reports required two analysts spending 12 to 15 hours each to extract, clean, merge, and visualise data from multiple sources. By the time reports reached decision makers, the data was five to seven days stale, rendering time sensitive insights unusable for operational decisions.</li>
                <li><strong>Scalability ceiling:</strong> As the product user base grew from 15,000 to over 200,000 monthly active users, the existing analytics infrastructure began failing under load. Query timeouts, dashboard crashes, and incomplete data exports became a daily occurrence, eroding trust in the analytics function across the organisation.</li>
              </ul>
              <p>The platform addresses all three constraints through a unified data ingestion pipeline, real time stream processing with Apache Kafka, and a purpose built visualisation layer that delivers interactive dashboards with sub second query response times at scale.</p>
            </div>

            <div className="cs-section">
              <h2>3. System Architecture</h2>
              <p>
                The platform is designed as a layered architecture where each component operates independently and communicates through well defined interfaces. This modular approach ensures that individual subsystems can be scaled, updated, or replaced without disrupting the broader analytics pipeline.
              </p>

              <h3>Data Ingestion Layer</h3>
              <p>
                A unified ingestion framework connects to 14 data sources through purpose built connectors. Each connector normalises incoming data into a canonical event schema before publishing to Apache Kafka topics. The ingestion layer handles schema evolution, deduplication, and late arriving data gracefully, ensuring that downstream consumers always receive clean, consistent events regardless of source system quirks or network interruptions.
              </p>

              <h3>Stream Processing Engine</h3>
              <p>
                Apache Kafka serves as the central nervous system of the analytics pipeline, processing over 2 million events per day with sub second latency. Stream processors compute real time aggregations including rolling revenue metrics, active user counts, feature adoption rates, and customer health scores. These pre computed aggregates are materialised into Redis for instant dashboard queries, eliminating the need for expensive on demand calculations against raw data.
              </p>

              <h3>Analytical Data Store</h3>
              <p>
                PostgreSQL with TimescaleDB extensions provides the historical data store, optimised for time series queries across large datasets. Continuous aggregation policies automatically maintain hourly, daily, and monthly rollups, enabling fast queries over months or years of data without scanning billions of raw events. Data retention policies automatically archive records beyond the hot query window to cold storage, managing storage costs without sacrificing query performance.
              </p>

              <h3>Visualisation & Dashboard Layer</h3>
              <p>
                The React frontend delivers interactive dashboards built with D3.js for custom visualisations and a proprietary charting library optimised for real time data streams. Dashboards support drag and drop customisation, allowing non technical users to build their own views without developer involvement. WebSocket connections push live updates to connected clients, ensuring that dashboard users always see current data without manual refresh. Scheduled PDF report generation and email distribution replace the legacy manual reporting workflow entirely.
              </p>
            </div>

            <div className="cs-section">
              <h2>4. Key Capabilities</h2>
              <ul>
                <li><strong>Unified Data Pipeline:</strong> 14 source connectors with canonical event schema normalisation, schema evolution support, and automated deduplication processing over 2 million events daily.</li>
                <li><strong>Real Time Dashboards:</strong> Interactive D3.js visualisations with sub second query response times, WebSocket driven live updates, and drag and drop layout customisation.</li>
                <li><strong>Automated Alerting:</strong> Configurable threshold and anomaly based alerts across any metric dimension, with Slack, email, and PagerDuty integration for critical business metric deviations.</li>
                <li><strong>Self Service Analytics:</strong> Non technical users can create custom dashboard views, apply filters, and export data without developer intervention, reducing analytics team ticket volume by 70%.</li>
                <li><strong>Scheduled Reporting:</strong> Automated PDF report generation with branded templates and email distribution on configurable schedules, replacing 25 hours per week of manual report preparation.</li>
                <li><strong>Customer 360 View:</strong> Unified customer profiles correlating product usage, billing history, support interactions, and health scores into a single actionable view for success teams.</li>
                <li><strong>Cohort Analysis Engine:</strong> Built in cohort definition and tracking tools enabling product teams to measure feature adoption, retention curves, and conversion funnels without SQL knowledge.</li>
                <li><strong>Role Based Access:</strong> Granular permission controls ensuring that sensitive revenue and customer data is only visible to authorised teams and individuals.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>5. Performance Metrics</h2>
              <p>
                The platform impact was measured across three key dimensions: operational efficiency, data freshness, and user adoption. The following table summarises the before and after state across each dimension.
              </p>

              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Before</th>
                    <th>After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Report Generation</td>
                    <td>12-15 hours manual effort per week</td>
                    <td>Fully automated, zero manual effort</td>
                  </tr>
                  <tr>
                    <td>Data Freshness</td>
                    <td>5-7 days stale at time of delivery</td>
                    <td>Real time (sub-second latency)</td>
                  </tr>
                  <tr>
                    <td>User Retention Insight</td>
                    <td>Monthly manual cohort analysis</td>
                    <td>Live retention dashboards with 40% improvement in actionable insights</td>
                  </tr>
                  <tr>
                    <td>Dashboard Load Time</td>
                    <td>8-15 seconds with frequent timeouts</td>
                    <td>Under 800ms consistently at scale</td>
                  </tr>
                  <tr>
                    <td>Manual Task Reduction</td>
                    <td>60% of analytics team time on data wrangling</td>
                    <td>Under 10%, team refocused on strategic analysis</td>
                  </tr>
                  <tr>
                    <td>Self Service Adoption</td>
                    <td>Zero (all requests routed to analysts)</td>
                    <td>85% of routine queries handled self service</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cs-section">
              <h2>6. Conclusion</h2>
              <p>
                The SaaS Analytics Platform transformed the client data infrastructure from a fragmented, manual, and increasingly unreliable system into a unified, automated, real time intelligence layer. By eliminating the data wrangling bottleneck and delivering self service analytics capabilities, the platform freed the analytics team to focus on strategic insights that directly impact product and business decisions.
              </p>
              <p>
                The architecture is designed for horizontal scalability, with Kafka providing elastic throughput capacity and TimescaleDB enabling efficient historical analysis across growing datasets. As the client product continues to scale, the analytics platform scales with it, ensuring that data driven decision making remains fast, reliable, and accessible across the organisation.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

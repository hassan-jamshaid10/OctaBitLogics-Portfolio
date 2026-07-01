"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";
import SectionLink from "../../../components/SectionLink";

export default function FintechPipelineCaseStudy() {
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
            font-family: inherit;
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
            font-family: inherit;
            font-size: 0.8rem;
            color: #a7fff9;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            display: inline-block;
          }

          .cs-title {
            font-family: inherit;
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
            font-family: inherit;
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
            font-family: inherit;
            font-size: 2.2rem;
            color: #1B2E5E;
            margin-bottom: 1.5rem;
            font-weight: 800;
            line-height: 1.2;
          }

          .cs-content h3 {
            font-family: inherit;
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
            font-family: inherit;
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
            font-family: inherit;
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
             font-family: inherit;
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

            <span className="cs-category">FinTech (PK)</span>
            <h1 className="cs-title">AI-Driven Payment Pipeline</h1>
            <p className="cs-subtitle">Fraud Detection & Risk Scoring Engine</p>

            <div className="cs-meta-grid">
              <div className="meta-item">
                <h4>Domain</h4>
                <p>Financial Crime Prevention & Payment Security</p>
              </div>
              <div className="meta-item">
                <h4>Tech Stack</h4>
                <p>Python, TensorFlow, FastAPI, PostgreSQL, Redis, Kafka</p>
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
                The AI-Driven Payment Pipeline is a real time fraud detection and risk scoring system built for a leading Pakistani fintech company processing over 500,000 digital transactions daily. The platform replaces a rule based fraud detection system that relied on static thresholds and manual review queues with a machine learning powered pipeline capable of scoring every transaction in under 50 milliseconds, reducing fraud losses by 35% while simultaneously cutting false positive rates by half.
              </p>
              <p>
                The system analyses transaction patterns across multiple dimensions including velocity, geolocation, device fingerprinting, merchant risk profiles, and behavioural biometrics. A multi model ensemble approach combines gradient boosted trees for structured feature analysis with deep learning sequence models for temporal pattern detection, achieving a level of fraud detection accuracy that neither approach could deliver independently.
              </p>
            </div>

            <div className="cs-section">
              <h2>2. Problem Statement</h2>
              <p>
                As the client transaction volume scaled from 50,000 to over 500,000 daily transactions, the existing rule based fraud detection system began failing on three critical fronts:
              </p>
              <ul>
                <li><strong>Static detection logic:</strong> Fixed threshold rules such as "flag transactions over PKR 100,000" generated massive false positive volumes as the user base diversified. High value legitimate transactions from enterprise clients were routinely blocked, while sophisticated fraud patterns that stayed below thresholds passed undetected. The rules required constant manual tuning that could never keep pace with evolving fraud tactics.</li>
                <li><strong>Review queue saturation:</strong> The manual review team was processing over 2,000 flagged transactions per day, with an average resolution time of 45 minutes per case. At scale, this created a growing backlog where legitimate transactions were held for hours, destroying customer trust and driving a 12% increase in customer complaints quarter over quarter.</li>
                <li><strong>Zero adaptive capability:</strong> New fraud patterns took weeks to detect and months to codify into rules. By the time a new rule was deployed, fraudsters had already moved to a different attack vector. The system had no ability to learn from resolved cases or adapt to emerging patterns without explicit human intervention.</li>
              </ul>
              <p>The AI pipeline addresses all three constraints through continuous learning from transaction outcomes, real time feature computation, and automated model retraining that adapts to new fraud patterns within hours rather than months.</p>
            </div>

            <div className="cs-section">
              <h2>3. System Architecture</h2>

              <h3>Real Time Feature Engine</h3>
              <p>
                Every incoming transaction triggers the computation of over 200 features in real time. These include velocity metrics (transaction count and amount over rolling windows), geolocation analysis (distance from previous transactions, country risk scores), device intelligence (fingerprint matching, emulator detection), and behavioral features (typing cadence during PIN entry, session navigation patterns). Redis provides the sub millisecond lookups required for rolling window calculations across the user transaction history.
              </p>

              <h3>ML Model Ensemble</h3>
              <p>
                The scoring engine uses a multi model ensemble combining XGBoost for structured feature analysis with an LSTM network for temporal sequence modelling. XGBoost excels at detecting cross feature interactions such as unusual merchant category codes combined with new device fingerprints, while the LSTM captures sequential anomalies in transaction timing and amount patterns that static models miss entirely. The ensemble output is a calibrated probability score between 0 and 1, enabling configurable threshold policies for different risk appetites.
              </p>

              <h3>Decision & Routing Layer</h3>
              <p>
                The decision layer applies business policies to model scores, routing transactions into one of four outcomes: approve, decline, step up authentication, or manual review. The routing logic is configurable per merchant category, transaction type, and customer segment, allowing the risk team to fine tune the balance between fraud prevention and customer experience without model changes. Explainability reports accompany every high risk decision, showing the top contributing features and their impact on the risk score.
              </p>

              <h3>Continuous Learning Pipeline</h3>
              <p>
                Transaction outcomes (confirmed fraud, false positive resolutions, chargebacks) feed back into the training pipeline through Kafka streams. An automated retraining system triggers model updates when performance drift is detected, evaluating new model versions against holdout sets before promoting them to production. This closed loop architecture ensures that the system continuously improves its accuracy without manual intervention, adapting to new fraud patterns as they emerge.
              </p>
            </div>

            <div className="cs-section">
              <h2>4. Key Capabilities</h2>
              <ul>
                <li><strong>Sub 50ms Scoring:</strong> Every transaction receives a complete risk assessment within 50 milliseconds, enabling real time decisioning without introducing perceptible latency to the payment flow.</li>
                <li><strong>200+ Feature Computation:</strong> Real time feature engineering across velocity, geolocation, device, behavioural, and merchant dimensions provides comprehensive risk context for every transaction.</li>
                <li><strong>Multi Model Ensemble:</strong> XGBoost and LSTM models combined through calibrated ensemble scoring, achieving 35% fraud reduction with 50% fewer false positives than the previous rule based system.</li>
                <li><strong>Adaptive Learning:</strong> Continuous retraining from resolved case outcomes ensures the system adapts to emerging fraud patterns within hours rather than the months required for manual rule updates.</li>
                <li><strong>Configurable Risk Policies:</strong> Business teams can adjust risk thresholds, routing rules, and step up authentication triggers without touching model code, enabling rapid response to evolving business requirements.</li>
                <li><strong>Explainable Decisions:</strong> Every high risk flag includes a human readable explanation of the contributing factors, enabling faster manual review resolution and building regulatory compliance evidence.</li>
                <li><strong>Real Time Monitoring:</strong> Operational dashboards track model performance, score distributions, fraud rates, and false positive rates in real time, with automated alerts for performance degradation.</li>
                <li><strong>Regulatory Compliance:</strong> Full audit trail of every scoring decision with feature explanations, supporting regulatory requirements for algorithmic transparency in financial services.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>5. Impact Metrics</h2>

              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Before (Rule Based)</th>
                    <th>After (AI Pipeline)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fraud Detection Rate</td>
                    <td>62% of confirmed fraud caught</td>
                    <td>97% detection rate across all fraud types</td>
                  </tr>
                  <tr>
                    <td>False Positive Rate</td>
                    <td>8.4% of legitimate transactions flagged</td>
                    <td>3.9%, a 54% reduction</td>
                  </tr>
                  <tr>
                    <td>Scoring Latency</td>
                    <td>200-500ms per transaction</td>
                    <td>Under 50ms consistently at peak load</td>
                  </tr>
                  <tr>
                    <td>Manual Review Volume</td>
                    <td>2,000+ cases per day</td>
                    <td>Under 400 cases per day (80% reduction)</td>
                  </tr>
                  <tr>
                    <td>Pattern Adaptation</td>
                    <td>Weeks to months for new rule deployment</td>
                    <td>Hours through automated retraining</td>
                  </tr>
                  <tr>
                    <td>Transaction Throughput</td>
                    <td>Processing ceiling at 200K daily</td>
                    <td>500K+ daily with horizontal scaling capacity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cs-section">
              <h2>6. Conclusion</h2>
              <p>
                The AI-Driven Payment Pipeline represents a fundamental shift from reactive, rule based fraud detection to proactive, adaptive risk intelligence. By combining real time feature engineering, multi model ensemble scoring, and continuous learning from transaction outcomes, the system delivers a level of fraud prevention accuracy that scales with the client growing transaction volume without proportional increases in operational overhead.
              </p>
              <p>
                The architecture is designed for the realities of the Pakistani fintech market, where transaction patterns, fraud vectors, and regulatory requirements differ significantly from Western counterparts. The configurable policy layer ensures that business teams can adapt risk strategies without engineering involvement, while the automated retraining pipeline ensures the system continuously evolves to address emerging threats.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

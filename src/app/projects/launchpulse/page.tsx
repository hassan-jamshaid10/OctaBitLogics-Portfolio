"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";

export default function LaunchPulseCaseStudy() {
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
            <Link href="/projects" className="cs-back-link">
              <ArrowLeft size={16} /> Returns to Projects
            </Link>

            <span className="cs-category">AI &amp; Big Data</span>
            <h1 className="cs-title">LaunchPulse AI</h1>
            <p className="cs-subtitle">AI Powered Startup Evaluation Platform</p>

            <div className="cs-meta-grid">
              <div className="meta-item">
                <h4>Domain</h4>
                <p>Startup Intelligence & Investment Analytics</p>
              </div>
              <div className="meta-item">
                <h4>Tech Stack</h4>
                <p>Next.js, tRPC, PostgreSQL, Phi-2 (Fine-Tuned), RAG Pipeline</p>
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
                LaunchPulse AI is a comprehensive startup evaluation platform that combines modern web technologies with advanced machine learning to help founders, investors, and accelerators make data driven decisions. The system ingests startup data including pitch decks, financial models, and market positioning to generate actionable intelligence through a proprietary scoring engine.
              </p>
              <p>
                By leveraging a fine tuned Phi-2 language model integrated into a Retrieval Augmented Generation (RAG) pipeline, LaunchPulse delivers domain specific startup analysis that goes beyond surface level metrics. The platform produces structured evaluation reports covering success prediction, risk factor analysis, market fit scoring, and financial forecasting, providing stakeholders with the depth of insight that traditionally requires weeks of manual due diligence.
              </p>
            </div>

            <div className="cs-section">
              <h2>2. Problem Statement</h2>
              <p>
                The startup evaluation process is fundamentally broken. Investors receive hundreds of pitch decks monthly, founders struggle to benchmark their positioning, and accelerators lack scalable tools to assess cohort applications. The existing approach relies on three fragile pillars:
              </p>
              <ul>
                <li><strong>Subjective assessment:</strong> Most evaluation happens through intuition and pattern matching. Without structured frameworks, high potential startups are overlooked while familiar patterns receive disproportionate attention, introducing systemic bias into funding decisions.</li>
                <li><strong>Manual due diligence bottleneck:</strong> Deep analysis of a single startup requires reviewing financial projections, competitive landscapes, team backgrounds, and market sizing. This process takes days per company, making it impossible to evaluate deal flow at scale without sacrificing quality.</li>
                <li><strong>Fragmented data sources:</strong> Relevant information is scattered across pitch decks, financial spreadsheets, market reports, and public databases. There is no unified system to aggregate, normalise, and cross reference these inputs into a coherent evaluation framework.</li>
              </ul>
              <p>LaunchPulse addresses all three constraints through automated document ingestion, a structured multi dimensional scoring engine, and AI powered insight generation that delivers comprehensive evaluations in minutes rather than weeks.</p>
            </div>

            <div className="cs-section">
              <h2>3. System Architecture</h2>
              <p>
                LaunchPulse is architected as a modular, full stack platform where each layer operates independently with well defined interfaces. This separation ensures that the ML pipeline can be iterated independently of the frontend experience, and that data persistence can scale without disrupting the evaluation workflow.
              </p>

              <h3>Frontend & User Experience</h3>
              <p>
                The Next.js frontend provides a multi step evaluation wizard that guides users through startup data input, profile configuration, and market context. The interface is designed for clarity and speed, allowing users to initiate a full evaluation in under three minutes. Real time progress indicators and step by step validation ensure data completeness before the AI pipeline is triggered.
              </p>

              <h3>API & Communication Layer</h3>
              <p>
                tRPC provides end to end type safety between the frontend and backend, eliminating runtime type errors and enabling rapid iteration across the full stack. All evaluation requests, document uploads, and result retrievals are handled through strongly typed procedures, ensuring that the contract between client and server is always enforced at compile time.
              </p>

              <h3>RAG Pipeline & Language Model</h3>
              <p>
                The core intelligence layer is powered by a Retrieval Augmented Generation pipeline built around a fine tuned Phi-2 model. The model was trained using LoRA adapters on a curated startup dataset to achieve domain specific accuracy in areas such as market sizing (TAM/SAM/SOM estimation), competitive positioning, and financial viability assessment. During evaluation, the system retrieves relevant context from ingested documents and market data, augmenting the model prompt to produce grounded, evidence backed analysis rather than generic outputs.
              </p>

              <h3>Evaluation Engine</h3>
              <p>
                The evaluation engine produces structured reports across multiple dimensions: SWOT analysis, risk factor identification, growth potential scoring, market fit assessment, and financial forecasting. Each dimension is scored independently and aggregated into an overall LaunchPulse Score, a composite metric that reflects the startup overall viability. RAGAS confidence scores accompany each insight, providing transparency into the reliability of each generated assessment.
              </p>

              <h3>Data & Persistence Layer</h3>
              <p>
                PostgreSQL serves as the primary data store, managing user accounts, evaluation histories, document metadata, and generated reports. The schema is designed for efficient querying of historical evaluations, enabling trend analysis and portfolio level insights for repeat users. Secure document storage handles pitch decks, financial models, and business plans with role based access controls.
              </p>
            </div>

            <div className="cs-section">
              <h2>4. Key Capabilities</h2>
              <ul>
                <li><strong>AI Powered Success Prediction:</strong> Machine learning models analyse startup metrics across team composition, market dynamics, and financial health to generate data driven success probability scores.</li>
                <li><strong>Automated SWOT Analysis:</strong> The RAG pipeline generates comprehensive Strengths, Weaknesses, Opportunities, and Threats analysis grounded in the startup actual data and market context.</li>
                <li><strong>Market Intelligence:</strong> Automated TAM/SAM/SOM estimation and competitive landscape analysis using retrieval augmented context from market databases and industry reports.</li>
                <li><strong>Financial Forecasting:</strong> Revenue projections, burn rate analysis, and runway estimation based on the startup financial inputs and comparable company performance data.</li>
                <li><strong>Risk Factor Identification:</strong> Structured risk assessment that identifies and scores specific risk vectors across market, execution, financial, and regulatory dimensions.</li>
                <li><strong>Document Intelligence:</strong> Secure vault with intelligent parsing for pitch decks, financial models, and business plans. Extracted data feeds directly into the evaluation pipeline.</li>
                <li><strong>Confidence Scoring:</strong> RAGAS evaluation metrics accompany every AI generated insight, giving users transparency into how reliable each assessment is.</li>
                <li><strong>Portfolio Analytics:</strong> For investors evaluating multiple startups, the platform provides comparative analytics, cohort tracking, and aggregate portfolio health metrics.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>5. Evaluation Dimensions</h2>
              <p>
                Every startup evaluation produces a structured report across six core dimensions, each independently scored and weighted based on the startup stage and sector. The composite LaunchPulse Score provides a single metric for quick comparison, while the dimensional breakdown enables deep analysis of specific areas.
              </p>

              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Assessment Focus</th>
                    <th>Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Market Fit</td>
                    <td>Problem validation, target market clarity, and demand signals</td>
                    <td>Score (0-100) + narrative analysis</td>
                  </tr>
                  <tr>
                    <td>Financial Health</td>
                    <td>Revenue trajectory, burn rate, unit economics, and runway</td>
                    <td>Forecast model + risk flags</td>
                  </tr>
                  <tr>
                    <td>Competitive Position</td>
                    <td>Market landscape, differentiation strength, and moat analysis</td>
                    <td>Positioning matrix + SWOT</td>
                  </tr>
                  <tr>
                    <td>Team Strength</td>
                    <td>Founder experience, team composition, and domain expertise</td>
                    <td>Capability score + gap analysis</td>
                  </tr>
                  <tr>
                    <td>Growth Potential</td>
                    <td>Scalability, TAM/SAM/SOM sizing, and expansion vectors</td>
                    <td>Growth trajectory + market sizing</td>
                  </tr>
                  <tr>
                    <td>Risk Profile</td>
                    <td>Execution risk, market risk, regulatory risk, and financial risk</td>
                    <td>Risk matrix + mitigation paths</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cs-section">
              <h2>6. ML Pipeline & Fine Tuning</h2>
              <p>
                The machine learning backbone of LaunchPulse centres on a fine tuned Phi-2 language model, selected for its strong reasoning capabilities at a compact parameter count. Fine tuning was performed using LoRA (Low Rank Adaptation) adapters, enabling domain specialisation without full model retraining, a critical consideration given the requirement to iterate rapidly on training data as the startup evaluation corpus grows.
              </p>
              <ul>
                <li><strong>Training Data Curation:</strong> A custom startup dataset was assembled from anonymised evaluation reports, publicly available pitch analyses, and structured market data. The dataset was formatted to optimise instruction following behaviour specific to evaluation report generation.</li>
                <li><strong>LoRA Adapter Training:</strong> The adapter was trained targeting attention and MLP layers with a rank 16 configuration, achieving strong domain accuracy while maintaining the base model general reasoning capabilities. Training was optimised for the Quadro M2200 GPU, demonstrating that production quality fine tuning is achievable on consumer grade hardware.</li>
                <li><strong>RAG Integration:</strong> During inference, the fine tuned model receives augmented prompts containing retrieved context from the user uploaded documents and market intelligence databases. This retrieval augmentation ensures that generated insights are grounded in the specific startup data rather than relying solely on parametric knowledge.</li>
                <li><strong>Quality Assurance:</strong> RAGAS framework integration provides automated evaluation of retrieval quality, answer relevancy, and faithfulness scores. These metrics are surfaced to the end user alongside every generated insight, enabling informed decision making.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>7. Security & Data Privacy</h2>
              <p>
                Given the sensitive nature of startup financial data and intellectual property contained within pitch decks and business plans, security is treated as a foundational requirement throughout the LaunchPulse architecture. All document uploads are encrypted at rest and in transit, with role based access controls ensuring that evaluation data is only accessible to authorised stakeholders.
              </p>
              <p>
                The platform implements secure session management with token based authentication, and all API endpoints enforce strict authorisation checks before any data is served. Document storage is isolated per organisation, preventing any cross tenant data leakage. The AI pipeline processes data in memory and does not persist raw document content beyond the evaluation session, ensuring that sensitive startup information is not retained in model training or logging systems.
              </p>
            </div>

            <div className="cs-section">
              <h2>8. Conclusion</h2>
              <p>
                LaunchPulse AI represents a fundamental shift in how startup evaluation is conducted. By combining a fine tuned language model with a retrieval augmented generation pipeline, the platform transforms what was previously a weeks long manual process into a structured, data driven evaluation delivered in minutes. The multi dimensional scoring framework, combined with transparent confidence metrics, provides stakeholders with both the breadth and depth of analysis required to make informed investment and strategic decisions.
              </p>
              <p>
                The architecture is designed for continuous improvement. As the evaluation corpus grows and the LoRA adapter is retrained on higher quality data, the system accuracy and domain specificity will continue to increase. LaunchPulse demonstrates that the convergence of modern web engineering, type safe APIs, and domain specialised AI can deliver enterprise grade intelligence tools that are accessible to founders, investors, and accelerators alike.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";

const TechIcon = ({ name, slug, customSrc }: { name: string; slug?: string; customSrc?: string }) => (
  <div className="det-tech-item" title={name}>
    <img src={customSrc || `https://cdn.simpleicons.org/${slug}`} alt={name} className="det-tech-icon" loading="lazy" />
    <span>{name}</span>
  </div>
);

const SvgDefs = () => (
  <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true">
    <defs>
      <linearGradient id="appGradientDet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ECC40" />
        <stop offset="100%" stopColor="#3BADB0" />
      </linearGradient>
      <filter id="grainAndBlurDet" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.25 0" in="noise" result="coloredNoise" />
        <feComposite in="coloredNoise" in2="SourceGraphic" operator="in" result="noisyShape" />
        <feBlend mode="overlay" in="noisyShape" in2="SourceGraphic" result="final" />
      </filter>
    </defs>
  </svg>
);

export function ProductDevComponent() {
  return (
    <section className="det-svc-section bg-white" id="product-dev">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <path d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">Product Based<br/>Development</h2>
          <p className="det-svc-intro">
            From initial concept to full-scale production deployment, our product-centric approach ensures what we build solves real problems. We partner with you to refine the product vision and establish a go-to-market strategy.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">MVP Creation</h4>
              <p className="det-svc-offer-desc">Rapid prototyping and development of minimum viable products to validate market fit.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Market Validation</h4>
              <p className="det-svc-offer-desc">Deep user research and A/B testing to ensure product-market fit before scaling.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Agile Management</h4>
              <p className="det-svc-offer-desc">Iterative sprint-based delivery ensuring constant feedback and pivoting when necessary.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Scalable Architecture</h4>
              <p className="det-svc-offer-desc">Designing the foundational tech stack to handle millions of users effortlessly.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="Jira" slug="jira" />
            <TechIcon name="Figma" slug="figma" />
            <TechIcon name="Miro" slug="miro" />
            <TechIcon name="Notion" slug="notion" />
            <TechIcon name="Slack" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
            <TechIcon name="Linear" slug="linear" />
            <TechIcon name="Asana" slug="asana" />
            <TechIcon name="AWS" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WebDevComponent() {
  return (
    <section className="det-svc-section bg-gray" id="web-dev">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <rect x="15" y="40" width="45" height="45" rx="8" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
              <rect x="40" y="15" width="45" height="45" rx="8" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">Web<br/>Development</h2>
          <p className="det-svc-intro">
            Enterprise-grade web applications built for scale. We engineer robust, secure platforms using modern stacks to handle millions of users seamlessly, focusing on performance and core web vitals.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Single Page Apps</h4>
              <p className="det-svc-offer-desc">Lightning-fast, interactive web apps built with modern frameworks like React and Next.js.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Enterprise Portals</h4>
              <p className="det-svc-offer-desc">Secure, role-based dashboards and management systems for large organizations.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Microservices</h4>
              <p className="det-svc-offer-desc">Decoupled, highly available backend architectures for complex business logic.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Performance & SEO</h4>
              <p className="det-svc-offer-desc">Core Web Vitals optimization to rank higher and load instantly globally.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="React" slug="react" />
            <TechIcon name="Next.js" slug="nextdotjs" />
            <TechIcon name="Vue.js" slug="vuedotjs" />
            <TechIcon name="Angular" slug="angular" />
            <TechIcon name="Node.js" slug="nodedotjs" />
            <TechIcon name="TypeScript" slug="typescript" />
            <TechIcon name="Python" slug="python" />
            <TechIcon name="Django" slug="django" />
            <TechIcon name="Go" slug="go" />
            <TechIcon name="PostgreSQL" slug="postgresql" />
            <TechIcon name="MongoDB" slug="mongodb" />
            <TechIcon name="Redis" slug="redis" />
            <TechIcon name="GraphQL" slug="graphql" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function MobileDevComponent() {
  return (
    <section className="det-svc-section bg-white" id="mobile-dev">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <rect x="30" y="10" width="40" height="80" rx="20" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">Mobile<br/>Development</h2>
          <p className="det-svc-intro">
            Award-winning native and cross-platform mobile experiences that are smooth, intuitive, and keep users engaged. We prioritize offline-first capabilities, battery optimization, and fluid animations.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Native iOS & Android</h4>
              <p className="det-svc-offer-desc">High-performance applications taking full advantage of device-specific hardware.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Cross-Platform</h4>
              <p className="det-svc-offer-desc">Unified codebases using Flutter or React Native for faster time-to-market.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">ASO Strategy</h4>
              <p className="det-svc-offer-desc">Strategic metadata and screenshot tuning to maximize organic app downloads.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Offline-First Apps</h4>
              <p className="det-svc-offer-desc">Robust data syncing strategies allowing users to work seamlessly without internet.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="React Native" slug="react" />
            <TechIcon name="Flutter" slug="flutter" />
            <TechIcon name="Swift" slug="swift" />
            <TechIcon name="Kotlin" slug="kotlin" />
            <TechIcon name="Java" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <TechIcon name="Firebase" slug="firebase" />
            <TechIcon name="SQLite" slug="sqlite" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function DevOpsComponent() {
  return (
    <section className="det-svc-section bg-gray" id="devops">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <circle cx="34" cy="34" r="16" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
              <circle cx="66" cy="34" r="16" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
              <circle cx="34" cy="66" r="16" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
              <circle cx="66" cy="66" r="16" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">DevOps &<br/>Cloud</h2>
          <p className="det-svc-intro">
            We design resilient cloud infrastructures and implement continuous integration pipelines to accelerate your deployment frequency, embedding DevSecOps into every layer.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">CI/CD Automation</h4>
              <p className="det-svc-offer-desc">Zero-downtime deployment pipelines that accelerate delivery cycles and reduce bugs.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Infrastructure as Code</h4>
              <p className="det-svc-offer-desc">Predictable, version-controlled cloud infrastructure using tools like Terraform.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Cloud Migration</h4>
              <p className="det-svc-offer-desc">Secure and smooth transition from legacy on-premise servers to AWS/Azure/GCP.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">24/7 Monitoring</h4>
              <p className="det-svc-offer-desc">Proactive alerting and logging with Datadog to resolve issues before users notice.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="AWS" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            <TechIcon name="Azure" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
            <TechIcon name="Google Cloud" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
            <TechIcon name="Docker" slug="docker" />
            <TechIcon name="Kubernetes" slug="kubernetes" />
            <TechIcon name="Terraform" slug="terraform" />
            <TechIcon name="Jenkins" slug="jenkins" />
            <TechIcon name="GitHub Actions" slug="githubactions" />
            <TechIcon name="Datadog" slug="datadog" />
            <TechIcon name="Prometheus" slug="prometheus" />
            <TechIcon name="Grafana" slug="grafana" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AiMlComponent() {
  return (
    <section className="det-svc-section bg-white" id="ai-ml">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <path d="M50 5 C50 40, 60 50, 95 50 C60 50, 50 60, 50 95 C50 60, 40 50, 5 50 C40 50, 50 40, 50 5 Z" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">AI & Machine<br/>Learning</h2>
          <p className="det-svc-intro">
            Integrate large language models, computer vision, and predictive analytics directly into your core business processes to drive unprecedented efficiency.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">LLM Integration</h4>
              <p className="det-svc-offer-desc">Custom fine-tuning and deployment of GPT-based models for business automation.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Predictive Analytics</h4>
              <p className="det-svc-offer-desc">Forecasting trends and customer behavior using massive amounts of historical data.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Computer Vision</h4>
              <p className="det-svc-offer-desc">Image recognition and real-time video processing algorithms for industrial use-cases.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Custom Algorithms</h4>
              <p className="det-svc-offer-desc">Bespoke machine learning solutions tailored perfectly to your unique bottlenecks.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="Python" slug="python" />
            <TechIcon name="TensorFlow" slug="tensorflow" />
            <TechIcon name="PyTorch" slug="pytorch" />
            <TechIcon name="Scikit-Learn" slug="scikitlearn" />
            <TechIcon name="OpenAI" customSrc="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg" />
            <TechIcon name="Hugging Face" slug="huggingface" />
            <TechIcon name="OpenCV" slug="opencv" />
            <TechIcon name="Pandas" slug="pandas" />
            <TechIcon name="Jupyter" slug="jupyter" />
            <TechIcon name="CUDA" slug="nvidia" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function DataEngComponent() {
  return (
    <section className="det-svc-section bg-gray" id="data-engineering">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
              <line x1="50" y1="50" x2="90" y2="30" stroke="rgba(0,32,70,0.1)" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="90" stroke="rgba(0,32,70,0.1)" strokeWidth="2" />
              <line x1="50" y1="50" x2="10" y2="30" stroke="rgba(0,32,70,0.1)" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="det-svc-title">Data<br/>Engineering</h2>
          <p className="det-svc-intro">
            Transform isolated data silos into a unified, actionable source of truth. We architect high-throughput data pipelines and real-time streaming platforms.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">ETL Pipelines</h4>
              <p className="det-svc-offer-desc">Automated data extraction, transformation, and loading into unified, clean data lakes.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Data Warehousing</h4>
              <p className="det-svc-offer-desc">Scalable, high-performance structured storage architectures using Snowflake or BigQuery.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Real-time Streaming</h4>
              <p className="det-svc-offer-desc">Event-driven architectures using Apache Kafka to ingest and process data instantly.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Big Data Analytics</h4>
              <p className="det-svc-offer-desc">Empowering business intelligence dashboards with highly available, reliable data sources.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="Python" slug="python" />
            <TechIcon name="Apache Kafka" slug="apachekafka" />
            <TechIcon name="Apache Spark" slug="apachespark" />
            <TechIcon name="Snowflake" slug="snowflake" />
            <TechIcon name="Databricks" slug="databricks" />
            <TechIcon name="PostgreSQL" slug="postgresql" />
            <TechIcon name="AWS" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            <TechIcon name="Google Cloud" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function UiUxComponent() {
  return (
    <section className="det-svc-section bg-white" id="ui-ux">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z M50 35 A 15 15 0 1 1 50 65 A 15 15 0 1 1 50 35 Z" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">UI/UX<br/>Design</h2>
          <p className="det-svc-intro">
            We craft intuitive, pixel-perfect interfaces backed by deep user research. We believe exceptional design drives frictionless user journeys that maximize conversion.
          </p>

        </motion.div>
        
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <h3 className="det-svc-subtitle"><span>/</span> What We Offer</h3>
          <div className="det-svc-offer-grid">
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">User Research</h4>
              <p className="det-svc-offer-desc">Deep demographic studies and journey mapping to understand actual user behaviors.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Wireframing</h4>
              <p className="det-svc-offer-desc">Rapid low-fidelity mockups to align on layout and critical information architecture.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">High-Fidelity UI</h4>
              <p className="det-svc-offer-desc">Pixel-perfect, brand-aligned visual designs that captivate audiences and increase retention.</p>
            </div>
            <div className="det-svc-offer-box">
              <h4 className="det-svc-offer-title">Design Systems</h4>
              <p className="det-svc-offer-desc">Reusable component libraries ensuring strict visual consistency across all platforms.</p>
            </div>
          </div>

          <h3 className="det-svc-subtitle"><span>/</span> Technologies We Use</h3>
          <div className="det-svc-tech">
            <TechIcon name="Figma" slug="figma" />
            <TechIcon name="Adobe XD" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" />
            <TechIcon name="Sketch" slug="sketch" />
            <TechIcon name="Framer" slug="framer" />
            <TechIcon name="InVision" customSrc="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/invision.svg" />
            <TechIcon name="Illustrator" customSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function DetailedServices() {
  return (
    <div id="detailed-services">
      <SvgDefs />
      <style>{`
        .det-svc-section {
          padding: 5rem 40px; /* Reduced vertical padding significantly */
          border-bottom: 1px solid rgba(0, 32, 70, 0.05);
          position: relative;
          overflow: hidden;
        }
        .det-svc-section.bg-gray {
          background: #faf9fd;
        }
        .det-svc-section.bg-white {
          background: #ffffff;
        }

        .det-svc-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.6fr; /* Gave more width to the right column */
          gap: 3rem; /* Reduced gap between columns */
          position: relative;
          z-index: 2;
        }

        .det-svc-left {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Large transparent watermark behind the title */
        .det-svc-watermark {
          position: absolute;
          top: -20px;
          left: -30px;
          width: 200px;
          height: 200px;
          opacity: 0.12;
          z-index: -1;
          pointer-events: none;
        }
        .det-svc-watermark svg {
          width: 100%;
          height: 100%;
        }

        .det-svc-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.1;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }

        .det-svc-intro {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #44474e;
          max-width: 480px;
          margin: 0;
        }

        /* Upgraded Subtitle Design */
        .det-svc-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem; /* Reduced font size to fit tighter */
          font-weight: 800;
          color: #002046;
          margin: 0 0 1.5rem 0; /* Tighter margins */
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
        }
        .det-svc-subtitle span {
          background: linear-gradient(90deg, #2ECC40, #3BADB0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-right: 10px;
          font-weight: 900;
        }

        /* Architectural Grid for What We Offer */
        .det-svc-offer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid rgba(0, 32, 70, 0.1);
          border-left: 1px solid rgba(0, 32, 70, 0.1);
          margin-bottom: 3.5rem; /* Tighter gap before Tech Stack */
        }

        .det-svc-offer-box {
          background: transparent;
          padding: 1.5rem; /* Reduced internal padding significantly */
          border-right: 1px solid rgba(0, 32, 70, 0.1);
          border-bottom: 1px solid rgba(0, 32, 70, 0.1);
          transition: background 0.3s ease;
        }
        .det-svc-offer-box:hover {
          background: rgba(46, 204, 64, 0.03);
        }

        .det-svc-offer-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #002046;
          margin: 0 0 0.5rem 0; /* Tighter margin */
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .det-svc-offer-title::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background: #2ECC40;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .det-svc-offer-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #44474e;
          margin: 0;
        }

        /* Tech icons transformed into solid structural boxes */
        .det-svc-tech {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }

        .det-tech-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #002046;
          padding: 0.8rem; /* Tighter padding */
          border: 1px solid rgba(0, 32, 70, 0.08);
          background: #ffffff;
          transition: all 0.2s ease;
        }
        
        .bg-gray .det-tech-item {
          background: #faf9fd; /* Keep it blended with the gray background */
        }

        .det-tech-item:hover {
          border-color: rgba(46, 204, 64, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 32, 70, 0.04);
        }

        .det-tech-icon {
          width: 22px;
          height: 22px;
          object-fit: contain;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .det-svc-inner {
            grid-template-columns: 1fr;
            gap: 3rem; /* Tighter responsive gap */
          }
          .det-svc-section {
            padding: 4rem 20px;
          }
        }

        @media (max-width: 600px) {
          .det-svc-offer-grid {
            grid-template-columns: 1fr;
          }
          .det-svc-watermark {
            width: 140px;
            height: 140px;
          }
          .det-svc-tech {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }
        }
      `}</style>
      <ProductDevComponent />
      <WebDevComponent />
      <MobileDevComponent />
      <DevOpsComponent />
      <AiMlComponent />
      <DataEngComponent />
      <UiUxComponent />
    </div>
  );
}

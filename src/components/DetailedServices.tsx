"use client";

import { motion } from "framer-motion";

const TechIcon = ({ name, slug }: { name: string; slug: string }) => (
  <div className="det-tech-item" title={name}>
    <img src={`https://cdn.simpleicons.org/${slug}`} alt={name} className="det-tech-icon" loading="lazy" />
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
            From initial concept to full-scale production deployment, our product-centric approach ensures what we build solves real problems.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">End-to-end MVP Creation</li>
                <li className="det-svc-list-item">Market Fit Testing & Validation</li>
                <li className="det-svc-list-item">Agile Product Management</li>
                <li className="det-svc-list-item">Scalable Architecture Design</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
              <div className="det-svc-tech">
                <TechIcon name="Jira" slug="jira" />
                <TechIcon name="Figma" slug="figma" />
                <TechIcon name="Miro" slug="miro" />
                <TechIcon name="Notion" slug="notion" />
                <TechIcon name="Slack" slug="slack" />
                <TechIcon name="Linear" slug="linear" />
                <TechIcon name="Asana" slug="asana" />
                <TechIcon name="AWS" slug="amazonaws" />
              </div>
            </div>
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
            Enterprise-grade web applications built for scale. We engineer robust, secure platforms using modern stacks to handle millions of users.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">Single Page Applications (SPAs)</li>
                <li className="det-svc-list-item">Enterprise Web Portals</li>
                <li className="det-svc-list-item">Microservices Architectures</li>
                <li className="det-svc-list-item">Performance & SEO Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
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
            </div>
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
            Award-winning native and cross-platform mobile experiences that are smooth, intuitive, and keep users engaged across iOS and Android.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">Native iOS & Android Apps</li>
                <li className="det-svc-list-item">Cross-Platform Development</li>
                <li className="det-svc-list-item">App Store Optimization (ASO)</li>
                <li className="det-svc-list-item">Offline-first Architectures</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
              <div className="det-svc-tech">
                <TechIcon name="React Native" slug="react" />
                <TechIcon name="Flutter" slug="flutter" />
                <TechIcon name="Swift" slug="swift" />
                <TechIcon name="Kotlin" slug="kotlin" />
                <TechIcon name="Java" slug="java" />
                <TechIcon name="Firebase" slug="firebase" />
                <TechIcon name="SQLite" slug="sqlite" />
              </div>
            </div>
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
            We design resilient cloud infrastructures and implement continuous integration pipelines to accelerate your deployment frequency.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">CI/CD Pipeline Automation</li>
                <li className="det-svc-list-item">Infrastructure as Code (IaC)</li>
                <li className="det-svc-list-item">Cloud Migration Strategy</li>
                <li className="det-svc-list-item">24/7 Monitoring & Security</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
              <div className="det-svc-tech">
                <TechIcon name="AWS" slug="amazonaws" />
                <TechIcon name="Azure" slug="microsoftazure" />
                <TechIcon name="Google Cloud" slug="googlecloud" />
                <TechIcon name="Docker" slug="docker" />
                <TechIcon name="Kubernetes" slug="kubernetes" />
                <TechIcon name="Terraform" slug="terraform" />
                <TechIcon name="Jenkins" slug="jenkins" />
                <TechIcon name="GitHub Actions" slug="githubactions" />
                <TechIcon name="Datadog" slug="datadog" />
                <TechIcon name="Prometheus" slug="prometheus" />
                <TechIcon name="Grafana" slug="grafana" />
              </div>
            </div>
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
            Integrate large language models, computer vision, and predictive analytics directly into your core business processes.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">LLM & Generative AI Integration</li>
                <li className="det-svc-list-item">Predictive Analytics Models</li>
                <li className="det-svc-list-item">Computer Vision Systems</li>
                <li className="det-svc-list-item">Custom Algorithm Development</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
              <div className="det-svc-tech">
                <TechIcon name="Python" slug="python" />
                <TechIcon name="TensorFlow" slug="tensorflow" />
                <TechIcon name="PyTorch" slug="pytorch" />
                <TechIcon name="Scikit-Learn" slug="scikitlearn" />
                <TechIcon name="OpenAI" slug="openai" />
                <TechIcon name="Hugging Face" slug="huggingface" />
                <TechIcon name="OpenCV" slug="opencv" />
                <TechIcon name="Pandas" slug="pandas" />
                <TechIcon name="Jupyter" slug="jupyter" />
                <TechIcon name="CUDA" slug="nvidia" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function UiUxComponent() {
  return (
    <section className="det-svc-section bg-gray" id="ui-ux">
      <div className="det-svc-inner">
        <motion.div className="det-svc-left" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-watermark">
            <svg viewBox="0 0 100 100">
              <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z M50 35 A 15 15 0 1 1 50 65 A 15 15 0 1 1 50 35 Z" fill="url(#appGradientDet)" filter="url(#grainAndBlurDet)" />
            </svg>
          </div>
          <h2 className="det-svc-title">UI/UX<br/>Design</h2>
          <p className="det-svc-intro">
            We craft intuitive, pixel-perfect interfaces backed by deep user research. Design systems that ensure brand consistency across all touchpoints.
          </p>
        </motion.div>
        <motion.div className="det-svc-right" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration: 0.6}}>
          <div className="det-svc-blocks">
            <div>
              <h3 className="det-svc-subtitle">What We Offer</h3>
              <ul className="det-svc-list">
                <li className="det-svc-list-item">Comprehensive User Research</li>
                <li className="det-svc-list-item">Wireframing & Prototyping</li>
                <li className="det-svc-list-item">High-Fidelity Interface Design</li>
                <li className="det-svc-list-item">Scalable Design Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="det-svc-subtitle">Technologies We Use</h3>
              <div className="det-svc-tech">
                <TechIcon name="Figma" slug="figma" />
                <TechIcon name="Adobe XD" slug="adobexd" />
                <TechIcon name="Sketch" slug="sketch" />
                <TechIcon name="Framer" slug="framer" />
                <TechIcon name="Zeplin" slug="zeplin" />
                <TechIcon name="InVision" slug="invision" />
                <TechIcon name="Illustrator" slug="adobeillustrator" />
              </div>
            </div>
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
          padding: 8rem 40px;
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
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          position: relative;
          z-index: 2;
        }

        .det-svc-left {
          position: relative;
        }

        /* Large transparent watermark behind the title */
        .det-svc-watermark {
          position: absolute;
          top: -20px;
          left: -40px;
          width: 240px;
          height: 240px;
          opacity: 0.15;
          z-index: -1;
          pointer-events: none;
        }
        .det-svc-watermark svg {
          width: 100%;
          height: 100%;
        }

        .det-svc-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 800;
          color: #002046;
          line-height: 1.1;
          margin: 0 0 1.5rem;
          letter-spacing: -0.03em;
        }

        .det-svc-intro {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #44474e;
          max-width: 480px;
        }

        .det-svc-blocks {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .det-svc-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #2ECC40;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .det-svc-subtitle::before {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: #2ECC40;
        }

        .det-svc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .det-svc-list-item {
          font-size: 1.15rem;
          font-weight: 600;
          color: #002046;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(0, 32, 70, 0.08);
        }
        .det-svc-list-item:first-child {
          padding-top: 0;
        }
        .det-svc-list-item:last-child {
          border-bottom: none;
        }

        /* Tech icons grid container */
        .det-svc-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
        }

        .det-tech-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #002046;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .det-tech-item:hover {
          transform: translateY(-2px);
          opacity: 0.8;
        }

        .det-tech-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .det-svc-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .det-svc-section {
            padding: 5rem 20px;
          }
          .det-svc-intro {
            max-width: 100%;
          }
          .det-svc-watermark {
            width: 180px;
            height: 180px;
            top: -10px;
            left: -10px;
          }
        }
      `}</style>
      <ProductDevComponent />
      <WebDevComponent />
      <MobileDevComponent />
      <DevOpsComponent />
      <AiMlComponent />
      <UiUxComponent />
    </div>
  );
}

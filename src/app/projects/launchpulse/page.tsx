"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function LaunchPulsePage() {
  return (
    <ProjectDetailPage
      category="AI & Big Data"
      name="LaunchPulse"
      tagline="AI-powered startup evaluation engine — giving investors and founders data-driven confidence."
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=90&auto=format&fit=crop"
      description="LaunchPulse is a comprehensive platform combining modern web technologies with machine learning to help founders and investors make data-driven decisions. It analyzes startup metrics, market signals, and document intelligence to predict success probability and surface risk factors before capital is committed."
      metrics={[
        { value: "ML", label: "Prediction engine" },
        { value: "3+", label: "Scoring dimensions" },
        { value: "∞", label: "Startups analyzed" },
        { value: "100%", label: "Data-driven decisions" },
      ]}
      tech={[
        { name: "Next.js",    icon: "devicon-nextjs-plain",       color: "#000000" },
        { name: "TypeScript", icon: "devicon-typescript-plain",   color: "#3178C6" },
        { name: "Python",     icon: "devicon-python-plain",       color: "#3776AB" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain",   color: "#336791" },
        { name: "tRPC",       icon: "devicon-nodejs-plain",       color: "#339933" },
        { name: "TensorFlow", icon: "devicon-tensorflow-original",color: "#FF6F00" },
        { name: "Docker",     icon: "devicon-docker-plain",       color: "#2496ED" },
        { name: "AWS",        icon: "devicon-amazonwebservices-plain", color: "#FF9900" },
      ]}
      features={[
        { icon: "📈", title: "Success Prediction Engine",  detail: "ML models analyze startup metrics across team quality, market size, traction, and financials to generate a calibrated success probability score." },
        { icon: "⚠️", title: "Risk Factor Analysis",       detail: "Automated risk scanning surfaces red flags across regulatory exposure, market saturation, burn rate, and competitive landscape." },
        { icon: "🎯", title: "Market Fit Scoring",         detail: "Proprietary algorithm cross-references product-market indicators against verified industry benchmarks to score fit across verticals." },
        { icon: "📄", title: "Document Intelligence",      detail: "Secure vault with intelligent parsing for pitch decks, financial models, and business plans — automatically extracting key metrics." },
        { icon: "📊", title: "Growth Potential Mapping",   detail: "Multi-dimensional growth assessment models project revenue trajectories, customer acquisition curves, and expansion scenarios." },
        { icon: "🔐", title: "Investor Portal",            detail: "Role-based access control allows deal leads, analysts, and LPs to collaborate on evaluations with granular permission levels." },
      ]}
      challenge="Investors rely on gut instinct and incomplete data when evaluating early-stage startups, leading to high failure rates and missed opportunities in both directions."
      solution="A structured ML evaluation platform that ingests startup data, financial documents, and market signals to produce objective, multi-dimensional risk and opportunity scores."
      outcome="Founders receive actionable feedback on their weaknesses before pitching. Investors build conviction faster with quantified risk profiles replacing anecdotal assessment."
    />
  );
}

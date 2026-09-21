export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  quickActions?: { label: string; action: string; link?: string }[];
}

export interface ServiceInfo {
  title: string;
  shortDesc: string;
  fullDesc: string;
  techs: string[];
  link: string;
}

export interface CompanyDetails {
  name: string;
  tagline: string;
  overview: string;
  stats: { value: string; label: string }[];
  contact: {
    email: string;
    phone: string;
    location: string;
    workingHours: string;
    bookingLink: string;
    socials: {
      instagram: string;
      linkedin: string;
      github: string;
      twitter: string;
    };
  };
  services: ServiceInfo[];
  caseStudies: {
    title: string;
    category: string;
    description: string;
    results: string;
    link: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  faqs: FAQItem[];
}

export const COMPANY_DATA: CompanyDetails = {
  name: "OctaBitLogics",
  tagline: "AI-First Engineering Partner",
  overview:
    "OctaBitLogics is an AI-first engineering partner helping organizations design, build, and scale intelligent systems that deliver lasting business value. We specialize in AI & Data innovation, full-stack software development, cloud infrastructure, and enterprise digital transformation.",
  stats: [
    { value: "6+", label: "Projects Delivered Across Our Portfolio" },
    { value: "5", label: "Core Service Areas We Specialise In" },
    { value: "20+", label: "Technologies Across Our Engineering Stack" },
    { value: "6", label: "Industries Served Across Our Work" }
  ],
  contact: {
    email: "info@octabitlogics.com",
    phone: "+92 321 5353105",
    location: "Lahore, Pakistan",
    workingHours: "Mon–Fri, 9AM–6PM PKT / 24/7 Global Enterprise Support",
    bookingLink: "/contact",
    socials: {
      instagram: "https://www.instagram.com/octabitlogics",
      linkedin: "https://linkedin.com/company/octabitlogics",
      github: "https://github.com/octabitlogics",
      twitter: "https://twitter.com/octabitlogics"
    }
  },
  services: [
    {
      title: "AI & Data Innovation",
      shortDesc: "Generative AI, LLM integration, Machine Learning models, RAG pipelines, and predictive analytics.",
      fullDesc:
        "We build cuting-edge AI solutions including custom LLM integrations, Retrieval-Augmented Generation (RAG) pipelines, computer vision models, and end-to-end data engineering to automate processes and unlock data insights.",
      techs: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "Pinecone", "Hugging Face"],
      link: "/services#ai-data"
    },
    {
      title: "Product-Based Development",
      shortDesc: "End-to-end MVP creation, rapid prototyping, market validation, and agile product development.",
      fullDesc:
        "From initial concept to full-scale production deployment, our product-centric approach ensures we build scalable software that solves real business problems and achieves product-market fit.",
      techs: ["Jira", "Figma", "Miro", "Notion", "Slack", "Linear", "Asana"],
      link: "/services#product-dev"
    },
    {
      title: "Web & Enterprise Development",
      shortDesc: "High-performance Next.js, React, and scalable microservice web platforms built for high traffic.",
      fullDesc:
        "We engineer robust, secure, and blazing-fast web applications designed for scale, excellent SEO, high conversions, and seamless user experiences.",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "REST APIs"],
      link: "/services#web-dev"
    },
    {
      title: "Cloud & DevOps Security",
      shortDesc: "Cloud migration, Docker/Kubernetes containerization, CI/CD pipelines, and infrastructure security.",
      fullDesc:
        "We design resilient cloud architectures on AWS, GCP, and Azure with automated CI/CD pipelines, Zero Trust security, and 24/7 monitoring to guarantee high uptime.",
      techs: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      link: "/services#cloud-security"
    },
    {
      title: "Digital Strategy & Consulting",
      shortDesc: "Technical architecture review, AI readiness assessments, legacy modernization, and UX audits.",
      fullDesc:
        "Our senior architects collaborate with your leadership team to audit tech debt, build digital transformation roadmaps, and choose optimal tech stacks.",
      techs: ["Enterprise Architecture", "AI Readiness", "System Modernization", "UX Audit"],
      link: "/services#consulting"
    }
  ],
  caseStudies: [
    {
      title: "AI-Powered Healthcare Diagnostic Portal",
      category: "Healthcare & AI",
      description: "Automated patient triage and medical imaging analysis system reducing diagnostic review times by 65%.",
      results: "65% faster diagnosis, 99.4% accuracy rate.",
      link: "/case-studies"
    },
    {
      title: "Next-Gen Fintech Wealth Management Platform",
      category: "Fintech & Web",
      description: "Scalable real-time portfolio analytics dashboard built for handling thousands of financial transactions per second.",
      results: "Sub-50ms latency, zero downtime during high volume.",
      link: "/case-studies"
    },
    {
      title: "Global Supply Chain Logistics Optimizer",
      category: "Logistics & Cloud",
      description: "Predictive analytics engine for route optimization and inventory forecasting across international hubs.",
      results: "30% reduction in operational logistics costs.",
      link: "/case-studies"
    }
  ],
  techStack: [
    { category: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vue.js"] },
    { category: "Backend & APIs", items: ["Node.js", "Python", "FastAPI", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "AI & ML", items: ["OpenAI", "LangChain", "PyTorch", "TensorFlow", "Pinecone Vector DB", "Hugging Face"] },
    { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Vercel"] }
  ],
  faqs: [
    {
      question: "What does OctaBitLogics do?",
      answer:
        "OctaBitLogics is an AI-first engineering partner. We design, build, and scale custom AI solutions, high-performance web & mobile applications, cloud infrastructure, and MVPs for businesses worldwide.",
      category: "General",
      keywords: ["what", "do", "about", "octabitlogics", "company", "who"],
      quickActions: [
        { label: "View Our Services", action: "services", link: "/services" },
        { label: "Book a Consultation", action: "contact", link: "/contact" }
      ]
    },
    {
      question: "What services do you offer?",
      answer:
        "Our core services include:\n1. 🤖 **AI & Data Innovation** (LLMs, RAG, Machine Learning)\n2. 🚀 **Product-Based Development & MVPs**\n3. 💻 **Web & Mobile App Development** (Next.js, React, Node.js)\n4. ☁️ **Cloud & DevOps Security** (AWS, GCP, Azure, Docker)\n5. 🎯 **Digital Strategy Consulting**",
      category: "Services",
      keywords: ["service", "services", "offer", "build", "provide", "capabilities", "solutions"],
      quickActions: [
        { label: "AI & Data Solutions", action: "ai_service" },
        { label: "Web Development", action: "web_service" },
        { label: "See All Services", action: "all_services", link: "/services" }
      ]
    },
    {
      question: "How can I contact OctaBitLogics or book a project?",
      answer:
        "You can easily reach out to us by filling out our contact form or emailing us at **contact@octabitlogics.com**. Our team usually responds within 24 hours to schedule a free technical consultation.",
      category: "Contact",
      keywords: ["contact", "email", "hire", "book", "consultation", "reach", "call", "schedule", "talk"],
      quickActions: [
        { label: "Go to Contact Page", action: "go_contact", link: "/contact" }
      ]
    },
    {
      question: "What is your tech stack?",
      answer:
        "We build with modern, production-grade technologies:\n• **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion\n• **Backend:** Node.js, Python, FastAPI, PostgreSQL, MongoDB, Redis\n• **AI/ML:** OpenAI, PyTorch, LangChain, Vector Databases\n• **Cloud & Infrastructure:** AWS, GCP, Azure, Docker, Kubernetes",
      category: "Technology",
      keywords: ["tech", "technology", "stack", "languages", "tools", "react", "nextjs", "python", "framework"],
      quickActions: [
        { label: "Explore Tech Stack", action: "tech_stack" }
      ]
    },
    {
      question: "Can you help build an MVP for a startup?",
      answer:
        "Yes! Our Product-Based Development team specializes in rapid MVP creation. We help startups refine their product vision, design user-friendly prototypes, build scalable MVPs, and validate product-market fit quickly.",
      category: "Startups",
      keywords: ["mvp", "startup", "prototype", "idea", "launch", "fast", "speed"],
      quickActions: [
        { label: "MVP Services", action: "mvp_service", link: "/services#product-dev" },
        { label: "Discuss Your Idea", action: "contact", link: "/contact" }
      ]
    },
    {
      question: "Do you have case studies or portfolio examples?",
      answer:
        "Yes, we have delivered 6+ major projects across Healthcare, Fintech, Logistics, SaaS, and E-commerce. You can explore detailed case studies on our projects page.",
      category: "Portfolio",
      keywords: ["case", "study", "studies", "portfolio", "projects", "work", "examples", "past"],
      quickActions: [
        { label: "View Case Studies", action: "case_studies", link: "/case-studies" },
        { label: "Browse Projects", action: "projects", link: "/projects" }
      ]
    },
    {
      question: "Where is OctaBitLogics located?",
      answer:
        "📍 **Location:** OctaBitLogics is headquartered in **Lahore, Pakistan**, with global remote and on-site engineering teams serving clients across North America, Europe, and Asia.",
      category: "Location",
      keywords: ["location", "where", "address", "lahore", "pakistan", "office", "headquarters", "city", "country", "based"],
      quickActions: [
        { label: "Contact Us", action: "contact", link: "/contact" }
      ]
    },
    {
      question: "What is OctaBitLogics phone number?",
      answer:
        "📞 **Phone Number:** You can call or WhatsApp us at **+92 321 5353105**.\n✉️ **Email:** info@octabitlogics.com / contact@octabitlogics.com",
      category: "Contact",
      keywords: ["phone", "number", "call", "whatsapp", "mobile", "telephone", "contact number"],
      quickActions: [
        { label: "Go to Contact Page", action: "contact", link: "/contact" }
      ]
    },
    {
      question: "What are your social media profiles (Instagram, LinkedIn, etc.)?",
      answer:
        "🌐 **Connect with OctaBitLogics on Social Media:**\n• 📸 **Instagram:** [instagram.com/octabitlogics](https://www.instagram.com/octabitlogics)\n• 💼 **LinkedIn:** [linkedin.com/company/octabitlogics](https://linkedin.com/company/octabitlogics)\n• 💻 **GitHub:** [github.com/octabitlogics](https://github.com/octabitlogics)\n• 🐦 **Twitter / X:** [twitter.com/octabitlogics](https://twitter.com/octabitlogics)",
      category: "Socials",
      keywords: ["instagram", "linkedin", "facebook", "github", "twitter", "social", "socials", "follow", "media", "handle"],
      quickActions: [
        { label: "Contact Page", action: "contact", link: "/contact" }
      ]
    }
  ]
};

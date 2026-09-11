import { COMPANY_DATA, FAQItem } from "../data/chatbotData";

export interface BotResponse {
  text: string;
  quickActions?: { label: string; action: string; link?: string }[];
}

export function generateBotResponse(userInput: string): BotResponse {
  const cleanInput = userInput.trim().toLowerCase();

  if (!cleanInput) {
    return {
      text: "Hello! How can OctaBitLogics help you today? Feel free to select one of the topics below or type your question.",
      quickActions: getDefaultQuickActions()
    };
  }

  // 1. Check for Greetings
  if (/^(hi|hello|hey|greetings|hola|good morning|good afternoon|good evening)/i.test(cleanInput)) {
    return {
      text: `Hello! 👋 Welcome to **OctaBitLogics**. We're an AI-first engineering partner helping organizations design, build, and scale intelligent systems.\n\nHow can I assist you today?`,
      quickActions: getDefaultQuickActions()
    };
  }

  // 2. Check for Specific Service queries
  if (cleanInput.includes("ai") || cleanInput.includes("machine learning") || cleanInput.includes("rag") || cleanInput.includes("llm")) {
    const aiSvc = COMPANY_DATA.services.find(s => s.title.includes("AI"));
    return {
      text: `🤖 **AI & Data Innovation at OctaBitLogics**\n\n${aiSvc?.fullDesc}\n\n**Technologies:** ${aiSvc?.techs.join(", ")}`,
      quickActions: [
        { label: "Book AI Consultation", action: "contact", link: "/contact" },
        { label: "View All Services", action: "services", link: "/services" }
      ]
    };
  }

  if (cleanInput.includes("web") || cleanInput.includes("react") || cleanInput.includes("next.js") || cleanInput.includes("frontend")) {
    const webSvc = COMPANY_DATA.services.find(s => s.title.includes("Web"));
    return {
      text: `💻 **Web & Enterprise Development**\n\n${webSvc?.fullDesc}\n\n**Tech Stack:** ${webSvc?.techs.join(", ")}`,
      quickActions: [
        { label: "View Projects", action: "projects", link: "/projects" },
        { label: "Contact Us", action: "contact", link: "/contact" }
      ]
    };
  }

  if (cleanInput.includes("cloud") || cleanInput.includes("devops") || cleanInput.includes("aws") || cleanInput.includes("security")) {
    const cloudSvc = COMPANY_DATA.services.find(s => s.title.includes("Cloud"));
    return {
      text: `☁️ **Cloud & DevOps Security**\n\n${cloudSvc?.fullDesc}\n\n**Platforms:** ${cloudSvc?.techs.join(", ")}`,
      quickActions: [
        { label: "Engineering Approach", action: "approach", link: "/engineering-approach" },
        { label: "Book Consultation", action: "contact", link: "/contact" }
      ]
    };
  }

  if (cleanInput.includes("location") || cleanInput.includes("where") || cleanInput.includes("address") || cleanInput.includes("lahore") || cleanInput.includes("office")) {
    return {
      text: `📍 **OctaBitLogics Location**\n\nWe are headquartered in **${COMPANY_DATA.contact.location}**, with global remote and on-site engineering teams operating 24/7 across North America, Europe, and Asia.`,
      quickActions: [
        { label: "Contact Us", action: "contact", link: "/contact" }
      ]
    };
  }

  if (cleanInput.includes("phone") || cleanInput.includes("number") || cleanInput.includes("call") || cleanInput.includes("whatsapp")) {
    return {
      text: `📞 **Contact Numbers & Communication Channels**\n\n• **Phone / WhatsApp:** ${COMPANY_DATA.contact.phone}\n• **Email:** ${COMPANY_DATA.contact.email}`,
      quickActions: [
        { label: "Book a Consultation", action: "contact", link: "/contact" }
      ]
    };
  }

  if (cleanInput.includes("instagram") || cleanInput.includes("linkedin") || cleanInput.includes("facebook") || cleanInput.includes("social") || cleanInput.includes("github") || cleanInput.includes("twitter")) {
    return {
      text: `🌐 **OctaBitLogics Social Media Profiles**\n\n• 📸 **Instagram:** [instagram.com/octabitlogics](${COMPANY_DATA.contact.socials.instagram})\n• 💼 **LinkedIn:** [linkedin.com/company/octabitlogics](${COMPANY_DATA.contact.socials.linkedin})\n• 💻 **GitHub:** [github.com/octabitlogics](${COMPANY_DATA.contact.socials.github})\n• 🐦 **Twitter / X:** [twitter.com/octabitlogics](${COMPANY_DATA.contact.socials.twitter})`,
      quickActions: [
        { label: "Go to Contact Page", action: "contact", link: "/contact" }
      ]
    };
  }

  if (cleanInput.includes("mvp") || cleanInput.includes("startup") || cleanInput.includes("product")) {
    const productSvc = COMPANY_DATA.services.find(s => s.title.includes("Product"));
    return {
      text: `🚀 **Product-Based Development & MVPs**\n\n${productSvc?.fullDesc}\n\nWe rapidly prototype and build production-ready MVPs to validate your market fit.`,
      quickActions: [
        { label: "How We Deliver", action: "deliver", link: "/how-we-deliver" },
        { label: "Book Consultation", action: "contact", link: "/contact" }
      ]
    };
  }

  // 3. Keyword matching against FAQs
  let bestMatch: FAQItem | null = null;
  let maxScore = 0;

  for (const faq of COMPANY_DATA.faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (cleanInput.includes(kw)) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && maxScore > 0) {
    return {
      text: bestMatch.answer,
      quickActions: bestMatch.quickActions || getDefaultQuickActions()
    };
  }

  // 4. Default Fallback
  return {
    text: `Thanks for asking! OctaBitLogics specializes in AI engineering, web & mobile platforms, cloud security, and product development.\n\nYou can explore our services or get in touch directly with our engineering team:`,
    quickActions: [
      { label: "Our Services", action: "services", link: "/services" },
      { label: "View Case Studies", action: "case_studies", link: "/case-studies" },
      { label: "Book a Consultation", action: "contact", link: "/contact" }
    ]
  };
}

export function getDefaultQuickActions() {
  return [
    { label: "Our Services", action: "services", link: "/services" },
    { label: "AI & Data Solutions", action: "ai_service" },
    { label: "Tech Stack", action: "tech_stack" },
    { label: "Book a Consultation", action: "contact", link: "/contact" }
  ];
}

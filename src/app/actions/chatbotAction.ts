"use server";

import { COMPANY_DATA } from "../../data/chatbotData";
import { generateBotResponse } from "../../lib/chatbotEngine";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

import { sendEmail } from "./sendEmail";

export async function askChatbotAction(userMessage: string, history: { sender: string; text: string }[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  const lowerMsg = userMessage.toLowerCase();

  // 1. Agent Navigation Intent Detection
  let navigateTo: string | undefined;
  if (lowerMsg.includes("go to contact") || lowerMsg.includes("open contact") || lowerMsg.includes("take me to contact") || lowerMsg.includes("navigate to contact")) {
    navigateTo = "/contact";
  } else if (lowerMsg.includes("go to services") || lowerMsg.includes("open services") || lowerMsg.includes("show services") || lowerMsg.includes("take me to services")) {
    navigateTo = "/services";
  } else if (lowerMsg.includes("go to projects") || lowerMsg.includes("open projects") || lowerMsg.includes("show projects") || lowerMsg.includes("take me to projects")) {
    navigateTo = "/projects";
  } else if (lowerMsg.includes("go to case studies") || lowerMsg.includes("open case studies") || lowerMsg.includes("show case studies")) {
    navigateTo = "/case-studies";
  } else if (lowerMsg.includes("go to blogs") || lowerMsg.includes("open blogs") || lowerMsg.includes("show blogs")) {
    navigateTo = "/blogs";
  } else if (lowerMsg.includes("go to company") || lowerMsg.includes("open company") || lowerMsg.includes("about company")) {
    navigateTo = "/company";
  } else if (lowerMsg.includes("go to ai first") || lowerMsg.includes("open ai first")) {
    navigateTo = "/ai-first";
  } else if (lowerMsg.includes("go to engineering") || lowerMsg.includes("engineering approach")) {
    navigateTo = "/engineering-approach";
  } else if (lowerMsg.includes("how we deliver")) {
    navigateTo = "/how-we-deliver";
  } else if (lowerMsg.includes("go home") || lowerMsg.includes("take me home") || lowerMsg.includes("open home")) {
    navigateTo = "/";
  }

  // 2. Agent Direct Email Dispatch
  if (lowerMsg.includes("send email") || lowerMsg.includes("email the team") || lowerMsg.includes("send an email") || lowerMsg.includes("email us")) {
    try {
      const emailResult = await sendEmail({
        name: "OctaBot User Inquiry",
        email: "info@octabitlogics.com",
        subject: "New Inquiry via OctaBot Agent",
        message: `Inquiry submitted via OctaBot:\n\n${userMessage}`
      });

      if (emailResult.success) {
        return {
          text: "📧 **Email Dispatched Successfully!**\n\nI have sent your message directly to the **OctaBitLogics** engineering team (`info@octabitlogics.com`). We will follow up with you shortly!",
          quickActions: [{ label: "Go to Contact Page", action: "contact", link: "/contact" }],
          navigateTo: navigateTo,
          isAiGenerated: true
        };
      }
    } catch (err) {
      console.error("[OctaBot Email Error]", err);
    }
  }

  // Fallback to local rule engine if API key is not configured yet
  if (!apiKey) {
    console.warn("[OctaBot] GEMINI_API_KEY not configured in .env.local. Using local knowledge engine fallback.");
    const fallbackResponse = generateBotResponse(userMessage);
    return {
      text: fallbackResponse.text,
      quickActions: fallbackResponse.quickActions,
      navigateTo: navigateTo,
      isAiGenerated: false
    };
  }

  try {
    const systemPrompt = `You are OctaBot, the official AI Assistant for OctaBitLogics (an AI-first software engineering partner).
Your job is to answer client questions accurately, professionally, and concisely based on company information.

### COMPANY INFORMATION:
- Name: ${COMPANY_DATA.name}
- Tagline: ${COMPANY_DATA.tagline}
- Overview: ${COMPANY_DATA.overview}
- Location / Headquarters: ${COMPANY_DATA.contact.location}
- Phone / WhatsApp: ${COMPANY_DATA.contact.phone}
- Email: ${COMPANY_DATA.contact.email}
- Social Media Links:
  • Instagram: ${COMPANY_DATA.contact.socials.instagram}
  • LinkedIn: ${COMPANY_DATA.contact.socials.linkedin}
  • GitHub: ${COMPANY_DATA.contact.socials.github}
  • Twitter/X: ${COMPANY_DATA.contact.socials.twitter}
- Stats: ${COMPANY_DATA.stats.map(s => `${s.value}: ${s.label}`).join(", ")}
- Booking Link: /contact

### CORE SERVICES:
${COMPANY_DATA.services.map(s => `• ${s.title}: ${s.fullDesc} (Technologies: ${s.techs.join(", ")})`).join("\n")}

### CASE STUDIES:
${COMPANY_DATA.caseStudies.map(c => `• ${c.title} (${c.category}): ${c.description} - Results: ${c.results}`).join("\n")}

### TECH STACK:
${COMPANY_DATA.techStack.map(t => `• ${t.category}: ${t.items.join(", ")}`).join("\n")}

### RULES FOR RESPONSE:
1. Be helpful, friendly, conversational, and concise. Use bolding (**like this**) for key terms.
2. Format your response strictly using clean paragraphs and bullet points (using •).
3. NEVER use markdown tables (no '|' grid lines or '---' header separators), ASCII tables, or code fences.
4. If asked about booking or contacting, encourage them to visit /contact or email contact@octabitlogics.com.
5. Keep answers directly relevant to OctaBitLogics capabilities and services.
6. Do not make up facts outside OctaBitLogics capabilities.`;

    const contents: any[] = [];

    // Append last 4 messages for context
    const recentHistory = history.slice(-4);
    recentHistory.forEach(msg => {
      contents.push({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      });
    });

    contents.push({ role: "user", parts: [{ text: userMessage }] });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 450
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[Gemini API Error]", response.status, errText);
      const fallback = generateBotResponse(userMessage);
      return {
        text: fallback.text,
        quickActions: fallback.quickActions,
        isAiGenerated: false
      };
    }

    const data = await response.json();
    let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Remove any thinking/reasoning tags
    aiText = aiText.replace(/<Think>[\s\S]*?<\/Think>/gi, "").trim();

    // Convert raw markdown tables if model generated any into bullet points
    if (aiText.includes("|")) {
      aiText = formatTableToBullets(aiText);
    }

    // Generate smart quick action links based on content
    const quickActions: { label: string; action: string; link?: string }[] = [];
    const lowerText = aiText.toLowerCase();

    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("book")) {
      quickActions.push({ label: "Book a Consultation", action: "contact", link: "/contact" });
    }
    if (lowerText.includes("service") || lowerText.includes("ai") || lowerText.includes("web")) {
      quickActions.push({ label: "View Our Services", action: "services", link: "/services" });
    }
    if (lowerText.includes("case") || lowerText.includes("project")) {
      quickActions.push({ label: "View Case Studies", action: "case_studies", link: "/case-studies" });
    }

    return {
      text: aiText,
      quickActions: quickActions.length > 0 ? quickActions : undefined,
      navigateTo: navigateTo,
      isAiGenerated: true
    };
  } catch (error) {
    console.error("[OctaBot Action Error]", error);
    const fallback = generateBotResponse(userMessage);
    return {
      text: fallback.text,
      quickActions: fallback.quickActions,
      isAiGenerated: false
    };
  }
}

function formatTableToBullets(rawText: string): string {
  const lines = rawText.split("\n");
  const cleanedLines: string[] = [];

  for (const line of lines) {
    // Ignore markdown table header separators (e.g., |---|---|)
    if (/^\s*\|?[\s:\-|\+]+\|?\s*$/.test(line)) {
      continue;
    }

    if (line.includes("|")) {
      const parts = line
        .split("|")
        .map(p => p.trim())
        .filter(Boolean);

      if (parts.length > 0) {
        if (parts.length === 1) {
          cleanedLines.push(`• **${parts[0]}**`);
        } else {
          cleanedLines.push(`• **${parts[0]}**: ${parts.slice(1).join(" — ")}`);
        }
        continue;
      }
    }

    cleanedLines.push(line);
  }

  return cleanedLines.join("\n");
}

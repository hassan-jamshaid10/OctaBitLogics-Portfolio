"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function ResumeParserPage() {
  return (
    <ProjectDetailPage
      category="AI & LLM"
      name="CareerMap AI"
      tagline="Multi-LLM resume parser that performs structured skill gap analysis and generates a 6-month career roadmap."
      heroImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&q=90&auto=format&fit=crop"
      description="CareerMap AI is an intelligent career coaching web application that takes a user's PDF resume and a target job title, extracts structured skill data, identifies competency gaps using large language models, and generates a chronological 6-month upskilling roadmap with specific certifications, portfolio projects, and monthly milestones. The system supports three interchangeable LLM backends and uses Pydantic schema validation to guarantee consistent, structured outputs regardless of the model used."
      metrics={[
        { value: "3",      label: "LLM backends supported" },
        { value: "6mo",    label: "Structured roadmap output" },
        { value: "100%",   label: "Pydantic-validated responses" },
        { value: "PDF",    label: "Resume text extraction" },
      ]}
      tech={[
        { name: "Streamlit",      icon: "devicon-python-plain",      color: "#FF4B4B" },
        { name: "FastAPI",        icon: "devicon-fastapi-plain",     color: "#009688" },
        { name: "Google Gemini",  icon: "devicon-google-plain",     color: "#4285F4" },
        { name: "OpenAI",         icon: "devicon-python-plain",     color: "#10A37F" },
        { name: "Groq",           icon: "devicon-python-plain",     color: "#F55036" },
        { name: "Pydantic",       icon: "devicon-python-plain",     color: "#E92063" },
        { name: "Python",         icon: "devicon-python-plain",     color: "#3776AB" },
        { name: "Uvicorn",        icon: "devicon-fastapi-plain",    color: "#499848" },
      ]}
      features={[
        { icon: "📄", title: "PDF Resume Extraction",      detail: "pypdf extracts raw text from unstructured PDF resume files, handling multi-column layouts and varied formatting to produce clean text input for the AI analysis pipeline." },
        { icon: "🤖", title: "Multi-LLM Backend",          detail: "Users can select Google Gemini 1.5 Flash, OpenAI GPT-4o-mini, or Groq Llama-3.3-70B as the analysis engine. All three produce identical structured output through shared Pydantic schema enforcement." },
        { icon: "🎯", title: "Structured Skill Gap Analysis", detail: "System prompts coupled with dynamic JSON schemas instruct the LLM to map current skills against target role requirements, identifying specific competency gaps across technical, tooling, and domain knowledge dimensions." },
        { icon: "📚", title: "Curated Certification Recommendations", detail: "The system recommends specific, named certifications mapped to their real providers — not generic suggestions. Each recommendation includes the rationale for why hiring managers in the target role value it." },
        { icon: "💼", title: "Portfolio Project Suggestions", detail: "Alongside certifications, the system recommends hands-on portfolio projects with specific tech stacks tailored to prove competency in the identified skill gaps projects a recruiter would recognise as credible." },
        { icon: "🗓️", title: "6-Month Roadmap Generation", detail: "The roadmap breaks the upskilling journey into monthly milestones and weekly actionable tasks. Users explore it interactively in the Streamlit dashboard or export it as a markdown file for local tracking." },
      ]}
      challenge="Job seekers face three compounding problems: they do not know specifically why their profile does not match a target role, generic upskilling advice does not translate to hiring credibility, and without a structured timeline, the path feels overwhelming enough to abandon."
      solution="A FastAPI microservice backend orchestrates PDF extraction, LLM-based gap analysis with Pydantic validation, and structured roadmap generation while a Streamlit frontend renders the results as an interactive timeline dashboard with export capability. Three LLM backends ensure availability and allow users to compare outputs."
      outcome="The application gives candidates a clear, actionable answer to why they are not yet qualified for a target role, what specific steps will close the gap, and when each milestone should be completed replacing generic career anxiety with a structured, month-by-month execution plan."
    />
  );
}

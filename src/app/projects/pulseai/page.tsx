"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function PulseAIPage() {
  return (
    <ProjectDetailPage
      category="Healthcare Technology"
      name="Pulse AI"
      tagline="AI-assisted hospital management platform unifying patient records, scheduling, and clinical intelligence."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=90&auto=format&fit=crop"
      description="Pulse AI is a cross-platform hospital management system built on the MERN stack with React Native for mobile. It unifies patient management, appointment scheduling, electronic health records, and AI-assisted diagnosis support into a single platform reducing administrative overhead and surfacing clinical insights at the point of care."
      metrics={[
        { value: "AI",   label: "Diagnosis assistance" },
        { value: "EHR",  label: "Electronic health records" },
        { value: "MERN", label: "Full-stack architecture" },
        { value: "iOS+Android", label: "Cross-platform mobile" },
      ]}
      tech={[
        { name: "React",        icon: "devicon-react-original",   color: "#61DAFB" },
        { name: "React Native", icon: "devicon-react-original",   color: "#00BFFF" },
        { name: "Node.js",      icon: "devicon-nodejs-plain",     color: "#339933" },
        { name: "MongoDB",      icon: "devicon-mongodb-plain",    color: "#47A248" },
        { name: "Express",      icon: "devicon-express-original", color: "#000000" },
        { name: "Python",       icon: "devicon-python-plain",     color: "#3776AB" },
        { name: "TensorFlow",   icon: "devicon-tensorflow-original", color: "#FF6F00" },
        { name: "AWS",          icon: "devicon-amazonwebservices-plain", color: "#FF9900" },
      ]}
      features={[
        { icon: "🏥", title: "Patient Management",        detail: "Complete patient lifecycle management from registration through discharge. Unified profiles consolidate demographics, history, allergies, and medications." },
        { icon: "📱", title: "Cross-Platform Mobile App", detail: "React Native app gives clinicians full EHR access on iOS and Android chart review, order entry, and lab results at the bedside." },
        { icon: "🤖", title: "AI Diagnosis Support",      detail: "ML models analyze patient vitals, lab values, and symptom patterns to surface differential diagnoses ranked by probability for clinician review." },
        { icon: "📋", title: "Electronic Health Records", detail: "HIPAA-aligned EHR system with structured clinical documentation, audit logging, version history, and role-based access for clinical staff." },
        { icon: "📅", title: "Automated Scheduling",      detail: "Smart appointment engine balances physician availability, room capacity, and patient priority to minimize wait times and scheduling conflicts." },
        { icon: "📊", title: "Clinical Analytics",        detail: "Real-time dashboards surface occupancy rates, readmission risk scores, and department performance metrics for hospital administrators." },
      ]}
      challenge="Hospital staff juggle disconnected paper records, manual scheduling, and siloed department systems leading to errors, delays, and inability to leverage patient data for clinical decisions."
      solution="A unified MERN stack platform with AI-assisted diagnosis, cross-platform mobile access, and integrated EHR consolidating the full patient journey into a single, intelligent system."
      outcome="Reduced administrative overhead for clinical staff, eliminated paper-based record gaps, and introduced AI-assisted diagnosis flagging that helps clinicians surface high-risk cases faster."
    />
  );
}

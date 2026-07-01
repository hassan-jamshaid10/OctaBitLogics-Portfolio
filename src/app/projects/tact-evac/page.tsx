"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function TactEvacPage() {
  return (
    <ProjectDetailPage
      category="Defence Technology / AI Systems"
      name="TACT EVAC"
      tagline="Tactical Airbase Evacuation System autonomous AI-driven aircraft rescue under active threat conditions."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90&auto=format&fit=crop"
      description="TACT EVAC is a fully integrated intelligent evacuation management system designed for high-value military airbase environments. The system automates detection, prioritisation, and physical relocation of strategic aircraft assets during red alert conditions — a process that historically depended on manual coordination under extreme time pressure."
      metrics={[
        { value: "35", label: "CCTV feeds monitored live" },
        { value: "22", label: "Autonomous tow robots" },
        { value: "8", label: "Asset priority tiers" },
        { value: "70+", label: "Aircraft managed" },
      ]}
      tech={[
        { name: "Python",     icon: "devicon-python-plain",     color: "#3776AB" },
        { name: "Django",     icon: "devicon-django-plain",     color: "#092E20" },
        { name: "React",      icon: "devicon-react-original",   color: "#61DAFB" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
        { name: "OpenCV",     icon: "devicon-opencv-plain",     color: "#5C3EE8" },
        { name: "WebSocket",  icon: "devicon-nodejs-plain",     color: "#339933" },
        { name: "Docker",     icon: "devicon-docker-plain",     color: "#2496ED" },
        { name: "Linux",      icon: "devicon-linux-plain",      color: "#FCC624" },
      ]}
      features={[
        { icon: "🎯", title: "Real-Time Threat Detection",     detail: "YOLOv8 + OpenCV dual-stage pipeline processes 35 simultaneous CCTV feeds to identify fires, explosions, and route blockages with near-zero false positives." },
        { icon: "🧠", title: "8-Tier Priority Framework",      detail: "Structured asset priority system ensures B-2 Spirit stealth bombers are evacuated before UH-60 Blackhawks, reflecting strategic value and replacement cost." },
        { icon: "🗺️", title: "Dynamic Pathfinding",            detail: "A* and Dijkstra algorithms compute and continuously recalculate safe evacuation routes as the threat landscape evolves in real time." },
        { icon: "🤖", title: "Autonomous Robot Fleet",         detail: "22 NavMesh-based tow robots operate as fully independent agents executing dispatch, attachment, tow transit, gate queue, and bunker delivery cycles." },
        { icon: "📡", title: "Live Command Dashboard",         detail: "React frontend receives real-time WebSocket updates displaying mission progress, robot fleet status, asset priority queue, and on-demand CCTV feeds." },
        { icon: "🔒", title: "LAN-Bound Security",             detail: "Fully self-contained authentication operates over local area network only no external internet dependency, immune to remote network attacks." },
      ]}
      challenge="Manual aircraft evacuation relies on human crews who cannot monitor a large airbase simultaneously, make prioritisation errors under stress, and cannot replan blocked routes fast enough."
      solution="A unified AI platform combining computer vision threat detection, rule-based asset prioritisation, autonomous tow robots, and a real-time WebSocket command dashboard."
      outcome="Eliminated the human bottleneck in airbase evacuation continuous perception, instant prioritisation, and dynamic route recalculation with no manual intervention required."
    />
  );
}

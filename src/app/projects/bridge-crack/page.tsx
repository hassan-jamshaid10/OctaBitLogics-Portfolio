"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function BridgeCrackPage() {
  return (
    <ProjectDetailPage
      category="Computer Vision"
      name="Bridge Crack AI"
      tagline="Automated drone-based bridge crack detection with dual-stage deep learning and real-time severity assessment."
      heroImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=90&auto=format&fit=crop"
      description="An end-to-end automated bridge inspection system that eliminates the safety hazards, cost, and subjectivity of traditional manual surveys. A Unity 3D simulation environment controls a virtual drone traversing a bridge structure, streaming frames to a FastAPI backend. A lightweight TFLite classifier acts as a gatekeeper, passing only crack-positive frames to a PyTorch U-Net for pixel-level segmentation. Severity is scored in real time and a comprehensive PDF inspection report is generated automatically at mission end."
      metrics={[
        { value: "Dual",   label: "Stage detection pipeline" },
        { value: "3",      label: "Severity classifications" },
        { value: "<2s",    label: "Frame analysis cycle time" },
        { value: "Auto",   label: "PDF mission report generation" },
      ]}
      tech={[
        { name: "Unity 3D",   icon: "devicon-unity-original",          color: "#000000" },
        { name: "C#",         icon: "devicon-csharp-plain",            color: "#239120" },
        { name: "PyTorch",    icon: "devicon-pytorch-original",        color: "#EE4C2C" },
        { name: "TFLite",     icon: "devicon-tensorflow-original",     color: "#FF6F00" },
        { name: "FastAPI",    icon: "devicon-fastapi-plain",           color: "#009688" },
        { name: "OpenCV",     icon: "devicon-opencv-plain",            color: "#5C3EE8" },
        { name: "Python",     icon: "devicon-python-plain",            color: "#3776AB" },
        { name: "NumPy",      icon: "devicon-numpy-original",          color: "#013243" },
      ]}
      features={[
        { icon: "🚁", title: "3D Drone Simulation",          detail: "Unity 3D Engine simulates realistic drone physics, bridge geometry, lighting, and surface textures. C# scripts handle flight controls, camera capture, and HTTP communication with the Python backend at configurable frame intervals." },
        { icon: "⚡", title: "TFLite Gatekeeper Classifier", detail: "A lightweight TFLite model performs fast binary classification on every incoming frame. Frames classified as crack-free are discarded immediately, avoiding the compute cost of segmentation on healthy concrete." },
        { icon: "🔬", title: "U-Net Pixel Segmentation",     detail: "Crack-positive frames are passed to a ResNet34-backbone U-Net model. The network produces a binary mask highlighting the exact pixels where cracks are detected, enabling sub-millimetre localisation." },
        { icon: "📊", title: "Severity Scoring Engine",       detail: "Post-processing calculates the ratio of crack pixels to total frame pixels. Results are classified as Minor under 2%, Moderate between 2% and 5%, or Severe above 5%, each with a recommended maintenance action." },
        { icon: "🖥️", title: "Real-Time UI Overlay",          detail: "Processed frames return to the Unity dashboard as red-highlighted overlays with metadata including confidence score, severity level, and GPS-equivalent drone telemetry — updating the operator view in real time." },
        { icon: "📄", title: "Automated PDF Reports",         detail: "ReportLab compiles a full mission summary at session end, including total frames analysed, crack frame count, severity distribution, drone flight path, and side-by-side original and annotated image pairs." },
      ]}
      challenge="Traditional bridge inspections require scaffolding, lane closures, and specialist engineers working at height — creating safety risks, high costs, and subjective assessments. Even drone-assisted surveys still require human review of hours of footage, creating a time and accuracy bottleneck."
      solution="A simulation-first automated inspection pipeline where a drone streams frames to a FastAPI backend running a dual-stage deep learning system. The TFLite gatekeeper filters healthy frames efficiently, while the U-Net segmentation model performs precise crack localisation only when needed, with automated severity scoring and report generation eliminating manual review entirely."
      outcome="The system demonstrates fully automated crack detection with real-time severity classification, removing human subjectivity from structural assessment. The dual-stage architecture reduces unnecessary model inference, and the automated PDF output gives engineers a structured, auditable inspection record without manual documentation effort."
    />
  );
}

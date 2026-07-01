"use client";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export default function SportTekPage() {
  return (
    <ProjectDetailPage
      category="Mobile Platform"
      name="SportTek"
      tagline="Dual-sided sports venue booking platform eliminating WhatsApp chaos for players and owners."
      heroImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=90&auto=format&fit=crop"
      description="SportTek is a mobile-first booking platform designed specifically for the Pakistani market, bridging the gap between sports enthusiasts and venue owners in real time. It replaces chaotic WhatsApp-based bookings with a seamless two-sided marketplace instant slot discovery for players and a full management dashboard for owners."
      metrics={[
        { value: "2-sided", label: "Marketplace model" },
        { value: "<60s",    label: "Booking to payment" },
        { value: "0",       label: "Double bookings" },
        { value: "Live",    label: "Real-time sync" },
      ]}
      tech={[
        { name: "React Native", icon: "devicon-react-original",   color: "#61DAFB" },
        { name: "Node.js",      icon: "devicon-nodejs-plain",     color: "#339933" },
        { name: "MongoDB",      icon: "devicon-mongodb-plain",    color: "#47A248" },
        { name: "Express",      icon: "devicon-express-original", color: "#000000" },
        { name: "Firebase",     icon: "devicon-firebase-plain",   color: "#FFCA28" },
        { name: "Stripe",       icon: "devicon-javascript-plain", color: "#6772E5" },
        { name: "Redux",        icon: "devicon-redux-original",   color: "#764ABC" },
        { name: "Google Maps",  icon: "devicon-google-plain",     color: "#4285F4" },
      ]}
      features={[
        { icon: "🏟️", title: "Instant Slot Discovery",      detail: "Players browse nearby courts filtered by location, sport type, date, and price seeing real-time availability across all registered venues." },
        { icon: "💳", title: "In-App Payments",             detail: "Integrated fintech payment flow allows players to book and pay in under 60 seconds. Slots lock globally on payment confirmation." },
        { icon: "📅", title: "Owner Command Dashboard",     detail: "Color-coded timeline separates app bookings from manual walk-ins with live countdown timers for active sessions and automated reminders." },
        { icon: "🔔", title: "Real-Time Sync",              detail: "WebSocket-backed architecture ensures owner alerts fire within milliseconds of a booking zero polling, zero refresh required." },
        { icon: "🗺️", title: "Location-Based Matching",     detail: "Geo-queries surface the closest available venues first. Players can filter by radius, sport type, surface type, and price per hour." },
        { icon: "🎟️", title: "Promo & Loyalty Engine",      detail: "Venue owners create promo codes and loyalty rewards directly in the dashboard. Players apply codes at checkout with instant discount validation." },
      ]}
      challenge="Sports venue bookings in Pakistan happen over WhatsApp, leading to double bookings, miscommunication, no-shows, and zero payment security for venue owners."
      solution="A dual-sided mobile marketplace where players discover and instantly pay for slots, while owners manage their full schedule through a real-time dashboard with automatic payment confirmation."
      outcome="Eliminated double bookings entirely. Owners report significantly reduced admin overhead and increased advance bookings. Players complete the full book-and-pay flow in under 60 seconds."
    />
  );
}

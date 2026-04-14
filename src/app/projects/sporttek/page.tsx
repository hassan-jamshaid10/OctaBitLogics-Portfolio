"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";

export default function SportTekCaseStudy() {
  return (
    <>
      <Navbar activeSection="projects" />

      <main className="cs-page">
        <style>{`
          .cs-page {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            overflow-x: hidden;
            background: #ffffff;
          }

          /* ── TOP TONE: DARK HERO ── */
          .cs-hero {
            position: relative;
            background: linear-gradient(135deg, #0f1c3f 0%, #080d1e 45%, #03060e 100%);
            padding: 12rem 2rem 6rem;
            color: #ffffff;
          }
          .cs-hero::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at top, rgba(59,173,176,0.15) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
          }

          .cs-hero-inner {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            text-align: center;
          }

          .cs-back-link {
            position: absolute;
            top: -4rem;
            left: 0;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #a7fff9;
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.1em;
            transition: color 0.2s, transform 0.2s;
            background: rgba(255,255,255,0.05);
            padding: 8px 16px;
            border-radius: 100px;
            border: 1px solid rgba(167,255,249,0.3);
            backdrop-filter: blur(10px);
          }
          .cs-back-link:hover {
            color: #ffffff;
            border-color: #ffffff;
            transform: translateX(-4px);
            background: rgba(255,255,255,0.1);
          }

          .cs-category {
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            color: #a7fff9;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            display: inline-block;
          }

          .cs-title {
            font-family: 'Oxanium', monospace;
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 900;
            color: #ffffff;
            line-height: 1.1;
            margin-bottom: 1rem;
          }

          .cs-subtitle {
            font-size: 1.4rem;
            color: rgba(255,255,255,0.7);
            font-weight: 300;
          }

          .cs-meta-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            background: rgba(255,255,255,0.03);
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            text-align: left;
            backdrop-filter: blur(10px);
          }

          .meta-item h4 {
            font-family: 'Oxanium', monospace;
            font-size: 0.8rem;
            color: #a7fff9;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
          }

          .meta-item p {
            font-size: 1rem;
            color: #ffffff;
            font-weight: 600;
          }

          /* ── BOTTOM TONE: LIGHT CONTENT ── */
          .cs-body {
            position: relative;
            background: #ffffff;
            padding: 6rem 2rem 8rem;
            color: #4e6070;
          }
          .cs-body::before {
            content: '';
            position: absolute; inset: 0;
            background-image: radial-gradient(circle, rgba(59,173,176,0.12) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none; z-index: 0;
          }

          .cs-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .cs-section {
            display: block;
            margin-bottom: 5rem;
            padding-left: 2rem;
            border-left: 3px solid rgba(59,173,176,0.25);
          }

          .cs-content h2 {
            font-family: 'Oxanium', monospace;
            font-size: 2.2rem;
            color: #1B2E5E;
            margin-bottom: 1.5rem;
            font-weight: 800;
            line-height: 1.2;
          }

          .cs-content h3 {
            font-family: 'Oxanium', monospace;
            font-size: 1.4rem;
            color: #3BADB0;
            margin-bottom: 1.2rem;
            font-weight: 700;
            margin-top: 3rem;
          }

          .cs-content p {
            font-size: 1.15rem;
            line-height: 1.9;
            margin-bottom: 1.5rem;
            color: #4e6070;
          }

          .cs-content strong {
            color: #1B2E5E;
            font-weight: 700;
          }

          .cs-content ul {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: 2.5rem;
          }

          .cs-content li {
            position: relative;
            padding-left: 1.8rem;
            margin-bottom: 1.2rem;
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4e6070;
          }

          .cs-content li::before {
            content: '>';
            position: absolute;
            left: 0;
            color: #3BADB0;
            font-weight: 900;
            font-family: 'Oxanium', monospace;
            font-size: 1.2rem;
            top: 2px;
          }

          .cs-table {
            width: 100%;
            border-collapse: collapse;
            margin: 3rem 0;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(27,46,94,0.08); border: 1px solid rgba(59,173,176,0.2);
          }

          .cs-table th, .cs-table td {
            padding: 1.2rem;
            border-bottom: 1px solid rgba(59,173,176,0.15);
            text-align: left;
          }
          .cs-table tr:last-child td {
             border-bottom: none;
          }

          .cs-table th {
            background: rgba(59,173,176,0.06);
            font-family: 'Oxanium', monospace;
            color: #1B2E5E;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.05em;
          }
          .cs-table td {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #4e6070;
          }
          .cs-table td:first-child {
             font-family: 'Oxanium', monospace;
             font-weight: 700;
             color: #3BADB0;
          }

          @media (max-width: 768px) {
            .cs-hero { padding: 10rem 1.5rem 4rem; }
            .cs-meta-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
            .cs-body { padding: 4rem 1.5rem 6rem; }
            .cs-section { padding-left: 1rem; border-left-width: 2px; }
            .cs-back-link { top: -3rem; }
          }
        `}</style>

        {/* ── TOP TONE: DARK ── */}
        <header className="cs-hero">
          <BackgroundNightfall />
          <div className="cs-hero-inner">
            <Link href="/projects" className="cs-back-link">
              <ArrowLeft size={16} /> Returns to Projects
            </Link>

            <span className="cs-category">Mobile Platform / FinTech</span>
            <h1 className="cs-title">SportTek</h1>
            <p className="cs-subtitle">Dual Sided Sports Venue Booking Platform</p>

            <div className="cs-meta-grid">
              <div className="meta-item">
                <h4>Domain</h4>
                <p>Sports Venue Marketplace & Real Time Booking</p>
              </div>
              <div className="meta-item">
                <h4>Tech Stack</h4>
                <p>React Native, Node.js, Firebase, Stripe, Google Maps API</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── BOTTOM TONE: LIGHT ── */}
        <section className="cs-body">
          <article className="cs-content">
            <div className="cs-section">
              <h2>1. Executive Summary</h2>
              <p>
                SportTek is a mobile first booking platform designed specifically for the Pakistani sports market, bridging the gap between sports enthusiasts looking for courts and venue owners managing bookings. The platform eliminates the WhatsApp based booking friction that dominates the local market by providing a real time, dual sided marketplace where players can discover, book, and pay for venue slots instantly, while owners gain a full featured management dashboard to control their operations.
              </p>
              <p>
                The system addresses both sides of the marketplace simultaneously. For players, it delivers a seamless discovery and booking experience with real time slot availability, location based search, promo code support, and integrated payments. For venue owners, it provides a dedicated command center with colour coded booking timelines, walk in versus app booking separation, countdown timers, and financial analytics, transforming what was previously a chaotic manual process into a streamlined digital operation.
              </p>
            </div>

            <div className="cs-section">
              <h2>2. Problem Statement</h2>
              <p>
                In Pakistan, the sports venue booking experience is almost entirely manual. Players discover courts through word of mouth or social media, negotiate availability through WhatsApp messages, and confirm bookings with a phone call or in person visit. Venue owners manage their slot calendars through notebooks, spreadsheets, or mental tracking. This ecosystem creates three fundamental problems:
              </p>
              <ul>
                <li><strong>Discovery friction:</strong> Players have no centralised way to find available courts near them. Discovering a new venue requires personal referrals, social media posts, or physically driving to locations. There is no real time visibility into which courts are available, at what times, or at what price, forcing players to make multiple calls before securing a slot.</li>
                <li><strong>Double booking and no shows:</strong> Without a synchronised booking system, venue owners frequently deal with conflicting reservations. A slot confirmed via WhatsApp to one player may be simultaneously offered to another through a phone call, creating disputes, lost revenue, and customer frustration. No show rates are high because there is no upfront payment commitment.</li>
                <li><strong>Revenue leakage for venue owners:</strong> Manual tracking makes it impossible for owners to understand their true utilisation rates, peak demand windows, or revenue per court. Promotional pricing, off peak discounts, and walk in versus scheduled booking analysis are nonexistent, leaving significant revenue optimisation on the table.</li>
              </ul>
              <p>SportTek addresses all three constraints through a unified marketplace with real time slot synchronisation, upfront payment commitment, and a full analytics dashboard that gives venue owners the data they need to maximise utilisation and revenue.</p>
            </div>

            <div className="cs-section">
              <h2>3. System Architecture</h2>
              <p>
                SportTek is architected as a dual sided mobile platform with shared backend infrastructure that maintains real time consistency between the player experience and the owner management interface. The system is designed for the Pakistani market realities including variable network connectivity, diverse payment methods, and the need for both digital and walk in booking management.
              </p>

              <h3>Player Mobile Application</h3>
              <p>
                The player facing app is built with React Native, delivering a native experience on both iOS and Android from a single codebase. The interface centres on a location aware discovery experience: players see nearby courts on an interactive map powered by Google Maps API, with real time slot availability overlaid on each venue card. Filtering by sport type, distance, price range, and amenities enables rapid discovery. The booking flow is optimised for speed, a player can go from opening the app to confirmed booking in under 60 seconds through a streamlined three tap checkout with saved payment methods.
              </p>

              <h3>Owner Dashboard</h3>
              <p>
                The venue owner interface provides a comprehensive command center for managing court operations. The centrepiece is a colour coded timeline view that separates app bookings (highlighted in teal) from manual walk in entries (highlighted in amber), giving owners clear visibility into their booking mix. Countdown timers on active slots show remaining session time, with automated alerts when sessions are about to expire. The dashboard includes financial summaries, utilisation heat maps, and promotional campaign management tools, transforming venue management from guesswork into a data driven operation.
              </p>

              <h3>Real Time Synchronisation Engine</h3>
              <p>
                Firebase Realtime Database powers the slot synchronisation layer, ensuring that when a player books a slot, it locks globally within milliseconds. This eliminates the double booking problem entirely. The same real time channel pushes instant notifications to venue owners when a booking is placed, enabling them to prepare the court without delay. Conflict resolution logic handles edge cases such as simultaneous booking attempts for the last available slot, ensuring exactly one booking succeeds while the other receives an immediate alternative suggestion.
              </p>

              <h3>Payment Infrastructure</h3>
              <p>
                Stripe integration handles secure payment processing with support for credit cards, debit cards, and wallet based payments. The platform implements a hold and capture model: payment is authorised at booking time but only captured after the session is confirmed by the venue, protecting both players and owners. Refund automation handles cancellations within the defined policy window, and owner payouts are settled on a configurable schedule with full transaction transparency through the dashboard.
              </p>

              <h3>Backend & Data Layer</h3>
              <p>
                Node.js serves as the API layer, managing user authentication, booking logic, payment orchestration, and notification dispatch. Firebase handles real time data synchronisation and push notifications, while persistent data including user profiles, venue configurations, booking history, and financial records are stored with appropriate indexing for efficient querying. The backend exposes RESTful endpoints for the mobile clients and WebSocket connections for real time operational updates to the owner dashboard.
              </p>
            </div>

            <div className="cs-section">
              <h2>4. Key Capabilities</h2>
              <ul>
                <li><strong>Location Based Discovery:</strong> Google Maps integration with real time venue cards showing live slot availability, pricing, sport types, and distance, enabling players to find and book courts in seconds.</li>
                <li><strong>Instant Real Time Booking:</strong> Firebase powered slot synchronisation locks availability globally within milliseconds of a booking, completely eliminating double bookings and reservation conflicts.</li>
                <li><strong>Integrated Payments:</strong> Stripe payment processing with hold and capture model, automated refunds, promo code support, and scheduled owner payouts with full transaction transparency.</li>
                <li><strong>Owner Command Center:</strong> Colour coded booking timeline separating app bookings from walk ins, countdown timers for active sessions, and automated alerts for session transitions.</li>
                <li><strong>Smart Promo Engine:</strong> Venue owners can create targeted promotional campaigns with off peak discounts, first time user offers, and loyalty based pricing, all configurable through the dashboard.</li>
                <li><strong>Walk In Management:</strong> Owners can manually log walk in bookings directly on the timeline, ensuring the digital calendar always reflects true court utilisation regardless of booking channel.</li>
                <li><strong>Utilisation Analytics:</strong> Heat maps showing peak demand windows, court by court utilisation rates, revenue per slot analysis, and booking channel breakdown to enable data driven pricing decisions.</li>
                <li><strong>Push Notification System:</strong> Automated notifications for booking confirmations, session reminders, cancellation alerts, and promotional offers for both players and venue owners.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>5. Dual Sided User Flows</h2>
              <p>
                SportTek operates as a true dual sided marketplace where both the player experience and the owner experience are treated as first class products. The following table outlines the key user flows for each side of the platform.
              </p>

              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Flow</th>
                    <th>Player Experience</th>
                    <th>Owner Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Discovery</td>
                    <td>Map based venue search with filters for sport, distance, price, and availability</td>
                    <td>Venue profile setup with photos, amenities, court specs, and operating hours</td>
                  </tr>
                  <tr>
                    <td>Booking</td>
                    <td>Three tap checkout: select slot, confirm details, pay. Under 60 seconds end to end</td>
                    <td>Real time notification of new booking with player details and session countdown</td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td>Secure card or wallet payment with hold and capture protection and automated refunds</td>
                    <td>Scheduled payouts with per transaction breakdown and revenue dashboard</td>
                  </tr>
                  <tr>
                    <td>Management</td>
                    <td>Booking history, favourite venues, upcoming sessions, and cancellation management</td>
                    <td>Timeline view with colour coded bookings, walk in logging, and slot blocking</td>
                  </tr>
                  <tr>
                    <td>Analytics</td>
                    <td>Personal play history, spending summary, and loyalty rewards tracking</td>
                    <td>Utilisation heat maps, revenue trends, booking channel mix, and peak demand analysis</td>
                  </tr>
                  <tr>
                    <td>Engagement</td>
                    <td>Promo codes, first time discounts, and push notifications for nearby availability</td>
                    <td>Campaign creation tools for off peak promotions and returning customer incentives</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cs-section">
              <h2>6. Market Context & Localisation</h2>
              <p>
                SportTek is purpose built for the Pakistani market, where the sports venue ecosystem operates fundamentally differently from Western counterparts. The platform design and feature set directly reflect the local market realities:
              </p>
              <ul>
                <li><strong>WhatsApp Replacement:</strong> The primary booking channel in Pakistan is WhatsApp messaging. SportTek replaces this unstructured, unreliable process with structured real time booking while maintaining the conversational simplicity that users expect. The booking flow is designed to be faster than typing a WhatsApp message.</li>
                <li><strong>Walk In Coexistence:</strong> Unlike fully digital markets, Pakistani venues see significant walk in traffic. Rather than ignoring this reality, SportTek integrates walk in management directly into the owner timeline, ensuring the system reflects actual operations rather than only digital bookings.</li>
                <li><strong>Network Resilience:</strong> The app is designed for variable network conditions common in many Pakistani cities. Offline capable booking flows, optimistic UI updates, and background sync ensure a smooth experience even on slow or intermittent connections.</li>
                <li><strong>Payment Flexibility:</strong> While Stripe handles digital payments, the platform accommodates the cash heavy Pakistani market by allowing owners to mark walk in bookings as cash settled, maintaining financial accuracy across all payment channels.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>7. Security & Trust</h2>
              <p>
                As a marketplace handling financial transactions and personal data, SportTek implements comprehensive security measures across both sides of the platform. All payment data is processed through Stripe PCI compliant infrastructure, ensuring that card details never touch the SportTek servers directly. User authentication uses Firebase Authentication with support for phone number verification, a critical feature for the Pakistani market where email based authentication has lower adoption.
              </p>
              <p>
                Venue verification ensures that only legitimate businesses can list on the platform. A manual review process validates business registration, venue photos, and operational details before a listing goes live. Player reviews and ratings provide ongoing quality signals, with automated alerts for venues that fall below quality thresholds. All data transmission is encrypted with TLS, and personal data is handled in compliance with applicable data protection requirements.
              </p>
            </div>

            <div className="cs-section">
              <h2>8. Conclusion</h2>
              <p>
                SportTek represents a comprehensive solution to the fragmented sports venue booking experience in Pakistan. By building a true dual sided marketplace that treats both players and venue owners as first class users, the platform addresses the entire ecosystem rather than optimising for one side at the expense of the other. The combination of real time slot synchronisation, integrated payments, and operational analytics transforms what was previously a manual, error prone process into a seamless digital experience.
              </p>
              <p>
                The architecture is designed for the specific realities of the Pakistani market, from walk in coexistence and cash settlement support to network resilient mobile experiences and phone based authentication. SportTek demonstrates that marketplace platforms can be built to serve emerging market needs without compromising on the technical sophistication and user experience quality expected of modern digital products.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

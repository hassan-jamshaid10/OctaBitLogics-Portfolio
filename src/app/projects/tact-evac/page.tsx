"use client";

import Navbar from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundNightfall from "../../../components/BackgroundNightfall";

export default function TactEvacCaseStudy() {
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

            <span className="cs-category">Defence Technology / AI Systems</span>
            <h1 className="cs-title">TACT EVAC</h1>
            <p className="cs-subtitle">Tactical Airbase Evacuation System</p>

            <div className="cs-meta-grid">
              <div className="meta-item">
                <h4>Domain</h4>
                <p>Autonomous Evacuation Management</p>
              </div>
              <div className="meta-item">
                <h4>Tech Stack</h4>
                <p>YOLOv8, OpenCV, Django, React, PostgreSQL/PostGIS</p>
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
                TACT EVAC is a fully integrated intelligent evacuation management system designed for high value military airbase environments. The system automates the detection, prioritisation, and physical relocation of strategic aircraft assets during red alert conditions, a process that has historically depended on manual human coordination under extreme time pressure and operational risk.
              </p>
              <p>
                The platform combines real time computer vision threat detection, intelligent asset prioritisation, autonomous pathfinding, and live operational monitoring into a single cohesive system. TACT EVAC eliminates the delay and danger of human led airbase evacuation by providing continuous perception, intelligent prioritisation, and dynamic replanning, securing strategic assets before threats escalate.
              </p>
            </div>

            <div className="cs-section">
              <h2>2. Problem Statement</h2>
              <p>
                In conventional airbase operations, the evacuation of high value aircraft following a red alert is a manual, crew dependent process. Ground personnel must identify active threats across a large operational area, determine which assets face the greatest risk, coordinate tow vehicle assignments, and navigate safe routes simultaneously and under extreme time pressure.
              </p>
              <p>This approach is fundamentally limited by three critical constraints:</p>
              <ul>
                <li><strong>Perceptual limitations:</strong> Human crews cannot reliably monitor every area of a large airbase simultaneously. Fires, explosions, and structural blockages that emerge in peripheral zones are frequently detected late or not at all during the critical window.</li>
                <li><strong>Prioritisation errors:</strong> Without a formal decision framework, evacuation order is determined ad hoc. High value strategic assets may be deprioritised in favour of physically accessible ones, resulting in avoidable losses.</li>
                <li><strong>Route rigidity:</strong> Pre planned evacuation routes assume static conditions. As new damage appears and routes become impassable, human replanning is slow and prone to error under stress.</li>
              </ul>
              <p>TACT EVAC addresses all three constraints through continuous automated perception, a structured 8 tier asset priority system, and dynamic pathfinding using A Star and Dijkstra algorithms, recalculating safe routes in real time as the operational environment changes.</p>
            </div>

            <div className="cs-section">
              <h2>3. System Architecture</h2>
              <p>
                TACT EVAC is structured as a layered system in which each component operates independently and communicates through defined interfaces. This separation of concerns ensures that individual subsystems can be updated, tested, and scaled without disrupting the broader platform.
              </p>

              <h3>Operational Environment Logic</h3>
              <p>
                The airbase environment encompasses runways, dual hangar complexes, ATC towers, parameter fencing, air defence installations, fuel storage, and 12 underground bunkers distributed across all four sides of the base. The system tracks a fleet of over 70 aircraft spanning eight asset classes: B-2 Spirit, Boeing E-3A AWACS, B-1 Lancer, B-52 Stratofortress, F-35 Lightning II, FA-18 Hornet, V-22 Osprey, and UH-60 Blackhawk helicopters.
              </p>
              <p>
                A fleet of 22 autonomous tow robots is distributed across the base at strategic staging positions. Each robot operates as an independent agent, capable of navigating the airbase terrain, avoiding buildings and other robots, and executing multi phase tow missions from initial approach through bunker delivery and return.
              </p>

              <h3>Computer Vision Subsystem</h3>
              <p>
                Threat detection is handled by a dual stage computer vision pipeline. In the first stage, YOLOv8 processes live feeds from 35 CCTV cameras distributed across the base to identify fires, explosions, and physical blockages in real time. Given the operational consequence of false positives triggering unnecessary evacuations, a second confirmation stage passes flagged events through OpenCV for geometric and contextual analysis, ensuring that identified threats are genuine before triggering evacuation protocols.
              </p>

              <h3>Intelligence & Decision Layer</h3>
              <p>
                Once a threat is confirmed, the system decision engine determines which assets to evacuate first using an 8 tier priority framework based on strategic value and threat exposure. Pathfinding between asset positions and available bunkers is computed using A Star and Dijkstra algorithms, with route validity continuously reassessed as the threat landscape evolves. The dispatcher enforces side based robot assignment (west robots are directed to west bunkers, east robots to east bunkers) to minimise cross base traversal and reduce collision risk.
              </p>

              <h3>Backend & Data Layer</h3>
              <p>
                The Django backend serves as the central coordination layer, maintaining persistent state for all operational entities (robots, aircraft, bunkers, and active threats). PostgreSQL with PostGIS extensions provides geospatial data storage, enabling efficient proximity queries and route validation against the base layout. All state changes are broadcast in real time to connected clients via WebSocket connections, ensuring that the command dashboard always reflects current operational status without polling.
              </p>

              <h3>Command Dashboard</h3>
              <p>
                The React based frontend provides a full featured command interface for monitoring the evacuation operation in real time. The dashboard displays mission progress, robot fleet status, asset priority queue, bunker fill levels, and an on demand CCTV monitoring panel with feeds from all 35 cameras. The interface is designed for clarity under operational stress, critical status information is color coded, progress is displayed graphically, and all data updates automatically via the WebSocket connection to the backend.
              </p>
            </div>

            <div className="cs-section">
              <h2>4. Key Capabilities</h2>
              <ul>
                <li><strong>Real Time Threat Detection:</strong> YOLOv8 processes 35 simultaneous CCTV feeds to identify fires, explosions, and route blockages as they emerge.</li>
                <li><strong>False Positive Suppression:</strong> OpenCV confirmation stage validates all detections before evacuation protocols are activated, preventing unnecessary disruption.</li>
                <li><strong>8 Tier Asset Priority:</strong> Aircraft are evacuated in strict priority order based on strategic value and replaceability.</li>
                <li><strong>Dynamic Pathfinding:</strong> A Star and Dijkstra algorithms compute optimal routes in real time, recalculating automatically as new obstructions are detected.</li>
                <li><strong>Autonomous Robot Fleet:</strong> 22 NavMesh based tow robots operate independently, each managing full mission cycles from dispatch through delivery and return.</li>
                <li><strong>Collision Avoidance:</strong> Staggered dispatch, minimum separation enforcement, and obstacle avoidance prevent vehicle collisions.</li>
                <li><strong>Live Command Dashboard:</strong> React frontend receives real time operational data via WebSocket, displaying mission stats, robot status, and CCTV feeds on demand.</li>
                <li><strong>Secure Local Authentication:</strong> A fully self contained LAN based authentication system controls access to the platform, operable without external network connectivity.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>5. Asset Priority Framework</h2>
              <p>
                The evacuation priority order is determined by a structured 8 tier framework that reflects the strategic value, production cost, and operational irreplaceability of each asset class. Higher tier assets are assigned available robots first, regardless of their physical proximity to the nearest bunker.
              </p>

              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Asset</th>
                    <th>Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>B-2 Spirit</td>
                    <td>Low observable strategic stealth bomber. Extremely high replacement cost and limited fleet size.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Boeing E-3A AWACS</td>
                    <td>Airborne surveillance and command platform. Loss disrupts theatre wide situational awareness.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>B-1 Lancer</td>
                    <td>Supersonic strategic bomber with significant offensive capability and long range reach.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>B-52 Stratofortress</td>
                    <td>Long range heavy bomber. High strategic value despite relatively large physical footprint.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>F-35 Lightning II</td>
                    <td>5th generation multirole fighter. High unit cost and advanced avionics warrant priority recovery.</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>FA-18 Hornet</td>
                    <td>Carrier capable multirole fighter. Significant operational value in both air and strike roles.</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>V-22 Osprey</td>
                    <td>Tiltrotor transport. High versatility but lower strategic priority than combat aircraft.</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>UH-60 Blackhawk</td>
                    <td>Utility helicopter. Highly capable but most replaceable within the defined asset classes.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cs-section">
              <h2>6. Autonomous Robot Mission Cycle</h2>
              <p>
                Each tow robot operates as a fully autonomous agent executing a structured seven phase mission cycle. The cycle is managed by an internal state machine with no external intervention required once a job is assigned.
              </p>
              <ul>
                <li><strong>Dispatch:</strong> The dispatcher assigns the robot to the highest priority unclaimed aircraft within its operational zone and computes the initial navigation path.</li>
                <li><strong>Approach:</strong> The robot navigates to the aircraft attach point. All obstacles and colliders on the target aircraft are bypassed to allow physical access.</li>
                <li><strong>Attachment:</strong> The robot pauses at the aircraft for a tow bar connection sequence. The aircraft is physically locked to the robot and repositioned behind it in the direction of travel.</li>
                <li><strong>Tow Transit:</strong> The robot tows the aircraft to the assigned bunker gate. The aircraft follows at a fixed tow gap, rotating smoothly to match the direction of travel.</li>
                <li><strong>Gate Queue:</strong> If the bunker gate is occupied, the robot enters a queue and waits at a designated hold position. Gate access is granted sequentially as each delivery is completed.</li>
                <li><strong>Bunker Delivery:</strong> The robot automatically drives the aircraft through the bunker entrance to the designated dock position. The aircraft is parked, marked as evacuated, and the reservation is released.</li>
                <li><strong>Return & Reassignment:</strong> The robot exits the bunker, releases gate access for the next queued robot, and immediately receives its next assignment from the dispatcher.</li>
              </ul>
            </div>

            <div className="cs-section">
              <h2>7. Security Architecture</h2>
              <p>
                Given the sensitive operational context in which TACT EVAC is deployed, security was treated as a foundational requirement rather than an afterthought. The platform incorporates a fully self contained authentication system designed to operate exclusively over a local area network, with no dependency on external identity providers or internet connectivity.
              </p>
              <p>
                This architecture ensures that access to the command dashboard and system controls cannot be compromised through external network attacks. All authentication tokens, session management, and access control logic are handled entirely within the local environment, giving operators complete control over who can interact with the system at any given time.
              </p>
              <p>
                The LAN bound authentication system ensures that TACT EVAC remains fully operational and secure even in network degraded or communications restricted environments, a critical requirement for forward operating base deployments.
              </p>
            </div>

            <div className="cs-section">
              <h2>8. Conclusion</h2>
              <p>
                TACT EVAC represents a comprehensive solution to one of the most time critical and dangerous challenges in airbase operations management. By combining real time computer vision, intelligent decision making, autonomous robotic execution, and live operational monitoring into a unified platform, the system eliminates the human bottleneck in evacuation planning and execution.
              </p>
              <p>
                The architecture is designed from first principles for operational resilience. LAN bound authentication ensures security in degraded network environments, on demand rendering prevents system overload during monitoring, and dynamic pathfinding ensures the system remains effective even as conditions on the ground change rapidly. TACT EVAC demonstrates that the convergence of computer vision, autonomous navigation, and real time data systems can meaningfully reduce both the response time and the human risk associated with airbase emergency operations.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

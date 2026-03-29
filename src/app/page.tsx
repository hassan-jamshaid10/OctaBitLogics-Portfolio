import Image from "next/image";
import styles from './comingsoon.module.css';
export default function Home() {
 return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        {/* Logo Placeholder - Will be replaced with SVG */}
        <div className={styles.logoPlaceholder}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="55" stroke="#00FFF0" strokeWidth="4" fill="#0A0A23" />
            <text x="50%" y="54%" textAnchor="middle" fill="#00FFF0" fontSize="32" fontWeight="bold" fontFamily="Orbitron, sans-serif" dy=".3em">OBL</text>
          </svg>
        </div>
        <h1 className={styles.companyName}>OctaBitLogics</h1>
      </div>
      <h2 className={styles.comingSoon}>Coming Soon</h2>
      <p className={styles.description}>
        We are a futuristic tech company providing cutting-edge IT solutions:
      </p>
      <ul className={styles.services}>
        <li>SaaS Development</li>
        <li>Web & Mobile Apps</li>
        <li>AI & Automation</li>
        <li>Cloud Hosted Services (AWS)</li>
      </ul>
      <div className={styles.profileSection}>
        <h3>Contact & Profile</h3>
        <p>Email: <a href="mailto:info@octabitlogics.com">info@octabitlogics.com</a></p>
        <p>Professional, innovative, and ready to transform your digital future.</p>
      </div>
    </div>
  );
}

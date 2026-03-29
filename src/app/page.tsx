import styles from './comingsoon.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Animated Background Elements */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.scanline}></div>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <svg width="100" height="100" viewBox="0 0 100 100" className={styles.svgLogo}>
              <path d="M50 5 L90 25 V75 L50 95 L10 75 V25 L50 5Z" fill="none" stroke="#00FFF0" strokeWidth="2" />
              <path d="M50 15 L80 30 V70 L50 85 L20 70 V30 L50 15Z" fill="#00FFF022" stroke="#00FFF0" strokeWidth="1" />
              <text x="50%" y="55%" textAnchor="middle" fill="#00FFF0" fontSize="18" fontWeight="bold" className={styles.logoText}>OBL</text>
            </svg>
          </div>
          <h1 className={styles.glitch} data-text="OCTABITLOGICS">OCTABITLOGICS</h1>
        </header>

        <section className={styles.glassCard}>
          <div className={styles.statusBadge}>
            <span className={styles.pulse}></span> SYSTEM: INITIALIZING_V1.0
          </div>
          
          <h2 className={styles.title}>FUTURE <span className={styles.highlight}>DEPLOYING</span></h2>
          
          <p className={styles.subtitle}>
            Architecting the next generation of digital infrastructure.
          </p>

          <div className={styles.capabilities}>
            <div className={styles.capItem}><span>01</span> SaaS</div>
            <div className={styles.capItem}><span>02</span> AI & AUTO</div>
            <div className={styles.capItem}><span>03</span> CLOUD</div>
            <div className={styles.capItem}><span>04</span> APPS</div>
          </div>

          <div className={styles.contactRow}>
            <a href="mailto:info@octabitlogics.com" className={styles.button}>
              ESTABLISH CONNECTION
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© 2026 OCTABITLOGICS // ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    </main>
  );
}
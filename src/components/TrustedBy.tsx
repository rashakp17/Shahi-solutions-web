import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  const partners = [
    { name: 'Acme Corp', logoText: 'ACME' },
    { name: 'Aether Systems', logoText: 'AETHER' },
    { name: 'Fintech Nexus', logoText: 'NEXUS' },
    { name: 'Quantum Cloud', logoText: 'QUANTUM' },
    { name: 'Apex Retail', logoText: 'APEX' },
    { name: 'Vanguard Media', logoText: 'VANGUARD' },
    { name: 'Nova Health', logoText: 'NOVA' },
    { name: 'Helix Labs', logoText: 'HELIX' },
  ];

  return (
    <section className={styles.trustedSection}>
      <div className="container">
        <p className={styles.title}>Trusted by forward-thinking enterprises worldwide</p>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`p1-${index}`} className={styles.partnerLogo}>
                <span className={styles.logoSymbol}>✦</span>
                <span className={styles.logoText}>{partner.logoText}</span>
              </div>
            ))}
            {/* Second set of partners for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`p2-${index}`} className={styles.partnerLogo}>
                <span className={styles.logoSymbol}>✦</span>
                <span className={styles.logoText}>{partner.logoText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

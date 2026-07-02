import styles from './Technologies.module.css';

export default function Technologies() {
  const techs = [
    { name: 'React', color: '#61dafb', desc: 'Frontend UI Library' },
    { name: 'Next.js', color: '#ffffff', desc: 'React Application Framework' },
    { name: 'Node.js', color: '#339933', desc: 'Server Runtime Environment' },
    { name: 'MongoDB', color: '#47a248', desc: 'NoSQL Database Ecosystem' },
    { name: 'AWS', color: '#ff9900', desc: 'Cloud Infrastructure & Hosting' },
    { name: 'Docker', color: '#2496ed', desc: 'Application Containerization' },
    { name: 'Figma', color: '#f24e1e', desc: 'UI/UX Collaborative Prototyping' },
    { name: 'Flutter', color: '#02569b', desc: 'Cross-Platform Mobile SDK' },
    { name: 'Git', color: '#f05032', desc: 'Distributed Version Control' },
  ];

  return (
    <section className={`dark-section ${styles.techSection}`} id="technologies">
      {/* Decorative Glow */}
      <div className={`glow-effect ${styles.glowLeft}`}></div>

      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="badge">Technologies We Use</div>
          <h2 className="section-title">Our Modern Tech Stack</h2>
          <p className="section-subtitle">
            We engineer high-performance systems with cutting-edge, industry-standard technologies to ensure modularity, efficiency, and long-term scalability.
          </p>
        </div>

        <div className={styles.techGrid}>
          {techs.map((tech, index) => (
            <div
              key={index}
              className={styles.techCard}
              style={{ '--hover-color': tech.color } as React.CSSProperties}
            >
              <div className={styles.techIconWrapper}>
                <span className={styles.techSymbol}>✦</span>
              </div>
              <div className={styles.techInfo}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techDesc}>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

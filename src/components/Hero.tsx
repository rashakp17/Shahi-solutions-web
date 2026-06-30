import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TechAnimation from './TechAnimation';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`dark-section ${styles.heroSection}`} id="hero">
      {/* Decorative Glow Elements */}
      <div className={`glow-effect ${styles.glowLeft}`}></div>
      <div className={`glow-effect ${styles.glowRight}`}></div>

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <div className="badge">
            <span>Next-Gen Enterprise Solutions</span>
          </div>
          <h1 className={styles.heroTitle}>
            Empowering Businesses with <span className="gradient-text">Smart Digital Solutions</span>
          </h1>
          <p className={styles.heroDescription}>
            We design, develop, and deliver state-of-the-art web products, custom software, ERP integrations, and mobile applications that drive business agility and exponential growth.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn btn-accent">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              View Our Projects
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.animationWrapper}>
            <TechAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

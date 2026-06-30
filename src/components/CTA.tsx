import { ArrowRight, MessageSquareCode } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={`dark-section ${styles.ctaSection}`} id="cta">
      {/* Glow Effects */}
      <div className={`glow-effect ${styles.glowCenter}`}></div>

      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.iconWrapper}>
            <MessageSquareCode size={36} />
          </div>
          <h2 className={styles.ctaTitle}>
            Ready to Accelerate Your <span className="gradient-text">Digital Transformation?</span>
          </h2>
          <p className={styles.ctaDescription}>
            Partner with Shahi Solutions to design, engineer, and deploy high-performance custom applications, websites, and business automations tailored to your scale.
          </p>
          <div className={styles.ctaActions}>
            <a href="mailto:request.sdec@gmail.com" className="btn btn-accent">
              Let's Build Your Next Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

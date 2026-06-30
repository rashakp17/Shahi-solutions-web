import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, FinCore Systems',
      text: 'Shahi Solutions delivered our custom ledger engine in record time. The code quality, type safety, and security standards exceeded our stringent financial compliance requirements.',
      rating: 5,
      avatarInitials: 'SJ',
    },
    {
      name: 'David Chen',
      role: 'Founder, RetailFlow',
      text: 'Their web development team is top-tier. Our luxury storefront load speed dropped from 4.2s to 0.8s, leading directly to a 24% increase in our checkouts and conversion rates.',
      rating: 5,
      avatarInitials: 'DC',
    },
    {
      name: 'Amanda Ross',
      role: 'Operations Director, LogiCorp',
      text: 'The business automation tools they designed save our tracking department over 30 hours of manual Excel spreadsheets every week. Absolute game changer for our logistics flow.',
      rating: 5,
      avatarInitials: 'AR',
    },
  ];

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="badge">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Read feedback from technology managers and business leaders who scaled operations with Shahi Solutions.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.ratingRow}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-primary)" stroke="var(--color-primary)" />
                ))}
              </div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.clientProfile}>
                <div className={styles.avatar}>
                  {t.avatarInitials}
                </div>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{t.name}</h4>
                  <span className={styles.clientRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

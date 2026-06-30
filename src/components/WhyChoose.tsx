import { Users, Sliders, Layers, Zap, Headphones, ShieldCheck } from 'lucide-react';
import styles from './WhyChoose.module.css';

export default function WhyChoose() {
  const advantages = [
    {
      title: 'Experienced Team',
      description: 'Our senior developers, UI designers, and project managers bring years of expert agency experience to your build.',
      icon: <Users size={24} />,
    },
    {
      title: 'Custom Solutions',
      description: 'No off-the-shelf templates. We build bespoke software architectures custom-tailored to your exact business needs.',
      icon: <Sliders size={24} />,
    },
    {
      title: 'Scalable Technology',
      description: 'We construct high-performance systems (React, Node, Cloud Native) designed to seamlessly scale with your traffic growth.',
      icon: <Layers size={24} />,
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development methodologies and optimized code deployment pipelines ensure your product launches on schedule.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Dedicated Support',
      description: 'Our responsive technical support team is always available to handle ongoing maintenance, updates, and monitoring.',
      icon: <Headphones size={24} />,
    },
    {
      title: 'Secure & Reliable',
      description: 'Industry-standard encryption, secure API integrations, and robust database backups protect your sensitive information.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className={styles.whySection} id="why-us">
      <div className="container">
        <div className={styles.whyGrid}>
          <div className={styles.stickyCol}>
            <div className="badge">Why Choose Us</div>
            <h2 className="section-title">Engineered for Quality, Built for Scale</h2>
            <p className={styles.description}>
              We do not just compile code—we design comprehensive products that solve operational bottlenecks. Our systematic approach ensures long-term security, flexibility, and peak performance.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>150+</span>
                <span className={styles.statLabel}>Completed Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>99%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>50+</span>
                <span className={styles.statLabel}>Tech Experts</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>99.9%</span>
                <span className={styles.statLabel}>Service Uptime</span>
              </div>
            </div>
          </div>

          <div className={styles.gridCol}>
            {advantages.map((item, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

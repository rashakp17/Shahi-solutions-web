import { Globe, Code2, Smartphone, Palette, Database, Megaphone, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: 'Website Development',
      description: 'Ultra-fast, responsive websites built with Next.js, React, and modern SEO architectures to maximize organic reach.',
      icon: <Globe className={styles.serviceIcon} />,
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored backend ecosystems, APIs, and cloud infrastructure engineered for complex business workloads.',
      icon: <Code2 className={styles.serviceIcon} />,
    },
    {
      title: 'Mobile App Development',
      description: 'High-performance cross-platform iOS and Android applications utilizing React Native and Flutter.',
      icon: <Smartphone className={styles.serviceIcon} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Visually stunning, accessible, and user-centric wireframes and layouts that boost engagement and brand trust.',
      icon: <Palette className={styles.serviceIcon} />,
    },
    {
      title: 'ERP & CRM Solutions',
      description: 'Streamlined operational management software integrations to track real-time analytics, inventory, and sales.',
      icon: <Database className={styles.serviceIcon} />,
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven growth strategies, PPC advertising campaigns, and social marketing to scale your online brand.',
      icon: <Megaphone className={styles.serviceIcon} />,
    },
    {
      title: 'Sales Solutions',
      description: 'Innovative digital funnels and predictive lead interfaces designed to increase customer conversion rates.',
      icon: <TrendingUp className={styles.serviceIcon} />,
    },
    {
      title: 'Business Automation',
      description: 'Robust workflow script architectures and AI agents that eliminate manual error-prone task bottlenecks.',
      icon: <Cpu className={styles.serviceIcon} />,
    },
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="badge">Our Services</div>
          <h2 className="section-title">End-to-End Digital Services</h2>
          <p className="section-subtitle">
            We provide full-spectrum digital transformation solutions, helping companies scale from concept to global enterprise.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#cta" className={styles.cardLink}>
                Learn More <ArrowRight size={16} className={styles.arrow} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

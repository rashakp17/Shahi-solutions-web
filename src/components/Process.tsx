import { Search, PenTool, Terminal, CheckCircle2 } from 'lucide-react';
import styles from './Process.module.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Research & Strategy',
      description: 'We audit your systems, gather team criteria, and map out the exact product scope, system architectures, and wireframes.',
      icon: <Search size={22} />,
    },
    {
      num: '02',
      title: 'Design',
      subtitle: 'UI/UX Prototyping',
      description: 'We translate scope into highly intuitive user flows, modular design languages, and interactive prototypes.',
      icon: <PenTool size={22} />,
    },
    {
      num: '03',
      title: 'Develop',
      subtitle: 'Engineering & QA',
      description: 'Our engineers construct fast, clean, type-safe applications paired with continuous deployment pipelines and testing.',
      icon: <Terminal size={22} />,
    },
    {
      num: '04',
      title: 'Deliver',
      subtitle: 'Launch & Support',
      description: 'We launch on cloud servers (AWS/Vercel) and provide 24/7 technical monitoring, database backups, and feature maintenance.',
      icon: <CheckCircle2 size={22} />,
    },
  ];

  return (
    <section className={styles.processSection} id="process">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="badge">Our Process</div>
          <h2 className="section-title">How We Build Success</h2>
          <p className="section-subtitle">
            A structured, agile development process designed to deliver clean code, secure platform builds, and seamless launches.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.stepsWrapper}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <div className={styles.nodeWrapper}>
                  <div className={styles.stepNode}>
                    {step.icon}
                    <span className={styles.stepBadge}>{step.num}</span>
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <span className={styles.stepSubtitle}>{step.subtitle}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

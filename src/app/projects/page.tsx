import Header from '@/components/Header';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* Projects Hero Header */}
        <section style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--bg-navy)', borderBottom: '1px solid var(--glass-border-dark)', position: 'relative', overflow: 'hidden' }}>
          <div className="glow-effect" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '40vw', height: '40vw', backgroundColor: 'rgba(255, 255, 255, 0.03)', position: 'absolute', filter: 'blur(100px)', opacity: 0.25, borderRadius: '50%', pointerEvents: 'none' }}></div>
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div className="badge">Portfolio</div>
            <h1 className="section-title" style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto 20px auto' }}>
              Building Modern Products for <span className="gradient-text">Forward-Thinking Brands</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Explore our latest enterprise builds, custom web architectures, and mobile products designed for complex operations.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <div>
          <Projects isFeatured={false} />
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

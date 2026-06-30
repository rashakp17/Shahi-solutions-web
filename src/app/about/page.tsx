import Header from '@/components/Header';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* About Hero Header */}
        <section style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--bg-navy)', borderBottom: '1px solid var(--glass-border-dark)' }}>
          <div className="glow-effect" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '40vw', height: '40vw', backgroundColor: 'rgba(255, 255, 255, 0.03)', position: 'absolute', filter: 'blur(100px)', opacity: 0.25, borderRadius: '50%', pointerEvents: 'none' }}></div>
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div className="badge">About Us</div>
            <h1 className="section-title" style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto 20px auto' }}>
              We Engineer the Tools that <span className="gradient-text">Streamline Operations</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Shahi Solutions is a dedicated technical consulting and software engineering firm. We design tailored web, mobile, and cloud ecosystems built to scale.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <div className="animate-on-scroll">
          <WhyChoose />
        </div>

        {/* Process Timeline Section */}
        <div className="animate-on-scroll">
          <Process />
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

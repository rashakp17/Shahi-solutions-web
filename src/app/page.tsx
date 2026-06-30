import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Scroll Reveal Animation Controller */}
      <ScrollReveal />

      {/* Navigation Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trusted By Client Logos */}
        <TrustedBy />

        {/* Core Services Section */}
        <div className="animate-on-scroll">
          <Services />
        </div>

        {/* Technologies Grid */}
        <div className="animate-on-scroll">
          <Technologies />
        </div>

        {/* Client Testimonials Section */}
        <div className="animate-on-scroll">
          <Testimonials />
        </div>

        {/* Action Pitch Container */}
        <div className="animate-on-scroll">
          <CTA />
        </div>
      </main>

      {/* Footer Navigation & Details */}
      <Footer />
    </>
  );
}

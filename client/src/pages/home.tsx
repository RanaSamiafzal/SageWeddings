import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import PackagesSection from "@/components/packages-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navigation />
      <HeroSection />
      <div className="relative">
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <PackagesSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

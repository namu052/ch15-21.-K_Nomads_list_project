import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import FeaturedCitiesSection from "@/components/sections/featured-cities-section";
import FeaturesSection from "@/components/sections/features-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedCitiesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import FeaturedCitiesSection from "@/components/sections/featured-cities-section";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturedCitiesSection />
      <Footer />
    </main>
  );
}

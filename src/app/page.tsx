import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import AboutSection from "./components/AboutSection";
import PhotoBreak from "./components/PhotoBreak";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BioSection />
      <AboutSection />
      <PhotoBreak />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}

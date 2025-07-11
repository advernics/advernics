import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShopifyDashboards from "@/components/ShopifyDashboards";
import SuccessStories from "@/components/SuccessStories";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [isSplineInteractive, setIsSplineInteractive] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation 
        isSplineInteractive={isSplineInteractive}
        onSplineToggle={setIsSplineInteractive}
      />
      <HeroSection isSplineInteractive={isSplineInteractive} />
      <StatsSection />
      <ShopifyDashboards />
      <TestimonialsSection />
      <SuccessStories />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
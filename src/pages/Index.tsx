
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Set document direction to RTL
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    
    // Update the title and meta description
    document.title = "Smart Spoon - وجبات صحية لجسم قوي";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Smart Spoon - خدمة توصيل وجبات صحية عالية البروتين للرياضيين ومحبي اللياقة البدنية"
      );
    }
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, []);
  
  return (
    <div className="min-h-screen rtl">
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <MealGallery />
      <PricingSection />
      <LocationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <StatisticsSection />
      <GallerySection />
      <PricingSection />
      <LocationsSection />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default Index;

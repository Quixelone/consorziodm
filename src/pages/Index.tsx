import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConsortiumModel from "@/components/ConsortiumModel";
import AreasSection from "@/components/AreasSection";
import EsgSection from "@/components/EsgSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ConsortiumModel />
      <AreasSection />
      <EsgSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;

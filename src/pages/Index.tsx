import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <NumbersSection />
      <AboutSection />
      <AreasSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;

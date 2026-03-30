import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import TabsSection from "@/components/TabsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LegalitySection from "@/components/LegalitySection";
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
      <TabsSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <LegalitySection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import AreasSection from "@/components/AreasSection";
import TabsSection from "@/components/TabsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LegalitySection from "@/components/LegalitySection";
import WhistleblowingSection from "@/components/WhistleblowingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <PillarsSection />
      <AboutSection />
      <MissionVisionSection />
      <AreasSection />
      <TabsSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <LegalitySection />
      <WhistleblowingSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;

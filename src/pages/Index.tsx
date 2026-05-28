import { useState } from "react";
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

const Index = () => {
  const [showWhistleblowing, setShowWhistleblowing] = useState(false);

  const handleShowWhistleblowing = () => {
    setShowWhistleblowing(true);
    setTimeout(() => {
      document.getElementById("whistleblowing")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Navbar onShowWhistleblowing={handleShowWhistleblowing} />
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
        <LegalitySection onShowWhistleblowing={handleShowWhistleblowing} />
        <WhistleblowingSection show={showWhistleblowing} />
        <ContactSection />
      </main>
      <Footer onShowWhistleblowing={handleShowWhistleblowing} />
    </>
  );
};

export default Index;

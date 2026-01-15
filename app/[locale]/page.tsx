import { CareerSection } from "@/components/career-section";
import { CommunitySection } from "@/components/community-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { EngineeringSection } from "@/components/engineering-section";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

const Home = () => {
  return (
    <>
      <HeroSection />

      <EngineeringSection />

      <ProjectsSection />

      <TechStackSection />

      <EducationSection />

      <CareerSection />

      <CommunitySection />

      <ContactSection />

      <PhilosophySection />
    </>
  );
};

export default Home;

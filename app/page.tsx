import { CareerSection } from "@/components/career-section";
import { CommunitySection } from "@/components/community-section";
import { ContactSection } from "@/components/contact.-section";
import { EducationSection } from "@/components/education-section";
import { EngineeringSection } from "@/components/engineering-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

const Home = () => {
  return (
    <main>
      <Header />

      <HeroSection />

      <EngineeringSection />

      <ProjectsSection />

      <TechStackSection />

      <EducationSection />

      <CareerSection />

      <CommunitySection />

      <ContactSection />

      <Footer />
    </main>
  );
};

export default Home;

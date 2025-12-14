import { EngineeringSection } from "@/components/engineering-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

const Home = () => {
  return (
    <main>
      <Header />

      <HeroSection />

      <EngineeringSection />

      <ProjectsSection />

      <Footer />
    </main>
  );
};

export default Home;

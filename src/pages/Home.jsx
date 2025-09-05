import { AboutMe } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import DomeGallery from "../components/DomeGallery";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import ASCIIText from "../components/ASCIIText";
import { ThemeToggle } from "../components/ThemeToggle";
import { ArrowDown } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="relative min-h-screen items-center justify-center px-4 hidden sm:flex ">
          <ASCIIText text="welcome" enableWaves={true} sm:asciiFontSize={8} />
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <DomeGallery />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

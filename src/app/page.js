import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologyStrip from "@/components/TechnologyStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111315] text-white selection:bg-[#F47745] selection:text-white relative overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologyStrip />
        <CapabilitiesSection />
        <ProjectsSection />
        <TechStackSection />
        <ProcessSection />
      </main>
    </div>
  );
}

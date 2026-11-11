import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologyStrip from "@/components/TechnologyStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111315] text-white selection:bg-[#F47745] selection:text-white relative overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologyStrip />
        <CapabilitiesSection />
      </main>
    </div>
  );
}

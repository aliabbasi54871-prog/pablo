import HeroSection from "@/components/sections/HeroSection";
import CityBeforeSection from "@/components/sections/CityBeforeSection";
import EscobarRiseSection from "@/components/sections/EscobarRiseSection";
import PeakPowerSection from "@/components/sections/PeakPowerSection";
import DrugWarSection from "@/components/sections/DrugWarSection";
import EscobarEndSection from "@/components/sections/EscobarEndSection";
import MemorySection from "@/components/sections/MemorySection";
import MedellinTodaySection from "@/components/sections/MedellinTodaySection";
import HistoryOrMythSection from "@/components/sections/HistoryOrMythSection";
import FinalSection from "@/components/sections/FinalSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CityBeforeSection />
      <EscobarRiseSection />
      <PeakPowerSection />
      <DrugWarSection />
      <EscobarEndSection />
      <MemorySection />
      <MedellinTodaySection />
      <HistoryOrMythSection />
      <FinalSection />
    </main>
  );
}

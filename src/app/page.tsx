import HeroSection from "@/components/sections/HeroSection";
import CityBeforeSection from "@/components/sections/CityBeforeSection";
import BirthSection from "@/components/sections/BirthSection";
import EmpireSection from "@/components/sections/EmpireSection";
import MoneySection from "@/components/sections/MoneySection";
import LuxurySection from "@/components/sections/LuxurySection";
import PopularHeroSection from "@/components/sections/PopularHeroSection";
import PriceSection from "@/components/sections/PriceSection";
import DeathSection from "@/components/sections/DeathSection";
import MedellinTodaySection from "@/components/sections/MedellinTodaySection";
import NetflixSection from "@/components/sections/NetflixSection";
import FinalSection from "@/components/sections/FinalSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CityBeforeSection />
      <BirthSection />
      <EmpireSection />
      <MoneySection />
      <LuxurySection />
      <PopularHeroSection />
      <PriceSection />
      <DeathSection />
      <MedellinTodaySection />
      <NetflixSection />
      <FinalSection />
    </main>
  );
}

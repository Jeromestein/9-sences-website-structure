import { HeroSection } from "@/components/sections/hero-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { MaisonSection } from "@/components/sections/maison-section"
import { DreamHunterSection } from "@/components/sections/dream-hunter-section"
import { WellhausSection } from "@/components/sections/wellhaus-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <MaisonSection />
      <DreamHunterSection />
      <WellhausSection />
      <FooterSection />
    </main>
  )
}

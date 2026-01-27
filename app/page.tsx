import { HeroSection } from "@/components/sections/hero-section"
import { IntroductionSection } from "@/components/sections/introduction-section"
import { DreamHunterSection } from "@/components/sections/dream-hunter-section"
import { MaisonSection } from "@/components/sections/maison-section"
import { WellhausSection } from "@/components/sections/wellhaus-section"
import { MethodologySection } from "@/components/sections/methodology-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <IntroductionSection />
      <DreamHunterSection />
      <MaisonSection />
      <WellhausSection />
      <MethodologySection />
      <FooterSection />
    </main>
  )
}

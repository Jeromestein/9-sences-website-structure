import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import EcosystemSection from "@/components/home/EcosystemSection"
import MethodologySection from "@/components/home/MethodologySection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-background">
      <HeroSection />
      <IntroSection />
      <EcosystemSection />
      <MethodologySection />
    </main>
  )
}

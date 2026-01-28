import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import EcosystemSection from "@/components/home/EcosystemSection"
import MethodologySection from "@/components/home/MethodologySection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <HeroSection />
      <div
        id="scroll-intro"
        className="h-[200vh] w-full pointer-events-none"
        aria-hidden="true"
      />
      <IntroSection />
      <div
        id="scroll-dream-hunter"
        className="h-[200vh] w-full pointer-events-none"
        aria-hidden="true"
      />
      <EcosystemSection />
      <MethodologySection />
    </main>
  )
}

import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import EcosystemSection from "@/components/home/EcosystemSection"
import MethodologySection from "@/components/home/MethodologySection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <div id="scroll-anchor-hero" aria-hidden="true" className="h-[40vh] w-full opacity-0" />
      <HeroSection />
      <div id="scroll-anchor-intro" aria-hidden="true" className="h-[40vh] w-full opacity-0" />
      <IntroSection />
      <div id="scroll-anchor-ecosystem" aria-hidden="true" className="h-[40vh] w-full opacity-0" />
      <EcosystemSection />
      <div id="scroll-anchor-methodology" aria-hidden="true" className="h-[40vh] w-full opacity-0" />
      <MethodologySection />
    </main>
  )
}

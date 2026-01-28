import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import EcosystemSection from "@/components/home/EcosystemSection"
import MethodologySection from "@/components/home/MethodologySection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <div className="relative min-h-[200vh]">
        <div
          id="scroll-intro-start"
          className="absolute top-0 h-px w-px opacity-0"
          aria-hidden="true"
        />
        <HeroSection />
      </div>
      <div className="relative min-h-[180vh]">
        <div
          id="scroll-dream-hunter"
          className="absolute top-[40%] h-px w-px opacity-0"
          aria-hidden="true"
        />
        <IntroSection />
      </div>
      <div className="relative min-h-[160vh]">
        <EcosystemSection />
      </div>
      <div className="relative min-h-[160vh]">
        <MethodologySection />
      </div>
    </main>
  )
}

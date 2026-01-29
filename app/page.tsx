import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import EcosystemSection from "@/components/home/EcosystemSection"
import MethodologySection from "@/components/home/MethodologySection"
import BackgroundManager from "@/components/BackgroundManager"
import Scene3DHand from "@/components/Scene3D_hand"
import Scene3DParticle from "@/components/Scene3D_particle"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundManager />

      {/* 3D Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3DParticle />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3DHand />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <IntroSection />
        <EcosystemSection />
        <MethodologySection />
      </div>
    </main>
  )
}

import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import AudioControl from "@/components/ui/AudioControl";

export default function WellhausPage() {
    return (
        <main className="min-h-screen bg-void text-offwhite selection:bg-amber selection:text-void overflow-x-hidden font-sans">
            <AudioControl src="/neon-dreams-280430.mp3" />

            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-void/80 to-transparent">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                    <Image
                        src="/logo_transparent_dark_v3_cropped.png"
                        alt="9Sences Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>
                {/* <div className="text-xs tracking-widest uppercase opacity-70 text-amber/80 font-light">
                    Dimension B: The Void
                </div> */}
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Abstract_Bioluminescent_Particles_Video.mp4" />

                {/* Gradient Overlay for "Void" Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void z-0" />

                <div className="max-w-5xl w-full text-center space-y-8 z-10">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-amber/70">
                        Experiential Platform
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl italic leading-tight text-white">
                        Sence 91. <br /> Wellhaus
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-offwhite/80 italic max-w-2xl mx-auto">
                        "Where selection creates value."
                    </p>

                    <div className="pt-32">
                        <button className="px-8 py-3 border border-amber/50 text-amber text-xs uppercase tracking-[0.2em] hover:bg-amber hover:text-void transition-all duration-500 backdrop-blur-sm">
                            Request Access
                        </button>
                    </div>
                </div>

                {/* Subtle Amber Glow / Chiaroscuro */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
            </section>

            {/* Content Section */}
            <section className="relative w-full py-32 px-8 border-t border-amber/10 bg-void">
                <div className="max-w-4xl mx-auto space-y-32 relative z-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="aspect-[4/5] bg-void/50 border border-amber/20 flex items-center justify-center group overflow-hidden relative backdrop-blur-sm">
                            <div className="absolute inset-0 bg-amber/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                            <span className="font-mono text-xs text-amber/60 uppercase tracking-widest z-10">[Deep Void]</span>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif italic text-amber">The Void</h2>
                            <p className="text-lg text-offwhite/80 leading-relaxed font-light">
                                An invite-only space that creates a high-end, private, and social atmosphere. It emphasizes the penetration of light through darkness — a sophisticated interpretation of the "Dark Mode."
                            </p>
                            <ul className="space-y-4 text-offwhite/60 pt-4 border-l border-amber/30 pl-6">
                                <li className="uppercase text-xs tracking-widest">Strategic Collaborations</li>
                                <li className="uppercase text-xs tracking-widest">Pop-up Environments</li>
                                <li className="uppercase text-xs tracking-widest">Long-term Value</li>
                            </ul>
                        </div>
                    </div>

                    {/* Privacy Note */}
                    <div className="text-center space-y-4 pt-16 border-t border-amber/10">
                        <span className="text-2xl text-amber/40">✦</span>
                        <p className="text-sm text-offwhite/50 max-w-md mx-auto">
                            Usage of this space is strictly limited. Photography is restricted to ensure privacy and immersion.
                        </p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 border-t border-amber/10 text-center text-offwhite/40 text-sm bg-void">
                <p>&copy; {new Date().getFullYear()} 9Sences. All rights reserved.</p>
            </footer>
        </main>
    );
}

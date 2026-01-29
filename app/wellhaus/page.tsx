import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function WellhausPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-stone-300 selection:bg-stone-300 selection:text-black overflow-x-hidden">
            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="text-xl font-serif italic hover:opacity-70 transition-opacity text-white">
                    9Sences
                </Link>
                <div className="text-xs tracking-widest uppercase opacity-70 text-white">
                    Dimension B: The Void
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Abstract_Bioluminescent_Particles_Video.mp4" />

                <div className="max-w-5xl w-full text-center space-y-8 z-10">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
                        Experiential Platform
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl italic leading-tight text-white">
                        Sence 91. <br /> Wellhaus
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-neutral-400 italic max-w-2xl mx-auto">
                        "Where selection creates value."
                    </p>

                    <div className="pt-8">
                        <button className="px-8 py-3 border border-neutral-700 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
                            Request Access
                        </button>
                    </div>
                </div>

                {/* Subtle glow / Chiaroscuro */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[150px] opacity-30 mix-blend-screen pointer-events-none"></div>
            </section>

            {/* Content Section */}
            <section className="w-full py-32 px-8 border-t border-neutral-900">
                <div className="max-w-4xl mx-auto space-y-32">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="aspect-[4/5] bg-neutral-900 border border-neutral-800 flex items-center justify-center group overflow-hidden relative">
                            <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest z-10">[Deep Void]</span>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif italic text-white">The Void</h2>
                            <p className="text-lg text-neutral-400 leading-relaxed font-light">
                                An invite-only space that creates a high-end, private, and social atmosphere. It emphasizes the penetration of light through darkness — a sophisticated interpretation of the "Dark Mode."
                            </p>
                            <ul className="space-y-4 text-neutral-500 pt-4 border-l border-neutral-800 pl-6">
                                <li className="uppercase text-xs tracking-widest">Strategic Collaborations</li>
                                <li className="uppercase text-xs tracking-widest">Pop-up Environments</li>
                                <li className="uppercase text-xs tracking-widest">Long-term Value</li>
                            </ul>
                        </div>
                    </div>

                    {/* Privacy Note */}
                    <div className="text-center space-y-4 pt-16 border-t border-neutral-900">
                        <span className="text-2xl text-neutral-600">✦</span>
                        <p className="text-sm text-neutral-500 max-w-md mx-auto">
                            Usage of this space is strictly limited. Photography is restricted to ensure privacy and immersion.
                        </p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 border-t border-neutral-900 text-center text-neutral-600 text-sm">
                <p>&copy; {new Date().getFullYear()} 9Sences. All rights reserved.</p>
            </footer>
        </main>
    );
}

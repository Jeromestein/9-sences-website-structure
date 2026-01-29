import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function MaisonPage() {
    return (
        <main className="min-h-screen bg-[#F0EFEB] text-stone-800 overflow-x-hidden selection:bg-stone-300 selection:text-stone-900">
            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-serif italic hover:opacity-70 transition-opacity">
                    9Sences
                </Link>
                <div className="text-xs tracking-widest uppercase opacity-70">
                    Dimension A: The Sanctuary
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Meditative_Water_Ripples_Video.mp4" opacity={0.8} />

                <div className="max-w-4xl w-full text-center space-y-8 z-10">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
                        Practice & Experience Layer
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl italic leading-tight text-stone-900">
                        SenceMaison
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-stone-600 italic max-w-2xl mx-auto">
                        "Culture made physical."
                    </p>
                </div>

                {/* Background Elements: Soft, Diffused */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-stone-200 rounded-full blur-[100px] opacity-40 mix-blend-overlay pointer-events-none"></div>
            </section>

            {/* Content Section */}
            <section className="w-full py-32 px-8 bg-white/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto space-y-24">
                    {/* Concept */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif italic text-stone-900">The Sanctuary</h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                A physical space for music-led practice, healing, and embodied experiences. SenceMaison is a refuge from the noise, designed to purify and reset.
                            </p>
                        </div>
                        <div className="aspect-[3/4] bg-stone-100 rounded-sm shadow-sm flex items-center justify-center">
                            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">[Soft Light]</span>
                        </div>
                    </div>

                    {/* Offerings */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-serif italic text-center">Offerings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors">
                                <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Practice</h4>
                                <p className="text-stone-600">Music-led movement and meditation.</p>
                            </div>
                            <div className="p-8 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors">
                                <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Healing</h4>
                                <p className="text-stone-600">Sound baths and energy work.</p>
                            </div>
                            <div className="p-8 border border-stone-200 rounded-lg hover:border-stone-400 transition-colors">
                                <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Retreats</h4>
                                <p className="text-stone-600">Immersive global experiences.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 border-t border-stone-200 text-center text-stone-500 text-sm">
                <p>&copy; {new Date().getFullYear()} 9Sences. All rights reserved.</p>
            </footer>
        </main>
    );
}

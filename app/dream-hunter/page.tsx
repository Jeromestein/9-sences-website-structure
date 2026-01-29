import Link from "next/link";

export default function DreamHunterPage() {
    return (
        <main className="min-h-screen bg-neutral-900 text-stone-100 selection:bg-stone-100 selection:text-neutral-900 overflow-x-hidden">
            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="text-xl font-serif italic hover:opacity-70 transition-opacity">
                    9Sences
                </Link>
                <div className="text-xs tracking-widest uppercase opacity-70">
                    Dimension C: The Narrative
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8">
                <div className="max-w-4xl w-full text-center space-y-8 z-10">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                        Cultural IP & Narrative Layer
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl italic leading-tight">
                        Dream Hunter
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-stone-300 italic max-w-2xl mx-auto">
                        "Culture remembered."
                    </p>
                </div>

                {/* Background Elements from Visual Guide: Raw & Refined */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-800 rounded-full blur-[128px] opacity-30 mix-blend-overlay"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-stone-700 rounded-full blur-[128px] opacity-20 mix-blend-overlay"></div>
            </section>

            {/* Content Section */}
            <section className="w-full py-32 px-8">
                <div className="max-w-3xl mx-auto space-y-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif italic">The Archive</h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Dream Hunter serves as the carrier for non-linear narratives, dream symbols, and artistic exploration. It is an archive of the subconscious, a bridge between the raw and the refined.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-[4/5] bg-neutral-800 flex items-center justify-center border border-stone-800">
                            <span className="font-mono text-sm opacity-50">[Dream Archive Vol.1]</span>
                        </div>
                        <div className="aspect-[4/5] bg-neutral-800 flex items-center justify-center border border-stone-800 mt-16">
                            <span className="font-mono text-sm opacity-50">[Art & Storytelling]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 border-t border-stone-800 text-center text-stone-500 text-sm">
                <p>&copy; {new Date().getFullYear()} 9Sences. All rights reserved.</p>
            </footer>
        </main>
    );
}

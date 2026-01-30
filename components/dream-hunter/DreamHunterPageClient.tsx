"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useProgress } from "@react-three/drei";
import DreamHunterHeroScene from "@/components/dream-hunter/DreamHunterHeroScene";
import AudioControl from "@/components/ui/AudioControl";

function LoadingOverlay({ progress }: { progress: number }) {
    const label = useMemo(() => `${Math.round(progress)}%`, [progress]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 text-stone-200">
            <div className="w-full max-w-md px-6 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400">Loading Dream Hunter</p>
                <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-stone-700/60">
                    <div
                        className="h-full bg-amber-200/80 transition-[width] duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="mt-4 text-xs text-stone-500">{label}</p>
            </div>
        </div>
    );
}

export default function DreamHunterPageClient() {
    const { active, progress } = useProgress();
    const [ready, setReady] = useState(false);

    const clampedProgress = useMemo(() => {
        if (Number.isNaN(progress)) return 0;
        return Math.min(100, Math.max(0, progress));
    }, [progress]);

    useEffect(() => {
        if (ready) return;
        if (!active && clampedProgress >= 100) {
            const timer = setTimeout(() => setReady(true), 200);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [active, clampedProgress, ready]);

    return (
        <main className="min-h-screen bg-neutral-900 text-stone-100 selection:bg-stone-100 selection:text-neutral-900 overflow-x-hidden">
            {!ready && <LoadingOverlay progress={clampedProgress} />}

            <div className={`transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
                    <Link href="/" className="hover:opacity-70 transition-opacity">
                        <Image
                            src="/logo_transparent_dark_v3_cropped.png"
                            alt="9Sences Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <div className="text-xs tracking-widest uppercase opacity-70">Dimension C: The Narrative</div>
                </nav>

                <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <DreamHunterHeroScene showOrbit={false} />
                    </div>
                    <div className="absolute inset-0 z-[1] bg-gradient-to-b from-neutral-900/30 via-neutral-900/35 to-neutral-900/85" />
                    <div className="absolute inset-0 z-[2] opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    <div className="max-w-4xl w-full text-center space-y-8 z-10">
                        <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                            Cultural IP & Narrative Layer
                        </span>
                        <h1 className="font-serif text-6xl md:text-8xl italic leading-tight">Dream Hunter</h1>
                        <p className="font-serif text-xl md:text-2xl text-stone-300 italic max-w-2xl mx-auto">
                            "Culture remembered."
                        </p>
                    </div>
                </section>

                <section className="w-full py-32 px-8">
                    <div className="max-w-3xl mx-auto space-y-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif italic">The Archive</h2>
                            <p className="text-lg text-stone-400 leading-relaxed">
                                Dream Hunter serves as the carrier for non-linear narratives, dream symbols, and artistic exploration. It is an
                                archive of the subconscious, a bridge between the raw and the refined.
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

                <footer className="w-full py-12 px-8 border-t border-stone-800 text-center text-stone-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                </footer>
                <AudioControl src="/dark-ambient-soundscape-dreamscape-456642.mp3" />
            </div>
        </main>
    );
}

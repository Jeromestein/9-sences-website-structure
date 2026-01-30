"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useProgress } from "@react-three/drei";
import DreamHunterHeroScene from "@/components/dream-hunter/DreamHunterHeroScene";
import DreamHunterContent from "@/components/dream-hunter/DreamHunterContent";
import AudioControl from "@/components/ui/AudioControl";
import FooterSection from "@/components/FooterSection";

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
        <main
            className="min-h-screen bg-neutral-900 text-stone-100 selection:bg-stone-100 selection:text-neutral-900 overflow-x-hidden"
            style={{
                "--readable-panel-bg": "rgba(6, 6, 6, 0.68)",
                "--readable-panel-border": "rgba(255, 255, 255, 0.08)",
                "--readable-panel-shadow": "rgba(0, 0, 0, 0.45)",
                "--readable-panel-grad": "linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))",
            } as React.CSSProperties}
        >
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
                    {/* <div className="text-xs tracking-widest uppercase opacity-70">Dimension C: The Narrative</div> */}
                </nav>

                <section className="relative w-full h-screen flex items-center justify-center p-2 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <DreamHunterHeroScene showOrbit={false} />
                    </div>
                    <div className="absolute inset-0 z-[1] bg-gradient-to-b from-neutral-900/30 via-neutral-900/35 to-neutral-900/85" />
                    <div className="absolute inset-0 z-[2] opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    <div className="max-w-5xl w-full text-center space-y-2 z-10 px-2 pointer-events-none select-none">
                        {/* <span className="block text-xs font-bold tracking-[0.3em] uppercase text-stone-500/80 mb-4">
                            Dimension C
                        </span> */}
                        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl italic leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] whitespace-nowrap">
                            Dream Hunter
                        </h1>
                    </div>
                </section>

                <DreamHunterContent />

                <FooterSection className="!bg-neutral-900 !border-stone-800 text-stone-500 hover:[&_span]:text-stone-300" />
                <AudioControl src="/dark-ambient-soundscape-dreamscape-456642.mp3" />
            </div>
        </main>
    );
}

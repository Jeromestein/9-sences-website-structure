"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function WellhausLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-offwhite overflow-hidden" id="wellhaus-layer">
            {/* Ambient Amber Glow - Theme B */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="readable-panel w-full space-y-10 z-10 bg-void/40 border-amber/10 backdrop-blur-md">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="block text-xs font-bold tracking-widest uppercase text-amber/70"
                        >
                            Experiential Platform
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="/wellhaus" className="block group">
                                <h2 className="font-serif text-5xl md:text-6xl font-medium text-offwhite/80 group-hover:text-amber transition-colors">
                                    Sence 91.<br />
                                    <span className="italic text-amber transition-colors duration-500 drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]">Wellhaus</span>
                                </h2>
                            </Link>
                        </motion.div>

                        <p className="text-xl font-normal text-offwhite/70 max-w-2xl">
                            An invite-only cultural and experiential platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-sm text-offwhite/60 font-medium">
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber/50 rounded-full"></span>Strategic Collaborations</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber/50 rounded-full"></span>Pop-up Environments</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-amber/50 rounded-full"></span>Long-term Brand Value</li>
                        </ul>

                        <div className="border-l border-amber/30 pl-8">
                            <p className="uppercase tracking-widest text-xs mb-4 text-amber font-bold">Exclusivity</p>
                            <div className="space-y-2 text-lg">
                                <p>Not public-facing.</p>
                                <p>Not ticketed.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div>
                            <p className="font-serif text-2xl md:text-3xl italic text-amber/80">
                                "Where selection creates value."
                            </p>
                            <p className="mt-4 text-xs text-offwhite/50">
                                Based on curated access, cultural positioning, brand & creator alignment.
                            </p>
                        </div>

                        <p className="text-xs text-offwhite/30 md:text-right max-w-xs">
                            Each operates independently, yet compounds value within the 9Sences ecosystem.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

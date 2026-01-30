"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function WellhausLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-offwhite overflow-hidden" id="wellhaus-layer">
            {/* Ambient Amber Glow - Theme B */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-start justify-between relative z-10">
                <div className="readable-panel md:w-1/2 space-y-10 z-10 bg-void/40 border-amber/10 backdrop-blur-md">
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

                        <p className="text-xl font-normal text-offwhite/70 max-w-md">
                            An invite-only cultural and experiential platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-offwhite/60 font-medium">
                        <ul className="space-y-2">
                            <li>Strategic Collaborations</li>
                            <li>Pop-up Environments</li>
                            <li>Long-term Brand Value</li>
                        </ul>

                        <div className="border-l border-amber/30 pl-6">
                            <p className="uppercase tracking-widest text-xs mb-2 text-amber font-bold">Exclusivity</p>
                            <p>Not public-facing.</p>
                            <p>Not ticketed.</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-2"
                    >
                        {/* <button className="px-8 py-4 border border-amber/50 hover:bg-amber hover:text-void transition-all text-sm tracking-widest uppercase font-bold text-amber duration-500">
                            Request Access
                        </button> */}
                        <p className="font-serif text-2xl md:text-3xl italic text-amber/80">
                            "Where selection creates value."
                        </p>
                        <p className="mt-4 text-xs text-offwhite/50">
                            Based on curated access, cultural positioning, brand & creator alignment.
                        </p>
                    </motion.div>
                </div>

                {/* Tagline / Visual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="md:w-1/3 md:ml-auto md:text-right mt-12 md:mt-0"
                >
                    <div className="aspect-[3/4] bg-void/50 border border-amber/20 relative overflow-hidden group backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <span className="font-serif text-3xl md:text-4xl text-center px-6 italic text-amber/80 group-hover:text-amber transition-colors">
                                "Where selection creates value."
                            </span> */}
                        </div>
                        {/* Void Light Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                    <p className="mt-4 text-xs text-offwhite/30">
                        Each operates independently, yet compounds value within the 9Sences ecosystem.
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

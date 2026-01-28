"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function WellhausLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-offwhite overflow-hidden">
            {/* Bio-lume accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bio-lume/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-start justify-between">
                <div className="md:w-1/2 space-y-10 z-10">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="block text-xs font-medium tracking-widest uppercase text-gray-500"
                        >
                            Experiential Platform
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="#" className="block group">
                                <h2 className="font-serif text-5xl md:text-6xl text-offwhite group-hover:text-bio-lume transition-colors duration-500">
                                    Sence 91. <br />
                                    <span className="italic text-gray-500 group-hover:text-white transition-colors">Wellhaus</span>
                                </h2>
                            </Link>
                        </motion.div>

                        <p className="text-xl font-light text-gray-400 max-w-md">
                            An invite-only cultural and experiential platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-500">
                        <ul className="space-y-2">
                            <li>Strategic Collaborations</li>
                            <li>Pop-up Environments</li>
                            <li>Long-term Brand Value</li>
                        </ul>

                        <div className="border-l border-white/10 pl-6">
                            <p className="uppercase tracking-widest text-xs mb-2 text-bio-lume">Exclusivity</p>
                            <p>Not public-facing.</p>
                            <p>Not ticketed.</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-8"
                    >
                        <button className="px-8 py-4 border border-white/20 hover:border-bio-lume hover:bg-bio-lume/10 hover:text-bio-lume transition-all text-sm tracking-widest uppercase">
                            Request Access
                        </button>
                        <p className="mt-4 text-xs text-gray-600">
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
                    <div className="aspect-[3/4] bg-charcoal border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-3xl md:text-4xl text-center px-6 italic text-gray-700 group-hover:text-gray-400 transition-colors">
                                "Where selection creates value."
                            </span>
                        </div>
                        {/* Void Light Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    </div>
                    <p className="mt-4 text-xs text-gray-600">
                        Each operates independently, yet compounds value within the 9Sences ecosystem.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

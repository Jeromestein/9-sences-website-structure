"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function WellhausLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-foreground overflow-hidden">
            {/* Bio-lume accent - might need adjustment for light mode visibility */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bio-lume/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-start justify-between">
                <div className="readable-panel md:w-1/2 space-y-10 z-10">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="block text-xs font-bold tracking-widest uppercase text-muted-foreground"
                        >
                            Experiential Platform
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="/wellhaus" className="block group">
                                <h2 className="font-serif text-5xl md:text-6xl text-foreground font-medium group-hover:text-bio-lume transition-colors duration-500">
                                    Sence 91. <br />
                                    <span className="italic text-muted-foreground group-hover:text-foreground transition-colors">Wellhaus</span>
                                </h2>
                            </Link>
                        </motion.div>

                        <p className="text-xl font-normal text-muted-foreground max-w-md">
                            An invite-only cultural and experiential platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-muted-foreground font-medium">
                        <ul className="space-y-2">
                            <li>Strategic Collaborations</li>
                            <li>Pop-up Environments</li>
                            <li>Long-term Brand Value</li>
                        </ul>

                        <div className="border-l border-foreground/20 pl-6">
                            <p className="uppercase tracking-widest text-xs mb-2 text-primary font-bold">Exclusivity</p>
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
                        <button className="px-8 py-4 border border-foreground/20 hover:border-bio-lume hover:bg-bio-lume/10 hover:text-bio-lume transition-all text-sm tracking-widest uppercase font-bold text-foreground">
                            Request Access
                        </button>
                        <p className="mt-4 text-xs text-muted-foreground">
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
                    <div className="aspect-[3/4] bg-stone border border-foreground/5 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-3xl md:text-4xl text-center px-6 italic text-foreground/80 group-hover:text-foreground transition-colors">
                                "Where selection creates value."
                            </span>
                        </div>
                        {/* Void Light Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone/10 via-transparent to-transparent opacity-80" />
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">
                        Each operates independently, yet compounds value within the 9Sences ecosystem.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

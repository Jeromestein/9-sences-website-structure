"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function DreamHunterLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-foreground overflow-hidden">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 space-y-8"
                >
                    <div className="space-y-4">
                        <span className="block text-xs font-bold tracking-widest uppercase text-muted-foreground">
                            Cultural IP & Narrative Layer
                        </span>
                        <Link href="#" className="block group">
                            <h2 className="font-serif text-5xl md:text-6xl italic text-foreground font-medium group-hover:text-amber transition-colors duration-300">
                                Dream Hunter
                            </h2>
                        </Link>
                    </div>

                    <ul className="space-y-4 text-lg font-medium text-muted-foreground border-l-2 border-foreground/20 pl-6">
                        <li>Dream Archive</li>
                        <li>Art & Storytelling</li>
                        <li>Long-term Cultural IP</li>
                    </ul>

                    <p className="font-serif text-2xl md:text-3xl italic text-muted-foreground/80">
                        "Culture remembered."
                    </p>
                </motion.div>

                {/* Visual / Abstract Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="order-1 md:order-2 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl"
                >
                    {/* Placeholder for "Raw Material / Abstract Art" */}
                    <div className="absolute inset-0 bg-stone/10 flex items-center justify-center opacity-30">
                        <span className="font-mono text-sm">[Raw Material / Texture]</span>
                    </div>
                    {/* Decorative element resembling 'Raw' aesthetic */}
                    <div className="absolute top-10 right-10 w-24 h-24 bg-white mix-blend-overlay opacity-10 rotate-12 blur-xl"></div>
                </motion.div>
            </div>
        </section>
    )
}

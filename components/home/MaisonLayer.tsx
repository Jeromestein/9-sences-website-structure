"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MaisonLayer() {
    return (
        <section className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-stone">
            {/* Background accent to evoke 'Sanctuary/Warmth' */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-transparent pointer-events-none" />

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Visual / Sanctuary Side - Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative aspect-square md:aspect-[4/3] bg-white/50 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center overflow-hidden"
                >
                    <span className="font-mono text-sm text-sage">[Diffused Light / Sanctuary]</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <span className="block text-xs font-medium tracking-widest uppercase text-muted-foreground">
                            Practice & Experience Layer
                        </span>
                        <Link href="#" className="block group">
                            <h2 className="font-serif text-5xl md:text-6xl border-b-2 border-charcoal/80 inline-block pb-2 hover:border-sage transition-colors">
                                SenceMaison
                            </h2>
                        </Link>
                    </div>

                    <ul className="space-y-4 text-lg font-light">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                            Music-led practice
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                            Healing & embodied experiences
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                            Retreats & global collaborations
                        </li>
                    </ul>

                    <p className="font-serif text-2xl md:text-3xl italic text-sage/90">
                        "Culture made physical."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

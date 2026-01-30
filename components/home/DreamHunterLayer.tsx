"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function DreamHunterLayer() {
    return (
        <section id="dream-hunter-section" className="relative w-full py-32 px-8 md:px-12 lg:px-16 text-foreground overflow-hidden">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="readable-panel order-2 md:order-1 space-y-8"
                >
                    <div className="space-y-4">
                        <span className="block text-xs font-bold tracking-widest uppercase text-muted-foreground">
                            Cultural IP & Narrative Layer
                        </span>
                        <Link href="/dream-hunter" className="block group">
                            <h2 className="font-serif text-5xl md:text-6xl italic text-foreground font-medium group-hover:text-amber transition-colors duration-300">
                                Dream Hunter
                            </h2>
                        </Link>
                    </div>

                    <ul className="space-y-4 text-lg font-medium text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>Dream Archive</li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>Art & Storytelling</li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>Long-term Cultural IP</li>
                    </ul>

                    <p className="font-serif text-2xl md:text-3xl italic text-sage/90">
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
                    <Image
                        src="/dream-hunter.png"
                        alt="Dream Hunter"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    )
}

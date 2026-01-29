"use client"

import { motion } from "framer-motion"

export default function MethodologySection() {
    const pillars = [
        {
            title: "Curate",
            description: "We select culture, not scale.",
            delay: 0,
        },
        {
            title: "Build",
            description: "We co-create ventures with long-term relevance.",
            delay: 0.1,
        },
        {
            title: "Compound",
            description: "Value grows through alignment, not exposure.",
            delay: 0.2,
        },
    ]

    return (
        <section className="w-full py-24 md:py-32 px-8 md:px-12 lg:px-16 text-foreground border-t border-white/10">
            <div className="max-w-screen-xl mx-auto space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-4xl text-white font-medium"
                >
                    How We Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: pillar.delay, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-wide text-white">{pillar.title}</h3>
                            <p className="text-gray-200 font-medium text-lg">"{pillar.description}"</p>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest gap-4">
                    <p>© {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

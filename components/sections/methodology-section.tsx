"use client"

import { motion } from "framer-motion"

const pillars = [
    {
        title: "Curate",
        description: "We select culture, not scale.",
    },
    {
        title: "Build",
        description: "We co-create ventures with long-term relevance.",
    },
    {
        title: "Compound",
        description: "Value grows through alignment, not exposure.",
    },
]

export function MethodologySection() {
    return (
        <section className="bg-white py-24 md:py-32 text-black">
            <div className="mx-auto max-w-4xl px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.4em] text-black/60">How We Work</h2>
                </div>

                <div className="grid gap-12 sm:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="font-serif text-xl font-medium tracking-wide">{pillar.title}</h3>
                            <p className="font-light leading-relaxed text-black/70">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

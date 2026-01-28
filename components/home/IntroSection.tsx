"use client"

import { motion } from "framer-motion"

export default function IntroSection() {
    return (
        <section className="w-full min-h-[160vh] py-24 md:py-32 px-8 md:px-12 lg:px-16 text-foreground border-b border-white/10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-2xl md:text-3xl"
                    >
                        What Is 9Sences
                    </motion.h3>
                </div>

                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed space-y-8"
                    >
                        <p>
                            9Sences is an investment and incubation entity focused on building and stewarding culture-led ventures.
                        </p>
                        <p className="text-muted-foreground">
                            We operate at the intersection of narrative, physical practice, and exclusive experience, creating value through depth and resonance rather than scale.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

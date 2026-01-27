"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function IntroductionSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Paralax effect for content
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section ref={sectionRef} className="relative min-h-[50vh] bg-white py-24 md:py-32 text-black">
            <div className="mx-auto max-w-4xl px-6 md:px-12">
                <motion.div style={{ y, opacity }} className="space-y-12">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] text-black/60"
                    >
                        What Is 9Sences
                    </motion.h2>

                    {/* Definition */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                    >
                        <p className="font-serif text-2xl font-light leading-relaxed tracking-tight md:text-4xl">
                            An investment and incubation entity focused on building and stewarding culture-led ventures.
                        </p>
                    </motion.div>

                    {/* Separator */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-px w-full origin-left bg-black/20"
                    />
                </motion.div>
            </div>
        </section>
    )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function AccessInquirySection() {
    return (
        <section className="w-full py-24 md:py-32 border-t border-foreground/10">
            <div className="w-full max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

                    {/* Left Column: Title & Text */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-3xl md:text-4xl text-foreground font-medium"
                        >
                            Access / Inquiry
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <p className="text-xl md:text-2xl text-foreground/80 font-normal leading-relaxed">
                                Some ventures are public.
                            </p>
                            <p className="text-xl md:text-2xl text-foreground/80 font-normal leading-relaxed">
                                Others unfold quietly, by alignment.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Button */}
                    <div className="flex md:justify-end items-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/wellhaus/partner#application"
                                className="px-8 py-4 border border-amber/50 hover:bg-amber hover:text-void transition-all text-sm tracking-widest uppercase font-bold text-amber duration-500 inline-block"
                            >
                                Request Access
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

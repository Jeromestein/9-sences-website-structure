"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-background text-foreground">
            {/* Header / Logo Component could go here, but putting text for now as per minimal requirement */}
            <header className="flex justify-between items-start">
                <h1 className="font-serif text-2xl md:text-3xl tracking-tight">9Sences</h1>
            </header>

            {/* Main Content */}
            <div className="flex flex-col gap-8 max-w-4xl mt-auto mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl font-medium tracking-wide text-muted-foreground uppercase"
                >
                    A Cultural Venture Platform
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
                >
                    Investing in culture-led wellness, creative practices, and experiential ecosystems.
                </motion.h2>
            </div>

            {/* Footer / CTA */}
            <div className="flex justify-between items-end border-t border-foreground/10 pt-6">
                <motion.button
                    onClick={() => {
                        const element = document.getElementById('ecosystem');
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="group flex items-center gap-2 text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
                >
                    Explore the Ecosystem
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </motion.button>
            </div>
        </section>
    )
}

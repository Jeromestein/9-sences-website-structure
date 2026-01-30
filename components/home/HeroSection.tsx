"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden text-foreground">
            {/* Header / Logo */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
                <div className="relative w-36 sm:w-44 md:w-52 lg:w-60 aspect-[816/328]">
                    <Image
                        src="/logo_transparent_light_v3.png"
                        alt="9Sences"
                        fill
                        priority
                        sizes="(min-width: 1024px) 15rem, (min-width: 768px) 13rem, 9rem"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 pointer-events-none">
                <div className="max-w-4xl pointer-events-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl font-bold tracking-wide text-muted-foreground uppercase mb-6"
                    >
                        A Cultural Venture Platform
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground font-medium"
                    >
                        Investing in culture-led wellness, creative practices, and experiential ecosystems.
                    </motion.h2>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center gap-3 text-sm md:text-base font-medium text-foreground/80 uppercase tracking-widest"
                >
                    Scroll to Explore
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </motion.div>
            </div>
        </section>
    )
}

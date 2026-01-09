"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export function DreamHunterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -100])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-offwhite py-32 md:py-48">
      {/* Broken grid layout */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section label - positioned unconventionally */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-0 md:absolute md:right-12 md:top-48"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-charcoal/40">The Artistic Wing</span>
        </motion.div>

        {/* Main title - broken across grid */}
        <div className="relative">
          <motion.h2
            style={{ x: x1 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-serif text-5xl font-light tracking-tight text-charcoal md:text-7xl lg:text-8xl"
          >
            Dream
          </motion.h2>

          <motion.h2
            style={{ x: x2 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="ml-auto w-fit font-serif text-5xl font-light tracking-tight text-charcoal md:mr-24 md:text-7xl lg:text-8xl"
          >
            Hunter
          </motion.h2>
        </div>

        {/* Overlapping image */}
        <motion.div
          style={{ rotate }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto my-16 w-full max-w-md md:-mt-12 md:ml-24 lg:-mt-24"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/abstract-dreamlike-ethereal-portrait-shadow-silhou.jpg"
              alt=""
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </motion.div>

        {/* Description text - offset position */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="ml-auto max-w-lg md:-mt-32 md:mr-12"
        >
          <p className="text-sm font-light leading-loose text-charcoal/70 md:text-base">
            An artistic dimension exploring dreams, symbols, and inner dialogue. Not instructional, not outcome-driven.
            Just pure narrative—a space where the subconscious speaks through visual poetry.
          </p>
        </motion.div>

        {/* Abstract decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute bottom-24 left-0 font-serif text-[20vw] leading-none text-charcoal"
        >
          91
        </motion.div>
      </div>
    </section>
  )
}

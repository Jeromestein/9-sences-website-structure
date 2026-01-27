"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function DreamHunterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="ecosystem" ref={sectionRef} className="relative min-h-screen bg-white py-24 md:py-32 text-black">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Category */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="block mb-8 text-xs uppercase tracking-[0.4em] text-black/60"
        >
          Cultural IP & Narrative Layer
        </motion.span>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 font-serif text-5xl font-light tracking-tight md:text-7xl"
        >
          <a href="#" className="border-b border-blue-600 text-black hover:text-blue-600 transition-colors">
            Dream Hunter
          </a>
        </motion.h2>

        {/* Content Layout */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Key Offerings */}
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 font-light text-black/80"
          >
            <li>Dream Archive</li>
            <li>Art & storytelling</li>
            <li>Long-term cultural IP</li>
          </motion.ul>

          {/* Tagline */}
          <motion.div
            style={{ y }}
            className="flex items-center md:justify-end"
          >
            <p className="font-serif text-2xl italic tracking-wide text-black/60">
              "Culture remembered."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

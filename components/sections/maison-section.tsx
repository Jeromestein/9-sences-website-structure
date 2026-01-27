"use client"

import { motion } from "framer-motion"

const offerings = [
  "Music-led practice",
  "Healing & embodied experiences",
  "Retreats & global collaborations",
]

export function MaisonSection() {
  return (
    <section className="relative min-h-screen bg-[#FAFF00] py-32 md:py-48 text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <div className="mb-24 grid gap-12 md:mb-32 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-black/60">
              Practice & Experience Layer
            </span>
            <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl lg:text-6xl underline decoration-1 underline-offset-8">
              SenceMaison
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-end"
          >
            <p className="text-xl font-serif italic text-black md:text-2xl">
              "Culture made physical."
            </p>
          </motion.div>
        </div>

        {/* Offerings list */}
        <div className="space-y-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="border-b border-black/10 py-6"
            >
              <h3 className="font-sans text-xl font-light tracking-wide md:text-2xl">
                {offering}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

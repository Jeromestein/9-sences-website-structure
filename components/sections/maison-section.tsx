"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const sessions = [
  { id: 1, name: "Sound Healing", time: "60 min", description: "Vibrational frequencies for deep restoration" },
  { id: 2, name: "Breathwork", time: "45 min", description: "Conscious breathing for nervous system regulation" },
  { id: 3, name: "Movement Flow", time: "75 min", description: "Intuitive movement and somatic release" },
  { id: 4, name: "Meditation", time: "30 min", description: "Presence practices for mental clarity" },
]

export function MaisonSection() {
  const [hoveredSession, setHoveredSession] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen bg-stone py-32 md:py-48">
      {/* Sage accent line */}
      <div className="absolute left-0 top-0 h-1 w-24 bg-sage md:w-48" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <div className="mb-24 grid gap-12 md:mb-32 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-charcoal/40">
              The Experience Engine
            </span>
            <h2 className="font-serif text-4xl font-light tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              9Sence
              <br />
              Maison
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-end"
          >
            <p className="text-sm font-light leading-relaxed text-charcoal/70 md:text-base">
              A refined rhythm for elevated living. Curated sessions designed to regulate, restore, and reconnect you to
              your sensory intelligence.
            </p>
          </motion.div>
        </div>

        {/* Sessions list */}
        <div className="space-y-1">
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSession(session.id)}
              onMouseLeave={() => setHoveredSession(null)}
              className="group cursor-pointer border-b border-charcoal/10 py-8 transition-colors duration-500 hover:bg-offwhite/50"
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex flex-1 items-baseline gap-4 md:gap-8">
                  <span className="text-xs text-charcoal/30">0{index + 1}</span>
                  <h3 className="font-serif text-xl font-light text-charcoal transition-all duration-500 group-hover:tracking-wider md:text-2xl lg:text-3xl">
                    {session.name}
                  </h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: hoveredSession === session.id ? 1 : 0,
                    x: hoveredSession === session.id ? 0 : -20,
                  }}
                  transition={{ duration: 0.4 }}
                  className="hidden max-w-xs text-sm font-light text-charcoal/60 md:block"
                >
                  {session.description}
                </motion.p>

                <span className="text-xs uppercase tracking-widest text-charcoal/40">{session.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-4 md:mt-24"
        >
          <button className="border border-charcoal px-8 py-4 text-xs uppercase tracking-[0.25em] text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-offwhite">
            View Sessions
          </button>
          <button className="bg-charcoal px-8 py-4 text-xs uppercase tracking-[0.25em] text-offwhite transition-all duration-500 hover:bg-charcoal/80">
            Reserve a Spot
          </button>
        </motion.div>

        {/* Music presence indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center gap-6 md:mt-32"
        >
          <div className="flex items-end gap-1">
            {[0.4, 0.7, 0.5, 0.8, 0.3, 0.6, 0.9, 0.4].map((height, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [height, 1, height] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                className="w-0.5 origin-bottom bg-sage"
                style={{ height: 24 }}
              />
            ))}
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-charcoal/40">Regulation Music Presence</span>
        </motion.div>
      </div>
    </section>
  )
}

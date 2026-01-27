"use client"

import { motion } from "framer-motion"

export function WellhausSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#FAFF00] py-32 md:py-48 text-black">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl font-light tracking-tight text-black md:text-5xl lg:text-7xl underline decoration-1 underline-offset-8">
            Sence 91. Wellhaus
          </h2>
          <p className="mt-8 text-xl font-light text-black/80 md:text-2xl">
            An invite-only cultural and experiential platform
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left column - Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ul className="space-y-4 font-light text-black/80">
              <li>Strategic collaborations</li>
              <li>Pop-up environments</li>
              <li>Long-term brand value</li>
            </ul>

            <div className="space-y-2 border-l border-black/30 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-black/60">Not public-facing.</p>
              <p className="text-xs uppercase tracking-[0.2em] text-black/60">Not ticketed.</p>
            </div>

            <div className="pt-8">
              <p className="font-serif text-xl italic tracking-wide text-black/60">
                "Where selection creates value."
              </p>
            </div>
          </motion.div>

          {/* Right column - Access request */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border border-black/10 p-8 hover:border-black/30 md:p-12 transition-colors duration-500">
              <h3 className="mb-4 font-serif text-xl font-light text-black md:text-2xl">Request Access</h3>
              <p className="mb-8 text-sm font-light text-black/60">
                Curated access, Cultural positioning, Brand & creator alignment.
              </p>
              <button className="border border-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-500 hover:bg-black hover:text-[#FAFF00]">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="mt-32 border-t border-black/10 pt-8 text-center">
          <p className="text-xs text-black/50">
            Each operates independently, yet compounds value within the 9Sences ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}

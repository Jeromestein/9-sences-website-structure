"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative bg-charcoal py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-offwhite/30">Collaborations</span>
          <div className="grid gap-12 md:grid-cols-2">
            <h3 className="font-serif text-2xl font-light text-offwhite md:text-3xl lg:text-4xl">
              <span className="text-balance">For aligned partners and long-term vision.</span>
            </h3>

            <div className="flex flex-col justify-end">
              <form className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full border-b border-offwhite/20 bg-transparent py-4 text-sm text-offwhite placeholder:text-offwhite/30 focus:border-offwhite/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-offwhite/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-offwhite transition-all duration-500 hover:bg-offwhite hover:text-charcoal"
                >
                  Submit an Inquiry
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-px origin-left bg-offwhite/10"
        />

        {/* Footer bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-serif text-lg tracking-[0.3em] text-offwhite/80"
          >
            9SENCES
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xs font-light tracking-wide text-offwhite/30"
          >
            A Wellness Value System
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xs text-offwhite/20"
          >
            © 2026
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    // Scroll to the Ecosystem section (Section 3).
    // Note: Since we don't have IDs yet, we might need to add IDs to sections or just scroll down.
    // For now, scroll to next screen height is a safe bet, or we can look for the ID 'ecosystem' later.
    const ecosystemSection = document.querySelector("#ecosystem")
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-black">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute left-8 top-8 z-10 md:left-12 md:top-12"
      >
        <span className="font-serif text-lg tracking-[0.3em]">9SENCES</span>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-6 font-serif text-lg tracking-widest md:text-xl"
        >
          A Cultural Venture Platform
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-balance">Investing in culture-led wellness,</span>
          <br />
          <span className="text-balance">creative practices, and</span>
          <br />
          <span className="text-balance">experiential ecosystems.</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          onClick={scrollToNext}
          className="mt-16 border border-black/30 px-8 py-4 text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:bg-black hover:text-white"
        >
          Explore the Ecosystem ↓
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-black/40" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  )
}

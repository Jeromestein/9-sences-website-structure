"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone">
      {/* Background video/image overlay */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/Meditative_Water_Ripples_Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone/30 via-transparent to-stone/80" />
      </div>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute left-8 top-8 z-10 md:left-12 md:top-12"
      >
        <span className="font-serif text-lg tracking-[0.3em] text-charcoal">9SENCES</span>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight text-charcoal md:text-6xl lg:text-7xl"
        >
          <span className="text-balance">Beyond Senses,</span>
          <br />
          <span className="text-balance">Within Presence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-sm font-light leading-relaxed tracking-wide text-charcoal/70 md:text-base"
        >
          A universe shaped by sensory intelligence and lived experience.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          onClick={scrollToNext}
          className="mt-16 border border-charcoal/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-offwhite"
        >
          Enter the Universe
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
          <ArrowDown className="h-5 w-5 text-charcoal/40" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  )
}

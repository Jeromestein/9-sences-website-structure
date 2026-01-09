"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function WellhausSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-void py-32 md:py-48">
      {/* Background video overlay */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/Abstract_Bioluminescent_Particles_Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void/80" />
      </div>
      {/* Ambient glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vh] rounded-full bg-amber blur-[200px]"
        />
      </div>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-offwhite/30">The Private Club</span>
          <h2 className="font-serif text-4xl font-light tracking-tight text-offwhite md:text-5xl lg:text-7xl">
            Sence 91.
            <br />
            <span className="text-amber">Wellhaus</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-sm font-light leading-relaxed text-offwhite/60 md:text-base">
              Strategic collaborations and curated pop-up environments. An exclusive space operating within the
              night-time economy, designed for those who seek experiences beyond the ordinary.
            </p>

            <div className="space-y-4 border-l border-amber/30 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-offwhite/40">Not public-facing.</p>
              <p className="text-xs uppercase tracking-[0.2em] text-offwhite/40">Not ticketed.</p>
              <p className="text-xs uppercase tracking-[0.2em] text-amber/60">Invite only.</p>
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
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative overflow-hidden border border-offwhite/10 p-8 transition-all duration-700 hover:border-amber/30 md:p-12"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  x: isHovered ? "0%" : "-100%",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-amber/5"
              />

              <div className="relative z-10">
                <h3 className="mb-4 font-serif text-xl font-light text-offwhite md:text-2xl">Request Access</h3>
                <p className="mb-8 text-xs font-light text-offwhite/40">
                  For consideration into our private membership circle.
                </p>
                <button className="border border-amber/50 bg-transparent px-8 py-4 text-xs uppercase tracking-[0.25em] text-amber transition-all duration-500 hover:bg-amber hover:text-void">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom ambient visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
                className="h-1 w-1 rounded-full bg-amber"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

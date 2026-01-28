"use client"

import { useScroll } from "framer-motion"
import type { MotionValue } from "framer-motion"
import React, { createContext, useContext, useMemo } from "react"

interface ScrollProgressValue {
  scrollYProgress: MotionValue<number>
}

const ScrollProgressContext = createContext<ScrollProgressValue | null>(null)

export function ScrollProgressProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()

  const value = useMemo(() => ({ scrollYProgress }), [scrollYProgress])

  return <ScrollProgressContext.Provider value={value}>{children}</ScrollProgressContext.Provider>
}

export function useScrollProgress() {
  const context = useContext(ScrollProgressContext)

  if (!context) {
    throw new Error("useScrollProgress must be used within ScrollProgressProvider")
  }

  return context
}

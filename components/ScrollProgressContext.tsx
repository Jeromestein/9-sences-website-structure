"use client";

import React, { createContext, useContext, useMemo } from "react";
import { MotionValue, useScroll } from "framer-motion";

interface ScrollProgressContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollProgressContext = createContext<ScrollProgressContextValue | null>(null);

export function ScrollProgressProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  const value = useMemo(
    () => ({
      scrollYProgress,
    }),
    [scrollYProgress]
  );

  return <ScrollProgressContext.Provider value={value}>{children}</ScrollProgressContext.Provider>;
}

export function useScrollProgress() {
  const context = useContext(ScrollProgressContext);

  if (!context) {
    throw new Error("useScrollProgress must be used within a ScrollProgressProvider.");
  }

  return context;
}

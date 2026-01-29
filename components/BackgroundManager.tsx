"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundManager() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bgRef.current) return;

        const setTheme = (theme: "light" | "dark") => {
            document.body.classList.remove("light-theme", "dark-theme");
            document.body.classList.add(`${theme}-theme`);
        };

        // Initial state: Light theme
        setTheme("light");
        gsap.set(bgRef.current, { backgroundColor: "#F5F5F7" }); // Light gray/whiteish

        // Find the "Dream Hunter" section to trigger the dark theme
        const sections = document.querySelectorAll('section');
        // Assuming the structure from previous context, strictly we should find specific markers.
        // For now, let's implement a generic scroll trigger that changes based on specific sections.
        // Ideally, we look for a section with ID or specific content.

        // Let's look for the dream hunter section by text content if no ID is present, 
        // or just use a generic point (e.g., halfway down or at a specific section index).
        // Based on previous conversations, there is a "Dream Hunter" layer/section.

        // Strategy: 
        // 0% - ~20%: Light
        // Trigger point -> Dark

        // We will try to find the transition point dynamically.
        // For now, let's assume valid sections exist.

        // Setup a scroll trigger for the entire page to handle background interpolation if needed,
        // or simpler: just toggle at a certain section.

        // Let's try to find the specific section "Dream Hunter"
        let triggerElement: HTMLElement | null = document.querySelector<HTMLElement>("#dream-hunter-section");
        if (!triggerElement) {
            sections.forEach(sec => {
                if (sec.textContent?.includes("Dream Hunter")) {
                    triggerElement = sec as HTMLElement;
                }
            });
        }

        if (triggerElement) {
            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top center", // When top of Dream Hunter hits center of viewport
                end: "bottom center",
                onEnter: () => {
                    gsap.to(bgRef.current, { backgroundColor: "#050505", duration: 1.0, ease: "power2.inOut" });
                    setTheme("dark");
                },
                onLeaveBack: () => {
                    gsap.to(bgRef.current, { backgroundColor: "#F5F5F7", duration: 1.0, ease: "power2.inOut" });
                    setTheme("light");
                },
                // markers: true // For debugging
            });
        } else {
            // Fallback if specific section not found: change at 50% scroll or similar?
            // Or just leave it light for now to stay safe.
            console.warn("BackgroundManager: 'Dream Hunter' section not found. Background transition might not work.");
        }

        return () => {
            ScrollTrigger.getAll().forEach((t: globalThis.ScrollTrigger) => t.kill());
            document.body.classList.remove("light-theme", "dark-theme");
        };
    }, []);

    return (
        <div
            ref={bgRef}
            className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
            style={{ backgroundColor: '#F5F5F7' }} // Default light
        />
    );
}

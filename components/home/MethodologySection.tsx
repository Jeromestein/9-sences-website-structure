"use client"

import { motion } from "framer-motion"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function MethodologySection() {
    const pillars = [
        {
            title: "Curate",
            description: "We select culture, not scale.",
            delay: 0,
        },
        {
            title: "Build",
            description: "We co-create ventures with long-term relevance.",
            delay: 0.1,
        },
        {
            title: "Compound",
            description: "Value grows through alignment, not exposure.",
            delay: 0.2,
        },
    ]

    const partners = [
        "Culture-led founders & creators",
        "Wellness & lifestyle brands",
        "Institutions seeking long-term cultural value"
    ]

    return (
        <section className="w-full py-24 md:py-32 border-t border-foreground/10 overflow-hidden">

            <Carousel className="w-full max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16" opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent className="-ml-4 md:-ml-8">
                    {/* SLIDE 1: How We Work */}
                    <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-full lg:basis-full">
                        <div className="readable-panel space-y-16 h-full">
                            <div className="flex flex-col h-full justify-between">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-12"
                                >
                                    How We Work
                                </motion.h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/10 pt-12">
                                    {pillars.map((pillar, index) => (
                                        <motion.div
                                            key={pillar.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: pillar.delay, duration: 0.6 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">{pillar.title}</h3>
                                            <p className="text-muted-foreground font-medium text-lg">"{pillar.description}"</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* SLIDE 2: For Those Aligned */}
                    <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-full lg:basis-full">
                        <div className="readable-panel space-y-16 h-full">
                            <div className="flex flex-col h-full">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-12"
                                >
                                    For Those Aligned
                                </motion.h2>

                                <div className="border-t border-foreground/10 pt-12 flex-grow">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-6"
                                    >
                                        <p className="text-xl text-foreground font-normal">We work with aligned partners:</p>
                                        <ul className="space-y-4 pl-8 md:pl-16">
                                            {partners.map((item, index) => (
                                                <li key={index} className="flex items-center gap-4 text-muted-foreground text-lg list-disc">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                {/* Navigation Controls */}
                <div className="hidden md:block">
                    <CarouselPrevious className="-left-4 lg:-left-12" />
                    <CarouselNext className="-right-4 lg:-right-12" />
                </div>
            </Carousel>

            <div className="px-8 md:px-12 lg:px-16 mt-8 max-w-screen-xl mx-auto">
                <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest gap-4">
                    <p>© {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-foreground transition-colors">Privacy</span>
                        <span className="cursor-pointer hover:text-foreground transition-colors">Contact</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

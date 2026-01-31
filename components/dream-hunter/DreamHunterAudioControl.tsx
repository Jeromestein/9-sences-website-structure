"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DreamHunterAudioControlProps {
    src: string
}

export default function DreamHunterAudioControl({ src }: DreamHunterAudioControlProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        // Attempt to autoplay muted on mount to ensure audio is ready
        if (audioRef.current) {
            audioRef.current.volume = 0.5
            audioRef.current.muted = true
            audioRef.current.play().then(() => {
                // We don't set isPlaying to true here because visually we want it to look "stopped" (.MOOD) 
                // until the user interacts or we decide to show "playing" state for muted autoplay.
                // However, the prompt implies "Stopped = .MOOD", "Playing = ( .MOOD )".
                // Usually web Autoplay is Muted. If it's muted, is it "playing"? usage varies.
                // Let's stick to: If user hasn't interacted, show .MOOD (which entices click).
                // Once clicked, it plays with sound -> ( .MOOD ).
            }).catch(err => {
                console.log("Autoplay blocked:", err)
            })
        }

        return () => {
            if (audioRef.current) {
                try {
                    audioRef.current.pause()
                } catch (e) {
                    console.error("Error modifying audio:", e)
                }
            }
        }
    }, [])

    const toggleAudio = () => {
        if (!audioRef.current) return

        if (!hasInteracted) {
            // First interaction: Unmute and play
            setHasInteracted(true)
            audioRef.current.muted = false
            audioRef.current.play().then(() => {
                setIsPlaying(true)
            }).catch(err => console.error("Play failed:", err))
        } else {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play().then(() => {
                    setIsPlaying(true)
                })
            }
        }
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2 mix-blend-difference">
            <audio ref={audioRef} src={src} loop playsInline />

            <button
                onClick={toggleAudio}
                className="group relative flex items-center justify-center text-stone-300 hover:text-white transition-colors duration-500 font-medium tracking-widest text-sm"
            >
                <div className="flex items-center gap-3 h-8">
                    {/* Left Parenthesis */}
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    x: 0,
                                    scale: [1, 1.1, 1]
                                }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 0.5 }
                                }}
                                className="text-lg font-light text-stone-400"
                            >
                                (
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* .MOOD Text */}
                    <span className="relative z-10">.MOOD</span>

                    {/* Right Parenthesis */}
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    x: 0,
                                    scale: [1, 1.1, 1]
                                }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 0.5 }
                                }}
                                className="text-lg font-light text-stone-400"
                            >
                                )
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </div>
    )
}

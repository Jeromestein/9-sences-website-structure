"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music } from "lucide-react"

interface AudioControlProps {
    src: string
}

export default function AudioControl({ src }: AudioControlProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        // Attempt to autoplay muted on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5
            audioRef.current.muted = true
            audioRef.current.play().then(() => {
                setIsPlaying(true)
            }).catch(err => {
                console.log("Autoplay blocked:", err)
            })
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
            }
        }
    }, [])

    const toggleAudio = () => {
        if (!audioRef.current) return

        if (!hasInteracted) {
            // First interaction: Unmute and play
            setHasInteracted(true)
            setIsMuted(false)
            audioRef.current.muted = false
            audioRef.current.play().then(() => {
                setIsPlaying(true)
            }).catch(err => console.error("Play failed:", err))
        } else {
            // Subsequent interactions: Toggle play/pause or mute/unmute? 
            // User asked for "play or mute". 
            // Usually, toggling mute is better for background music than pausing.
            const nextMuted = !isMuted
            setIsMuted(nextMuted)
            audioRef.current.muted = nextMuted

            // Ensure it's playing if we just unmuted
            if (!nextMuted && audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlaying(true))
            }
        }
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
            <audio ref={audioRef} src={src} loop playsInline />

            <motion.button
                onClick={toggleAudio}
                className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#E6D5B8] text-stone-900 backdrop-blur-md border border-white/20 hover:bg-[#F0E0C5] transition-all duration-500 shadow-md group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: [
                        "0 0 0px rgba(230,213,184,0)",
                        "0 0 40px rgba(230,213,184,0.6)",
                        "0 0 0px rgba(230,213,184,0)"
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                aria-label={isMuted ? "Unmute background music" : "Mute background music"}
            >
                {isMuted ? (
                    <VolumeX className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                ) : (
                    <div className="relative">
                        <Volume2 className="w-4 h-4" strokeWidth={1.5} />
                        {/* Visual indicator of playing sound */}
                        {isPlaying && (
                            <motion.div
                                className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                                animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                    </div>
                )}
            </motion.button>
        </div>
    )
}

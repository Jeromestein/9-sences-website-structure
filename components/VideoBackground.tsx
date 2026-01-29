import React from "react";

interface VideoBackgroundProps {
    src: string;
    className?: string;
    opacity?: number;
}

export default function VideoBackground({ src, className = "", opacity = 1 }: VideoBackgroundProps) {
    return (
        <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Optional overlay for text contrast */}
            <video
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-100"
                style={{ opacity: opacity }}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}

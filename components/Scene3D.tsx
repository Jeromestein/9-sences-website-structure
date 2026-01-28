"use client";

import React, { useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import CosmicParticles from '@/components/CosmicParticles';
import { useScrollProgress } from '@/components/ScrollProgressContext';
import type { MotionValue } from 'framer-motion';

/**
 * Camera Rig Component
 * Handles two types of movement:
 * 1. Mouse Parallax: Camera moves slightly opposite/towards mouse cursor to create depth.
 * 2. Ambient Drift: Continuous, subtle sine-wave movement to simulate a "handheld" or "floating" lens.
 * TODO: Add more detial to make 3D model look like better (https://sketchfab.com/3d-models/the-creation-of-adam-4d1727c7b83e4e6284bbadb63dbb537e)
 */
function ScrollRig({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    const { camera, scene } = useThree();
    const baseColor = useMemo(() => new THREE.Color("#f7f3ea"), []);
    const cosmicColor = useMemo(() => new THREE.Color("#05050a"), []);

    useFrame((state) => {
        const scroll = scrollYProgress.get();
        const introProgress = THREE.MathUtils.clamp(scroll / 0.3, 0, 1);
        const explosionProgress = THREE.MathUtils.clamp((scroll - 0.4) / 0.2, 0, 1);

        const cameraZ = THREE.MathUtils.lerp(10, 2.5, introProgress);
        const parallaxX = state.pointer.x * 0.35;
        const parallaxY = state.pointer.y * 0.35;

        camera.position.set(parallaxX, parallaxY, cameraZ);
        camera.lookAt(0, 0, 0);

        const blendedBackground = baseColor.clone().lerp(cosmicColor, explosionProgress);
        scene.background = blendedBackground;
    });

    return null;
}

interface ModelProps {
    size?: number;
    rotation?: [number, number, number];
    [key: string]: any;
}

function Model({ size = 2.5, rotation = [0, 0, 0], ...props }: ModelProps) {
    const { scene } = useGLTF('/the_creation_of_adam_hand.glb');

    // Automatically calculate position offset to center the model
    // Assuming pivot is at corner: offset = -size / 2
    const offset = -size / 2;

    return (
        <primitive
            object={scene}
            scale={[size, size, size]}
            position={[offset, offset, 0]}
            rotation={rotation}
            {...props}
        />
    );
}

export default function Scene3D({ eventSource }: { eventSource?: React.RefObject<HTMLElement> }) {
    const [target, setTarget] = React.useState<HTMLElement | null>(null);
    const { scrollYProgress } = useScrollProgress();

    React.useEffect(() => {
        if (!eventSource) {
            setTarget(document.body);
        }
    }, [eventSource]);

    return (
        <Canvas
            // Connect to body to capture mouse events even if overlaying content blocks the canvas
            eventSource={eventSource && eventSource.current ? eventSource : ({ current: target } as any)}
            eventPrefix="client"
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{
                antialias: true,
                alpha: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.1,
                outputColorSpace: THREE.SRGBColorSpace
            }}
            dpr={[1, 2]}
            className="w-full h-full"
            style={{ pointerEvents: 'none' }} // Ensure the canvas itself doesn't block clicks
        >
            {/* Key Light */}
            <directionalLight position={[3, 4, 2]} intensity={2.0} color={0xffffff} />
            {/* Fill Light */}
            <directionalLight position={[-3, 2, -2]} intensity={0.6} color={0xffffff} />

            {/* Float adds object-level floating separate from camera movement */}
            <Float
                speed={0.6}
                rotationIntensity={0.05}
                floatIntensity={0.05}
                floatingRange={[-0.05, 0.05]}
            >
                <Model
                    size={25}
                    rotation={[0, Math.PI / 1.8, 0]}
                />
            </Float>

            <CosmicParticles scrollYProgress={scrollYProgress} />
            <ScrollRig scrollYProgress={scrollYProgress} />

            <Environment preset="city" />
        </Canvas>
    );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_by_miguelangelo.glb');

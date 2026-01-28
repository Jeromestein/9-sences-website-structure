"use client";

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import CosmicParticles from './CosmicParticles';
import { useScrollProgress } from './ScrollProgressContext';

/**
 * Camera Rig Component
 * Handles two types of movement:
 * 1. Mouse Parallax: Camera moves slightly opposite/towards mouse cursor to create depth.
 * 2. Ambient Drift: Continuous, subtle sine-wave movement to simulate a "handheld" or "floating" lens.
 * TODO: Add more detial to make 3D model look like better (https://sketchfab.com/3d-models/the-creation-of-adam-4d1727c7b83e4e6284bbadb63dbb537e)
 */
function ScrollDrivenRig({
    explosionFactor,
}: {
    explosionFactor: React.MutableRefObject<number>;
}) {
    const { camera, scene } = useThree();
    const { scrollYProgress } = useScrollProgress();
    const baseBackground = useMemo(() => new THREE.Color('#f6f1e8'), []);
    const cosmicBackground = useMemo(() => new THREE.Color('#05050f'), []);
    const blendedBackground = useMemo(() => new THREE.Color(), []);

    useFrame((state) => {
        const progress = scrollYProgress.get();
        const introPhase = THREE.MathUtils.clamp(progress / 0.3, 0, 1);
        const explosionPhase = THREE.MathUtils.clamp((progress - 0.4) / 0.2, 0, 1);

        const cameraZ = THREE.MathUtils.lerp(10, 2.5, introPhase);
        const parallaxX = state.pointer.x * 0.6;
        const parallaxY = state.pointer.y * 0.6;

        camera.position.set(parallaxX, parallaxY, cameraZ);
        camera.lookAt(0, 0, 0);

        blendedBackground.lerpColors(baseBackground, cosmicBackground, explosionPhase);
        scene.background = blendedBackground;

        explosionFactor.current = explosionPhase;
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
    const explosionFactor = useRef(0);

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
                speed={1}
                rotationIntensity={0.1}
                floatIntensity={0.08}
                floatingRange={[-0.05, 0.05]}
            >
                <Model
                    size={25}
                    rotation={[0, Math.PI / 1.8, 0]}
                />
            </Float>

            <CosmicParticles explosionFactor={explosionFactor} />
            <ScrollDrivenRig explosionFactor={explosionFactor} />

            <Environment preset="city" />
        </Canvas>
    );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_by_miguelangelo.glb');

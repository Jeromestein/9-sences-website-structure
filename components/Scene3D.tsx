"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Camera Rig Component
 * Handles two types of movement:
 * 1. Mouse Parallax: Camera moves slightly opposite/towards mouse cursor to create depth.
 * 2. Ambient Drift: Continuous, subtle sine-wave movement to simulate a "handheld" or "floating" lens.
 * TODO: Add more detial to make 3D model look like better (https://sketchfab.com/3d-models/the-creation-of-adam-4d1727c7b83e4e6284bbadb63dbb537e)
 */
function Rig() {
    const { camera, pointer } = useThree();
    const vec = new THREE.Vector3();

    useFrame((state) => {
        // 1. Mouse Parallax (Interactive)
        // Multipliers determine how much the camera moves relative to cursor
        const parallaxX = state.pointer.x * 1.5;
        const parallaxY = state.pointer.y * 1.5;

        // 2. Ambient Drift (Automatic)
        // Uses time to create organic, non-repeating feel
        const t = state.clock.elapsedTime;
        const driftX = Math.sin(t * 0.3) * 0.4; // Horizontal ease
        const driftY = Math.cos(t * 0.25) * 0.4; // Vertical ease
        const driftZ = Math.sin(t * 0.1) * 0.5; // Subtle zoom breathing

        // Combine inputs into target position
        // Base Z is 8 (from initial camera prop)
        const targetPos = new THREE.Vector3(
            parallaxX + driftX,
            parallaxY + driftY,
            8 + driftZ
        );

        // Smoothly interpolate (Lerp) current position to target
        // 0.02 factor = very heavy, smooth cinematic weight
        state.camera.position.lerp(targetPos, 0.02);

        // Make camera look slightly offset from center to maintain "glance" feel
        // or just look at center. Looking at center keeps subject in focus.
        state.camera.lookAt(0, 0, 0);
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

function ScrollScaleGroup({
    children,
    minScale = 1,
    maxScale = 5,
    headingText = 'What Is 9Sences',
}: {
    children: React.ReactNode;
    minScale?: number;
    maxScale?: number;
    headingText?: string;
}) {
    const groupRef = useRef<THREE.Group>(null);
    const scrollRange = useRef<{ start: number; end: number } | null>(null);

    React.useEffect(() => {
        const resolveRange = () => {
            const sections = Array.from(document.querySelectorAll('main section'));
            const heroSection = sections[0] ?? document.querySelector('section');
            const headingNodes = Array.from(document.querySelectorAll('h1, h2, h3'));
            const introHeading = headingNodes.find((node) => {
                const text = node.textContent?.trim().toLowerCase();
                return text === headingText.toLowerCase();
            });
            const introSection =
                introHeading?.closest('section') ?? sections[1] ?? null;

            if (!heroSection || !introSection) {
                scrollRange.current = null;
                return;
            }

            const heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
            const introTop = introSection.getBoundingClientRect().top + window.scrollY;

            if (Number.isFinite(heroTop) && Number.isFinite(introTop) && introTop > heroTop + 1) {
                scrollRange.current = { start: heroTop, end: introTop };
            } else {
                scrollRange.current = null;
            }
        };

        const handleResize = () => {
            resolveRange();
        };

        const handleLoad = () => {
            resolveRange();
        };

        const rafId = window.requestAnimationFrame(resolveRange);

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleLoad);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleLoad);
        };
    }, [headingText]);

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const range = scrollRange.current;
        const scrollY = window.scrollY;
        const progress = range
            ? THREE.MathUtils.clamp((scrollY - range.start) / (range.end - range.start), 0, 1)
            : 0;
        const targetScale = THREE.MathUtils.lerp(minScale, maxScale, progress);
        const nextScale = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3, delta);
        groupRef.current.scale.setScalar(nextScale);
    });

    return (
        <group ref={groupRef} scale={[minScale, minScale, minScale]}>
            {children}
        </group>
    );
}

export default function Scene3D({ eventSource }: { eventSource?: React.RefObject<HTMLElement> }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [target, setTarget] = React.useState<HTMLElement | null>(null);

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
            <ScrollScaleGroup minScale={1} maxScale={5} headingText="What Is 9Sences">
                <Float
                    speed={2}
                    rotationIntensity={0.2}
                    floatIntensity={0.2}
                    floatingRange={[-0.1, 0.1]}
                >
                    <Model
                        size={25}
                        rotation={[0, Math.PI / 1.8, 0]}
                    />
                </Float>
            </ScrollScaleGroup>

            <Rig />

            <Environment preset="city" />
        </Canvas>
    );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_by_miguelangelo.glb');

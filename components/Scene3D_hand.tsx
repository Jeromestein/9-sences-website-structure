"use client";

import React, { useMemo, useRef } from 'react';
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

const HAND_PARTICLE_COUNT = 30000;
const HAND_PARTICLE_POINT_SIZE = 180;

const handParticleVertexShader = `
uniform float uTime;
uniform float uPointSize;
uniform float uScatter;
attribute vec3 color;
attribute vec3 aBase;
attribute float aSeed;
varying vec3 vColor;
varying float vDistance;

void main() {
    vColor = color;
    vec3 pos = aBase;

    float noise = sin(uTime * 1.5 + pos.x * 0.3) * cos(uTime * 1.5 + pos.y * 0.3);
    pos += normalize(pos + vec3(0.001)) * noise * 0.2;
    pos.x += sin(uTime * 0.3 + pos.z) * 0.1;
    pos.y += cos(uTime * 0.3 + pos.x) * 0.1;

    // Scatter outward during dissolve phase
    vec3 dir = normalize(pos + vec3(0.001)) + vec3(
        sin(aSeed * 12.3),
        cos(aSeed * 7.7),
        sin(aSeed * 4.9)
    ) * 0.35;
    pos += dir * uScatter * (1.0 + noise);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float dist = length(pos);
    vDistance = dist;
    gl_PointSize = (uPointSize / -mvPosition.z) * (1.2 + sin(uTime * 3.0 + dist * 0.15) * 0.5);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const handParticleFragmentShader = `
uniform float uTime;
uniform float uOpacity;
varying vec3 vColor;
varying float vDistance;

void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    float strength = pow(1.0 - dist * 2.0, 1.6);
    vec3 finalColor = vColor * 2.0;
    float alpha = strength * (0.8 + sin(vDistance * 0.3 + uTime) * 0.2);
    gl_FragColor = vec4(finalColor, alpha * uOpacity);
}
`;

function HandParticles({
    opacityRef,
    scatterRef,
    countRef,
    rotation = [0, 0, 0],
}: {
    opacityRef: React.MutableRefObject<number>;
    scatterRef: React.MutableRefObject<number>;
    countRef: React.MutableRefObject<number>;
    rotation?: [number, number, number];
}) {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const { scene } = useGLTF('/the_creation_of_adam_hand.glb');

    const geometry = useMemo(() => {
        const firstMesh = scene.getObjectByProperty('type', 'Mesh') as THREE.Mesh | null;
        const sourceGeometry = (firstMesh?.geometry as THREE.BufferGeometry | undefined) ?? null;
        const positionAttr = sourceGeometry?.getAttribute('position') as THREE.BufferAttribute | undefined;

        if (!sourceGeometry || !positionAttr) {
            return new THREE.BufferGeometry();
        }

        const sourcePositions = positionAttr.array as Float32Array;
        const sourceCount = positionAttr.count;
        const sampleCount = Math.min(HAND_PARTICLE_COUNT, sourceCount);

        const positions = new Float32Array(sampleCount * 3);
        const bases = new Float32Array(sampleCount * 3);
        const colors = new Float32Array(sampleCount * 3);
        const seeds = new Float32Array(sampleCount);
        const darkGray = new THREE.Color(0x2b2b2b);
        const gold = new THREE.Color(0xd4af37);

        for (let i = 0; i < sampleCount; i += 1) {
            const i3 = i * 3;
            const sourceIndex = Math.floor(Math.random() * sourceCount) * 3;
            const x = sourcePositions[sourceIndex];
            const y = sourcePositions[sourceIndex + 1];
            const z = sourcePositions[sourceIndex + 2];

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;
            bases[i3] = x;
            bases[i3 + 1] = y;
            bases[i3 + 2] = z;

            const color = Math.random() > 0.7 ? gold : darkGray;
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
            seeds[i] = Math.random();
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aBase', new THREE.BufferAttribute(bases, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
        geometry.setDrawRange(0, 0);
        return geometry;
    }, [scene]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = time;
            materialRef.current.uniforms.uOpacity.value = opacityRef.current;
            materialRef.current.uniforms.uScatter.value = scatterRef.current;
        }

        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0015;
            pointsRef.current.rotation.z += 0.0008;
            pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.08;

            const visibleCount = Math.floor(countRef.current);
            const maxCount = geometry.getAttribute('position')?.count ?? 0;
            const clampedCount = Math.max(0, Math.min(visibleCount, maxCount));
            pointsRef.current.geometry.setDrawRange(0, clampedCount);
        }
    });

    return (
        <points ref={pointsRef} geometry={geometry} rotation={rotation} frustumCulled={false}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={handParticleVertexShader}
                fragmentShader={handParticleFragmentShader}
                uniforms={useMemo(
                    () => ({
                        uTime: { value: 0 },
                        uPointSize: { value: HAND_PARTICLE_POINT_SIZE },
                        uOpacity: { value: 0 },
                        uScatter: { value: 0 },
                    }),
                    []
                )}
                transparent
                depthWrite={false}
                depthTest={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function HandScrollAnimator({
    children,
    introHeadingText = 'What Is 9Sences',
    targetSectionId = 'ecosystem', // Dream Hunter section ID
    particleRotation = [0, Math.PI / 1.8, 0],
}: {
    children: React.ReactNode;
    introHeadingText?: string;
    targetSectionId?: string;
    particleRotation?: [number, number, number];
}) {
    const groupRef = useRef<THREE.Group>(null);
    const particleOpacityRef = useRef(0);
    const particleScatterRef = useRef(0);
    const particleCountRef = useRef(0);
    const scrollRanges = useRef<{
        introStart: number;
        introEnd: number;
        targetStart: number;
        targetEnd: number;
    } | null>(null);

    React.useEffect(() => {
        const resolveRanges = () => {
            // 1. Find Intro Section ("What Is 9Sences")
            const headingNodes = Array.from(document.querySelectorAll('h1, h2, h3'));
            const introHeading = headingNodes.find((node) => {
                const text = node.textContent?.trim().toLowerCase();
                return text === introHeadingText.toLowerCase();
            });
            const introSection = introHeading?.closest('section');

            // 2. Find Target Section ("Dream Hunter" / ID: ecosystem)
            const targetElement = document.getElementById(targetSectionId);
            const targetSection = targetElement?.closest('section') ?? targetElement;

            // 3. Find Hero/Start (Top of page)
            const startY = 0;

            if (!introSection || !targetSection) {
                console.warn('HandScrollAnimator: Sections not found', { introSection, targetSection });
                scrollRanges.current = null;
                return;
            }

            const getAbsTop = (el: Element) => el.getBoundingClientRect().top + window.scrollY;

            // Intro Range: Start -> Intro Section
            const introTop = getAbsTop(introSection);

            // Target Range: Intro Section -> Target Section
            const targetTop = getAbsTop(targetSection);

            // Safety check
            if (introTop > startY && targetTop > introTop) {
                scrollRanges.current = {
                    introStart: startY,
                    introEnd: introTop,
                    targetStart: introTop,
                    targetEnd: targetTop, // Start fading out as we approach this
                };
            }
        };

        const handleResize = () => resolveRanges();
        // Delay slightly to ensure layout is settled
        const timer = setTimeout(resolveRanges, 500);
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [introHeadingText, targetSectionId]);

    useFrame((state, delta) => {
        if (!groupRef.current || !scrollRanges.current) return;

        const { introStart, introEnd, targetStart, targetEnd } = scrollRanges.current;
        const scrollY = window.scrollY;

        let targetScale = 2.5; // Default base scale
        let targetOpacity = 1.0;
        let targetEmissive = 0.0;
        let targetParticleOpacity = 0.0;
        let targetParticleScatter = 0.0;
        let targetParticleCount = 0.0;

        if (scrollY < introEnd) {
            // PHASE 1: Start -> Intro (Scale 25 -> 125)
            // Normalized progress 0 -> 1
            const progress = THREE.MathUtils.clamp(
                (scrollY - introStart) / (introEnd - introStart),
                0,
                1
            );
            // Ease in out for smoother start
            const eased = THREE.MathUtils.smoothstep(progress, 0, 1);

            // Note: The Model component multiplies this scale by its own size (25). 
            // So if we want 25 -> 125, we need multipliers 1 -> 5.
            targetScale = THREE.MathUtils.lerp(1, 5, eased);

        } else {
            // PHASE 2: Intro -> Dream Hunter (Scale 125 -> 300, Fade Out, Glow)
            const progress = THREE.MathUtils.clamp(
                (scrollY - targetStart) / (targetEnd - targetStart) * 1.5, // Accelerate slightly
                0,
                1
            );

            // Scale: 5 -> 12 (Result: 125 -> 300)
            targetScale = THREE.MathUtils.lerp(5, 12, progress);

            // Opacity: 1 -> 0
            // We want it to be fully gone slightly before the end
            targetOpacity = THREE.MathUtils.lerp(1, 0, THREE.MathUtils.smoothstep(progress, 0.2, 0.9));

            // Glow: 0 -> 2
            targetEmissive = THREE.MathUtils.lerp(0, 5, THREE.MathUtils.smoothstep(progress, 0, 0.8));

            // Particles crossfade in and then soften
            targetParticleOpacity = THREE.MathUtils.smoothstep(progress, 0.1, 0.6);
            targetParticleScatter = THREE.MathUtils.smoothstep(progress, 0.35, 1.0) * 1.8;
            targetParticleCount = THREE.MathUtils.lerp(1500, HAND_PARTICLE_COUNT, THREE.MathUtils.smoothstep(progress, 0.2, 0.9));
        }

        // Apply Scale with Damping
        const currentScale = groupRef.current.scale.x;
        const nextScale = THREE.MathUtils.damp(currentScale, targetScale, 3, delta);
        groupRef.current.scale.setScalar(nextScale);

        // Apply Material Effects (Opacity & Emissive)
        groupRef.current.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                // Ensure material is capable of transparency
                if (!child.userData.isMaterialSetup) {
                    child.material = child.material.clone();
                    child.material.transparent = true;
                    child.material.depthWrite = true; // Keep depth write on for correct self-occlusion
                    // child.material.blending = THREE.AdditiveBlending; // Optional: Makes it look more like light
                    child.userData.isMaterialSetup = true;
                    child.userData.originalEmissive = child.material.emissive ? child.material.emissive.clone() : new THREE.Color(0, 0, 0);
                }

                // Smoothly update opacity
                child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOpacity, 0.1); // Fast lerp

                // Update Emissive
                if (child.material.emissive) {
                    // Tint it white/gold as it glows
                    child.material.emissive.setScalar(targetEmissive);
                }
            }
        });

        particleOpacityRef.current = THREE.MathUtils.damp(particleOpacityRef.current, targetParticleOpacity, 4, delta);
        particleScatterRef.current = THREE.MathUtils.damp(particleScatterRef.current, targetParticleScatter, 3, delta);
        particleCountRef.current = THREE.MathUtils.damp(particleCountRef.current, targetParticleCount, 3, delta);
    });

    return (
        <group ref={groupRef} scale={[1, 1, 1]}>
            {children}
            <HandParticles
                opacityRef={particleOpacityRef}
                scatterRef={particleScatterRef}
                countRef={particleCountRef}
                rotation={particleRotation}
            />
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
            <HandScrollAnimator>
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
            </HandScrollAnimator>

            <Rig />

            <Environment preset="city" />
        </Canvas>
    );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_hand.glb');

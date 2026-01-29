"use client";

import React, { useMemo, useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 90000;
const PARTICLE_POINT_SIZE = 200;

const particleVertexShader = `
uniform float uTime;
uniform float uPointSize;
attribute vec3 color;
varying vec3 vColor;
varying float vDistance;

void main() {
    vColor = color;
    vec3 pos = position;

    float noise = sin(uTime * 1.5 + position.x * 0.3) * cos(uTime * 1.5 + position.y * 0.3);
    pos += normalize(pos) * noise * 0.2;
    pos.x += sin(uTime * 0.3 + position.z) * 0.1;
    pos.y += cos(uTime * 0.3 + position.x) * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float dist = length(pos);
    vDistance = dist;
    gl_PointSize = (uPointSize / -mvPosition.z) * (1.2 + sin(uTime * 3.0 + dist * 0.15) * 0.5);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const particleFragmentShader = `
uniform float uTime;
varying vec3 vColor;
varying float vDistance;

void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    float strength = pow(1.0 - dist * 2.0, 1.6);
    vec3 finalColor = vColor * 2.0;
    float alpha = strength * (0.8 + sin(vDistance * 0.3 + uTime) * 0.2);
    gl_FragColor = vec4(finalColor, alpha);
}
`;

function ParticleBackground() {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    // Animation state to be tweened by GSAP
    // Start with 0 visible particles
    const animState = useRef({ count: 0 });

    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors = new Float32Array(PARTICLE_COUNT * 3);
        const darkGray = new THREE.Color(0x2b2b2b);
        const gold = new THREE.Color(0xd4af37);

        for (let i = 0; i < PARTICLE_COUNT; i += 1) {
            const i3 = i * 3;
            const t = (Math.random() - 0.5) * 5.0;
            const angle = Math.random() * Math.PI * 2;
            const radiusBase = 0.4 + Math.pow(Math.abs(t), 2.4);
            const radius = radiusBase * (0.75 + Math.random() * 0.55);
            const x = radius * Math.cos(angle) * 2.9;
            const z = radius * Math.sin(angle) * 2.9;
            const y = t * 7.5;

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;

            const color = Math.random() > 0.7 ? gold : darkGray;
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        // Only draw the current count
        geometry.setDrawRange(0, 0);
        return geometry;
    }, []);

    useLayoutEffect(() => {
        // ScrollTriggers logic
        const ctx = gsap.context(() => {
            // 1. Initial State: 0 particles

            // 2. "What Is 9Sences" (IntroSection): set to 90
            ScrollTrigger.create({
                trigger: "#intro-section",
                start: "top bottom", // When intro coming into view
                end: "bottom top",
                onEnter: () => {
                    gsap.to(animState.current, { count: 90, duration: 1.5, ease: "power2.out" });
                },
                onLeaveBack: () => {
                    gsap.to(animState.current, { count: 0, duration: 1, ease: "power2.out" });
                },
            });

            // 3. "Dream Hunter": transition from 90 to 90000
            // We want this to be gradual as we scroll towards it? 
            // Or only when we reach it? 
            // User requirement: "从移动到 dream hunter 的过程中，之间增加到 90000"
            // So we can use scrub linked to the scroll distance between sections

            const startNode = document.querySelector("#intro-section");
            const endNode = document.querySelector("#dream-hunter-section");

            if (startNode && endNode) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#intro-section",
                        start: "center center",
                        endTrigger: "#dream-hunter-section",
                        end: "center center",
                        scrub: 1, // Smooth scrub
                    }
                })
                    .fromTo(animState.current,
                        { count: 90 },
                        { count: 90000, ease: "power1.inOut" }
                    );
            }
        });

        return () => ctx.revert();
    }, []);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = time;
        }

        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0025;
            pointsRef.current.rotation.z += 0.001;
            pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.12;

            // Update visible particle count
            const visibleCount = Math.floor(animState.current.count);
            // Ensure we don't exceed max or go below 0
            const clampedCount = Math.max(0, Math.min(visibleCount, PARTICLE_COUNT));
            pointsRef.current.geometry.setDrawRange(0, clampedCount);
        }
    });

    return (
        <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={particleVertexShader}
                fragmentShader={particleFragmentShader}
                // ... same as before
                uniforms={useMemo(() => ({ uTime: { value: 0 }, uPointSize: { value: PARTICLE_POINT_SIZE } }), [])}
                transparent
                depthWrite={false}
                depthTest={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function Scene3D({ eventSource }: { eventSource?: React.RefObject<HTMLElement> }) {
    const [target, setTarget] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
        if (!eventSource) {
            setTarget(document.body);
        }
    }, [eventSource]);

    return (
        <Canvas
            eventSource={eventSource && eventSource.current ? eventSource : ({ current: target } as any)}
            eventPrefix="client"
            camera={{ position: [0, 0, 45], fov: 35, near: 0.1, far: 1000 }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.1,
                outputColorSpace: THREE.SRGBColorSpace,
            }}
            dpr={[1, 2]}
            className="w-full h-full"
            style={{ pointerEvents: 'none' }}
        >
            <ParticleBackground />
        </Canvas>
    );
}

"use client";

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

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

    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors = new Float32Array(PARTICLE_COUNT * 3);
        const greenColor = new THREE.Color(0x00ff66);
        const brightWhite = new THREE.Color(0xffffff);

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

            const color = Math.random() > 0.7 ? greenColor : brightWhite;
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geometry;
    }, []);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uPointSize: { value: PARTICLE_POINT_SIZE },
        }),
        []
    );

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = time;
        }

        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0025;
            pointsRef.current.rotation.z += 0.001;
            pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.12;
        }
    });

    return (
        <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={particleVertexShader}
                fragmentShader={particleFragmentShader}
                uniforms={uniforms}
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
            onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
            }}
        >
            <ParticleBackground />
        </Canvas>
    );
}

"use client";

import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function DreamModel() {
    const { scene } = useGLTF("/dreams.glb");
    const groupRef = useRef<THREE.Group>(null);

    const normalizedScale = useMemo(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxAxis = Math.max(size.x, size.y, size.z) || 1;
        return (3.2 / maxAxis);
    }, [scene]);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.y = t * 0.12;
        groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
    });

    return (
        <group ref={groupRef} position={[0, -0.2, 0]}>
            <Center>
                <primitive object={scene} scale={normalizedScale} />
            </Center>
        </group>
    );
}

function OrbitingHalo() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.y = t * 0.35;
        groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.25;
        groupRef.current.rotation.z = Math.cos(t * 0.2) * 0.15;
    });

    return (
        <group ref={groupRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.6, 0.035, 20, 240]} />
                <meshStandardMaterial
                    color="#d4a574"
                    emissive="#d4a574"
                    emissiveIntensity={0.8}
                    metalness={0.6}
                    roughness={0.2}
                    transparent
                    opacity={0.4}
                />
            </mesh>
            <mesh rotation={[Math.PI / 3, Math.PI / 7, 0]}>
                <torusGeometry args={[2.1, 0.02, 16, 220]} />
                <meshStandardMaterial
                    color="#8c7355"
                    emissive="#8c7355"
                    emissiveIntensity={0.6}
                    metalness={0.45}
                    roughness={0.3}
                    transparent
                    opacity={0.35}
                />
            </mesh>
            <mesh rotation={[Math.PI / 2.6, -Math.PI / 5, Math.PI / 10]}>
                <torusGeometry args={[3.0, 0.015, 12, 180]} />
                <meshStandardMaterial
                    color="#bfa17b"
                    emissive="#bfa17b"
                    emissiveIntensity={0.5}
                    metalness={0.35}
                    roughness={0.4}
                    transparent
                    opacity={0.25}
                />
            </mesh>
        </group>
    );
}

function OrbitingOrbs() {
    const orbRefs = useRef<Array<THREE.Mesh | null>>([]);
    const orbs = useMemo(
        () => [
            { radius: 2.4, speed: 0.5, offset: 0, tilt: 0.4, color: "#f2d3a7" },
            { radius: 3.1, speed: -0.35, offset: Math.PI * 0.6, tilt: 0.6, color: "#d4a574" },
            { radius: 2.8, speed: 0.28, offset: Math.PI * 1.2, tilt: 0.5, color: "#bfa17b" },
        ],
        []
    );

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        orbs.forEach((orb, index) => {
            const mesh = orbRefs.current[index];
            if (!mesh) return;
            const angle = t * orb.speed + orb.offset;
            const x = Math.cos(angle) * orb.radius;
            const z = Math.sin(angle) * orb.radius;
            const y = Math.sin(angle * 1.4) * orb.tilt;
            mesh.position.set(x, y, z);
        });
    });

    return (
        <group>
            {orbs.map((orb, index) => (
                <mesh
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    ref={(el) => {
                        orbRefs.current[index] = el;
                    }}
                >
                    <sphereGeometry args={[0.09, 32, 32]} />
                    <meshStandardMaterial
                        color={orb.color}
                        emissive={orb.color}
                        emissiveIntensity={1.4}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function DreamHunterHeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0.4, 7.2], fov: 35, near: 0.1, far: 100 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
            className="h-full w-full"
            style={{ pointerEvents: "none" }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} color={0xffffff} />
                <directionalLight position={[6, 6, 4]} intensity={1.4} color={0xfff3da} />
                <directionalLight position={[-5, -3, 3]} intensity={0.6} color={0xbda07a} />
                <pointLight position={[0, 2, 6]} intensity={0.6} color={0xfff1d6} />

                <OrbitingHalo />
                <OrbitingOrbs />

                <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.3} floatingRange={[-0.15, 0.2]}>
                    <DreamModel />
                </Float>

                <Environment preset="studio" />
            </Suspense>
        </Canvas>
    );
}

"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { useMotionValue } from "framer-motion";
import * as THREE from "three";
import CosmicParticles from "@/components/CosmicParticles";
import { useScrollProgress } from "@/components/ScrollProgressContext";

/**
 * Camera Rig Component
 * Handles two types of movement:
 * 1. Mouse Parallax: Camera moves slightly opposite/towards mouse cursor to create depth.
 * 2. Ambient Drift: Continuous, subtle sine-wave movement to simulate a "handheld" or "floating" lens.
 * TODO: Add more detial to make 3D model look like better (https://sketchfab.com/3d-models/the-creation-of-adam-4d1727c7b83e4e6284bbadb63dbb537e)
 */
function ScrollRig({ explosionFactor }: { explosionFactor: MotionValue<number> }) {
  const { camera, pointer, scene } = useThree();
  const { scrollYProgress } = useScrollProgress();
  const target = useRef(new THREE.Vector3());
  const baseColor = useMemo(() => new THREE.Color("#f6f1e8"), []);
  const deepColor = useMemo(() => new THREE.Color("#05050a"), []);
  const mixedColor = useRef(new THREE.Color());

  useFrame(() => {
    const progress = scrollYProgress.get();
    const zoomPhase = THREE.MathUtils.clamp(progress / 0.3, 0, 1);
    const explosionPhase = THREE.MathUtils.clamp((progress - 0.4) / 0.2, 0, 1);

    const cameraZ = THREE.MathUtils.lerp(10, 2.5, zoomPhase);
    const parallaxX = pointer.x * 0.6;
    const parallaxY = pointer.y * 0.6;

    target.current.set(parallaxX, parallaxY, cameraZ);
    camera.position.lerp(target.current, 0.1);
    camera.lookAt(0, 0, 0);

    mixedColor.current.copy(baseColor).lerp(deepColor, explosionPhase);
    scene.background = mixedColor.current;

    explosionFactor.set(explosionPhase);
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
  const explosionFactor = useMotionValue(0);

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
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]}
      className="w-full h-full"
      style={{ pointerEvents: "none" }} // Ensure the canvas itself doesn't block clicks
    >
      {/* Key Light */}
      <directionalLight position={[3, 4, 2]} intensity={2.0} color={0xffffff} />
      {/* Fill Light */}
      <directionalLight position={[-3, 2, -2]} intensity={0.6} color={0xffffff} />

      <CosmicParticles explosionFactor={explosionFactor} />

      {/* Float adds object-level floating separate from camera movement */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
        <Model size={25} rotation={[0, Math.PI / 1.8, 0]} />
      </Float>

      <ScrollRig explosionFactor={explosionFactor} />

      <Environment preset="city" />
    </Canvas>
  );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_by_miguelangelo.glb');

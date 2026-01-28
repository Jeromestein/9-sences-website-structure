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
function smoothstep(min: number, max: number, value: number) {
  const x = THREE.MathUtils.clamp((value - min) / (max - min), 0, 1);
  return x * x * (3 - 2 * x);
}

function ScrollRig({
  explosionFactor,
  introTarget,
  dreamTarget,
}: {
  explosionFactor: MotionValue<number>;
  introTarget: React.MutableRefObject<HTMLElement | null>;
  dreamTarget: React.MutableRefObject<HTMLElement | null>;
}) {
  const { camera, pointer, scene } = useThree();
  const { scrollYProgress } = useScrollProgress();
  const target = useRef(new THREE.Vector3());
  const baseColor = useMemo(() => new THREE.Color("#f6f1e8"), []);
  const deepColor = useMemo(() => new THREE.Color("#05050a"), []);
  const mixedColor = useRef(new THREE.Color());

  useFrame(() => {
    const progress = scrollYProgress.get();
    const zoomPhase = THREE.MathUtils.clamp(progress / 0.3, 0, 1);
    let glowProgress = 0;

    if (introTarget.current && dreamTarget.current) {
      const introRect = introTarget.current.getBoundingClientRect();
      const dreamRect = dreamTarget.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.9;
      const end = viewportHeight * 0.2;
      const denominator = Math.max(1, dreamRect.top - introRect.top + (start - end));
      glowProgress = (start - introRect.top) / denominator;
      glowProgress = THREE.MathUtils.clamp(glowProgress, 0, 1);
      glowProgress = smoothstep(0, 1, glowProgress);
    }

    const cameraZ = THREE.MathUtils.lerp(10, 2.5, zoomPhase);
    const parallaxX = pointer.x * 0.6;
    const parallaxY = pointer.y * 0.6;

    target.current.set(parallaxX, parallaxY, cameraZ);
    camera.position.lerp(target.current, 0.1);
    camera.lookAt(0, 0, 0);

    mixedColor.current.copy(baseColor).lerp(deepColor, Math.pow(glowProgress, 1.2));
    scene.background = mixedColor.current;

    explosionFactor.set(glowProgress);
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

function GlowOrb({ progress }: { progress: MotionValue<number> }) {
  const spriteRef = useRef<THREE.Sprite>(null);
  const materialRef = useRef<THREE.SpriteMaterial>(null);
  const texture = useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.4, "rgba(255, 248, 240, 0.7)");
      gradient.addColorStop(1, "rgba(255, 248, 240, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    return canvasTexture;
  }, []);

  useFrame(() => {
    if (!spriteRef.current || !materialRef.current) return;
    const t = smoothstep(0, 1, progress.get());
    const eased = Math.pow(t, 2.3);
    const scale = THREE.MathUtils.lerp(0.02, 30, eased);
    const opacity = THREE.MathUtils.lerp(0, 0.9, smoothstep(0.05, 0.6, t));
    spriteRef.current.scale.set(scale, scale, 1);
    materialRef.current.opacity = opacity;
  });

  return (
    <sprite ref={spriteRef} position={[0, 0, 0]}>
      <spriteMaterial
        ref={materialRef}
        map={texture}
        color={new THREE.Color("#fff8f0")}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

export default function Scene3D({ eventSource }: { eventSource?: React.RefObject<HTMLElement> }) {
  const [target, setTarget] = React.useState<HTMLElement | null>(null);
  const explosionFactor = useMotionValue(0);
  const introTarget = React.useRef<HTMLElement | null>(null);
  const dreamTarget = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!eventSource) {
      setTarget(document.body);
    }
  }, [eventSource]);

  React.useEffect(() => {
    introTarget.current = document.getElementById("intro");
    dreamTarget.current = document.getElementById("dream-hunter");
  }, []);

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
      <GlowOrb progress={explosionFactor} />

      {/* Float adds object-level floating separate from camera movement */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
        <Model size={25} rotation={[0, Math.PI / 1.8, 0]} />
      </Float>

      <ScrollRig explosionFactor={explosionFactor} introTarget={introTarget} dreamTarget={dreamTarget} />

      <Environment preset="city" />
    </Canvas>
  );
}

// Preload the model
useGLTF.preload('/the_creation_of_adam_by_miguelangelo.glb');

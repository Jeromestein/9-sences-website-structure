"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

const vertexShader = `
uniform float uTime;
uniform float uExplosionFactor;
attribute vec3 aRandomness;
attribute float aSize;

void main() {
  vec3 displaced = position;
  vec3 direction = normalize(position + aRandomness);
  float noise = sin(uTime * 0.6 + dot(position, aRandomness) * 6.0) * 0.5 + 0.5;
  displaced += direction * uExplosionFactor * (2.0 + noise);

  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = aSize * (1.5 / -mvPosition.z);
}
`;

const fragmentShader = `
uniform vec3 uColor;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  float glow = smoothstep(0.5, 0.0, dist);
  float core = smoothstep(0.2, 0.0, dist);
  vec3 color = mix(uColor * 0.4, uColor, core);
  gl_FragColor = vec4(color, glow);
}
`;

export default function CosmicParticles({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, randomness, sizes } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const randomness = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const radius = Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      randomness[i3] = (Math.random() - 0.5) * 2;
      randomness[i3 + 1] = (Math.random() - 0.5) * 2;
      randomness[i3 + 2] = (Math.random() - 0.5) * 2;

      sizes[i] = Math.random() * 6 + 2;
    }

    return { positions, randomness, sizes };
  }, []);

  useFrame((state) => {
    if (!materialRef.current) {
      return;
    }

    const scroll = scrollYProgress.get();
    const explosion = THREE.MathUtils.clamp((scroll - 0.4) / 0.2, 0, 1);

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uExplosionFactor.value = explosion;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandomness"
          count={randomness.length / 3}
          array={randomness}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uExplosionFactor: { value: 0 },
          uColor: { value: new THREE.Color("#e6f0ff") },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </points>
  );
}

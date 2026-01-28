"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform float uExplosionFactor;
attribute vec3 aRandomness;
attribute float aSize;
varying float vOpacity;

void main() {
  vec3 displaced = position + aRandomness * uExplosionFactor * 6.0;
  vec4 modelPosition = modelMatrix * vec4(displaced, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = aSize * (1.0 + uExplosionFactor * 2.0);
  gl_PointSize *= (300.0 / -viewPosition.z);

  float appear = smoothstep(0.02, 0.2, uExplosionFactor);
  vOpacity = appear * (1.0 - uExplosionFactor * 0.2);
}
`;

const fragmentShader = `
varying float vOpacity;

void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = smoothstep(0.5, 0.1, distanceToCenter);
  vec3 color = vec3(0.9, 0.9, 1.0);
  gl_FragColor = vec4(color, strength * vOpacity);
}
`;

interface CosmicParticlesProps {
  explosionFactor: MotionValue<number>;
}

export default function CosmicParticles({ explosionFactor }: CosmicParticlesProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, randomness, sizes } = useMemo(() => {
    const count = 2400;
    const positionsArray = new Float32Array(count * 3);
    const randomnessArray = new Float32Array(count * 3);
    const sizesArray = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const radius = Math.random() * 1.8 + 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positionsArray[i * 3] = x;
      positionsArray[i * 3 + 1] = y;
      positionsArray[i * 3 + 2] = z;

      randomnessArray[i * 3] = (Math.random() - 0.5) * 2.0;
      randomnessArray[i * 3 + 1] = (Math.random() - 0.5) * 2.0;
      randomnessArray[i * 3 + 2] = (Math.random() - 0.5) * 2.0;

      sizesArray[i] = Math.random() * 6 + 4;
    }

    return { positions: positionsArray, randomness: randomnessArray, sizes: sizesArray };
  }, []);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    materialRef.current.uniforms.uExplosionFactor.value = explosionFactor.get();
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute
          attach="attributes-aRandomness"
          count={randomness.length / 3}
          array={randomness}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-aSize" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uExplosionFactor: { value: 0 },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

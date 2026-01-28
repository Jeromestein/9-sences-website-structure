"use client"

import { useFrame } from "@react-three/fiber"
import React, { useMemo, useRef } from "react"
import * as THREE from "three"

const vertexShader = `
  attribute float randomness;
  attribute float size;
  uniform float uTime;
  uniform float uExplosionFactor;
  varying float vRandomness;

  void main() {
    vec3 displaced = position;
    vec3 direction = normalize(position);
    float noise = sin(uTime + randomness * 10.0);
    displaced += direction * uExplosionFactor * (2.0 + noise * 0.6) * (randomness + 0.35);

    vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
    gl_PointSize = size * 8.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vRandomness = randomness;
  }
`

const fragmentShader = `
  varying float vRandomness;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float intensity = smoothstep(0.5, 0.0, dist);
    vec3 coreColor = mix(vec3(0.65, 0.75, 1.0), vec3(0.3, 0.5, 1.0), vRandomness);
    gl_FragColor = vec4(coreColor, intensity);
  }
`

interface CosmicParticlesProps {
  explosionFactor: React.MutableRefObject<number>
  count?: number
}

export default function CosmicParticles({ explosionFactor, count = 1800 }: CosmicParticlesProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const { positions, randomness, sizes } = useMemo(() => {
    const positionsArray = new Float32Array(count * 3)
    const randomnessArray = new Float32Array(count)
    const sizeArray = new Float32Array(count)

    for (let i = 0; i < count; i += 1) {
      const radius = Math.random() * 4.5 + 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positionsArray.set([x, y, z], i * 3)
      randomnessArray[i] = Math.random()
      sizeArray[i] = Math.random() * 1.6 + 0.4
    }

    return { positions: positionsArray, randomness: randomnessArray, sizes: sizeArray }
  }, [count])

  useFrame((state) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    materialRef.current.uniforms.uExplosionFactor.value = explosionFactor.current
  })

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-randomness"
          array={randomness}
          count={randomness.length}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={sizes.length}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uExplosionFactor: { value: 0 },
        }}
      />
    </points>
  )
}

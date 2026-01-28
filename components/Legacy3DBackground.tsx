"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Legacy 3.5D Background Component
 * Preserved from previous implementation.
 */
export default function Legacy3DBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initExperience = () => {
            if (!canvasRef.current) return;

            // --- 1. Three.js 3.5D Scene Initialization ---
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const loader = new THREE.TextureLoader();

            // Load assets from public directory
            const colorMap = loader.load('/renaissance-boy-macbook-colorMap.jpg');
            const depthMap = loader.load('/renaissance-boy-macbook-depthMap.png'); // Depth map

            const geometry = new THREE.PlaneGeometry(10.24, 7.12, 128, 128); // Match aspect ratio 1024x712
            const material = new THREE.MeshStandardMaterial({
                map: colorMap,
                displacementMap: depthMap,
                displacementScale: 0.7, // Controll depth thickness
                roughness: 0.8,
                metalness: 0.2
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Lighting System
            const light = new THREE.PointLight(0xffffff, 2.5); // Increased from 1.5
            light.position.set(5, 5, 5);
            scene.add(light);
            scene.add(new THREE.AmbientLight(0xffffff, 1.2)); // Increased from 0.5

            camera.position.z = 8;

            // Handle Resize with "Cover" logic (or contain if desired, but cover is standard for bg)
            const resize = () => {
                if (!canvasRef.current) return;
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                // Calculate visible height at z=0 (camera.z=8)
                const dist = camera.position.z;
                const vFov = (camera.fov * Math.PI) / 180;
                const visibleHeight = 2 * Math.tan(vFov / 2) * dist;
                const visibleWidth = visibleHeight * camera.aspect;

                const imgAspect = 1024 / 712;
                const screenAspect = width / height;

                let scale;
                if (screenAspect > imgAspect) {
                    // Screen is wider than image: Fit by height
                    scale = visibleHeight / 7.12;
                } else {
                    // Screen is taller than image: Fit by width
                    scale = visibleWidth / 10.24;
                }

                mesh.scale.set(scale, scale, 1);
            };

            window.addEventListener('resize', resize);
            resize(); // Initial sizing

            // --- 2. Interaction & Animation ---
            const mouse = { x: 0, y: 0 };
            const target = { x: 0, y: 0 };

            const handleMouseMove = (e: MouseEvent) => {
                target.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
                target.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
            };

            window.addEventListener('mousemove', handleMouseMove);

            const animate = () => {
                requestAnimationFrame(animate);
                mouse.x += (target.x - mouse.x) * 0.05;
                mouse.y += (target.y - mouse.y) * 0.05;
                mesh.rotation.y = mouse.x;
                mesh.rotation.x = mouse.y;
                renderer.render(scene, camera);
            };
            animate();

            setIsReady(true);

            // Cleanup
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', resize);
                // Optional: dispose Three.js resources
            };
        };

        // Initialize immediately as we don't need to load external scripts
        const cleanup = initExperience();
        return cleanup;
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <canvas ref={canvasRef} className="w-full h-full brightness-[1.1] saturate-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
        </div>
    );
}

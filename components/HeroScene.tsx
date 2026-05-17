"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html } from "@react-three/drei";
import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function useSceneEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const largeEnough = window.matchMedia("(min-width: 720px)");
    const update = () => setEnabled(!reduceMotion.matches && largeEnough.matches);

    update();
    reduceMotion.addEventListener("change", update);
    largeEnough.addEventListener("change", update);

    return () => {
      reduceMotion.removeEventListener("change", update);
      largeEnough.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

function PerformanceRing({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * speed;
    mesh.current.rotation.y = state.clock.elapsedTime * (speed * 0.72);
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[1.15, 0.035, 18, 96]} />
      <meshStandardMaterial color={color} metalness={0.72} roughness={0.24} />
    </mesh>
  );
}

function TrainingCore() {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const plates = useMemo(() => [-0.72, -0.46, 0.46, 0.72], []);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 0.8;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 0.5;
    };

    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.current.x + Math.sin(state.clock.elapsedTime * 0.32) * 0.12,
      0.045,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y, 0.04);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.85) * 0.06;
  });

  return (
    <group ref={group} position={[-1.35, 0.02, 0]} scale={0.88} rotation={[0.14, -0.32, -0.08]}>
      <Float speed={1.15} rotationIntensity={0.22} floatIntensity={0.3}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.055, 0.055, 2.8, 32]} />
          <meshStandardMaterial color="#f7f1e5" metalness={0.82} roughness={0.2} />
        </mesh>

        {plates.map((x, index) => (
          <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.34 - (index % 2) * 0.05, 0.34 - (index % 2) * 0.05, 0.16, 48]} />
            <meshStandardMaterial
              color={index < 2 ? "#d64b3b" : "#6d8a69"}
              metalness={0.36}
              roughness={0.38}
            />
          </mesh>
        ))}

        <PerformanceRing position={[0, 0, -0.18]} color="#d8b468" speed={0.34} />
        <PerformanceRing position={[0, 0, 0.18]} color="#f4efe2" speed={-0.22} />
      </Float>

      <Html position={[1.26, 0.86, 0]} transform distanceFactor={9}>
        <div className="scene-label">LIVE FORM</div>
      </Html>
    </group>
  );
}

function SceneFallback() {
  return (
    <div className="scene-fallback" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function HeroScene() {
  const enabled = useSceneEnabled();

  if (!enabled) {
    return <SceneFallback />;
  }

  return (
    <SceneErrorBoundary fallback={<SceneFallback />}>
      <Canvas
        className="hero-canvas"
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.68} />
          <directionalLight position={[4, 4, 5]} intensity={2.1} />
          <pointLight position={[-3, -2, 2]} intensity={1.4} color="#d64b3b" />
          <TrainingCore />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </SceneErrorBoundary>
  );
}

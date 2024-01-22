import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import s from "./hero.module.scss";
import { useScrollytelling } from "~/lib/scrollytelling-client";

const Computers = () => {
  const computer = useGLTF("/models/scene/scene.gltf");
  const { timeline } = useScrollytelling();
  const innerRef = useRef<THREE.Group>(null);
  const width = useThree((state) => state.viewport.width);
  useFrame(() => {
    if (!innerRef.current || !timeline?.scrollTrigger) return;

    innerRef.current.rotation.y = Math.PI * 2 * timeline.scrollTrigger.progress;
  });


  return (
    <Float>
      <group dispose={null} scale={width * 0.6} ref={innerRef}>
        {/* <group position={[0, 0, 0]} rotation={[0.45, -0.51, -0.03]}> */}
    <mesh>
      <hemisphereLight intensity={1.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        position={[0, -0.9, 0]} 
        object={computer.scene}
        rotation={[0, Math.PI ,-0.2]}
        scale={[0.1, 0.1, 0.1]}
      />
    </mesh>
    </group>
      {/* </group> */}
    </Float>
  );
};

const CanvasWithMacModel = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={() => {
        gsap.set(canvasRef.current, {
          width: "100%",
          height: "100%",
        });
        gsap.to(
          canvasRef.current?.closest('[data-mac-canvas-container="true"]') ||
            null,
          { opacity: 1, scale: 1, duration: 0.15 }
        );
      }}
      style={{ opacity: 0, scale: 0.9 }}
      ref={canvasRef}
      data-mac-canvas-container
    >
      <Suspense>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CanvasWithMacModel;

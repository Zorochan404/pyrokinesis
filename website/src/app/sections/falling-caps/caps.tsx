import * as Scrollytelling from "~/lib/scrollytelling-client";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { getTimeline } from "../../../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Computers = () => {
  const computer = useGLTF("/models/1.glb");
  const innerRef = useRef<THREE.Group>(null);
  const width = useThree((state) => state.viewport.width);
  const { timeline } = Scrollytelling.useScrollytelling();

  useFrame(() => {
    if (!innerRef.current || !timeline?.scrollTrigger) return;

    innerRef.current.rotation.y = Math.PI * 2 * timeline.scrollTrigger.progress;
  });

  return (
    <mesh>
    <group dispose={null} scale={0.6} ref={innerRef}>
      <group position={[0, 2, 0]} rotation={[0.45, -0.51, -0.03]}>
        <hemisphereLight intensity={0.15} groundColor="black" />
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
          object={computer.scene}
          scale={1.15}
          position={[0, -0, -0]}
          rotation={[-0.1, 0.5, -0]}
        />
      </group>
    </group>
  </mesh>
  );
};

const CapsModel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

 

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvasRef}
      onCreated={() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(canvasRef.current, {
          ease: "power2.inout",
          scrollTrigger: {
            trigger: canvasRef.current,
            scrub: true,
            start: "top+=950px center",
            end: "bottom+=990px 15%",
  
          },
          opacity: 0,
          y: "+=600",
        });
      }}
    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate= {true}
        />
        <Computers  />
      </Suspense>


    </Canvas>
  );
};

export default CapsModel;
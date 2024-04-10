"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Effects } from "@react-three/drei";
import ThreeMesh from "./three-mesh";
import ThreeCountries from "./three-countries";

const Globe = () => {
  return (
    <group scale={[2.5, 2.5, 2.5]}>
      <ThreeMesh />
      <ThreeCountries />
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      gl={{ alpha: true }}
      camera={{
        fov: 75,
        // Position the camera to the top-right and slightly above the globe
        // Adjust these values as needed to get the desired view
        position: [0, 0, 4],
      }}
    >
      <ambientLight intensity={10.3} />
      <pointLight position={[-10, -10, -10]} intensity={10.4} />
      <Globe />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeScene;

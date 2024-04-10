"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeMesh from "./three-mesh";
import ThreeCountries from "./three-countries";

const Globe = () => {
  return (
    <group scale={[2.5, 2.5, 2.5]}>
      <ThreeMesh />
      <ThreeCountries />
      <pointLight position={[10, 0, 0]} intensity={100} />
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas gl={{ antialias: false, alpha: true }} opacity={0}>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 4]}
        fov={70}
        filmOffset={20.0}
      />
      <ambientLight intensity={10.0} color="#f0f0f0" />
      <spotLight position={[0, 0, 100]} color="#f0f0f0" intensity={100.0} />
      <spotLight position={[0, 100, 0]} color="#f0f0f0" intensity={100.0} />
      <spotLight position={[0, -100, 0]} color="#f0f0f0" intensity={100.0} />
      <group>
        <Globe />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeScene;

import React from "react";

const ThreeMesh = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      {/* glossy shiny object */}
      <meshPhysicalMaterial color="#232323" roughness={1.0} metalness={0.5} />
    </mesh>
  );
};

export default ThreeMesh;

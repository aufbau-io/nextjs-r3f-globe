import React from "react";

const ThreeMesh = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      {/* glossy shiny object, not physicalMaterial */}
      <meshStandardMaterial color="#0b0b0b" />
      {/* <meshToonMaterial color="#232323" shininess={100} /> */}
    </mesh>
  );
};

export default ThreeMesh;

import React from "react";

const ThreeMesh = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      <meshPhongMaterial color="#090909" />
    </mesh>
  );
};

export default ThreeMesh;

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function GlassesModel(props) {
  const ref = useRef();
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/vuzix_blade_smart_glasses.glb`);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={hovered ? 1.2 : 1.2}
      position={[0, -0.3, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    />
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/vuzix_blade_smart_glasses.glb`);

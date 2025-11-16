"use client";

import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Fluid } from "./fluid";

export default function Page() {
  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-black">
      <Canvas>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 1]}
          left={-0.5}
          right={0.5}
          top={0.5}
          bottom={-0.5}
          near={0.1}
          far={2}
        />
        <Fluid />
      </Canvas>
    </div>
  );
}

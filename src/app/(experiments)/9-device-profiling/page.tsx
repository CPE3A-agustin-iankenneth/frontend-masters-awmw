"use client";

import { OrthographicCamera, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useFluid } from "./fluid";
import * as THREE from "three";

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
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const logo = useTexture("/m-logo");

  const { density } = useFluid();

  return (
    <mesh geometry={quadGeometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uDensity: { value: density.read },
          uLogo: { value: logo },
        }}
      />
    </mesh>
  );
}

const vertexShader = /*glsl*/ ``;

const fragmentShader = /*glsl*/ ``;

const quadGeometry = new THREE.BufferGeometry();
const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
quadGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 2));
quadGeometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

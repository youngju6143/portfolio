import { Canvas, useFrame } from '@react-three/fiber';
import { Clouds, Cloud, CameraControls, Sky as SkyImpl, useFaceControls } from "@react-three/drei"
import * as THREE from 'three';
import { useRef } from 'react';

function Sky() {
  const ref = useRef()
  const cloud0 = useRef()
  const { color, x, y, z, range, ...config } = useFaceControls({
    seed: { value: 1, min: 1, max: 10, step: 0.1 },
    segments: { value: 20, min: 1, max: 80, step: 1 },
    volume: { value: 6, min: 0, max: 50, step: 0.1 },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
    fade: { value: 10, min: 0, max: 400, step: 1 },
    growth: { value: 4, min: 0, max: 10, step: 1 },
    speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
    x: { value: 6, min: 0, max: 200, step: 1 },
    y: { value: 1, min: 0, max: 200, step: 1 },
    z: { value: 1, min: 0, max: 200, step: 1 },
    color: "white",
  })
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 5) / 4
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) / 4
    cloud0.current.rotation.y -= delta
  })
  return (
    <>
      <SkyImpl color="#E3EFF8"/>
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={30} range={range}>
          <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} />
          <Cloud concentrate="outside" growth={200} color="#ffccdd" opacity={1.25} seed={0.3} bounds={300} volume={300} />
        </Clouds>
      </group>
    </>
  )
}


function App() {
  return (
    <Canvas 
      camera={{ position: [0, -10, 10], fov: 90 }}
      style={{width: '100vw', height: '100vh'}}  
    >
    <Sky />
    <ambientLight intensity={Math.PI / 1.5} />
    <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
    <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
    <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />
    <CameraControls minDistance={150} maxDistance={150} />
  </Canvas>
  );
}

export default App;

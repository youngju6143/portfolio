import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import simter from './assets/simter.jpg'
import writeroom from './assets/writeroom.jpg'
import { OrbitControls } from '@react-three/drei'


function Simter() {
  const simterMap = useLoader(TextureLoader, simter);
  return (
    <mesh position={[-3, 0, 0]}> {/* Simter의 위치를 왼쪽으로 조정 */}
      <boxGeometry args={[5, 3, 0.2]} />
      <meshBasicMaterial 
        map={simterMap} 
        roughness={0.1} // 거칠기 감소
        metalness={0.1} // 약간의 금속성 추가
        />
    </mesh>
  );
}

function Writeroom() {
  const writeroomMap = useLoader(TextureLoader, writeroom);
  return (
    <mesh position={[3, 0, 0]}> {/* Writeroom의 위치를 오른쪽으로 조정 */}
      <boxGeometry args={[5, 3, 0.2]} />
      <meshBasicMaterial 
        map={writeroomMap} 
        roughness={0.1} // 거칠기 감소
        metalness={0.1} // 약간의 금속성 추가
      />
    </mesh>
  );
}


export default function App() {
  return (
    <Canvas 
      style={{ width: '100%', height: '100vh' }}
      camera={{ position: [0, 0, 15], fov: 75 }}>
     <ambientLight intensity={1} /> {/* 조명 추가 */}
      <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          maxDistance={50}
        />
        <Simter />
        <Writeroom />
      </Suspense>
    </Canvas>
  );
}


// import { Canvas } from '@react-three/fiber'
// import './App.css'
// import { OrbitControls } from '@react-three/drei'
// import { ShibaModel } from '../public/models/shiba/shiba.jsx'

// function App() {
//   return (
//     <>
//       <Canvas style={{ width: "400px", height: "400px" }}>
//         <OrbitControls/>
//         <group>
//             <ShibaModel scale={[2, 2, 2]} />
//         </group>
//       </Canvas>
//     </>
//   )
// }

// export default App


import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {

  return (
    <div className='App'>
      <Canvas>
        {/* 회전 및 마우스 휠로 확대 / 축소 가능 */}
        {/* autoRotate={true} : 자동 회전*/}
        <OrbitControls autoRotate={true} />
        <mesh>
          {/* 빛 추가 -> 색상 보임 */}
          <ambientLight intensity={4} />
          {/* 박스 개체 하나 만듦 */}
          <boxGeometry args={[1, 1, 1]} /> 
          {/* 색상 추가 */}
          <meshStandardMaterial attach="material" color={0xFF99CC} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

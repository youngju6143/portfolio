import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Cube() {
  return (
    <div className="canvas">
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
          <meshStandardMaterial attach="material" color={0xff99cc} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Cube;

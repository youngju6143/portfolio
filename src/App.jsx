import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky,
  useFaceControls,
} from "@react-three/drei";
import * as THREE from "three";
import * as S from "./App.style";
import { useEffect, useRef, useState } from "react";
import GlobalStyle from "./GlobalStyle"; // 경로는 실제 파일 위치에 맞게 조정
import Test from "./Test";
import Title from "./pages/Main/components/Title/Title";
import Profile from "./pages/Main/components/Profile/Profile";

function SkyComponent() {
  const ref = useRef();
  const cloud0 = useRef();

  // useFaceControls를 통한 구름 컨트롤 설정
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
  });

  // useFrame을 사용하여 스크롤과 배경 애니메이션을 적용
  useFrame((state, delta) => {
    // 하늘의 회전 속도
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 5) / 4;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) / 4;
    cloud0.current.rotation.y -= delta;

    // 스크롤 값에 따라 태양의 위치 변경 (일단 주석 처리 후 나중에 확인)
    // state.scene.children[0].sunPosition.set(5, scrollY / 500, 10);
  });

  return (
    <>
      {/* Sky 컴포넌트 */}
      <Sky
        style={{ width: "100%" }}
        distance={45000}
        sunPosition={[5, 1, 10]}
        inclination={0.6}
        azimuth={0.25}
      />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={30} range={range}>
          <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} />
          <Cloud
            concentrate="outside"
            growth={200}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={300}
            volume={300}
          />
        </Clouds>
      </group>
    </>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Container>
        {/* Canvas는 고정된 배경으로 설정 */}
        <Canvas
          camera={{ position: [0, -10, 10], fov: 90 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <SkyComponent scrollY={scrollY} />
          <ambientLight intensity={Math.PI / 1.5} />
          <spotLight
            position={[0, 40, 0]}
            decay={0}
            distance={45}
            penumbra={1}
            intensity={100}
          />
          <spotLight
            position={[-20, 0, 10]}
            color="red"
            angle={0.15}
            decay={0}
            penumbra={-1}
            intensity={30}
          />
          <spotLight
            position={[20, -10, 10]}
            color="red"
            angle={0.2}
            decay={0}
            penumbra={-1}
            intensity={20}
          />
          <CameraControls minDistance={150} maxDistance={150} />
        </Canvas>

        <Title />
        <Profile scrollY={scrollY} />
        <Test scrollY={scrollY} />
      </S.Container>
    </>
  );
}

export default App;

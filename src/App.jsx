import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import * as S from "./App.style";
import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle"; // 경로는 실제 파일 위치에 맞게 조정
import Title from "./pages/Main/components/Title/Title";
import Profile from "./pages/Main/components/Profile/Profile";
import Project from "./pages/Main/components/Project/Project";
import Skill from "./pages/Main/components/Skill/Skill";
import Background from "./pages/Main/components/Background/Background";

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
          <Background scrollY={scrollY} />
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
        <S.ScrollSnapWrap>
          <S.SnapDiv>
            <Title />
          </S.SnapDiv>
          <S.SnapDiv>
            <Profile />
          </S.SnapDiv>
          <S.SnapDiv>
            <Skill />
          </S.SnapDiv>
          <S.SnapDiv>
            <Project />
          </S.SnapDiv>
        </S.ScrollSnapWrap>
      </S.Container>
    </>
  );
}

export default App;

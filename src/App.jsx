import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import * as S from "./App.style";
import GlobalStyle from "./GlobalStyle";
import Title from "./pages/components/Title/Title.jsx";
import Profile from "./pages/components/Profile/Profile.jsx";
import Project from "./pages/components/Project/Project.jsx";
import Skill from "./pages/components/Skill/Skill.jsx";
import Background from "./pages/components/Background/Background.jsx";

function App() {
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

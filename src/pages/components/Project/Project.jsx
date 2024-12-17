import * as S from "../Profile/Profile.style";
import * as T from "./Project.style";

import writeroom from "./assets/writeroom.jpg";
import simter from "./assets/simter.jpg";

function Project() {
  return (
    <S.Container>
      <S.Title>my PROJECT</S.Title>
      <S.Bottom>
        <S.Infos isProject={true}>
          <T.Wrapper>
            <img src={writeroom} alt="writeroom" />
          </T.Wrapper>
          <T.Wrapper>
            <img src={simter} alt="writeroom" />
          </T.Wrapper>
        </S.Infos>
      </S.Bottom>
    </S.Container>
  );
}

export default Project;

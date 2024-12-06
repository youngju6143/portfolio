import * as S from "../Profile/Profile.style";
import * as T from "./Project.style";

function Project() {
  return (
    <S.Container>
      <S.Title>my PROJECT</S.Title>
      <S.Bottom>
        <S.Infos isProject={true}>
          <T.Wrapper></T.Wrapper>
          <T.Wrapper></T.Wrapper>
        </S.Infos>
      </S.Bottom>
    </S.Container>
  );
}

export default Project;

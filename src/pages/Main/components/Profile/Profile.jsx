import * as S from "./Profile.style";
import profile from "../../../../assets/myProfile.webp";

function Profile({ scrollY }) {
  // 스크롤이 100 이상일 때 이름이 나타나도록 설정
  const visible = scrollY > 100;

  return (
    <S.Container visible={visible}>
      <S.Title>my PROFILE</S.Title>
      <S.Bottom>
        <S.Profile src={profile} alt="profile" />
        <S.Infos>
          <S.Info>
            <h3>Name</h3>
            <p>장영주</p>
          </S.Info>
          <S.Info>
            <h3>Birth</h3>
            <p>2003.04.28</p>
          </S.Info>
          <S.Info>
            <h3>Tel</h3>
            <p>010-2370-6143</p>
          </S.Info>
          <S.Info>
            <h3>Mail</h3>
            <p>youngju6143@gmail.com</p>
          </S.Info>
          <S.Info>
            <h3>Major</h3>
            <p>경희대학교 컴퓨터공학과 재학</p>
          </S.Info>
        </S.Infos>
      </S.Bottom>
    </S.Container>
  );
}

export default Profile;

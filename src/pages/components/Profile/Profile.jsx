import * as S from "./Profile.style";
import profile from "../../../assets/myProfile.webp";

function Profile() {
  const portfolio = [
    {
      year: "2023",
      infos: [
        {
          date: "03 - 12",
          info: "경희대학교 컴퓨터공학부 학술동아리 N.E.T 교육부장",
        },
        { date: "09 - 02/2024", info: "UMC 5기 WEB 파트원" },
      ],
    },
    {
      year: "2024",
      infos: [
        {
          date: "01 - 12",
          info: "경희대학교 컴퓨터공학부 학술동아리 N.E.T 회장",
        },
        {
          date: "10.05",
          info: "예술적인 소프트웨어 웹/앱 분야 대상",
        },
        { date: "07 - 12", info: "경희대학교 KHUDA 6기 Member" },
        {
          date: "07 - 11",
          info: "경희대학교 구름톤 유니브 3기 Front-End Member & 임원",
        },
        {
          date: "09 - 09/2025",
          info: "GDG on Campus: KHU 1기 Front-End Member",
        },
      ],
    },
  ];
  return (
    <S.Container>
      <S.Title>my PROFILE</S.Title>
      <S.Bottom>
        <S.Profile>
          <img src={profile} alt="profile" />
          <h3>장영주</h3>
          <p>
            안녕하세요 꾸준히 성장하고 있는
            <br /> 프론트엔드 개발자 장영주입니다 🍀
          </p>
        </S.Profile>
        <S.Infos>
          {portfolio.map((yearItem) => (
            <section key={yearItem.year}>
              <h1>{yearItem.year}</h1>
              {yearItem.infos.map((infoItem, index) => (
                <S.Info key={index}>
                  <h3>{infoItem.date}</h3>
                  <p>{infoItem.info}</p>
                </S.Info>
              ))}
            </section>
          ))}
        </S.Infos>
      </S.Bottom>
    </S.Container>
  );
}

export default Profile;

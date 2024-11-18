import skillIcons from "../../../datas/skillIcons";
import * as S from "../Profile/Profile.style";
import * as T from "./Skill.style";

function Skill() {
  const icons = skillIcons;

  return (
    <S.Container>
      <S.Title>my SKILL</S.Title>
      <T.Bottom>
        {Array(Math.ceil(icons.length / 5))
          .fill(null)
          .map((_, groupIndex) => (
            <T.Container key={groupIndex}>
              {icons
                .slice(groupIndex * 5, groupIndex * 5 + 5)
                .map((icon, iconIndex) => (
                  <T.Wrapper key={iconIndex}>
                    <T.SkillIcon url={icon.path} />
                    <T.Info>
                      <p>{icon.name}</p>
                    </T.Info>
                  </T.Wrapper>
                ))}
            </T.Container>
          ))}
      </T.Bottom>
    </S.Container>
  );
}

export default Skill;

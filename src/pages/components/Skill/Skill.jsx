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
            <T.SkillContainer key={groupIndex}>
              {icons
                .slice(groupIndex * 5, groupIndex * 5 + 5)
                .map((iconPath, iconIndex) => (
                  <T.SkillIcon key={iconIndex} src={iconPath} alt="SkillIcon" />
                ))}
            </T.SkillContainer>
          ))}
      </T.Bottom>
    </S.Container>
  );
}

export default Skill;

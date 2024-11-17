import * as S from "../Profile/Profile.style";
import * as T from "./Skill.style";

function Skill() {
  return (
    <S.Container>
      <S.Title>my SKILL</S.Title>
      <T.Bottom>
        <T.SkillContainer>
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
        </T.SkillContainer>
        <T.SkillContainer>
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
        </T.SkillContainer>
        <T.SkillContainer>
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
          <T.SkillIcon />
        </T.SkillContainer>
      </T.Bottom>
    </S.Container>
  );
}

export default Skill;

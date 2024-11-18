import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4%;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
  width: 50%;
  height: 20%;
  // border: 1px black solid;
`;

export const SkillIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;

  cursor: pointer;
`;

import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
  width: 50%;
  height: 20%;
  // border: 1px black solid;
`;

export const SkillIcon = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  padding: 8% 20%;
  border-radius: 10px;
  transform: translate(25%, -50%);
  background-color: black;
  opacity: 0;
  // visibility: hidden;
  z-index: 100;

  p {
    width: 100%;
    margin: 0 4%;
    font-size: 1rem;
    color: white;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  ${SkillIcon}:hover + ${Info} {
    opacity: 0.8;
  }
`;

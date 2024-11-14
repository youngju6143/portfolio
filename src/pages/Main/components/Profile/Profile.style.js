import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 90vh;
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4%;
  transition: opacity 0.5s ease-in-out;

  background: rgba(0, 0, 0, 0.5);

  border-radius: 30px;
`;
export const Title = styled.h1`
  width: 95%;
  margin: 8% 0 2% 5%;
  // border: 1px solid black;
  font-size: 4.5rem;
  font-family: "GumiRomanceTTF", sans-serif;
  color: #fff;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4%;
  margin-top: 2%;
`;
export const Profile = styled.img`
  object-fit: cover;
  width: 300px;
  // height: 50vh;
  margin-left: 8%;
`;

export const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // border: 1px solid black;

  h1 {
    font-family: "GumiRomanceTTF", sans-serif;
    margin: 1% 0 1% 3%;
    font-size: 2rem;
    color: #ffc4c4;
  }
  section {
    width: 100%;
  }
`;
export const Info = styled.div`
  margin-left: 5%;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;

  h3 {
    font-family: "GumiRomanceTTF", sans-serif;
    margin: 0.5% 0;
    font-size: 1rem;
    text-align: center;
    color: #ffc4c4;
  }

  p {
    font-family: "NanumSquareRound", sans-serif;
    margin: 0.5% 0;
    font-size: 1rem;
    color: #fff;
  }
`;

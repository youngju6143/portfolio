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
  opacity: ${(props) => props.visible ? '1' : '0'};
  transition: opacity 0.5s ease-in-out;

  background: rgba(255, 255, 255, 0.5);

  border-radius: 30px;
  box-shadow: 10px 5px 5px #D9D9D9;


`
export const Title = styled.h1`
  width: 95%;
  margin-left: 5%;
  // border: 1px solid black;
  font-size: 4.5rem;
  font-family: 'GumiRomanceTTF', sans-serif;

`
export const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4%;
  margin-top: 2%;
`
export const Profile = styled.img`
  object-fit: cover;
  width: 300px;
  // height: 50vh;
  margin-left: 5%;
`

export const Infos = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // border: 1px solid black;
`
export const Info = styled.div`
  margin-left: 10%;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10%;

  h3 {
    font-family: 'GumiRomanceTTF', sans-serif;
    margin: 1% 0;
    font-size: 2rem;
    text-align: center;
    color: #FFB3B3;
  }

  p {
    font-family: 'NanumSquareRound', sans-serif;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;    
  }
`
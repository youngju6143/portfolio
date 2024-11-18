import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ScrollSnapWrap = styled.div`
  scroll-snap-type: y mandatory;

  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
export const SnapDiv = styled.div`
  scroll-snap-align: center;
`;

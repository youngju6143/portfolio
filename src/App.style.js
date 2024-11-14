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
  -webkit-overflow-scrolling: touch; /* 모바일에서 부드러운 스크롤을 위해 추가 */

  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
export const SnapDiv = styled.div`
  scroll-snap-align: start;
`;

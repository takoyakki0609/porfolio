import styled, { keyframes } from "styled-components";

const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

export const Container = styled.section`
  background-color: #f5f5f0;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: fixed;
`;
export const Frontend = styled.div`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${hue} 10s infinite linear;
  font-size: 9.1rem;
  font-weight: 800;
`;
export const PortFolio = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  color: #fca311;
  letter-spacing: 1.2vw;
  font-weight: 900;
`;

import styled from "styled-components";

export const LoaderContainer = styled.div `
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderMain = styled.div `
  width: 130px;
  height: 130px;
  border-bottom: 5px solid #5b5f97;
  border-radius: 50%;
  animation: rotate 800ms linear infinite;

  @keyframes rotate {
    to {
      transform: rotateZ(-360deg);
    }
  }
`;
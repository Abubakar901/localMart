import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: auto;
  display: flex;
`;

export const AdminMainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  text-align: center;

  @media (max-width: 925px) {
    width: 94%;
    margin-left: auto;
    height: 100vh;
    padding-top: 20px;
  }

  @media (max-width: 680px) {
    overflow: auto;
    width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  h2 {
    font-size: 40px;
    color: #5b5f97;

    @media (max-width: 1055px) {
      font-size: 36px;
    }

    @media (max-width: 590px) {
      font-size: 30px;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-left: 2px solid purple;
  height: auto;
`;

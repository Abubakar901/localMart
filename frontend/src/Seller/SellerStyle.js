import styled from "styled-components";

export const MainContainer = styled.div `
  width: 100%;
  min-height: 500px;
  max-height: auto;
  display: flex;
`;

export const SellerMainContainer = styled.div`
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

  @media (max-width: 800px) {
    width: 93%;
  }

  @media (max-width: 760px) {
    width: 92%;
  }

  @media (max-width: 715px) {
    width: 91%;
  }

  @media (max-width: 635px) {
    width: 90%;
  }

  @media (max-width: 680px) {
    overflow: auto;
    width: 100%;
  }
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
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

  > select {
    width: 250px;
    border-radius: 7px;
    font-size: 20px;
    padding: 2px;
    padding-left: 15px;
    font-weight: 600;
    text-transform: capitalize;

    @media (max-width:385px) {
    font-size:18px;
    width: 200px;
  }
  }
`;

export const BottomContainer = styled.div `
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
`;

export const ShopLabels = styled.label `
  font-size: 25px;
  margin-top: 10px;
  font-weight: 600;

  @media (max-width: 560px) {
    font-size: 22px;
  }

  @media (max-width: 385px) {
    font-size: 20px;
  }

  @media (max-width:345px) {
    font-size:18px;
  }
`;
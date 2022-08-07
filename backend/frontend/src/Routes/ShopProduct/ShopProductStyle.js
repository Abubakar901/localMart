import styled from "styled-components";

export const ShopProductMainContainer = styled.div `
  width: 95%;
  margin: 0 auto 20px;
  min-height: 500px;
  max-height: auto;
  background-color: #cfe2f3;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  font-weight: 700;
  padding: 0 40px;

  @media (max-width: 1253px) {
    padding: 0;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 435px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    font-size: 40px;
    color: #5b5f97;
    margin-left: 20px;

    @media (max-width: 745px) {
      font-size: 35px;
    }

    @media (max-width: 585px) {
      font-size: 30px;
    }

    @media (max-width: 445px) {
      font-size: 25px;
      text-align: center;
    }
  }
`;

export const SearchSideContainer = styled.div `
  display: flex;
  padding: 10px;
  margin-right: 20px;

  @media (max-width: 435px) {
    margin-right: 0;
  }

  @media (max-width: 360px) {
    width: 300px;
  }

  > input {
    width: 350px;
    outline: none;
    border: 2px solid #5b5f97;
    border-radius: 10px;
    padding: 5px 20px;
    color: #5b5f97;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 585px) {
      width: 300px;
    }

    @media (max-width: 360px) {
      width: 300px;
    }

    ::placeholder {
      color: #5b5f97;
    }
  }
`;

export const ShopProductBottomContainer = styled.div `
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

export const NoProductFoundContainer = styled.div `
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 30px;
    margin: 10px;
    color: #5b5f97;
    font-weight: 700;

    @media (max-width: 575px) {
      font-size: 25px;
    }

    @media (max-width: 425px) {
      font-size: 20px;
    }

    @media (max-width: 325px) {
      font-size: 18px;
    }
  }
`;
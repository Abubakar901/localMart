import styled from "styled-components";
import { Link } from "react-router-dom";

export const SellerboardMainContainer = styled.div `
  width: 100%;
  display: flex;
  min-height: 500px;
  margin: 0;
  max-height: auto;
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  font-weight: 700;

  @media (max-width: 470px) {
    padding-left: 30px;
    width: auto;
  }

  @media (max-width: 470px) {
    padding-left: 50px;
  }

  h2 {
    font-size: 40px;
    margin: 0;

    @media (max-width: 890px) {
      font-size: 35px;
    }

    @media (max-width: 620px) {
      font-size: 30px;
    }

    @media (max-width: 470px) {
      font-size: 25px;
    }
  }
`;

export const SellerInnerContainer = styled.div `
  width: 100%;
  padding-top: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AmountContainer = styled.div `
  background-color: #93c47d;
  margin-top: 30px;
  padding: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 890px) {
    padding: 5px 0;
  }

  @media (max-width: 620px) {
    margin-top: 10px;
  }

  > p {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 890px) {
      font-size: 20px;
    }
    @media (max-width: 470px) {
      padding-left: 30px;
      width: auto;
    }

    @media (max-width: 470px) {
      padding-left: 50px;
    }
  }
`;

export const CircleContainer = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 785px) {
    padding-left: 40px;
  }

  @media (max-width: 575px) {
    padding-left: 60px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const CircleLinked = styled(Link)
`
  text-decoration: none;
  margin: 0;
  background-color: #e69138;
  color: #fff;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 670px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    padding: 0;
    height: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 390px) {
    width: 70%;
    margin-left:40px;
  }

  > h6 {
    font-size: 22px;

    @media (max-width: 670px) {
      font-size: 20px;
    }

    @media (max-width: 500px) {
      margin: 0;
    }
  }

  p {
    font-size: 22px;
    font-weight: 600;

    @media (max-width: 670px) {
      font-size: 20px;
      padding-top: 10px;
    }
  }

  :hover {
    color: #fff;
  }
`;

export const LineChart = styled.div `
  width: 90%;
  margin: 10px auto 30px;

  @media (max-width: 925px) {
    margin-left: 80px;
  }

  @media (max-width: 875px) {
    width: 80%;
  }

  @media (max-width:460px){
    width: 70%;
  }
`;
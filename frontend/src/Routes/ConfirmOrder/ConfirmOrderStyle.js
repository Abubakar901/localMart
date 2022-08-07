import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const MainContainer = styled.div `
  width: 80%;
  min-height: 500px;
  max-height: auto;
  margin: 40px auto;
  justify-content: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 1500px) {
    width: 90%;
  }

  @media (max-width: 1170px) {
    flex-direction: column;
    margin: 20px auto 40px;
  }
`;

export const ConfirmOrderLeft = styled.div `
  display: flex;
  flex-direction: column;
  height: auto;
  width: 68%;

  @media (max-width: 1170px) {
    width: 100%;
  }
`;

export const ConfirmOrderBottom = styled.div `
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;

  @media (max-width: 1170px) {
    padding-top: 0;
  }

  > h5 {
    margin-left: 70px;
  }
`;

export const ConfirmOrderTop = styled.div `
  text-align: left;
  color: #5b5f97;
  margin: 20px 0 20px;

  h5 {
    font-size: 30px;
    padding-left: 40px;

    @media (max-width: 1235px) {
      font-size: 28px;
    }

    @media (max-width: 505px) {
      font-size: 26px;
    }
  }
`;

export const ConfirmOrderSingleContainer = styled.div `
  width: auto;
  display: flex;
  padding-left: 70px;
  padding-right: 20px;

  @media (max-width: 1005px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  @media (max-width: 505px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  > h6 {
    font-size: 20px;
    margin-right: 10px;
    line-height: 2;

    @media (max-width: 1235px) {
      font-size: 18px;
    }

    @media (max-width: 505px) {
      font-size: 16px;
    }
  }
`;

export const ConfirmOrderBreakLine = styled.hr `
  width: ${(props) => props.width || "95%"};
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ConfirmOrderProducts = styled.div `
  margin-left: 70px;
  margin-right: 70px;

  @media (max-width: 785px) {
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const EachProducts = styled.div `
  display: flex;
  background-color: #fff;
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 785px) {
    width: 60%;
    padding: 10px;
    margin: 10px;
  }

  @media (max-width: 695px) {
    width: 70%;
  }

  @media (max-width: 675px) {
    width: 80%;
  }

  @media (max-width: 595px) {
    width: 100%;
  }

  @media (max-width: 385px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
  }

  @media (max-width: 335px) {
    width: 80%;
  }

  > img {
    height: 100px;
    width: 150px;
    margin-right: 20px;

    @media (max-width: 905px) {
      width: 130px;
    }

    @media (max-width: 785px) {
      width: 45%;
      height: 150px;
    }

    @media (max-width: 385px) {
      width: 90%;
      height: 100px;
      margin: 0 auto 10px;
    }
  }
`;

export const PartContainer = styled.div `
  display: flex;
  width: 100%;

  @media (max-width: 785px) {
    flex-direction: column;
    width: 50%;
  }

  @media (max-width: 385px) {
    width: 100%;
  }
`;

export const ConfirmOrderLink = styled(Link)
`
  color: #000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  text-transform: capitalize;

  @media (max-width: 785px) {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 385px) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const OtherContainer = styled.div `
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 785px) {
    margin: 0;
    justify-content: flex-start;
    align-items: stretch;
  }

  @media (max-width: 385px) {
    justify-content: center;
    align-items: center;
  }

  > h6 {
    margin-right: 10px;
    font-size: 20px;

    @media (max-width: 785px) {
      font-size: 17px;
      margin: 5px 10px;
    }

    @media (max-width: 465px) {
      font-size: 15px;
      margin: 5px;
    }
  }
`;

export const ConfirmOrderRight = styled.div `
  width: 25%;
  background-color: #fff;
  border: 2px solid #000;
  margin: 30px auto 0;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1170px) {
    margin: 0 auto;
    width: 40%;
  }

  @media (max-width: 820px) {
    width: 50%;
  }

  @media (max-width: 540px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 355px) {
    width: 90%;
  }

  > h5 {
    font-size: 30px;

    @media (max-width: 1075px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      margin: 0;
    }
  }
  > h6 {
    font-size: 25px;
    @media (max-width: 1075px) {
      font-size: 22px;
    }
  }
`;

export const SideOtherEachContainer = styled.div `
  width: 70%;
  margin: 7px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const SideOtherContainer = styled.div `
  width: 100%;
`;

export const ProceedToPaymentBtn = styled(Button)
`
  && {
    color: white;
    padding: 5px 10px;
    font-size: 17px;
    width: 70%;
    margin-top: 10px;
    text-transform: capitalize;
    background-color: #5b5f97;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: #5b5f97;
  }
`;
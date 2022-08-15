import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainContainer = styled.div `
  width: 100%;
  min-height: 500px;
  max-height: auto;
  background-color: #cfe2f3;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CartTopContainer = styled.div `
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  h4 {
    font-size: 40px;
    color: #5b5f97;
  }
`;

export const CartMainContainer = styled.div `
  margin-top: 10px;
  padding-bottom: 20px;
  width: 80%;
  height: auto;
  display: flex;

  @media (max-width: 1350px) {
    width: 95%;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const CartLeftContainer = styled.div `
  width: 75%;
  height: auto;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  max-height: auto;
  margin: 0;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
    min-height: auto;
  }

  @media (max-width: 785px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

export const CartProductContainer = styled.div`
  display: flex;
  height: height;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 95%;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 785px) {
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 5px;
    height: auto;
  }

  @media (max-width: 500px) {
    width: 70%;
  }

  @media (max-width: 350px) {
    width: 80%;
  }
`;

export const OneContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: initial;
  width: auto;
  margin-left: auto;

  @media (max-width: 785px) {
    width: 90%;
    margin: 5px auto;
    align-items: center;
  }
`;

export const BtnContainer = styled.div `
  height: 35px;
  width: 100px;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  > p {
    border-top: 2px solid black;
    background-color: #f9cb9c;
    margin-top: 15px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    border-bottom: 2px solid black;
  }
`;

export const SameBtn = styled.button `
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  background-color: #3d85c6;
`;

export const TwoContainer = styled.div `
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;

  @media (max-width: 785px) {
    width: 90%;
    margin: 0 auto;
    align-items: center;
  }

  @media (max-width: 540px) {
    width: 100%;
  }

  > p {
    font-size: 22px;
    font-weight: 600;

    @media (max-width: 645px) {
      font-size: 20px;
    }

    @media (max-width: 575px) {
      margin-bottom: 10px;
    }
  }
`;

export const RemoveItemBtn = styled(Button)
`
  && {
    color: white;
    font-size: 15px;
    padding: 5px 20px;
    background-color: #3d85c6;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 575px) {
    && {
      margin: 0;
    }
  }

  &&:hover {
    background-color: #3d85c6;
  }
`;

export const CartRightContainer = styled.div `
  width: 25%;
  display: flex;
  height: 100%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const TotalCardContainer = styled.div `
  width: 95%;
  height: 100%;
  margin: 5px;
  background-color: #fff;
  padding: 20px 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1100px) {
    width: 40%;
    margin: 10px auto;
  }

  @media (max-width: 785px) {
    width: 50%;
  }

  @media (max-width: 555px) {
    width: 60%;
  }

  @media (max-width: 475px) {
    width: 70%;
  }

  @media (max-width: 395px) {
    width: 80%;
  }

  @media (max-width: 345px) {
    width: 90%;
  }

  > h4 {
    font-size: 25px;
  }

  > h5 {
    font-size: 22px;
    margin-top: 20px;
  }
`;

export const CheckoutBtn = styled(Button)
`
  && {
    color: white;
    margin-top: 20px;
    padding: 3px 20px;
    font-size: 18px;
    background-color: #6aa84f;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1185px) {
    && {
      padding: 5px 10px;
      font-size: 15px;
    }
  }

  &&:hover {
    background-color: #6aa84f;
  }
`;

export const NoItemContaiener = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const NoItemBtn = styled(Button)
`
  && {
    color: white;
    font-size: 20px;
    margin-top: 5px;
    padding: 5px 30px;
    background-color: #5b5f97;
    border-radius: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 370px) {
    && {
      padding: 2px 20px;
      font-size: 18px;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;
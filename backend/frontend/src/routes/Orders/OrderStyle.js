import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { CommonBtn } from "../../GlobalStyle";

export const NoOrderContaiener = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  height: 500px;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const OrderLine = styled.hr`
  margin-top: 0;
  margin-bottom: 10px;
  width: 90%;
`;

export const OrderCard = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardMidContainer = styled.div`
    > p {
        font-size: 15px;
        font-weight:500;
        margin: 2px;
        text-transform: capitalize;
    }

  > h6 {
    margin: 3px;
    font-size: 18px;
    color: ${props => props.orderStatus || '#000'};
  }     
`;

export const OrderProductDetails = styled.div`
    @media(max-width:440px) {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

  }
`;

export const OrderProductContainer = styled.div`
  height:auto;
  width:100%;
  padding:20px;
  display:flex;

  @media(max-width:440px) {
    flex-direction:column;
  }

  > img {
      width: 150px;
      margin-right:20px;
      height:150px;

      @media(max-width:440px) {
        margin-right:0;
        width:100%;
        height:200px;
        margin-bottom:20px;
      }
  }
`;

export const CardTopContainer = styled.div`
  > h6 {
    margin: 3px;
    font-size: 20px;
  }

  > p {
    font-size: 15px;
    font-weight:500;
    margin: 2px;
    text-transform: capitalize;
  }
`;

export const CardBottomContainer = styled.div``;

export const ExploreProductsBtn = styled(CommonBtn)`
  && {
    color: white;
    margin-left: 0px;
    font-size: 20px;
    margin-top: 5px;
    padding: 3px 20px;
    background-color: #5b5f97;
    height: 48px;
    width: 300px;
    border-radius: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 500px) {
    && {
      padding: 3px 15px;
      font-size: 18px;
      width: auto;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;

export const OrderMainContainer = styled.div`
  width: 95%;
  height: auto;
  background-color: #cfe2f3;
  margin: 40px auto;
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 320px) {
    width: 98%;
  }
`;

export const OrderTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  font-weight: 700;
  padding: 0 60px;

  h4 {
    font-size: 45px;
    color: #5b5f97;
    text-transform: capitalize;
  }
`;

export const OrderBottomContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const DeleteBtn = styled(DeleteIcon)`
  margin-left: 10px;

  :hover {
    cursor: pointer;
  }
`;

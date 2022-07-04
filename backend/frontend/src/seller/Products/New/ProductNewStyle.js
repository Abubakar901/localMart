import styled from "styled-components";
import { CommonBtn } from "../../../GlobalStyle";

export const SellerShopForm = styled.form `
    border:2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > select {
    border: none;
    border-radius: 20px;
    width: 300px;
    height:40px;
    text-align: center;
  }
`;



export const ShopLabels = styled.label `
  font-size: 25px;
  font-weight: 600;
`;

export const ShopInputs = styled.input `
  border: none;
  border-radius: 10px;
  width: 300px;
  font-size: 15px;
  height:40px;
  margin:10px auto;
  padding: 2px 15px;
`;

export const ImageInputContainer = styled.div `
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:300px;
  align-items: center;
  height: auto;
`;

export const ImageOneContainer = styled.div `
  width: 100%;
  height: auto
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    > input {
        margin:10px auto;
        width:250px;
        padding:3px 5px;
        border-radius:8px;
        background-color: #fff;
        text-align: center;
    }  

`;

export const ImageTwoContainer = styled.div `
  width: 50%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  overflow: auto;

  > img {
    height: 70px;
    margin-right: 5px;
    width: 70px;
  }
`;

export const CreateShopBtn = styled(CommonBtn)
`
  && {
    color: white;
    margin-left: 0px;
    padding: 3px 20px;
    background-color: #5b5f97;
    width: 200px;
    height: 50px;
    margin-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: #5b5f97;
  }
`;
import styled from "styled-components";
import { CommonBtn } from "../../../GlobalStyle";

export const SellerShopForm = styled.form `
`;

export const FormTopContainer = styled.div `
    display: flex;
    border:2px solid red;
`;

export const FirstContainer = styled.div `
    display: flex;
    border:2px solid green;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

export const SecondContainer = styled.div `
    border:2px solid blue;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

export const EachContainer = styled.div `
    display: flex;
    margin-top:30px;
    margin-bottom: 30px;
`;

export const ShopLabels = styled.label `
    margin-right:30px;
    font-size: 22px;
    font-weight: 600;

`;

export const ShopInputs = styled.input `
    margin-right: 20px;
    border:none;
    border-radius: 30px;
    width: 300px;
    font-size: 15px;
    padding:2px 20px;
`;

export const ImageInputContainer = styled.div `
    margin-top:20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100px;

`;

export const ImageOneContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
>    input {
        font-size: 18px;
        border:2px solid #000;
        border-radius: 20px;
        outline: none;
        width:112px;
        background-color: #fff;
    }
`;

export const ImageTwoContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: auto;
    
    > img {
        height: 70px;
        margin-right:5px;
        width:70px;
    }
`;


export const CreateShopBtn = styled(CommonBtn)
`
    && {
        color: white;
        margin-left:0px;
        padding:3px 20px;
        background-color: #5b5f97;;
        width:200px;
        height: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;
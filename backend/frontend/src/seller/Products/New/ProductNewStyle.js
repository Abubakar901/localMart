import styled from "styled-components";
import { CommonBtn } from "../../../GlobalStyle";

export const SellerShopForm = styled.form`
`;

export const FormTopContainer = styled.div`
    margin-top:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const EachContainer = styled.div`
    display: flex;
    margin-top:10px;
    margin-bottom: 10px;

    >select{
        border:none;
        border-radius: 20px;
        width: 200px;
        text-align: center;
    }
`;

export const ShopLabels = styled.label`
    margin-right:30px;
    font-size: 25px;
    font-weight: 600;

`;

export const ShopInputs = styled.input`
    margin-right: 50px;
    border:none;
    border-radius: 30px;
    width: 300px;
    font-size: 15px;
    padding:2px 15px;
`;

export const ImageInputContainer = styled.div`
    margin-top:10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:auto;
`;

export const ImageOneContainer = styled.div`
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
        width:120px;
        background-color: #fff;
    }
`;

export const ImageTwoContainer = styled.div`
    width: 50%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100px;
    overflow: auto;
    
    > img {
        height: 70px;
        margin-right:5px;
        width:70px;
    }
`;


export const CreateShopBtn = styled(CommonBtn)`
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
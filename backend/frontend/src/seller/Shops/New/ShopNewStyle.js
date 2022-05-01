import styled from "styled-components";
import { CommonBtn } from "../../../GlobalStyle";

export const SellerShopForm = styled.form`
`;

export const FormTopContainer = styled.div`
    display: flex;
`;

export const FirstContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

export const SecondContainer = styled.div`

display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
`;

export const EachContainer = styled.div`
    display: flex;
    margin-top:30px;
    margin-bottom: 30px;
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
    margin-top:30px;
    margin-bottom: 30px;

    > img {
        width:100px;
        height: 70px;
        margin-right: 30px;
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
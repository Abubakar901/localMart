import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const DefaultContainer = styled(CommonBtn)`
    && {
        color: #fff;
        font-size:20px;
        margin-left:0px;
        text-transform: capitalize;
        padding:5px 15px;
        background-color: #6a329f;
        border-radius: 30px;
        height:45px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6a329f;
    }`;

export const CartLeftContainer = styled.div`
    width:80%;
    min-height:500px;
    max-height: auto;
    display: flex;
    flex-direction: column;
`;

export const CartContainer = styled.div`
    width:95%;
    min-height:500px;
    max-height: auto;
    margin:20px auto;
    display: flex;
`;


export const TotalCardContainer = styled.div`
    width: 20%;
    height:220px;
    margin:5px;
    background-color: #fff;
    padding:20px 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    > h4 {
        font-size: 30px;
        margin-top: 20px;
    }

    > h5 {
        font-size: 20px;
        margin-top:20px;
    }
`;

export const CheckoutBtn = styled(CommonBtn)`
    && {
    color: white;
    margin-left: 0px;
    margin-top: 20px;
    padding:3px 20px;
    background-color: #6aa84f;
    height: 38px;
    width:230px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6aa84f;
    }
`;
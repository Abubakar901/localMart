import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const MainContainer = styled.div`
    width:90%;
    height: 500px;
    background-color:#cfe2f3;
    margin: 40px auto;
    justify-content:center;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction:  column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:430px) {
        height: 300px;
    }
`;


export const ErrorPageContainer = styled.div`
    height: 500px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 555px) {
        padding:10px;
        text-align: center;
    }
    > h1 {
        font-size: 40px;
        font-weight: 700;

        @media (max-width: 768px) {
            font-size: 30px;
        }
        @media (max-width: 555px) {
            font-size: 1.7rem;
        }
    }
`;

export const ReturnHomeBtn = styled(CommonBtn)`
    && {
    color: white;
    margin-left:0;
    text-transform: capitalize; 
    font-size: 20px;
    margin-top:15px;
    padding:23px 20px;
    background-color: #5b5f97;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
    @media (max-width: 768px) {
        &&{
            padding:10px 20px;
            font-size: 17px;
            margin-top:10px;
        }
    }
    &&:hover {
        background-color:#5b5f97;
    }
`;
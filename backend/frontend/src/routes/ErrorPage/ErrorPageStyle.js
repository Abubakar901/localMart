import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const ErrorPageContainer = styled.div`
    height: 500px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 40px;
        font-weight: 700;
    }
`;

export const ReturnHomeBtn = styled(CommonBtn)`
    && {
    color: white;
    text-transform: capitalize; 
    font-size: 20px;
    margin-top:15   px;
    padding:23px 20px;
    background-color: #5b5f97;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }

    &&:hover {
        background-color:#5b5f97;
    }
`;
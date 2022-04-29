import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const LeftContainer = styled.div`
    width:50%;
    margin-top:30px;
    display: flex;
    justify-content:center;
    align-items: center;

    > img {
        width:400px;
        height:400px;
        border-radius: 50%;
    }
`;

export const RightContainer = styled.div`   
    width:50%;
    display: flex;
    flex-direction: column;
    min-height:500px;
    padding-top:40px;

    h3 {
        font-size: 35px;
        margin-top:20px;
    }

    h4 {
        font-size: 30px;
        margin-top:20px;
        color:#000;
    }

    h5 {
        font-size: 28px;
        margin-top:20px;
    }

    h6 {
        font-size: 22px;
        margin-top:20px;
    }
`;

export const EditProfileBtn = styled(CommonBtn)` 
    && {
    color: white;
    margin-left: 20px;
    padding:3px 20px;
    background-color: #ff6cbc;
    height: 38px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#ff6cbc;
    }
`;
import styled from "styled-components";
import { CommonBtn } from "../../../GlobalStyle";


export const MainContainer = styled.div `
    width:300px;
    height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TopContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    margin-top: 10px;
    font-weight: 700;

    h2 {
        font-size: 32px;
        margin-top:10px;
        color: #5b5f97;
    }
`;
export const EditShopFrom = styled.form `
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border:2px solid red;
    flex-direction:column;

    > input {
        font-size:18px;
        padding:2px 10px;
        border-radius:8px;
        margin:10px auto;
    }
`;

export const ImagePreview = styled.div `
    width:100%;
    border:2px solid green;
    display:flex;
    flex-direction: column;
    padding:5px 10px;

    > img {
        height:100px;
        width:40%;
    }
`;

export const UpdateBtn = styled(CommonBtn)
`
    && {
        color: white;
        margin-left: 0;
        padding:3px 20px;
        background-color:#5b5f97;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;
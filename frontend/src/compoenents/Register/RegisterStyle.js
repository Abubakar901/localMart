import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const RegisterContainer = styled.div`
    background-color: #5b5f97;
    padding:14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

    > p {
        font-size: 18px;
        color:#e1dede;
        margin-bottom: 10px;
    }
`;

export const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h6`
    font-size: 30px;
    color: #b8b8d1;
    margin-bottom:15px;
    font-weight: bold;
`;

export const LabelBox = styled.label`
    font-size: 18px;
    color:#e1dede;
`;

export const InputBox = styled.input`
    border-radius:10px;
    outline: none;
    border:none;
    width:250px;
    margin-bottom: 13px;
    padding:3px 20px;
`;

export const Button = styled(CommonBtn)`
    && {
        background-color: #9fc5e8;
        margin-top:10px;
        margin-left: 0;
        width: 250px;
        padding:10px 10px;
        font-size: 17px;
        height:40px;
    }
    &&:hover { 
        border:1px solid #fff;
        padding: 9px 9px;
        background-color:#6a329f;
    }
`;


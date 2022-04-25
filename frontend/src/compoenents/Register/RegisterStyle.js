import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const RegisterContainer = styled.div`
    background-color: #5b5f97;
    padding:14px;
    height: 563px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
    font-size: 40px;
    color: #b8b8d1;
    margin-top:10px;
    font-weight: bold;
    margin-bottom: 20px;
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
    margin-bottom: 19px;
    padding:3px 20px;
`;

export const SidebySide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    >img {
        height: 50px;
        border-radius: 50%;
        margin-right:10px;
        width: 50px;
    }

    > input {
        width: 100px;
        outline: none;
        border-radius: 30px;
    }
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


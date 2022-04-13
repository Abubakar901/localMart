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

export const Logo = styled.h4`
    font-size:40px;
    font-weight: 800;
    margin-top:10px;
    color:#fff;
    text-decoration: underline;
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
    font-weight: bold;
`;

export const LabelBox = styled.label`
    font-size: 20px;
    color:#e1dede;
    margin-bottom:5px;
`;

export const InputBox = styled.input`
    border-radius:10px;
    outline: none;
    border:none;
    width:250px;
    margin-bottom: 14px;
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
`;


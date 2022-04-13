import styled from 'styled-components';
import { CommonBtn } from '../../GlobalStyle';

export const LoginContainer = styled.div`
    background-color: #5b5f97;
    padding:14px;
    height: 555px;
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

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h6`
    font-size: 30px;
    color: #b8b8d1;
    margin-top:10px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const LabelBox = styled.label`
    font-size: 20px;
    color:#e1dede;
    margin-top:10px;
`;

export const InputBox = styled.input`
    border-radius:10px;
    outline: none;
    border:none;
    width:250px;
    margin-top: 10px;
    padding:3px 20px;
`;

export const ForgotPassLink = styled.p`
    color:#e1dede;
    margin-top: 2px;
    margin-bottom:25px;
    font-size: 15px;
    align-items: flex-end;
`;

export const Button = styled(CommonBtn)`
    && {
        background-color: #9fc5e8;
        margin-left: 0;
        width: 250px;
        padding:10px 10px;
        font-size: 17px;
        height:40px;
    }
`;

export const Line = styled.hr`
    color: #fff;
    margin:20px 3px 10px;
    border:2px solid #fff;
    width: 300px;
`;




import styled from 'styled-components';
import { CommonBtn } from '../../GlobalStyle';
import { StyledLink } from '../../GlobalStyle';

export const LoginContainer = styled.div`
    background-color: #5b5f97;
    padding:14px;
    height: 605px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
`;

export const DullText = styled.div`
    font-size: 18px;
    color:#e1dede;
     margin-bottom: 10px;
`;

export const LoginForm = styled.form`
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
    margin-top:5px;
    padding:3px 20px;
`;

export const ForgotPassLink = styled(StyledLink)`
    color:#e1dede;
    margin-top: 5px;
    margin-bottom:25px;
    font-size: 15px;
    align-items: flex-end;
`;

export const Button = styled(CommonBtn)`
    && {
        background-color: ${props => props.bg || '#9fc5e8'};
        margin-left: 0;
        width: 250px;
        margin-bottom: 14px;
        padding:10px 10px;
        font-size: 17px;
        height:40px;
        text-transform: ${props => props.transform || 'uppercase'};
    }

    &&:hover { 
        border:1px solid #fff;
        padding: 9px 9px;
        background-color:#6a329f;
    }
`;

export const Line = styled.hr`
    color: #fff;
    margin:10px 3px 10px;
    border:2px solid #fff;
    width: 300px;
`;




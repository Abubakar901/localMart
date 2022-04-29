import styled from "styled-components";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    
    > h4 {
        color:#5b5f97;
    }
    
    
`;

export const MainContainer = styled.div`
    width:90%;
    background-color: ${props => props.bg || '#cfe2f3'};
    margin: 40px auto;
    justify-content: ${props => props.equally || 'center'};
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction:  ${props => props.horizontal || 'column'};
    padding-top: 0px;
    padding-left: 0px;
    padding-right:0;
    padding-bottom:${props => props.innerspace || '20px'};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:  ${props => props.equally || 'space-between'};
    width: 90%;
    margin-top: 10px;
    margin-bottom: 0;
    margin-right: auto;
    margin-left: auto;
    font-weight: 700;

    h2 {
        font-size: 40px;
        margin-top:20px;
        color: #5b5f97;
    }

    h4 {
        font-size: 40px;
        color: #5b5f97;
    }
`;
export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: ${props => props.outerspace || '10px'};
    height: auto;

    h4 {
        font-size: 40px;
        color: #5b5f97;
    }
`;

export const  FormContainer = styled.form`
    display: flex;
    padding:10px;
    padding: 10px;
    
    > input {
         width:350px;
        outline: none;
        border: 2px solid #5b5f97;
        border-radius: 10px;
        padding: 5px 20px;
        color: #5b5f97;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

         ::placeholder {
             color: #5b5f97;
        }
     }
`;

export const CommonBtn = styled(Button)`
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


export const CardsContainer = styled.div`
    width:100%;
    margin: 5px auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`;

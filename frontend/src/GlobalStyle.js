import styled from "styled-components";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const MainContainer = styled.div`
    width:90%;
    background-color: #cfe2f3;
    margin: 40px auto;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column; 
    padding: 20px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 10px;
    margin-bottom: 0;
    margin-right: auto;
    margin-left: auto;
    font-weight: 700;

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
         width:200px;
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

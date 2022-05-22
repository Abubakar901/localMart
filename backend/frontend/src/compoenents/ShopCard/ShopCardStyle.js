import styled from "styled-components";
import Button from '@mui/material/Button';
import { StyledLink } from "../../GlobalStyle";
import Rating from '@mui/material/Rating';

export const RatingComp = styled(Rating)`
    && {    
        font-size: 30px;
    }

    @media (max-width: 386px) {
        && {
            font-size:1.3rem;
        }
    }

    @media (max-width:320px){
        &&{
            font-size: 20px;
        }
    }
`;

export const ShopLink = styled(StyledLink)`
    > img {
        border-radius: 10px;
        height: 150px;
        width: 250px;
        margin:10px;    
        border:1px solid #000;    
        
        @media (max-width: 1100px) {
            width: 200px;
        }
        
        @media (max-width: 635px){
            width:90%;
            margin:10px;
            height:auto;
        }

        @media (max-width: 320px) {
            width: 110px;
            height:110px;
        }
    }

    > h4 {
        font-size: 2rem;
        margin: 2px 3px;
        color: #5b5f97;

        @media (max-width:600px) {
            font-size:25px;
        }

        @media (max-width: 320px){
            font-size:20px;
        }
    }
    
    > h5 {
        margin-top:10px;
        font-size: 20px;
        color: #000;
        margin:3px;

        @media (max-width:600px) {
            font-size:18px;
            margin-left:0;
            margin-right:0;
        }

        @media (max-width: 320px){
            font-size:13px;
            margin-left:0;
            margin-right:0;
        }

        >span {
            color : green;
        }
    }

    > p {  
        color: #000;
        margin:5px;

        @media (max-width:600px) {
            font-size:15px;
        }

        @media (max-width: 320px){
            font-size:12px;
        }
    }
`;

export const ShopTwoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ShoppingCard = styled.div`
    background-color: #fff;
    margin-top: 20px;
    min-height: 456px;
    width:300px ;
    text-align: center;
    padding:5px;
    margin-left: 30px;
    margin-right: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    padding-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    
    @media (max-width:1385px) {
        width: 280px; 
        margin-left: 10px;
        margin-right: 10px;
    }

    @media (max-width: 1200px) {
        width: 280px;
        margin-left: 30px;
        margin-right: 20px;
    }

    @media (max-width: 1100px) {
        width: 250px;
    }

    @media (max-width: 645px) {
        min-height: auto;
    }
    @media (max-width: 635px){
        width:40%;
        margin-left:10px;
        margin-right: 10px;
    }

    @media (max-width: 320px) {
        min-height: 120px;
        width: 140px;
        margin-left: 7px;
        margin-right:7px;
    }
`;

export const ExploreShopBtn = styled(Button)`
    && {
        margin-top:5px;    
        color: #fff;
        width:200px;
        text-transform: capitalize;
        margin-bottom: 10px;
        font-size: 15px;
        background-color: ${props => props.bgcolor || '#bd2377'};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 635px){
       && {
        width:90%;
        padding:2px 2px;
        margin:5px auto 10px;
        font-size: 0.8rem;
       }
    }

    @media (max-width: 320px){
        && { 
            font-size:12px;
            width:120px;
        }
    }

    &&:hover {
        background-color: ${props => props.bgColor  || '#c74981'};
    }
`;




    


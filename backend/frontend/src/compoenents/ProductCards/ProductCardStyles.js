import styled from "styled-components";
import Button from '@mui/material/Button';
import { StyledLink } from "../../GlobalStyle";
import Rating from '@mui/material/Rating';

export const ProductLink = styled(StyledLink)`
    > img {
        text-align: center;
        border-radius: 10px;
        height: 175px;
        width: 200px;
        margin:7px;
        background-color: #fff;

        @media (max-width:660px) {
            height:120px;
            width:98%;
            margin:5px auto;
        }

    }

    > h4 {
        font-size: 40px;
        margin: 2px 3px;
        color: #5b5f97;
    }
    
    > h5 {
        font-size: 27px;
        margin: 5px 3px 0;
        color: #3d85c6;
    }

    > p {  
        color: #000;
    }
`;


export const ProductCard = styled.div`
    background-color: #fff;
    height:auto ;
    width:315px ;
    padding: 7px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:1530px) {
        width:260px ;
    }

    @media (max-width:660px) {
        width:45%;
        margin-left:10px;
        margin-right:10px;
        margin-bottom: 15px;
    }

    @media (max-width: 420px) {
        margin-left:5px;
        margin-right:5px;
    }
`;

export const ShopTwoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width:1530px) {
        flex-direction: ${props => props.side || 'initial'};
    }

    > span {
        font-size: 15px;
        color: #ff0000;
    }

    p {
        color: #5b5f97;
        font-weight: 500;
        margin-right:10px;
        margin-left:10px;
        
        @media (max-width:1530px) {
            
        margin-top:0;
        margin-bottom:0;
        }

        >span {
            color:#000;
        }
    }
`;

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

export const ExploreShopBtn = styled(Button)`
    && {
        margin-top:5px;    
        color: #fff;
        margin-right: 5px;
        margin-left: 5px;
        margin-bottom: 5px;
        text-transform: capitalize;
        width:90%;
        font-size: 15px;
        background-color: ${props => props.bgcolor || '#cc0000'};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width:660px){
        && {
            width:90%;
            padding:2px 2px;
            margin:10px auto;
        }
    }

    @media (max-width:1530px) {
        && {
            width:100px;
        }
    }

    &&:hover {
        background-color: ${props => props.bgcolor  || '#cc0000'};
    }
`;



    


import styled from "styled-components";
import Carousel from "react-multi-carousel";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export const HomeContainer = styled.div`
    width: 90%;
    margin:0 auto 20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    `;

export const ShopCardContainer = styled.div`
    padding: 10px 0 20px;
    margin-top: 40px;
    background-color: #D1d5fa;
    height: auto;
    border-radius: 15px;
    border:1px solid #5b5f97;
    padding-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > Link {
        text-decoration: none;
    }

`;


export const ExploreShopBtn = styled(Button)`
    && {
    color: white;
    background-color: #ff6cbc;
    height: 40px;
    padding:0 15px;
    margin-right: 50px;
    margin-top:5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
    }
`;


export const ShopCarousel = styled(Carousel)`
    width: 95%;
    margin:10px auto;
`;

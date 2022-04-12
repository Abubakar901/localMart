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
    margin-top: 40px;
    background-color: #D1d5fa;
    height: 480px;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > Link {
        text-decoration: none;
    }

`;

export const ShopCardHeader = styled.div`
    display: flex;
    padding-top:10px;
    justify-content: space-between;

    > h4 {
        margin-left: 20px;
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 30px;
        font-weight: 700;
        color:#F361E4;
    }
`;

export const ExploreShopBtn = styled(Button)`
    && {
    color: white;
    background-color: #ff6cbc;
    height: 40px;
    margin-right: 30px;
    margin-top:5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
    }
`;


export const ShopCarousel = styled(Carousel)`
    width: 97%;
    margin:10px auto;
`;

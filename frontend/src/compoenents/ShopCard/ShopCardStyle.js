import styled from "styled-components";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ShoppingCard = styled.div`
    background-color: #fff;
    margin-top: 20px;
    height: 420px;
    width:300px ;
    text-align: center;
    padding:5px;
    margin-left: 30px;
    margin-right: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    padding-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    :hover{ 
        cursor: pointer;
    }

    > img {
        border-radius: 10px;
        height: 150px;
        width: 250px;
        margin:10px;
    }

    > h4 {
        font-size: 27px;
        margin: 2px 3px;
        color: #5b5f97;
    }

    > p {
        text-align: center;
        font-size: 17px;
        width: 250px;
        height: 110px;
        margin: 5px auto;
    }
`;

export const ShopTwoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    > h5{ 
        font-size: 18px;
        margin:0px;
        margin-right:10px;
        font-weight: 500;
        color: #8fce00;
    }
    > h6 {
        font-size: 15px;
        margin:3px;
        display: flex;
        justify-content: center;
        color: #f00;
    }
`;

export const ExploreShopBtn = styled(Button)`
    && {
        margin-top:5px;    
        color: white;
        background-color: #ff6cbc;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
    }
`;




    


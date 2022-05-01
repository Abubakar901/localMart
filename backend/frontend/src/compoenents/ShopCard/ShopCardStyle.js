import styled from "styled-components";
import Button from '@mui/material/Button';
import { StyledLink } from "../../GlobalStyle";

export const ShopLink = styled(StyledLink)`
    > img {
        border-radius: 10px;
        height: 150px;
        width: 250px;
        margin:10px;    
        border:1px solid #000; 
    }

    > h4 {
        font-size: 30px;
        margin: 2px 3px;
        color: #5b5f97;
    }
    
    > h5 {
        margin-top:10px;
        font-size: 20px;
        color: #000;
        margin:3px;

        >span {
            color : green;
        }
    }

    > p {  
        color: #000;
        margin:5px;
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
    min-height: 466px;
    width:300px ;
    text-align: center;
    padding:5px;
    margin-left: 30px;
    margin-right: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    padding-top:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


`;

export const ExploreShopBtn = styled(Button)`
    && {
        margin-top:5px;    
        color: #fff;
        width:200px;
        margin-bottom: 10px;
        font-size: 15px;
        background-color: ${props => props.bgcolor || '#bd2377'};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: ${props => props.bgColor  || '#c74981'};
    }
`;




    


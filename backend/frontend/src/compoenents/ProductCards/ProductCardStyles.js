import styled from "styled-components";
import Button from '@mui/material/Button';
import { StyledLink } from "../../GlobalStyle";

export const ProductLink = styled(StyledLink)`
    > img {
        text-align: center;
        border-radius: 10px;
        min-height: 175px;
        height: 175px;
        width: 200px;
        margin:7px;
        background-color: #fff;

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
    margin-top: 20px;
    height:430px ;
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


`;

export const ShopTwoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    > span {
        font-size: 15px;
        color: #ff0000;
    }

    p {
        color: #5b5f97;
        font-weight: 500;
        margin-right:10px;
        margin-left:10px;

        >span {
            color:#000;
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
        width:125px;
        font-size: 15px;
        background-color: ${props => props.bgcolor || '#cc0000'};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: ${props => props.bgcolor  || '#cc0000'};
    }
`;



    


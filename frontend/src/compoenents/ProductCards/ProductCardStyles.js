import styled from "styled-components";
import Button from '@mui/material/Button';

export const ProductCard = styled.div`
    background-color: #d9ead3;
    margin-top: 20px;
    height: 410px;
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
        height:200px;
        width: 250px;
        margin:10px;
        padding:15px;
        background-color: #fff;
    }

    > h4 {
        font-size: 27px;
        margin: 3px 3px;
        color: #5b5f97;
    }

    > h5 {
        font-size: 27px;
        margin: 5px 3px 0;
        color: #3d85c6;
    }

`;

export const ShopTwoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    > span {
        font-size: 15px;
        color: #ff0000;
    }
`;

export const ExploreShopBtn = styled(Button)`
    && {
        margin-top:5px;    
        color: white;
        background-color: #2986cc;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #2986cc;
    }
`;




    


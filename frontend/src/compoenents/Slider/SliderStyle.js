import styled from 'styled-components';
import Button from '@mui/material/Button';

export const SliderInnerCard = styled.div`
    background-color: #fff;
    height: 370px;
    width:220px ;
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
        height: 100px;
        width: 170px;
        margin:10px 10px;
        border-radius: 8px;
    }

    > h5{ 
        font-size: 18px;
        margin:3px;
        color: #5b5f97;
        font-weight: 500;
    }

    > p {
        font-size: 15px ;
        text-align: center;
        width:200px;
        height: 110px;
        margin-left: auto;
        margin-right: auto;
        padding:10px;
        color: #000;
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
        color: #ff0000;
    }
`;

export const ExploreShopBtn = styled(Button)`
    && {
    color: white;
    margin-top: 10px;
    background-color: #ff6cbc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
    }
`;

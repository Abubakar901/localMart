import styled from 'styled-components';
import Button from '@mui/material/Button';

export const SliderInnerCard = styled.div`
    background-color: #fff;
    min-height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:220px ;
    text-align: center;
    padding:15px;
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

export const ShopDetailsBtn = styled(Button)`
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

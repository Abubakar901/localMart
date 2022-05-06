import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const DefaultContainer = styled(CommonBtn)`
    && {
        color: #fff;
        font-size:20px;
        margin-left:0px;
        text-transform: capitalize;
        padding:5px 15px;
        background-color: #6a329f;
        border-radius: 30px;
        height:45px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6a329f;
    }`;

export const CartLeftContainer = styled.div`
    width:80%;
    min-height:500px;
    max-height: auto;
    display: flex;
    flex-direction: column;
`;

export const CartContainer = styled.div`
    width:95%;
    min-height:500px;
    max-height: auto;
    margin:20px auto;
    display: flex;
`;


export const TotalCardContainer = styled.div`
    width: 20%;
    height:220px;
    margin:5px;
    background-color: #fff;
    padding:20px 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    > h4 {
        font-size: 30px;
        margin-top: 20px;
    }

    > h5 {
        font-size: 20px;
        margin-top:20px;
    }
`;

export const CheckoutBtn = styled(CommonBtn)`
    && {
    color: white;
    margin-left: 0px;
    margin-top: 20px;
    padding:3px 20px;
    background-color: #6aa84f;
    height: 38px;
    width:230px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6aa84f;
    }
`;

export const NoItemContaiener = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: 500;
`;

export const ExploreShoppingBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left: 0px;
        font-size: 20px;
        margin-top:5px;
        padding:3px 20px;
        background-color: #5b5f97;
        height: 48px;
        width:300px;
        border-radius: 20px;
        text-transform: capitalize;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;


export const CartProductContainer = styled.div`
    display: flex;
    height: 145px;
    width:98%;
    padding:10px 20px;
    margin:5px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > img {
        height: 120px;
        width: 170px;
        margin-right: 30px;
    }
`;

export const OneContainer = styled.div`
    margin-left:10px;
    display: flex;
    flex-direction:${props => props.vertical || 'column'};
    justify-content: ${props => props.spacing || 'initial'};
    width:${props => props.width || '15%'};
    > h4 {
        font-size: 30px;
    }

    > h5 {
        font-size: 25px;
    }   

    > p {
        margin-right:30px;
        font-size: 25px;
        font-weight: 600;
    }
`;

export const BtnContainer = styled.div`
    height:35px;
    width:100px;
    padding:5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    > p {
        border-top:2px solid black;
        background-color: #f9cb9c;
        margin-top:15px;
        padding:0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height:34px;
        border-bottom: 2px solid black;
    }
`;

export const SameBtn = styled.button`
    width:30px;
    height:30px; 
    border:0;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    background-color: #3d85c6;
`;

export const RemoveItemBtn = styled(CommonBtn)`
    && {
    color: white;
    margin-left: 0px;
    padding:3px 20px;
    background-color:  #3d85c6;
    height: 38px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #3d85c6;
    }
`;
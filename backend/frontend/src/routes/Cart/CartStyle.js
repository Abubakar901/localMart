import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const CartLeftContainer = styled.div`
    width:95%;
    min-height:500px;
    max-height: auto;
    display: flex;
    margin:5px auto;
    min-height:auto;
    max-height: auto;
    flex-direction: column;

    @media (max-width: 698px) {   
        flex-direction: row;
        flex-wrap: wrap;
    }
    
`;

export const CartContainer = styled.div`
    width:93%;
    margin:10px auto;
    display: flex;
    flex-direction: row-reverse;
`;

export const CartProductContainer = styled.div`
    display: flex;
    height: 145px;
    width:98%;
    padding:10px 20px;
    margin:5px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 698px) {   
        flex-direction: column;
        width:48%;
        height:auto;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 585px) {   
        width:45%;
        margin: 10px auto;
    }

    @media (max-width: 500px) {   
        width:95%;
    }
    > img {
        height: 120px;
        width: 170px;
        margin-right: 10px;

        @media (max-width: 770px) {   
            height: 120px;
            width: 130px;
            margin-right: 0px;
        }
    }
`;


export const OneContainer = styled.div`
    margin-left:20px;
    display: flex;
    flex-direction:${props => props.vertical || 'column'};
    justify-content: ${props => props.spacing || 'initial'};
    width:auto;
    
    @media (max-width: 750px) {   
        margin-left:10;
    }

    > h4 {
        font-size: 30px;
    }

    > h5 {
        font-size: 25px;
    } 
`;

export const TwoContainer = styled.div`
    margin-left:auto;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width:auto;
    padding-left:10px;

    @media (max-width: 698px) {   
        margin-left:0;
    }
    
    > p {
        margin-right:30px;
        font-size: 25px;
        font-weight: 600;

        @media (max-width: 830px) {   
            font-size: 20px;
            margin-right:0px;
        }
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
    text-transform: capitalize;
    height: 38px;
    width:200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 830px) {   
        && {
            width:auto;
        }
    }

    @media (max-width: 710px) {   
        && {
            width:auto;
            padding:3px 4px;
        }
    }

    &&:hover {
        background-color: #3d85c6;
    }
`;

export const TotalCardContainer = styled.div`
    width: 25%;
    height:220px;
    margin:5px;
    background-color: #fff;
    padding:20px 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    @media (max-width: 1100px) {   
        width: 35%;
    }

    @media (max-width: 785px) {   
        width: 50%;
    }

    @media (max-width: 610px) {   
        width: 100%;
    }

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
    width:220px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 1240px) {   
        &&{
            width:100%;
            padding:3px 0;
        }
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

    @media (max-width: 500px) {    
        font-size: 25px;
    }
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

    @media (max-width: 500px) {  
        && {
            padding:3px 15px;
            font-size: 18px;
            width:auto;
        }
    }
    &&:hover {
        background-color:#5b5f97;
    }
`;
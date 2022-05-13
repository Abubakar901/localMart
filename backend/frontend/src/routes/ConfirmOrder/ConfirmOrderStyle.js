import styled from "styled-components";
import { CommonBtn, StyledLink } from "../../GlobalStyle";


export const MainContainer = styled.div`
    width:90%;
    min-height: 500px;
    max-height:auto;
    background-color: ${props => props.bg || '#cfe2f3'};
    margin: 40px auto;
    justify-content: center;
    border-radius: 20px;
    display: flex;
    flex-direction:row;
    padding-bottom:${props => props.innerspace || '20px'};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 900px) {
        flex-direction:column;
    }

    @media (max-width: 380px) {
        width:100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    > h4 { 
        color: #6a329f;
        font-size: 40px;
    }
`;

export const ConfirmOrderLeft = styled.div`
    display: flex;
    flex-direction: column;
    min-height:500px;
    width:70%;  
    @media (max-width:1055px) {
        width:65%;  
    }

    @media (max-width: 900px) {
       width:100%;
    }
`;

export const ConfirmOrderSingleContainer = styled.div`  
    width: auto;
    display: flex;
    padding-left:70px;
    
    @media (max-width: 760px) {
       padding-right:50px;
    }

    @media (max-width: 480px) {
       padding-right:20px;
       padding-left:20px;
    }

    > h6 {
        font-size: 20px;
        margin-bottom:20px;
        margin-right:10px;
        line-height: 23px;
    }
`;

export const ConfirmOrderBreakLine = styled.hr`
    width: ${props => props.width || '95%' };
    margin:0 auto;
    margin-bottom:20px;
`;

export const ConfirmOrderBottom = styled.div`
    padding-top:20px;
    padding-bottom:20px;
    @media (max-width: 750px) {  
        padding-top:0;
        padding-bottom:0;
    }
    > h5 {
        margin-left:70px;
    }
`;

export const ConfirmOrderProducts = styled.div`
    margin-left:70px;
    margin-right: 70px;

    @media (max-width:900px) {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width:570px) {    
        margin-left:10px;
        margin-right: 10px;
    }
`;

export const EachProducts = styled.div`
    display: flex;
    background-color: #fff;
    padding:10px;
    margin-bottom: 10px;

    @media (max-width:900px) {
        flex-direction: column;
        width:48%;
        margin-right:7px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width:840px) {
        flex-direction: column;
        width:100%;
        margin-right:0;
        justify-content: center;
        align-items: center;
    }

    > img {
        height:100px;
        width:150px;
        margin-right: 10px;

        @media (max-width:980px) {
            width:120px;  
        }
    }
`;

export const ConfirmOrderLink = styled(StyledLink)`
    color: #000;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
`;


export const OtherContainer = styled.div`
    margin-left:auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:900px) {
        margin-left:0;
    }
    > h6 {
        margin-right:10px;
        font-size: 20px;
        
        @media (max-width:900px) {
            margin-right:0;
            font-size:17px;
        }
    }
`;

export const ConfirmOrderRight = styled.div`
    width:25%;   
    background-color: #fff;
    margin:30px auto 0;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top:20px;
    align-items: center;

    
    @media (max-width:1055px) {
        width:30%;  
    }
    
    @media (max-width:900px) {
        width:80%;
        margin:0 auto;  
    }

    > h5 {
        font-size: 30px;
        @media (max-width:1200px) {
            font-size: 25px;
        }
    }
    > h6{ 
        font-size: 30px;
        @media (max-width:1200px) {
            font-size: 25px;
        }
    }
`;

export const ConfirmOrderTop = styled.div`
    text-align: center;
    color: #5b5f97;

    h5 {
        font-size: 30px;
        margin-top:20px;
    }   
`;

export const SideOtherContainer = styled.div`
    width:100%;
    > h6 {
        font-size: 20px;
    }
`;

export const SideOtherEachContainer = styled.div`
    width:70%;
    margin:7px auto;
    display: flex;
    justify-content: space-between;
`;


export const ProceedToPaymentBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left:0px;
        padding:3px 20px;
        text-transform: capitalize;
        background-color: #5b5f97;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#5b5f97;
    }`;
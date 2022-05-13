import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const ShippingTopContainer = styled.div``;

export const ShippingMidContainer = styled.div`
    height:400px;
    width: auto;
    height: auto;

    > h3 {
        font-size: 34px;
        text-align: center;
        margin-top:20px;
        color: #5b5f97;
        font-weight: 700;

        @media (max-width: 700px) {  
            font-size: 30px;
        }
    }
`;

export const ShippingForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:15px;
`;

export const InputContainer = styled.div`
    display: flex;
    margin-top:25px;
    margin-bottom:25px;
    align-items: center;

    @media (max-width: 700px) {   
        flex-direction: column;
        margin-top:15px;
        margin-bottom:15px;
    }

    @media (max-width: 390px) { 
        margin-top:7px;
        margin-bottom:7px;
    }
    > label {
        text-align: center;
        width: 150px;
        font-size: 20px;
        margin-right: 10px;
        font-weight: 600;

        @media (max-width: 700px) {  
            margin-bottom: 10px;
        }
    }

    > input {
        border:none;
        padding:2px 10px;
        width:300px;
        font-size: 17px;
        border-radius: 13px;
        background-color: #fff;

        @media (max-width: 390px) {  
            width:250px;
        }
    }

    > select {
        border:none;
        padding:2px 10px;
        width:300px;
        font-size: 17px;
        border-radius: 13px;

        @media (max-width: 390px) {  
            width:250px;
        }
    }
`;

export const ShippingSubmitBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left:0px;
        margin-top:10px;
        padding:3px 50px;
        background-color:  #5b5f97;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 390px) { 
        && {      
            margin-top:15px;    
        }
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;
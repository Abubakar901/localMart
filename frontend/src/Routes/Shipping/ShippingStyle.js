import styled from "styled-components";
import Button from '@mui/material/Button';

export const ShippingMainContainer = styled.div `
    width:100%;
    height:auto;
    background-color: #cfe2f3;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-bottom:20px;
    flex-direction:  column;
`;


export const ShippingMidContainer = styled.div `
    height:400px;
    width: auto;
    padding-top:40px;
    height: auto;

    > h3 {
        font-size: 34px;
        text-align: center;
        color: #5b5f97;
        font-weight: 700;

        @media (max-width: 700px) {  
            font-size: 30px;
        }
    }
`;

export const ShippingForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:15px;
`;

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:15px;
    margin-bottom:15px;

    > input {
        border:none;
        border-radius:8px;
        padding:10px 20px;
        width:300px;
        font-size: 17px;

        @media (max-width: 390px) {  
            width:250px;
            padding:8px 15px;
        }
    }

    > select {
        border:none;
        border-radius:8px;
        padding:10px 10px;
        width:300px;
        font-size: 17px;
        
        @media (max-width: 390px) {  
            width:250px;
            padding:8px 15px;
        }
    }
`;

export const ShippingSubmitBtn = styled(Button)
`
    && {
        color: white;
        margin-top:20px;
        padding:5px 30px;
        font-size:18px;
        background-color:  #5b5f97;
        text-transform:capitalize;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 390px) {  
        padding:5px 30px;
        font-size:15px;
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;
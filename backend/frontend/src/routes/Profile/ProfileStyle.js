import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const MainContainer = styled.div`
    width:70%;
    height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:1200px) {
        width:90%;
    }
`;


export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;    
    margin-top: 10px;
    font-weight: 700;

    h1 {
        font-size: 40px;
        margin-top:20px;
        color: #5b5f97;

        @media (max-width:670px){
            font-size: 35px;
        }
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
    height: auto; 


    @media (max-width:770px) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    width:30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:770px) {
        width:100%;
    }

    > img {
        margin-top:20px;
        margin-bottom:20px;
        width:250px;
        height:250px;
        border-radius: 50%;
        
        @media (max-width:420px) {
            height: 150px;
            width: 150px;
        }
    
    }
`;

export const RightContainer = styled.div`   
    width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height:auto;

    @media (max-width:770px) {
        width:100%;
        margin-top:30px;
    }

    h3 {
        font-size: 30px;
        margin-top:20px;
        
        @media (max-width:670px){
            font-size: 25px;
        }
    }

    h5 {    
        font-size: 25px;
        margin-top:20px;

        @media (max-width:670px){
            font-size: 22px;
        }
    }

    h6 {
        font-size: 22px;
        margin-top:20px;

        @media (max-width:670px){
            font-size: 18px;
        }
    }
`;

export const EditProfileBtn = styled(CommonBtn)` 
    && {
        margin-top:20px;
        color: white;
        margin-left: 0;
        padding:2px auto;
        width:50%;
        background-color: #5b5f97;
        text-transform: capitalize;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width:835px) {
        && {
            width:70%;
        }
    }

    @media (max-width:770px) {
        && {
            width:50%;
        }
    }

    @media (max-width:485px) {
        && {
            width:60%;
        }
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;

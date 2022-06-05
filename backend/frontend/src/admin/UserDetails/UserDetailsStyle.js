import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const MainContainer = styled.div`
    width:40%;
    height:auto;
    background-color:#cfe2f3;
    margin: 40px auto;
    justify-content:center;
    align-items:center;
    padding-bottom:20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width:930px) {
        width:50%;
    }

    @media(max-width:800px) {
        width:60%;  
    }

    @media(max-width:675px) {
        width:70%;
    }

    @media(max-width:445px) {
        width:80%;
    }

    @media(max-width:370px){
        width:90%;
    }
`;

export const  UpdateBtn = styled(CommonBtn)`
&& {
    margin-top:20px;
color: white;
margin-left:0;
padding:3px;
background-color: #5b5f97;
height: 38px;
width:90%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

&&:hover {
   background-color:#5b5f97;
}
`;


export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 700;

    h2 {
        font-size: 40px;
        margin-top:20px;
        color: #5b5f97;

        @media(max-width:600px) {
            font-size:35px;
        }

        @media(max-width:500px) {
            font-size:30px;
        }
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left:30px;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    text-align:left;

    h6 {
        margin-top:20px;
        font-size: 25px;
        width:100%;
        text-transform : capitalize;

        @media(max-width:600px) {
            font-size:20px;
            margin-top:10px;
        }
    }

    > form {
        margin-top:20px;    
        width:100%;
        margin-bottom:0;

        @media(max-width:600px) {
            margin-top:5px;
        }

        > label {
            font-size: 25px;
            font-weight:500;
            margin-right:10px;
            
            @media(max-width:600px) {
                font-size:20px;
                margin-top:10px;
            }

        }

        > select {
            font-size:20px;
            font-weight:500;
            padding:2px 5px;
            outline:none;

            @media(max-width:600px) {
                font-size:18px;
                padding:1px 3px;
            }
        }
    }
`;




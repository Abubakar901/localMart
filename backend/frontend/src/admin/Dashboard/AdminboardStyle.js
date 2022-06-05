import styled from 'styled-components';
import { StyledLink } from '../../GlobalStyle';

export const MainContainer = styled.div`
    width:90%;
    min-height: 500px;
    max-height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width:975px) {
        width:100%;
        border-radius:0;
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

        @media(max-width:815px) {
            font-size:35px;
        }

        @media(max-width:440px) {
            font-size:30px;
        }
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom:10px;
    height: auto;
`;

export const AdminInnerContainer = styled.div`
    width:80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #f6b26b;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width:1300px){
        width:75%;
    }
    @media(max-width:1110px) {
        width:80%;
    }
    @media(max-width:840px) {
        width:75%
    }
    @media(max-width:700px){
        width:100%;
    }
`;

export const ResponsiveSide = styled.div`
    background-color:#5b5f97;
    width:20px;
    min-height:600px;
    position: absolute;
    top:195px;
    left:0px;
    display:none;
    z-index:1;    
    box-shadow: 9px 4px 7px 0px rgba(0,0,0,0.75);

    @media(max-width:700px){
        display:flex;
    }
`;


export const AmountContainer = styled.div`
    background-color:#93c47d ;
    margin-top:30px;
    padding:10px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > p {
        padding:0;
        margin:0; 
        font-size: 25px;
        font-weight: 600;
    }
`;

export const CircleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding:20px;

    @media(max-width:480px) {
        padding:0;
        padding-left:20px;
    }
    @media(max-width:360px) {
        flex-direction:column;
    }

`;

export const CircleLinked = styled(StyledLink)`
    margin:0;
    background-color: #6fa8dc;
    color:#fff;
    width:150px;
    height:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius:  50%;
    padding-top:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width:1110px) {
        width:125px;
        height:125px;
    }
  
    @media(max-width:820px){
        width:100px;
        height:100px;
    }

    @media(max-width:480px) {
        width:75px;
        height:75px;
    }

    @media(max-width:360px) {
        margin-bottom:10px;
    }

    >h6 {
        font-size: 25px;
        @media(max-width:1110px) {
            font-size:20px;
        }
    
        @media(max-width:820px){
            font-size:18px;
        }

        @media(max-width:480px) {
            font-size:13px;
        }
    }

    p {
        font-size: 22px;
        font-weight: 600;
        @media(max-width:1110px) {
            font-size:20px;
        }
    }
`;
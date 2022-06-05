import styled from "styled-components";
import { StyledLink } from "../../../GlobalStyle";

export const SidebarContainer = styled.div`
    width:20%;
    height:600px;
    display: flex;
    flex-direction: column;

    text-align: left;
    padding: 40px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #002550;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:1300px){
        width:25%;
        padding:20px;
    }

    @media(max-width:1110px) {
        width:20%;
    }


    @media(max-width:975px) {
        border-radius:0;
    }

    @media(max-width:840px) {
        width:25%
    }

    @media(max-width:700px){
        display:${props => props.responsive || 'none'};
        z-index:1;
        position:absolute;
        top:195px;
        left:10px;
        width:200px;
        padding-left:30px;
    }
  
`;

export const Heading = styled.h3`
    font-size: 40px;
    margin-bottom: 20px;
    color:#fff;
    text-decoration: underline;

     @media(max-width:1110px) {
         font-size:30px;
    }
  
`;

export const SideLink = styled(StyledLink)`
    font-size: 25px;
    margin-bottom: 20px;
    color: #fff;

    @media(max-width:1110px) {
        font-size:22px;
   }

    :hover {
        color:#ff6cbc;
    }
`;
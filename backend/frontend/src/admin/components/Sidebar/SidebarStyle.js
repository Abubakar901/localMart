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
`;

export const Heading = styled.h3`
    font-size: 40px;
    margin-bottom: 20px;
    color:#fff;
    text-decoration: underline;
`;

export const SideLink = styled(StyledLink)`
    font-size: 25px;
    margin-bottom: 20px;
    color: #fff;;

    :hover {
        color:#ff6cbc;
    }
`;
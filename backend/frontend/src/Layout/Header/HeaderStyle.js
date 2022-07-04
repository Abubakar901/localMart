import styled from 'styled-components';
import { CommonBtn, StyledLink } from '../../GlobalStyle';
import SearchIcon from '@mui/icons-material/Search';

export const NavbarContainer = styled.nav`
    background-color: #5b5f97;
    width:100%;
    height:60px;
    display: flex;
    align-items: center;
    padding:0;
    z-index: 100;
    position: sticky;
    top:0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1467px) {
        justify-content: center;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: baseline;
        height:auto;
        padding-top:10px;
    }
`;

export const FirstLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 900px) {   
        width:100%;
    }
`;

export const NavTitle = styled(StyledLink)`
    color: #fff;
    margin-left:40px;
    margin-right: 40px;
    padding-top:10px;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 0.5px;
    
    @media (max-width: 1467px) {
        margin-right:10px;
    }

    @media (max-width: 1055px) {
        margin-right:5px;
        margin-left:15px;
    }

    :hover {
        color: #ff6cbc;
        cursor: pointer;
    }
`;

export const SearchContainer = styled.form`
    background-color : #b8b8d1;
    width: 55%;
    height:35px;
    border-radius: 10px;
    display: flex;
    margin-left: 10px;
    align-items: center;

    @media (max-width: 1467px) {
        width: 40%;
        margin-right:10px;
    }

    @media (max-width: 1055px) {
        width: 35%;
    }

    @media (max-width: 900px) {
        justify-content: center;
        width: 90%;
        margin:4px auto;
        display: ${props => props.show || 'none'};
    }

    > .MuiSvgIcon-root {
        font-size: 25px;

        :hover {
        color: #ff6cbc;
        cursor: pointer;
        }
    }
`;

export const ResponsiveBtn = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    outline: none;
    border:0;
    height: 37px;
    width: 45px;
    margin-right:10px;
    background-color: #000;
    border-radius: 10px;
    padding:3px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: none;

    @media (max-width: 900px) {
        display: flex;
    }

    > span {
        height:3px;
        width:70%;
        margin:0 auto;
        background-color:#fff;
        border-radius: 10px;
    }
`;

export const SearchBar = styled.input`
    outline: none;
    background-color: transparent;
    border: none;
    margin-left: 30px;
    color: #fff;
    width:90%;
    font-size: 19px;
    padding-top:5px;
    padding-bottom:5px;

    @media (max-width: 1100px) {
        margin-left: 15px;
    }

    
    @media (max-width: 1055px) {
        margin-left: 5px;
    }
`;

export const SearchBtn = styled.button`
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #b8b8d1;

`;

export const Search = styled(SearchIcon)`
    color: #fff;
    margin:10px;
`;

export const NavLinks = styled.div`
    width: 33%;
    margin:10px;    
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    @media (max-width: 1467px) {
        width: 50%;
    }

    @media (max-width: 1055px) {
        width: 40%;
    }

    @media (max-width: 950px) {
        width: 50%;
    }

    @media (max-width: 900px) {
        width: 90%;
        margin:10px auto;
        display:${props => props.show};
    }

    @media (max-width: 540px) {
        flex-direction: column; 
        height: auto;
    }
`;

export const Navtags = styled.div`
    text-decoration: none;
    color: #fff;
    width: 100px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 1055px) {
        width: auto;
        margin-left:15px;
        margin-right: 15px;
    }

    @media (max-width: 540px) {
        margin:7px auto;
        font-size: 20px;
    }

    :hover {
        color: #ff6cbc;
        cursor: pointer;
    }
`; 

export const LoginBtn = styled(CommonBtn)`
    && {
    color: white;
    background-color: #ffd966;
    margin-right: 15px;
    padding:5px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
    color: #fff ;
    border: 2px solid  #ffd966;
    background-color :#f23737 ;
    padding:3px 18px;
    }
`;

export const DropdownMenu = styled.div`
    background-color: #8fce00;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const DropdownLink = styled(StyledLink)`
    color: #000;
`;

export const LogoutBtn = styled.button`
    width:100%;
    height:40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #e06666;
    color:#fff;
    border-width: 0;
`;

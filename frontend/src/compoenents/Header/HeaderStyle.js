import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const NavbarContainer = styled.nav`
    background-color: #5b5f97;
    width:100%;
    height:60px;
    display: flex;
    align-items: center;
    z-index: 100;
    position: sticky;
    top:0;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const NavTitle = styled.div`
    color: #fff;
    margin-left:40px;
    margin-right: 40px;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 0.5px;

    :hover {
        color: #ff6cbc;
        cursor: pointer;
    }
`;

export const SearchContainer = styled.div`
    background-color : #b8b8d1;
    width: 55%;
    height:35px;
    border-radius: 10px;
    display: flex;
    margin-left: 10px;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;

        :hover {
        color: #ff6cbc;
        cursor: pointer;
        }
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
`;

export const Navtags = styled.div`
    text-decoration: none;
    color: #fff;
    width: 100px;
    font-size: 18px;
    font-weight: 600;

    :hover {
        color: #ff6cbc;
        cursor: pointer;
    }
`; 

export const FilterBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    padding: 4px 0;
    background-color:#878cd7;
    letter-spacing: 0.5px;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FilterLink = styled.div`
    font-size: 17px;
    color: #ffd966;
    font-weight: 500;
    letter-spacing: 1px;

    :hover {
        
        color: #fc6e6e;
        cursor: pointer;
    }
`;

export const PopUpLogin = styled(Button)`
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
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const NavbarContainer = styled.nav `
  background-color: #5b5f97;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 775px) {
    flex-direction: column;
    min-height: 60px;
    height: auto;
    padding-top: 10px;
    padding-left: 40px;
    padding-right: 30px;
  }

  @media (max-width: 650px) {
    padding-left: 30px;
    padding-right: 20px;
  }

  @media (max-width: 475px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const FirstLink = styled.div `
  display: flex;
  justify-content: space-between;
  margin-left: 80px;

  @media (max-width: 1200px) {
    margin-left: 40px;
  }

  @media (max-width: 775px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 475px) {
    margin-left: 10px;
  }
`;

export const NavTitle = styled(Link)
`
  color: #fff;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 0.5px;

  :hover {
    color: #ff6cbc;
    cursor: pointer;
  }
`;

export const NavLinks = styled.div `
  margin-right: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 1200px) {
    margin-right: 40px;
  }

  @media (max-width: 850px) {
    margin-right: 20px;
  }

  @media (max-width: 775px) {
    display: ${(props) => props.show};
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 0;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)
`
  text-decoration: none;
`;

export const Navtags = styled.div `
  text-decoration: none;
  color: #fff;
  width: 100px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 540px) {
    margin: 5px auto;
    width: 100%;
    font-size: 20px;
  }

  :hover {
    color: #ff6cbc;
    cursor: pointer;
  }
`;

export const ResponsiveBtn = styled.button `
  flex-direction: column;
  justify-content: space-around;
  outline: none;
  border: 0;
  height: 37px;
  width: 45px;
  margin-right: 10px;
  background-color: #000;
  border-radius: 10px;
  padding: 3px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: none;

  @media (max-width: 775px) {
    display: flex;
  }

  > span {
    height: 3px;
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
  }
`;

export const LoginBtn = styled(Button)
`
  && {
    color: #471b74;
    background-color: #ffd966;
    padding: 5px 20px;
    text-transform: capitalize;
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 540px) {
    && {
      width: 100%;
    }
  }

  &&:hover {
    color: #fff;
    border: 2px solid #ffd966;
    background-color: #f23737;
    padding: 3px 18px;
  }
`;

export const DropdownMenu = styled.div `
  background-color: #8fce00;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const DropdownLink = styled(Link)
`
  color: #000;
`;

export const LogoutBtn = styled.button `
  width: 100%;
  height: 40px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #e06666;
  color: #fff;
  border-width: 0;
`;
import React, { useState } from "react";
import {
  NavbarContainer,
  FirstLink,
  NavTitle,
  ResponsiveBtn,
  NavLinks,
  StyledLink,
  Navtags,
  LoginBtn,
  DropdownMenu,
  DropdownLink,
  LogoutBtn,
} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openBar, setOpenBar] = useState("none");
  const [openPanel, setOpenPanel] = useState(true);

  const { user } = useSelector((state) => state.user);

  // handle responsive bar
  const handlePanel = () => {
    setOpenPanel(!openPanel);
    if (openPanel) {
      setOpenBar("flex");
    } else {
      setOpenBar("none");
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/shops");
  };

  // for different
  const Roles = () => {
    if (user) {
      switch (user.role) {
        case "admin":
          return (
            <StyledLink to="/admin/dashboard">
              <Navtags>Dashboard</Navtags>
            </StyledLink>
          );
        case "seller":
          return (
            <StyledLink to="/seller/dashboard">
              <Navtags>Dashboard</Navtags>
            </StyledLink>
          );
        case "customer":
          return (
            <StyledLink to="/">
              <Navtags>Home</Navtags>
            </StyledLink>
          );
        default:
          return "hello";
      }
    } else {
      return (
        <StyledLink to="/">
          <Navtags>Home</Navtags>
        </StyledLink>
      );
    }
  };

  return (
    <NavbarContainer>
      <FirstLink>
        <NavTitle to="/">localMart</NavTitle>

        <ResponsiveBtn onClick={() => handlePanel()}>
          <span></span>
          <span></span>
          <span></span>
        </ResponsiveBtn>
      </FirstLink>

      <NavLinks show={openBar}>
        <Roles />

        <StyledLink to="/shops">
          <Navtags>Shops</Navtags>
        </StyledLink>

        <StyledLink to="/products">
          <Navtags>Products</Navtags>
        </StyledLink>

        <StyledLink to="/cart">
          <Navtags>Cart</Navtags>
        </StyledLink>
        {user ? (
          <>
            <DropdownMenu className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.firstName}
              </button>
              <ul
                className="dropdown-menu"
                style={{
                  paddingBottom: 0,
                  borderRadius: 12,
                  textAlign: "center",
                }}
                aria-labelledby="dropdownMenuButton1"
              >
                <li
                  style={{
                    fontSize: 18,
                    borderBottom: "1px solid black",
                    paddingBottom: 5,
                  }}
                >
                  <DropdownLink className="dropdown-item" to="/profile">
                    Profile
                  </DropdownLink>
                </li>
                <li
                  style={{
                    fontSize: 18,
                    borderBottom: "1px solid black",
                    paddingBottom: 5,
                  }}
                >
                  <DropdownLink className="dropdown-item" to="/orders">
                    Orders
                  </DropdownLink>
                </li>
                <li>
                  <LogoutBtn onClick={logoutUser}>Logout</LogoutBtn>
                </li>
              </ul>
            </DropdownMenu>
          </>
        ) : (
          <LoginBtn onClick={redirectToLogin}>Login</LoginBtn>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Header;

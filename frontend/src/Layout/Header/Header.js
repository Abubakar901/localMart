import React, { useState }  from 'react';
import { StyledLink } from '../../GlobalStyle';
import { NavbarContainer, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, FilterBar, FilterLink, PopUpLogin , DropdownLink, LogoutBtn, DropdownMenu } from './HeaderStyle';
import Login from '../../routes/PopupLogin/PopupLogin';

const Header = () => {
  
  const [open, setOpen] = useState(false);

  let localUser = localStorage.getItem("user")

  const userData = JSON.parse(localUser)
  
  const handleOpen = () => setOpen(true)
  
  return (
    <>
      <NavbarContainer>
        {/* Link from React Router Dom */}
        <StyledLink to='/'>
          {/* Div for Custom Styling of Logo */}
          <NavTitle>localMart</NavTitle>
        </StyledLink>

       {/* Div for Custom Styling of search bar */}
        <SearchContainer>
           {/* Input for Search */}
            <SearchBar placeholder='Search City, Shop or Products'/>
            {/* Search Icon */}
            <Search />
        </SearchContainer>

        <NavLinks>

          {/* Link from React Router Dom */}
          <StyledLink to="/">
            {/* Div for Custom styling of Routus */}
            <Navtags>Home</Navtags>
          </StyledLink>

          {/* Link from React Router Dom */}
          <StyledLink to="/shop">
            {/* Div for Custom styling of Routus */}
            <Navtags>Shops</Navtags>
          </StyledLink>
          
          {/* Link from React Router Dom */}
          <StyledLink to="/product">
            {/* Div for Custom styling of Routus */}
            <Navtags>Products</Navtags>  
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <StyledLink to="/cart">
            {/* Div for Custom styling of Routus */}
            <Navtags>Cart</Navtags>
          </StyledLink>
        
          {
            localUser ? (
              <>
              <DropdownMenu class="dropdown">
                <btn class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {userData.name}
                </btn>
                <ul class="dropdown-menu"  style={{paddingBottom:0, borderRadius:12, textAlign: 'center'}} aria-labelledby="dropdownMenuButton1">
                  <li style={{ fontSize: 18, borderBottom: '1px solid black', paddingBottom: 5}}><DropdownLink class='dropdown-item' to='/profile'>Profile</DropdownLink></li>
                  <li style={{ fontSize: 18, borderBottom: '1px solid black', paddingBottom: 5}}><DropdownLink class='dropdown-item' to='/orders'>Orders</DropdownLink></li>
                  <li><LogoutBtn>Logout</LogoutBtn></li>
               </ul>
              </DropdownMenu>
              </>
            ) : (
              <>
                {/* Link from React Router Dom */}
                <PopUpLogin onClick={handleOpen}>
                  Login
                </PopUpLogin>
                <Login open={open} setOpen={setOpen} />
              </>
            )
          }
            
        </NavLinks>
      </NavbarContainer>

      <FilterBar>
        <StyledLink to="/electronics">
          <FilterLink>
            Electronics  
          </FilterLink>
        </StyledLink>

        <StyledLink to="/clothing">
          <FilterLink>
              Clothing
          </FilterLink>
        </StyledLink>


        <StyledLink to="/groceries">
          <FilterLink>
            Groceries
          </FilterLink>
        </StyledLink>

        <StyledLink to="/medicals">
          <FilterLink>
            Medicals
          </FilterLink>
        </StyledLink>
      </FilterBar>
    </>

    
  )
}

export default Header
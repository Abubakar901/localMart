import React, { useState }  from 'react';
import { StyledLink } from '../../GlobalStyle';
import { NavbarContainer, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, FilterBar, FilterLink, PopUpLogin } from './HeaderStyle';
import Login from '../../routes/PopupLogin/PopupLogin';

const Header = () => {
  
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  
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
            <Navtags>Shop</Navtags>
          </StyledLink>
          
          {/* Link from React Router Dom */}
          <StyledLink to="/product">
            {/* Div for Custom styling of Routus */}
            <Navtags>Product</Navtags>  
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <StyledLink to="/cart">
            {/* Div for Custom styling of Routus */}
            <Navtags>Cart</Navtags>
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <PopUpLogin onClick={handleOpen}>
            Login
          </PopUpLogin>
          <Login open={open} setOpen={setOpen} />

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
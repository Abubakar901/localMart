import React, { useState, useEffect}  from 'react';
import { StyledLink } from '../../GlobalStyle';
import { NavbarContainer, FirstLink, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, LoginBtn, DropdownLink, LogoutBtn, DropdownMenu,SearchBtn, ResponsiveBtn } from './HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, clearErrors } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';
import { useAlert } from "react-alert";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { user, error, isAuthenticated } = useSelector(state => state.user);

  let [openBar, setOpenBar] = useState('none')

  const [keyword, setKeyword] = useState();
  
  let openPanel = false;

  useEffect(() => {
    if (error) {
      return alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success("Login Successfull.");
      navigate('/');
    }
  }, [dispatch, error, alert, isAuthenticated])


  const handlePanel = () => {
    openPanel = !openPanel;
    if(openPanel) {
      setOpenBar('flex')
    } else {
      setOpenBar('none')
    }
  }

  const redirectToLogin = () => {
    navigate('/login');
  }
  
  
const searchHandler = (e) =>{
  e.preventDefault();
  console.log(keyword)
  // setSearchParams({   })
}

  const logoutUser = () => {
    dispatch(logout());
  }

const Roles = () => {
  if(user){
    switch(user.role) {
      case 'admin':
        return (
          <StyledLink to="/admin/dashboard">
            <Navtags>Dashboard</Navtags>
          </StyledLink>
          )
      case 'seller':
        return (
          <StyledLink to="/seller/dashboard">
            <Navtags>Dashboard</Navtags>
          </StyledLink>
        )
      case 'customer':
        return (
          <StyledLink to="/">
            <Navtags>Home</Navtags>
          </StyledLink>
        )
      default:
        return 'hello'
    }
  } else {
    return (
      <StyledLink to="/">
        <Navtags>Home</Navtags>
      </StyledLink>)
  }
}

  return (
    <>
      <NavbarContainer>
        {/* Link from React Router Dom */}
        <FirstLink>
          {/* Div for Custom Styling of Logo */}
          <NavTitle to='/'>localMart</NavTitle>

          <ResponsiveBtn onClick={() => handlePanel()}>
            <span></span>
            <span></span>
            <span></span>
          </ResponsiveBtn>

        </FirstLink>


       {/* Div for Custom Styling of search bar */}
        <SearchContainer onSubmit={searchHandler}  show={openBar}>
           {/* Input for Search */}
            <SearchBar placeholder='Search City, Shop or Products' name='keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)} autoComplete='false' />
            {/* Search Icon */}
            <SearchBtn value='submit' type='submit'>
              <Search  />
            </SearchBtn>
        </SearchContainer>

        <NavLinks show={openBar}>

          <Roles />

          {/* Link from React Router Dom */}
          <StyledLink to="/shops">
            {/* Div for Custom styling of Routus */}
            <Navtags>Shops</Navtags>
          </StyledLink>
          
          {/* Link from React Router Dom */}
          <StyledLink to="/products">
            {/* Div for Custom styling of Routus */}
            <Navtags>Products</Navtags>  
          </StyledLink>
        
          
          {/* Link from React Router Dom */}
          <StyledLink to="/cart">
            {/* Div for Custom styling of Routus */}
            <Navtags>Cart</Navtags>
          </StyledLink>
        
          {
            user ? (
              <>
              <DropdownMenu className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {user.firstName}
                </button>
                <ul className="dropdown-menu"  style={{paddingBottom:0, borderRadius:12, textAlign: 'center'}} aria-labelledby="dropdownMenuButton1">
                  <li style={{ fontSize: 18, borderBottom: '1px solid black', paddingBottom: 5}}><DropdownLink className='dropdown-item' to='/profile'>Profile</DropdownLink></li>
                  <li style={{ fontSize: 18, borderBottom: '1px solid black', paddingBottom: 5}}><DropdownLink className='dropdown-item' to='/orders'>Orders</DropdownLink></li>
                  <li><LogoutBtn onClick={logoutUser} >Logout</LogoutBtn></li>
               </ul>
              </DropdownMenu>
              </>
            ) : (
              <>
                {/* Link from React Router Dom */}
                <LoginBtn onClick={redirectToLogin}>
                  Login
                </LoginBtn>
              </>
            )
          }
            
        </NavLinks>
      </NavbarContainer>
    </>

    
  )
}

export default Header
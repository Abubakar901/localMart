import React, { useState }  from 'react';
import { StyledLink } from '../../GlobalStyle';
import { NavbarContainer, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, PopUpLogin , DropdownLink, LogoutBtn, DropdownMenu } from './HeaderStyle';
import Login from '../../routes/PopupLogin/PopupLogin';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';

const Header = () => {
  
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.user)

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true)

  // useEffect(() => {
  //   if(isAuthenticated) {
  //     switch(user.role) {
  //       case 'admin':
  //         navigate('/admin/dashboard')
  //           break;
  //       case 'seller':
  //         navigate('/seller/dashboard')
  //           break;
  //       case 'customer':
  //         navigate('') 
  //           break;  
  //       default:
  //          alert("error")
  //     }
  //   }
  // }, [isAuthenticated, user, navigate])
  

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
                <PopUpLogin onClick={handleOpen}>
                  Login
                </PopUpLogin>
                <Login open={open} setOpen={setOpen} />
              </>
            )
          }
            
        </NavLinks>
      </NavbarContainer>
    </>

    
  )
}

export default Header
import React, { useState, useEffect}  from 'react';
import { StyledLink } from '../../GlobalStyle';
import { NavbarContainer, FirstLink, NavTitle, SearchContainer, SearchBar, Search, NavLinks, Navtags, PopUpLogin , DropdownLink, LogoutBtn, DropdownMenu,SearchBtn, ResponsiveBtn } from './HeaderStyle';
import Login from '../../routes/PopupLogin/PopupLogin';
import { useDispatch, useSelector } from 'react-redux';
import { logout, clearErrors } from '../../actions/userAction';
import { useSearchParams } from 'react-router-dom';
import { useAlert } from "react-alert";


const Header = () => {
  
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, error, isAuthenticated } = useSelector(state => state.user);

  const [open, setOpen] = useState(false);

  let [openBar, setOpenBar] = useState('none')

  const [keyword, setKeyword] = useState();

  let [searchParams, setSearchParams] = useSearchParams();

  const handleOpen = () => setOpen(true);
  
  let openPanel = false;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success("Login Successfull.");
    }
  }, [dispatch, error, alert, isAuthenticated])

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

  const handlePanel = () => {
    openPanel = !openPanel;
    if(openPanel) {
      setOpenBar('flex')
    } else {
      setOpenBar('none')
    }
  }
  
  
const searchHandler = (e) =>{
  e.preventDefault();
  console.log(keyword)
  setSearchParams({   })
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
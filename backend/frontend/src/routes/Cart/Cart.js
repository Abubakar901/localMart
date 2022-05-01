import React, { useState}from 'react'
import { MainContainer } from '../../GlobalStyle';
import { DefaultContainer } from './CartStyle';
import Login from '../../routes/PopupLogin/PopupLogin';

const Cart = ({ user }) => {
  
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true)

  console.log(user)
  return (
    <MainContainer>
      { 
        user ? (
          <>
            <h1>User Exist</h1>
          </>
        )  : (
          <>
            <h4>No Item Found</h4>
            <DefaultContainer onClick={handleOpen}>
                Please Login to Access this Page
            </DefaultContainer>
            <Login open={open} setOpen={setOpen} />
          </>
        ) 
      }
    </MainContainer>
  )
}

export default Cart
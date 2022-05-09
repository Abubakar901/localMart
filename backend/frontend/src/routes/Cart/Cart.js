import React, { useEffect, useState }from 'react'
import { MainContainer, TopContainer } from '../../GlobalStyle';
import { DefaultContainer, CartLeftContainer, CartContainer, TotalCardContainer, CheckoutBtn, NoItemContaiener, ExploreShoppingBtn} from './CartStyle';
import Login from '../../routes/PopupLogin/PopupLogin';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCartItems } from '../../actions/cartAction';
import CartCard from '../../compoenents/CartCard/CartCard';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../Layout/Metadata';

const Cart = ({ user }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart  } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  let totalGross = 0;

  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch, user])

  cart?.forEach((item ) => {
    totalGross += item?.product?.price;
  })

  const redirectToShipping = () => {
    navigate('/shipping')
  }
  
  const redirectToProducts = () => {
    navigate('/products')
  }

  return (
    <MainContainer>
    <Metadata title='localMart - Cart' />
      { 
        user ? (
          <>
          {
            cart?.[0] ? (
              <>
              
          <TopContainer equally='center' spacing='30px'>
            <h4>Cart</h4>
          </TopContainer> 
          <CartContainer>
            <CartLeftContainer>
            {
              cart && cart.map((cartItems) => (
                <CartCard cartItems={cartItems}  />
              ))
            }
            </CartLeftContainer>
            <TotalCardContainer>
              <h4>Total Items : {cart?.length}</h4>
              <h5>Total Amount : {totalGross}</h5>
              <CheckoutBtn onClick={redirectToShipping}>Procced to Checkout</CheckoutBtn>
            </TotalCardContainer>
          </CartContainer>
              </> ) : (
                <NoItemContaiener>
                  No Items in cart
                  <ExploreShoppingBtn onClick={redirectToProducts}>Add Items to Cart</ExploreShoppingBtn>
                </NoItemContaiener>
              )
          }
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
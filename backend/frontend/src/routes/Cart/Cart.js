import React, {  useState }from 'react'
import { MainContainer, TopContainer } from '../../GlobalStyle';
import { CartLeftContainer, CartContainer, TotalCardContainer, CheckoutBtn,CartProductContainer, OneContainer, TwoContainer, SameBtn, BtnContainer, RemoveItemBtn,  NoItemContaiener, ExploreShoppingBtn} from './CartStyle';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from '../../compoenents/CartCard/CartCard';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../Layout/Metadata';
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';

const Cart = ({ user }) => {
  
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  let totalGross = 0;

  const redirectToShipping = () => {
    if(user) {
       navigate('/shipping')
    } else {
        alert.info("Please Login First")
    }

  }

  cartItems.map((item) => {
    totalGross += (item?.quantity * item?.price)
  })

  const redirectToProducts = () => {
    navigate('/products')
  }

  const increaseQunatity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if(stock <= quantity ) {
      return;
    }
    dispatch(addItemsToCart(id, newQty))
  }
  
  const  decreaseQunatity = (id, quantity) => {  
    const newQty = quantity - 1;
    if(1 >= quantity ) {
      return;
    }
    dispatch(addItemsToCart(id, newQty))
  }

  const RemoveProductFromCart = (id) => {
    dispatch(removeItemsFromCart(id))
  } 
  
  return (
    <MainContainer>
    <Metadata title='localMart - Cart' />
            
           {
             cartItems && cartItems[0] ? (
              <>
              <TopContainer equally='center' spacing='30px'>
            <h4>Cart</h4>
          </TopContainer> 
              <CartLeftContainer>
            {
              cartItems && cartItems.map((item) => (
                <CartProductContainer>  
                  <CartCard item={item} key={item?.product} />
                  <OneContainer>
                   <BtnContainer>
                     <SameBtn onClick={() => decreaseQunatity(item?.product, item?.quantity)} >-</SameBtn>
                     <p>{item?.quantity}</p>
                     <SameBtn onClick={() => increaseQunatity(item?.product, item?.quantity, item?.stock)}>+</SameBtn>
                 </BtnContainer>
             </OneContainer>
             <TwoContainer>
                 <p>Total Price : ₹ {item?.quantity * item?.price} </p>
                 <RemoveItemBtn onClick={() => RemoveProductFromCart(item?.product)}>Remove From Cart</RemoveItemBtn>
             </TwoContainer>
            </CartProductContainer>
              ))
            }


          </CartLeftContainer>
          
          <CartContainer>
            <TotalCardContainer>
              <h4>Total Items : {cartItems.length} </h4>
               <h5>Total Amount : {totalGross}</h5> 
              <CheckoutBtn onClick={redirectToShipping}>Procced to Checkout</CheckoutBtn>
            </TotalCardContainer>
          </CartContainer>
              </>
              
             ) : (
               
                <NoItemContaiener>
                  No Items in cart
                  <ExploreShoppingBtn onClick={redirectToProducts}>Add Items to Cart</ExploreShoppingBtn>
                </NoItemContaiener>
             )
           }

    </MainContainer>
  )
}

export default Cart
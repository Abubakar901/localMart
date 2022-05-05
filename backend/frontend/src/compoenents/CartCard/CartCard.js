import React, { useState, useEffect } from 'react';
import { CartProductContainer, BtnContainer, SameBtn, RemoveItemBtn, OneContainer } from './CartCardStyle';
import { useDispatch  } from 'react-redux';
import { deleteCart } from '../../actions/cartAction';

const CartCard = ({cartItems }) => {
    
    const [quantity, setQunatity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(cartItems?.product?.price);
    const dispatch = useDispatch();

    const increaseQunatity = (quantity) => {
        if(cartItems?.product?.Stock > quantity) {
            setQunatity(quantity+1)
        } else {
            return 
        }
    }
    
    const  decreaseQunatity = (quantity) => {
        if(quantity === 1){
            return 
        }
        setQunatity(quantity -1)
    }

    
    
    useEffect(() => {
        if(increaseQunatity){
            let price = cartItems?.product?.price * quantity;
            setTotalPrice(price)
        }
    }, [increaseQunatity, cartItems, quantity])

    
    const DeleteCartItem = (id) => {
        dispatch(deleteCart(id))
    }

  return (
    <CartProductContainer>
        <img src={cartItems?.product?.images?.[0]?.url} alt={cartItems?.product?.name} />
            <OneContainer >
                <h4>{cartItems?.product?.name}</h4>
                <h5><strong>₹</strong>{cartItems.product.price}</h5>
            </OneContainer>
            <OneContainer width='45%' vertical='row' spacing='space-between'>
                <BtnContainer>
                    <SameBtn onClick={() => decreaseQunatity(quantity)}>-</SameBtn>
                    <p>{quantity}</p>
                    <SameBtn onClick={() => increaseQunatity(quantity)}>+</SameBtn>
                </BtnContainer>
            </OneContainer>
            <OneContainer width='30%' spacing='space-between'>
                <p>Total Price : ₹ {totalPrice}</p>

                <RemoveItemBtn onClick={() => DeleteCartItem(cartItems._id)}>Remove From Cart</RemoveItemBtn>
            </OneContainer>
    </CartProductContainer>
  )
}

export default CartCard
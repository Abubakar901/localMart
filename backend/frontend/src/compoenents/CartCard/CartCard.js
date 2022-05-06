import React, { useState, useEffect } from 'react';
import { CartProductContainer, BtnContainer, SameBtn, RemoveItemBtn, OneContainer } from './CartCardStyle';
import { useDispatch, useSelector  } from 'react-redux';
import { useAlert } from 'react-alert';
import { deleteCart } from '../../actions/cartAction';
import { DELETE_CART_RESET } from '../../constant/keys';

const CartCard = ({cartItems }) => {
    
    const [quantity, setQunatity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(cartItems?.product?.price);
    
    const dispatch = useDispatch();
    const alert = useAlert();
    
    const {error, isDeleted} = useSelector((state) => state.deleteCart)

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

        if(error) {
            return alert.error(error);
        }

        if(isDeleted) {
            alert.success('Cart Deleted Successfully');
            dispatch({ type: DELETE_CART_RESET});
        }

    }, [increaseQunatity, cartItems, quantity, setTotalPrice , dispatch, alert, isDeleted, error])

    
    const DeleteCartItem = (id) => {
        dispatch(deleteCart(id))
        console.log(id)
    }

    console.log(cartItems)
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
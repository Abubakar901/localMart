import React from 'react';
import { OneContainer } from './CartCardStyle';

const CartCard = ({ item }) => {

    
//     const dispatch = useDispatch();
//     const alert = useAlert();
    
//     const {error, isDeleted} = useSelector((state) => state.deleteCart)

//     useEffect(() => {
//         if(increaseQunatity){
//             let price = cartItems?.product?.price * quantity;
//             setTotalPrice(price)
//         }

//         if(error) {
//             return alert.error(error);
//         }

//         if(isDeleted) {
//             alert.success('Cart Deleted Successfully');
//             dispatch({ type: DELETE_CART_RESET});
//         }

//     }, [increaseQunatity, cartItems, quantity, setTotalPrice , dispatch, alert, isDeleted, error])

    
//     const DeleteCartItem = (id) => {
//         dispatch(deleteCart(id))
//         console.log(id)
//     }

//     console.log(cartItems)
  return (
      <>
         <img src={item?.image} alt={item?.name} />
        <OneContainer >
                 <h4>{item?.name}</h4>
                 <h5><strong>₹</strong>{item?.price}</h5>
        </OneContainer>
     </>
  )
}

export default CartCard
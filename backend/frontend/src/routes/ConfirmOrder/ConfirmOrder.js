import React from 'react';
import { useSelector } from 'react-redux';
import Metadata from '../../Layout/Metadata';
import { MainContainer, ConfirmOrderLeft, ConfirmOrderRight, ConfirmOrderTop, ConfirmOrderSingleContainer, ConfirmOrderBreakLine, ConfirmOrderBottom, SideOtherEachContainer, ConfirmOrderProducts, ProceedToPaymentBtn, SideOtherContainer, EachProducts, ConfirmOrderLink, OtherContainer } from './ConfirmOrderStyle';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item ) => acc + item?.quantity * item?.price,
    0
  )

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.pinCode}, ${shippingInfo?.country}`;

  const proceedToPaymentHandler = () => { 
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate('/process/payment');
  }

  return (
    <MainContainer>
      <Metadata title='localMart - Confirm Orders' />
      <ConfirmOrderLeft>
        <ConfirmOrderTop>
          <h5>Shipping Info</h5>
        </ConfirmOrderTop>
        <ConfirmOrderBottom>
          <ConfirmOrderSingleContainer>
            <h6>User: </h6>
            <h6>{user?.firstName + " "  + user?.lastName}</h6>
          </ConfirmOrderSingleContainer>

          
          <ConfirmOrderSingleContainer>
            <h6>Phone Number: </h6>
            <h6>{shippingInfo.phoneNo}</h6>
          </ConfirmOrderSingleContainer>


          <ConfirmOrderSingleContainer>
            <h6>Address:  </h6>
            <h6>{address}</h6>
          </ConfirmOrderSingleContainer>
          
          <ConfirmOrderBreakLine />
          <h5>Your Cart Items: </h5>
          <ConfirmOrderProducts>
            {
              cartItems && cartItems.map((item) => (
                <EachProducts key={item?.product}>  
                  <img src={item?.image} alt={item?.name} />
                  <ConfirmOrderLink to={`/product/${item?.product}`}>
                    {item?.name}
                  </ConfirmOrderLink>

                  <OtherContainer>
                    <h6>{item?.quantity} X ₹{item?.price} </h6>
                    <h6> = ₹{item?.price * item?.quantity}</h6>
                  </OtherContainer>
                </EachProducts>
              ))
            }

          </ConfirmOrderProducts>

        </ConfirmOrderBottom>
      </ConfirmOrderLeft> 
      <ConfirmOrderRight>
        <h5>Order Summary</h5>
        <ConfirmOrderBreakLine width='80%' />
        <SideOtherContainer>
            <SideOtherEachContainer>
              <h6>Subtotal </h6> 
              <h6>₹{subtotal}</h6>
            </SideOtherEachContainer>
            <SideOtherEachContainer>
              <h6>Shipping Charges  </h6>
              <h6> ₹{shippingCharges}</h6>

            </SideOtherEachContainer>

            <SideOtherEachContainer>
              <h6>GST </h6>
              <h6>₹{tax}</h6>
            </SideOtherEachContainer>
        </SideOtherContainer>
        <ConfirmOrderBreakLine  width='80%' />
        <h6>Total : {totalPrice}</h6>
        <ProceedToPaymentBtn onClick={proceedToPaymentHandler}>Proceed to Payment</ProceedToPaymentBtn>
      </ConfirmOrderRight>  
    </MainContainer>
  )
}

export default ConfirmOrder
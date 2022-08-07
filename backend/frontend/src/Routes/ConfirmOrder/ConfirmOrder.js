import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Metadata from "../../Layout/Metadata";
import { useAlert } from "react-alert";
import {
  MainContainer,
  ConfirmOrderLeft,
  ConfirmOrderBottom,
  ConfirmOrderTop,
  ConfirmOrderSingleContainer,
  ConfirmOrderBreakLine,
  ConfirmOrderProducts,
  EachProducts,
  PartContainer,
  ConfirmOrderLink,
  OtherContainer,
  ConfirmOrderRight,
  SideOtherEachContainer,
  SideOtherContainer,
  ProceedToPaymentBtn,
} from "./ConfirmOrderStyle";
import { useNavigate } from "react-router-dom";
import { createOrder, clearErrors } from "../../Actions/OrderAction";
import { removeItemsFromCart } from "../../Actions/CartAction";

const ConfirmOrder = ({ user }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item?.quantity * item?.price,
    0
  );

  const address = `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.pinCode}, ${shippingInfo?.country}`;

  const proceedToPaymentHandler = () => {
    const order = {
      shippingInfo,
      orderItems: cartItems,
      totalPrice: subtotal,
    };

    dispatch(createOrder(order));
    alert.success("Order Placed Successfully!");
    localStorage.clear();
    cartItems.forEach((item) => {
      dispatch(removeItemsFromCart(item?.product));
    });
    navigate("/");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <MainContainer>
      <Metadata title="localMart - Confirm Orders" />
      <ConfirmOrderLeft>
        <ConfirmOrderBottom>
          <ConfirmOrderTop>
            <h5>Shipping Info</h5>
          </ConfirmOrderTop>
          <ConfirmOrderSingleContainer>
            <h6>User: </h6>
            <h6>{user?.firstName + " " + user?.lastName}</h6>
          </ConfirmOrderSingleContainer>

          <ConfirmOrderSingleContainer>
            <h6>Number: </h6>
            <h6>{shippingInfo.phoneNo}</h6>
          </ConfirmOrderSingleContainer>

          <ConfirmOrderSingleContainer>
            <h6>Address: </h6>
            <h6>{address}</h6>
          </ConfirmOrderSingleContainer>

          <ConfirmOrderBreakLine />
          <ConfirmOrderTop>
            <h5>Your Cart Items: </h5>
          </ConfirmOrderTop>
          <ConfirmOrderProducts>
            {cartItems &&
              cartItems.map((item) => (
                <EachProducts key={item?.product}>
                  <img src={item?.image} alt={item?.name} />
                  <PartContainer>
                    <ConfirmOrderLink to={`/product/${item?.product}`}>
                      <h6>{item?.name}</h6>
                      <h6>{item?.shopName}</h6>
                      <h6>{item?.shopCity}</h6>
                    </ConfirmOrderLink>

                    <OtherContainer>
                      <h6>
                        {item?.quantity} X ₹{item?.price}{" "}
                      </h6>
                      <h6> = ₹{item?.price * item?.quantity}</h6>
                    </OtherContainer>
                  </PartContainer>
                </EachProducts>
              ))}
          </ConfirmOrderProducts>
        </ConfirmOrderBottom>
      </ConfirmOrderLeft>
      <ConfirmOrderRight>
        <h5>Order Summary</h5>
        <ConfirmOrderBreakLine width="80%" />
        <SideOtherContainer>
          <SideOtherEachContainer>
            <h6>Total Items </h6>
            <h6> {cartItems?.length}</h6>
          </SideOtherEachContainer>
          <SideOtherEachContainer>
            <h6>Subtotal </h6>
            <h6>₹{subtotal}</h6>
          </SideOtherEachContainer>
        </SideOtherContainer>
        <ConfirmOrderBreakLine width="80%" />
        <h6>Total : ₹{subtotal}</h6>
        <ProceedToPaymentBtn onClick={proceedToPaymentHandler}>
          Place Order
        </ProceedToPaymentBtn>
      </ConfirmOrderRight>
    </MainContainer>
  );
};

export default ConfirmOrder;

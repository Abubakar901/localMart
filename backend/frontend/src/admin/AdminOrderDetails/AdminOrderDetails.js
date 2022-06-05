import React, { useEffect } from "react";
import {
  BottomContainer,
  MainContainer,
  TopContainer,
  DetailContainer,
  Line
} from "./AdminOrderDetailStyle";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";
import Loader from "../../Layout/Loader/Loader";
import { getOrderDetails } from "../../actions/orderAction";
import { CardBottomContainer, OrderProductContainer, OrderProductDetails } from "../../routes/Orders/OrderStyle";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { order, loading, error } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error, id]);

  console.log(order);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title="localMart - Order Details(Admin)" />
          <TopContainer>
            <h2>Order Details</h2>
          </TopContainer>
          <BottomContainer>
            <h4>Customer Details : </h4>
            <DetailContainer>
              <h5>
                Name : {order?.user?.firstName + " " + order?.user?.lastName}
              </h5>
              <h6>Phone Number : {order?.user?.phone}</h6>
              <h6>Email : {order?.user?.email}</h6>
              <h6>Customer Number : {order?.shippingInfo?.phoneNo}</h6>
              <h6>
                Address :{" "}
                {order?.shippingInfo?.address +
                  " - " +
                  order?.shippingInfo?.pinCode}
              </h6>
              <h6>City : {order?.shippingInfo?.city}</h6>
              <h6>State : {order?.shippingInfo?.state}</h6>
              <h6>Country : {order?.shippingInfo?.country}</h6>
            </DetailContainer>
            <Line/> 
            <h4>Payment Details : </h4>
            <DetailContainer>
              <h5>Payment : {order?.paymentInfo?.status}</h5>
              <h6>Items Price : {order?.paymentInfo?.itemsPrice}</h6>
              <h6>Tax : {order?.taxPrice}</h6>
              <h6>Shipping Charges : {order?.shippingPrice}</h6>
              <h4>Total Price : {order?.totalPrice}</h4>
            </DetailContainer>
            <Line />
            <h4>Product Details : </h4>
            <CardBottomContainer>
              {order?.orderItems.map((items, value) => (
                <OrderProductContainer key={value}>
                  <img src={items?.image} alt={items?.name}/>
                  <OrderProductDetails>
                    <h6>Name : {items?.name}</h6>
                    <h6>Price : ₹{items?.price}</h6>
                    <h6>Quantity : {items?.quantity}</h6>
                    <h6>Shop : {items?.shopName}</h6>
                    <h6>City : {items?.shopCity}</h6>
                  </OrderProductDetails>
                </OrderProductContainer>
              ))}
            </CardBottomContainer>
          </BottomContainer>
        </MainContainer>
      )}
    </>
  );
};

export default AdminOrderDetails;

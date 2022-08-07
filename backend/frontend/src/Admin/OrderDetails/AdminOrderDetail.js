import React, { useEffect } from "react";
import {
  NoOrderFound,
  MainContainer,
  TopContainer,
  BottomContainer,
  UpperContainer,
  LeftContainer,
  SideContainer,
  ProductContainer,
  ProductBottomContainer,
  ProductDetails,
} from "./AdminOrderStyle";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";
import Loader from "../../Layout/Loader/Loader";
import { getOrderDetails } from "../../Actions/OrderAction";

const AdminOrderDetail = () => {
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
        <>
          {order ? (
            <MainContainer>
              <Metadata title={`localMart - ${order?.user?.firstName} Order`} />
              <TopContainer>
                <h4>Order Details</h4>
              </TopContainer>
              <BottomContainer>
                <UpperContainer>
                  <LeftContainer topspace="15px">
                    <h6>
                      Name :{" "}
                      {order?.user?.firstName + " " + order?.user?.lastName}
                    </h6>{" "}
                    <h6>Number : {order?.shippingInfo?.phoneNo}</h6>
                    <h6>
                      Address :{" "}
                      {order?.shippingInfo?.address +
                        " - " +
                        order?.shippingInfo?.pinCode}
                    </h6>
                  </LeftContainer>
                  <LeftContainer bottomspace="15px">
                    <h6>City : {order?.shippingInfo?.city}</h6>
                    <h6>State : {order?.shippingInfo?.state}</h6>
                    <h6>Country : {order?.shippingInfo?.country}</h6>
                  </LeftContainer>
                </UpperContainer>
                <SideContainer>
                  <h5>Total Price : {order?.totalPrice}</h5>
                  <h5>Payment : {order?.paymentInfo}</h5>
                  <h5>Order Status: {order?.orderstatus}</h5>
                </SideContainer>
                <ProductContainer>
                  {order?.orderItems?.map((items) => (
                    <ProductBottomContainer
                      to={`/product/${items?.product}`}
                      key={items?.product}
                    >
                      <img src={items?.image} alt={items?.name} />
                      <ProductDetails>
                        <h6>Name : {items?.name}</h6>
                        <h6>Price : ₹{items?.price}</h6>
                        <h6>Quantity : {items?.quantity}</h6>
                        <h6>Shop : {items?.shopName}</h6>
                        <h6>City : {items?.shopCity}</h6>
                        <h6>Delivery : {items?.delivery}</h6>
                      </ProductDetails>
                    </ProductBottomContainer>
                  ))}
                </ProductContainer>
              </BottomContainer>
            </MainContainer>
          ) : (
            <NoOrderFound>
              <Metadata title="localMart - No Order Found(Admin)" />
              <h1>No Details Found</h1>
              <h1>for this Order</h1>
            </NoOrderFound>
          )}
        </>
      )}
    </>
  );
};

export default AdminOrderDetail;

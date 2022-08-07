import React, { useEffect, useState } from "react";
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
  ExtraContainer,
  UpdateOrderBtn,
} from "./SellerOrderStyle";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";
import Loader from "../../Layout/Loader/Loader";
import {
  getOrderDetails,
  updateOrder,
  clearErrors,
} from "../../Actions/OrderAction";
import { UPDATE_SELLER_ORDER_RESET } from "../../Constants/OrderConstants";

const SellerOrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { order, loading, error } = useSelector((state) => state.orderDetails);

  const {
    error: updateError,
    isUpdated,
    loading: updateLoading,
  } = useSelector((state) => state.editAndDeleteOrder);

  const [status, setStatus] = useState("");

  const updateOrderForm = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);
    dispatch(updateOrder(id, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors);
    }

    if (isUpdated) {
      alert.success("Order Updated Successfully!");
      dispatch({ type: UPDATE_SELLER_ORDER_RESET });
      navigate("/seller/dashboard");
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error, updateError, isUpdated, id, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {order ? (
            <MainContainer>
              <Metadata
                title={`localMart - ${order?.user?.firstName} Order (Seller)`}
              />
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
              <ExtraContainer
                encType="multipart/form-data"
                onSubmit={updateOrderForm}
              >
                <select onChange={(e) => setStatus(e.target.value)}>
                  <option>Processing</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Picked Up">Picked Up</option>
                </select>
                <UpdateOrderBtn
                  value="submit"
                  type="submit"
                  disabled={updateLoading ? true : false}
                >
                  Update Order
                </UpdateOrderBtn>
              </ExtraContainer>
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

export default SellerOrderDetail;

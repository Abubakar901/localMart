import React, { useEffect } from "react";
import {
  OrderMainContainer,
  OrderCard,
  OrderTopContainer,
  CardTopContainer,
  OrderProductDetails,
  CardMidContainer,
  CardBottomContainer,
  DeleteBtn,
  OrderLine,
  NoOrderContaiener,
  ExploreProductsBtn,
  OrderProductContainer,
  OrderBottomContainer,
  DeleteLogo,
  LineBreak
} from "./OrderStyle";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getUserOrders, deleteOrder, clearErrors} from "../../actions/orderAction";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { DELETE_ORDER_RESET } from "../../constant/keys";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const { error, orders, loading } = useSelector((state) => state.orders);
  const navigate = useNavigate();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.editAndDeleteOrder
  );


  const alert = useAlert();

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if(deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getUserOrders());
  }, [dispatch, alert, error, isDeleted, deleteError]);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  const redirectToProducts = () => {
    navigate("/products");
  };

  console.log(orders);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <OrderMainContainer>
          <Metadata title="localMart - Orders" />
          {orders && orders?.length === 0 ? (
            <NoOrderContaiener>
              No Orders Yet
              <ExploreProductsBtn onClick={redirectToProducts}>
                Buy Products
              </ExploreProductsBtn>
            </NoOrderContaiener>
          ) : (
            <>
              <OrderTopContainer>
                <h4>Your Orders</h4>
              </OrderTopContainer>
              <OrderLine />
              <OrderBottomContainer>
                {
                    orders && orders.map((order) => (
                      <>
                        <OrderCard key={order?._id}>
                            <CardTopContainer>
                                <h6>Shipping Details  {order?.orderstatus === 'Processing' ? <DeleteBtn onClick={() =>  deleteOrderHandler(order?._id)}>Cancel Order <DeleteLogo /></DeleteBtn> : <></>} </h6>
                                <p>Address : {order?.shippingInfo?.address}</p>
                                <p>Pincode : {order?.shippingInfo?.city + " "  + order?.shippingInfo?.pinCode}</p>
                                <p>State : {order?.shippingInfo?.state}</p>
                                <p>Phone Number : {order?.shippingInfo?.phoneNo}</p>
                                <h5>Order Status : <span statusColor="#25ff22">{order?.orderstatus}</span></h5>
                            </CardTopContainer>
                            <OrderLine />
                            <CardMidContainer>
                                <p>Shipping Price : ₹{order?.shippingPrice}</p>
                                <p>Payment Status : Cash on Delivery</p>
                                <h6>Total Price : <span>₹{order?.totalPrice}</span></h6>
                            </CardMidContainer>
                            <OrderLine />
                            <h6>Items: </h6>
                            <CardBottomContainer>
                              {
                                order?.orderItems.map((items, value) => (
                                  <OrderProductContainer key={value}>
                                    <img src={items?.image} alt={items?.name} />
                                    <OrderProductDetails>
                                      <h6>Name : {items?.name}</h6>
                                      <h6>Price : ₹{items?.price}</h6>
                                      <h6>Quantity : {items?.quantity}</h6>
                                      <h6>Shop : {items?.shopName}</h6>
                                      <h6>City : {items?.shopCity}</h6>
                                    </OrderProductDetails>
                                  </OrderProductContainer>
                                ))
                              }
                              
                            </CardBottomContainer>
                        </OrderCard>
                        <LineBreak/>
                        </>
                    ))
                }
              </OrderBottomContainer>
            </>
          )}
        </OrderMainContainer>
      )}{" "}
    </>
  );
};

export default Order;

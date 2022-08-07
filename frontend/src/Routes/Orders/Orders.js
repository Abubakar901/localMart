import React, { useEffect } from "react";
import {
  NoOrderContaiener,
  OrderLine,
  OrderBtn,
  OrderMainContainer,
  OrderTopContainer,
  DeleteBtn,
  DeleteLogo,
  Delete,
  OrderBottomContainer,
  OrderCard,
  CardCommonContainer,
  CardBottomContainer,
  OrderProductContainer,
  OrderProductDetails,
  LineBreak,
} from "./OrdersStyle";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";
import Loader from "../../Layout/Loader/Loader";
import {
  getUserOrders,
  deleteOrder,
  clearErrors,
} from "../../Actions/OrderAction";
import { useNavigate } from "react-router-dom";
import { DELETE_ORDER_RESET } from "../../Constants/OrderConstants";

const Orders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, orders } = useSelector((state) => state.orders);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.editAndDeleteOrder
  );

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  const redirectToProducts = () => {
    navigate("/products");
  };

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getUserOrders());
  }, [dispatch, alert, error, isDeleted, deleteError]);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          {orders && orders?.length === 0 ? (
            <NoOrderContaiener>
              <Metadata title="localMart - My Orders" />
              No Orders Yet
              <OrderBtn onClick={redirectToProducts}>Buy Products</OrderBtn>
            </NoOrderContaiener>
          ) : (
            <OrderMainContainer>
              <Metadata title="localMart - My Orders" />
              <OrderTopContainer>
                <h4>Your Orders</h4>
              </OrderTopContainer>
              <OrderLine />
              <OrderBottomContainer>
                {orders &&
                  orders.map((order) => (
                    <React.Fragment key={order?._id}>
                      <OrderCard>
                        <CardCommonContainer>
                          <h6>
                            Shipping Details{" "}
                            {order?.orderstatus === "Processing" ? (
                              <>
                                <DeleteBtn
                                  onClick={() => deleteOrderHandler(order?._id)}
                                >
                                  Cancel Order <DeleteLogo />
                                </DeleteBtn>
                                <Delete
                                  onClick={() => deleteOrderHandler(order?._id)}
                                />
                              </>
                            ) : (
                              <></>
                            )}{" "}
                          </h6>
                          <p>Address : {order?.shippingInfo?.address}</p>
                          <p>
                            Pincode :{" "}
                            {order?.shippingInfo?.city +
                              " " +
                              order?.shippingInfo?.pinCode}
                          </p>
                          <p>State : {order?.shippingInfo?.state}</p>
                          <p>Phone Number : {order?.shippingInfo?.phoneNo}</p>
                        </CardCommonContainer>
                        <OrderLine />
                        <CardCommonContainer>
                          <p>Payment Status : Cash on Delivery</p>
                          <h5>
                            Total Price : <span>₹{order?.totalPrice}</span>
                          </h5>
                          <h5>
                            Order Status : <span>{order?.orderstatus}</span>
                          </h5>
                        </CardCommonContainer>
                        <OrderLine />
                        <h6>Items</h6>
                        <CardBottomContainer>
                          {order?.orderItems.map((items) => (
                            <OrderProductContainer
                              to={`/product/${items?.product}`}
                              key={items?.product}
                            >
                              <img src={items?.image} alt={items?.name} />
                              <OrderProductDetails>
                                <h6>Name : {items?.name}</h6>
                                <h6>Price : ₹{items?.price}</h6>
                                <h6>Quantity : {items?.quantity}</h6>
                                <h6>Shop : {items?.shopName}</h6>
                                <h6>City : {items?.shopCity}</h6>
                                <h6>Delivery : {items?.delivery}</h6>
                              </OrderProductDetails>
                            </OrderProductContainer>
                          ))}
                        </CardBottomContainer>
                      </OrderCard>
                      <LineBreak />
                    </React.Fragment>
                  ))}
              </OrderBottomContainer>
            </OrderMainContainer>
          )}
        </>
      )}{" "}
    </>
  );
};

export default Orders;

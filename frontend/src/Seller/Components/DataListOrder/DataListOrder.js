import React, { useEffect } from "react";
import {
  TableContainer,
  EditBtn,
  DeleteBtn,
  AdvancedLink,
} from "../DataListStyle";
import {
  getSellerOrders,
  deleteOrder,
  clearErrors,
} from "../../../Actions/OrderAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../../Layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";

const DataListOrder = ({ shopId }) => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, orders, loading } = useSelector((state) => state.orders);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.editAndDeleteOrder
  );

  // order details
  const redirectToOrderDetails = (id) => {
    navigate(`/seller/order/${id}`);
  };

  // delete order
  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
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

    dispatch(getSellerOrders(shopId));
  }, [dispatch, error, alert, isDeleted, deleteError, shopId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>Username</th>
              <th>Order Items</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order?._id}>
                  <td>
                    <AdvancedLink to={`/seller/order/${order?._id}`}>
                      {order?.user?.firstName + " " + order?.user?.lastName}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/seller/order/${order?._id}`}>
                      {order?.orderItems?.length}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/seller/order/${order?._id}`}>
                      {order?.totalPrice}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/seller/order/${order?._id}`}>
                      {order?.orderstatus}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/seller/order/${order?._id}`}>
                      {order?.paymentInfo}
                    </AdvancedLink>
                  </td>
                  <td>
                    <EditBtn
                      onClick={() => redirectToOrderDetails(order?._id)}
                    />
                    <DeleteBtn onClick={() => deleteOrderHandler(order?._id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};

export default DataListOrder;

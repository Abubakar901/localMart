import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminOrders,
  deleteOrder,
  clearErrors,
} from "../../../Actions/OrderAction";
import { useAlert } from "react-alert";
import { TableContainer, DeleteBtn, AdvancedLink } from "../DataListStyle";
import Loader from "../../../Layout/Loader/Loader";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";

const DataListOrder = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, orders, loading } = useSelector((state) => state.orders);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.editAndDeleteOrder
  );

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

    dispatch(getAdminOrders());
  }, [dispatch, error, alert, isDeleted, deleteError]);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

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
                    <AdvancedLink to={`/admin/order/${order?._id}`}>
                      {order?.user?.firstName + " " + order?.user?.lastName}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/admin/order/${order?._id}`}>
                      {order?.orderItems?.length}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/admin/order/${order?._id}`}>
                      {order?.totalPrice}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/admin/order/${order?._id}`}>
                      {order?.orderstatus}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/admin/order/${order?._id}`}>
                      {order?.paymentInfo}
                    </AdvancedLink>
                  </td>
                  <td>
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

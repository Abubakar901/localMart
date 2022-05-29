import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn, AdvancedLink } from '../DataListStyle';
import Loader from '../../../Layout/Loader/Loader';
import { getAdminOrders } from '../../../actions/orderAction';
import { useNavigate } from 'react-router-dom';

const DataListOrder = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const  { error, orders, loading  } = useSelector((state) => state.orders)

    useEffect(() => {
      if(error) {
        return alert.error(error);
      }
  
        dispatch(getAdminOrders());
    }, [dispatch, error, alert])

  

    const handleEditBtn = (id)  => {
      navigate(`/admin/user/${id}`)
    }

  return (
    <>
      { loading ? <Loader /> : 
      (
        <TableContainer>
          <thead>
            <tr>
              <th>Username</th>
              <th>Order Items</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            orders && orders.map((order) => (
              <tr key={order?._id}>
                <td>
                  <AdvancedLink to={`/admin/order/${order?.user?._id}`} >
                    {order?.user?.firstName +  " " + order?.user?.lastName}
                  </AdvancedLink>
                </td>
                <td>
                  <AdvancedLink to={`/admin/order/${order?._id}`}>
                    {order?.orderItems?.length}
                  </AdvancedLink>
                </td>
                <td>
                <AdvancedLink to={`/admin/order/${order?._id}`} >
                  {order?.totalPrice}
                </AdvancedLink>
                </td>
                <td>
                  <AdvancedLink to={`/admin/order/${order?._id}`}>
                        {order?.orderstatus}
                  </AdvancedLink>
                </td>
                <td>
                  <EditBtn onClick={() => handleEditBtn(order?._id)}/>
                  <DeleteBtn />
                </td>
              </tr>
            ))
          }
          </tbody>
        </TableContainer>
      )
      }
    </>
  )
}

export default DataListOrder
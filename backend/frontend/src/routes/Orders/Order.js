import React, {useEffect} from 'react';
import {OrderMainContainer, OrderTopContainer, TableContainer, OrderLink} from './OrderStyle';
import {useDispatch, useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import {getUserOrders} from '../../actions/orderAction';
import Loader from '../../Layout/Loader/Loader';

const Order = () => {

    const dispatch = useDispatch();
    const {error, orders, loading} = useSelector((state) => state.orders)
    const alert = useAlert();

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getUserOrders());
    }, [dispatch, alert, error])


    console.log(orders)
    return (
        <> {
            loading ? <Loader/>: (
                <OrderMainContainer>
                    <OrderTopContainer>
                        <h4>All Orders</h4>
                    </OrderTopContainer>
                    <TableContainer>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Shop Name</th>
                                <th>Shop City</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody> {
                            orders && orders.map((order) => (
                                <tr key={
                                    order?._id
                                }>
                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order?._id
                                            }`
                                        }>
                                            {
                                            order?.orderItems[0]?.name
                                        } </OrderLink>
                                    </td>

                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order?._id
                                            }`
                                        }>
                                            {
                                            order?.orderItems[0]?.quantity
                                        } </OrderLink>
                                    </td>
                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order._id
                                            }`
                                        }>
                                            <strong>₹</strong>
                                            {
                                            order?.orderItems[0]?.price
                                        } </OrderLink>
                                    </td>
                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order._id
                                            }`
                                        }>
                                            {
                                            order?.orderItems[0]?.shopName
                                        } </OrderLink>
                                    </td>
                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order?._id
                                            }`
                                        }>
                                            {
                                            order?.orderItems[0]?.shopCity
                                        } </OrderLink>
                                    </td>
                                    <td>
                                        <OrderLink to={
                                            `/orders/${
                                                order?._id
                                            }`
                                        }>
                                            {
                                            order?.orderstatus
                                        } </OrderLink>
                                    </td>
                                </tr>
                            ))
                        } </tbody>
                    </TableContainer>
                </OrderMainContainer>
            )
        } </>
    )
}

export default Order

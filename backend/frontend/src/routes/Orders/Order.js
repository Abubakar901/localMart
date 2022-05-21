import React, {useEffect} from 'react';
import {
    OrderMainContainer,
    OrderTopContainer,
    TableContainer,
    OrderLink,
    DeleteBtn,
    NoOrderContaiener,
    ExploreProductsBtn
} from './OrderStyle';
import {useDispatch, useSelector} from 'react-redux';
import {useAlert} from 'react-alert';
import {getUserOrders, deleteOrder} from '../../actions/orderAction';
import Loader from '../../Layout/Loader/Loader';
import Metadata from '../../Layout/Metadata';
import {DELETE_ORDER_RESET} from '../../constant/keys';
import { useNavigate } from 'react-router-dom';

const Order = ({user}) => {

    const dispatch = useDispatch();
    const {error, orders, loading} = useSelector((state) => state.orders);
    const navigate = useNavigate();

    const {error: deleteError, isDeleted} = useSelector((state) => state.editAndDeleteOrder);

    const alert = useAlert();

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        if (isDeleted) {
            alert.success('Order Deleted Successfully');
            dispatch({type: DELETE_ORDER_RESET});
        }

        dispatch(getUserOrders());
    }, [
        dispatch,
        alert,
        error,
        isDeleted,
        deleteError
    ])

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id))
    };

    const redirectToProducts = () => {
        navigate('/products')
    }

    return (<> {
        loading ? <Loader/>: (
                                <OrderMainContainer>
                                    <Metadata title='localMart - Orders'/>
                                    {
                                        orders && orders?.length === 0 ? (
                                            <NoOrderContaiener>
                                                No Orders Yet
                                                <ExploreProductsBtn onClick={redirectToProducts}>Buy Products</ExploreProductsBtn>
                                            </NoOrderContaiener> ) : (
                                                <>
                                                <OrderTopContainer>
                                        <h4>{user?.firstName}'s Orders</h4>
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
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody> {
                                            orders && orders.map((order) => (
                                                <tr key={
                                                    order?._id
                                                }>
                                                    <td>
                                                        <OrderLink to={
                                                            `/order/${
                                                                order?._id
                                                            }`
                                                        }>
                                                            {
                                                            order?.orderItems[0]?.name
                                                        } </OrderLink>
                                                    </td>
                
                                                    <td>
                                                        <OrderLink to={
                                                            `/order/${
                                                                order?._id
                                                            }`
                                                        }>
                                                            {
                                                            order?.orderItems[0]?.quantity
                                                        } </OrderLink>
                                                    </td>
                                                    <td>
                                                        <OrderLink to={
                                                            `/order/${
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
                                                            `/order/${
                                                                order._id
                                                            }`
                                                        }>
                                                            {
                                                            order?.orderItems[0]?.shopName
                                                        } </OrderLink>
                                                    </td>
                                                    <td>
                                                        <OrderLink to={
                                                            `/order/${
                                                                order?._id
                                                            }`
                                                        }>
                                                            {
                                                            order?.orderItems[0]?.shopCity
                                                        } </OrderLink>
                                                    </td>
                                                    <td>
                                                        <OrderLink to={
                                                            `/order/${
                                                                order?._id
                                                            }`
                                                        }>
                                                            {
                                                            order?.orderstatus
                                                        } </OrderLink>
                                                    </td>
                                                    <td>
                                                        <DeleteBtn onClick={() => deleteOrderHandler(order?._id)} />
                                                    </td>
                                                </tr>
                                            ))
                                        } </tbody>
                                    </TableContainer>
                                    </>
                                        )
                                    }
                                </OrderMainContainer>
                            )
                        } </>
        )
    }

    export default Order

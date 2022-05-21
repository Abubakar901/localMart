import React, { useEffect } from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import { AdminInnerContainer , AmountContainer, CircleContainer, CircleLinked} from './AdminboardStyle.js';
import { useSelector, useDispatch } from 'react-redux';
import {  getAdminShops } from '../../actions/shopActions';
import { getAdminProducts } from '../../actions/productAction';
import { getAdminUsers } from '../../actions/userAction';
import { getAdminOrders } from '../../actions/orderAction';
import Metadata from '../../Layout/Metadata';

const Adminboard = () => {
  
  const { totalShops  } = useSelector((state) => state.shops)
  const { totalProducts  } = useSelector((state) => state.products)
  const { usersCount } = useSelector((state) => state.users)
  const  { totalAmount, totalOrders } = useSelector((state) => state.orders)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminShops());
    dispatch(getAdminProducts());
    dispatch(getAdminUsers());
    dispatch(getAdminOrders());
  }, [dispatch])
  
  return (
    <MainContainer innerspace='0'>
      <Metadata title='localMart - Dashboard(Admin)' />
      <TopContainer equally='center'>
          <h2>Admin Dashboard</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminInnerContainer>
          <AmountContainer>
            <p>Total Amount: {totalAmount}</p>
          </AmountContainer>

          <CircleContainer>
              <CircleLinked to='/admin/shops'>
                <h6>Shops</h6>
                <p>{totalShops}</p>
              </CircleLinked>

            <CircleLinked to='/admin/products'>
              <h6>Products</h6>
              <p>{totalProducts}</p>
            </CircleLinked>

            <CircleLinked to='/admin/orders'>
              <h6>Orders</h6>
              <p>{totalOrders}</p>
            </CircleLinked>

            <CircleLinked to='/admin/users'>
              <h6>Users</h6>
              <p>{usersCount}</p>
            </CircleLinked>
          </CircleContainer>
        </AdminInnerContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default Adminboard
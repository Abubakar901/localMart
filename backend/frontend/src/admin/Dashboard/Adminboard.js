import React, { useEffect } from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import { AdminInnerContainer , AmountContainer, CircleContainer, CircleLinked} from './AdminboardStyle.js';
import { useSelector, useDispatch } from 'react-redux';
import {  getAdminShops } from '../../actions/shopActions';
import { getAdminProducts } from '../../actions/productAction';

const Adminboard = () => {
  
  const { totalShops  } = useSelector((state) => state.shops)
  const { totalProducts  } = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminShops());
    dispatch(getAdminProducts());
  }, [dispatch])
  
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>
          <h2>Admin Dashboard</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminInnerContainer>
          <AmountContainer>
            <p>Total Amount: 2000</p>
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
              <p>34</p>
            </CircleLinked>

            <CircleLinked to='/admin/users'>
              <h6>Users</h6>
              <p>34</p>
            </CircleLinked>
          </CircleContainer>
        </AdminInnerContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default Adminboard
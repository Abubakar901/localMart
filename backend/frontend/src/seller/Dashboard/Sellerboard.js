import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminInnerContainer , AmountContainer, CircleContainer, CircleLinked } from './SellerboardStyle';
import Sidebar from '../components/Sidebar/Siderbar';


const Sellerboard = () => {
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
            <CircleLinked to='/seller/shops'>
              <h6>Shops</h6>
              <p>34</p>
            </CircleLinked>

            <CircleLinked to='/seller/products'>
              <h6>Products</h6>
              <p>34</p>
            </CircleLinked>

            <CircleLinked to='/seller/orders'>
              <h6>Orders</h6>
              <p>34</p>
            </CircleLinked>

            <CircleLinked to='/seller/users'>
              <h6>Users</h6>
              <p>34</p>
            </CircleLinked>
          </CircleContainer>
        </AdminInnerContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default Sellerboard
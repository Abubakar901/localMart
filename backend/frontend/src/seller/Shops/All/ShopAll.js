import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import Sidebar from '../../components/Sidebar/Siderbar';
import DataListShop from '../../components/DataListShop/DataListShop';

const AdminShops = () => {
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>All Shops</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <DataListShop />
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminShops
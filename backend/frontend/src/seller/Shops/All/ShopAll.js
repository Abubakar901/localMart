import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import Sidebar from '../../components/Sidebar/Sidebar';
import DataListShop from '../../components/DataListShop/DataListShop';
import Metadata from '../../../Layout/Metadata';

const SellerShops = () => {
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - All Shops(Seller)' /> 
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

export default SellerShops
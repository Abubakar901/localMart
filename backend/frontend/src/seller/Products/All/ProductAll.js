import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import Sidebar from '../../components/Sidebar/Siderbar';
import DataListProduct from '../../components/DataListProduct/DateListProduct';
import Metadata from '../../../Layout/Metadata';

const SellerProducts = () => {
  return (
    <MainContainer innerspace='0'>\
    <Metadata title='All Products(Seller)' />
      <TopContainer equally='center'>-
          <h2>All Products</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <DataListProduct />
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default SellerProducts
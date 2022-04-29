import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListShop from '../components/DataListShop/DataListShop';

const AdminShops = () => {
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>All Shops</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminMainContainer>
            <DataListShop />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminShops
import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListProduct from '../components/DataListProduct/DataListProduct';

const AdminProduct = () => {
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>All Products</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminMainContainer>
            <DataListProduct />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminProduct
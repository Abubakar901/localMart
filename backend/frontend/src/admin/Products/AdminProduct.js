import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListProduct from '../components/DataListProduct/DataListProduct';
import Metadata from '../../Layout/Metadata';

const AdminProduct = () => {
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Products(Admin)' />
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